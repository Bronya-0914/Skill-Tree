'use strict';

/* 資料備份：把本機所有站台狀態匯出成 JSON 檔，並可匯入到另一個網址或裝置。
   純前端、無帳號、無後端；不碰教材、答案、技能樹狀態機。
   匯出格式：{app, schemaVersion, exportedAt, keys:{<localStorage 鍵>: <原始字串或 null>}}
   用原始字串保存，匯入時逐鍵寫回；既有鍵各自已有容錯，這裡只做結構與進度的基本校驗。 */

(function () {
  const APP = 'calculus-skill-tree';
  const SCHEMA = 1;
  const MAX_FILE = 5 * 1024 * 1024;
  const PROGRESS_KEY = 'calculus-tree-progress-v1';
  const FALLBACK_KEYS = [PROGRESS_KEY, 'calculus-tree-packs-v1', 'calculus-tree-session-v1',
    'skill-tree-theme', 'calculus-tree-glow-v1', 'calculus-tree-lesson-frame-v1', 'calculus-tree-scratch-v1'];
  const KEYS = Array.isArray(window.SkillTreeBackupKeys) && window.SkillTreeBackupKeys.length
    ? window.SkillTreeBackupKeys : FALLBACK_KEYS;

  const exportButton = document.getElementById('backup-export');
  const fileInput = document.getElementById('backup-file');
  const status = document.getElementById('backup-status');
  if (!exportButton || !fileInput || !status) return;

  function setStatus(message, isError) {
    status.textContent = message;
    status.classList.toggle('error', !!isError);
  }

  function exportPayload() {
    const keys = {};
    for (const key of KEYS) keys[key] = localStorage.getItem(key);
    return {app:APP, schemaVersion:SCHEMA, exportedAt:new Date().toISOString(), keys};
  }

  function validate(payload) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return '檔案內容不是有效的備份物件。';
    if (payload.app !== APP) return '這不是微積分漫遊的備份檔。';
    if (payload.schemaVersion !== SCHEMA) return `備份檔版本 ${payload.schemaVersion} 與本站不相容。`;
    if (!payload.keys || typeof payload.keys !== 'object' || Array.isArray(payload.keys)) return '備份檔缺少資料區。';
    for (const [key, value] of Object.entries(payload.keys)) {
      if (!KEYS.includes(key)) continue;
      if (value !== null && typeof value !== 'string') return `資料格式錯誤：${key}`;
    }
    const raw = payload.keys[PROGRESS_KEY];
    if (raw) {
      try {
        const progress = JSON.parse(raw);
        if (typeof progress.started !== 'boolean' || !Array.isArray(progress.completed)) return '進度資料格式不符。';
      } catch (_) {
        return '進度資料無法解析。';
      }
    }
    return null;
  }

  // confirmed 由介面的確認對話框傳入；寫入失敗時回滾，不留下半套資料。
  function importPayload(payload, confirmed) {
    const error = validate(payload);
    if (error) return {ok:false, error};
    if (!confirmed) return {ok:false, cancelled:true, error:'已取消匯入，原本的記錄沒有變動。'};
    const before = {};
    for (const key of KEYS) before[key] = localStorage.getItem(key);
    try {
      for (const key of KEYS) {
        const value = payload.keys[key];
        if (value === null || value === undefined) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      }
    } catch (_) {
      for (const key of KEYS) {
        if (before[key] === null || before[key] === undefined) localStorage.removeItem(key);
        else localStorage.setItem(key, before[key]);
      }
      return {ok:false, error:'瀏覽器儲存空間不足，已還原原本的記錄。'};
    }
    return {ok:true, count:KEYS.length};
  }

  exportButton.onclick = () => {
    const payload = exportPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `skill-tree-backup-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    const filled = KEYS.filter(key => localStorage.getItem(key) !== null).length;
    setStatus(`已匯出 ${filled} 項記錄。請保存這個 JSON 檔。`);
  };

  fileInput.onchange = () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (file.size > MAX_FILE) { setStatus('檔案過大（上限 5 MB），已取消匯入。', true); fileInput.value = ''; return; }
    const reader = new FileReader();
    reader.onload = () => {
      let payload;
      try { payload = JSON.parse(String(reader.result)); }
      catch (_) { setStatus('檔案不是有效的 JSON，已取消匯入。', true); fileInput.value = ''; return; }
      const confirmed = window.confirm('匯入會覆蓋此瀏覽器目前的進度與設定，確定繼續？');
      const result = importPayload(payload, confirmed);
      fileInput.value = '';
      if (!result.ok) { setStatus(result.error, !result.cancelled); return; }
      setStatus('匯入完成，正在重新載入…');
      setTimeout(() => window.location.reload(), 500);
    };
    reader.onerror = () => { setStatus('無法讀取檔案，已取消匯入。', true); fileInput.value = ''; };
    reader.readAsText(file);
  };

  window.SkillTreeBackup = {exportPayload, importPayload, validate, keys:KEYS, schemaVersion:SCHEMA};
})();
