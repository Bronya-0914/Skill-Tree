'use strict';

// Translate text and accessible labels in place: never rebuild a quiz, canvas or tree.
// The source text stays in a WeakMap so switching back restores it exactly.
window.SkillTreeI18n = (() => {
  const KEY = 'skill-tree-language';
  const messages = window.SkillTreeEnglish;
  const templates = [
    ['無法載入已存教材。請保留備份並重新整理後再試。{0}', 'Unable to load saved content. Keep a backup, then reload and try again. {0}'],
    ['飽和度 {0}% · 亮度 {1}%', 'Saturation {0}% · Brightness {1}%'],
    ['已作答 {0} / {1} 題 · 可以交卷了', '{0} / {1} answered · Ready to submit'],
    ['已作答 {0} / {1} 題 · 全部作答後才能交卷', '{0} / {1} answered · Answer every question to submit'],
    ['共 {0} 題，答對至少 {1} 題即可點亮技能。選好所有答案後，按下檢查答案。', '{0} questions. Answer at least {1} correctly to unlock this skill. Select every answer, then check your work.'],
    ['{0} / {1} 題正確 · {2}', '{0} / {1} correct · {2}'],
    ['練習 · {0} 題', 'Practice · {0} questions'],
    ['約 {0} 分鐘', 'About {0} min'],
    ['{0} 分鐘 · 可學習', '{0} min · Available'],
    ['{0}的其他先修課程', 'Additional prerequisites for {0}'],
    ['前往先修課程 {0}', 'Go to prerequisite {0}'],
    ['先修 {0}', 'Requires {0}'],
    ['先完成「{0}」即可解鎖。', 'Complete “{0}” first to unlock this skill.'],
    ['「{0}」已點亮！', '“{0}” unlocked!'],
    ['↗ 正確答案為 {0}', '↗ Correct answer: {0}'],
    ['版本 {0} · {1} 個節點', 'Version {0} · {1} nodes'],
    ['版本 {0}', 'Version {0}'],
    ['新增 {0} 個 · 更新 {1} 個 · 相同 {2} 個', '{0} added · {1} updated · {2} unchanged'],
    ['另保留原主題中 {0} 個未列於這次學習包的節點。', '{0} existing nodes omitted from this pack will also be retained.'],
    ['「{0}」已加入技能樹。可用「前往主題」找到新節點。', '“{0}” added to the skill tree. Use “Go to topic” to find its nodes.'],
    ['無法匯入：{0}', 'Unable to import: {0}'],
    ['儲存失敗：{0}。請先匯出備份或釋放瀏覽器儲存空間後重試。', 'Unable to save: {0}. Export a backup or free browser storage, then retry.'],
    ['備份檔版本 {0} 與本站不相容。', 'Backup version {0} is incompatible with this site.'],
    ['資料格式錯誤：{0}', 'Invalid data format: {0}'],
    ['已匯出 {0} 項記錄。請保存這個 JSON 檔。', '{0} records exported. Keep this JSON file safe.'],
    ['{0} 必須是 1–{1} 字的文字。', '{0} must contain 1–{1} characters.'],
    ['{0} 必須是 {1}–{2} 的整數。', '{0} must be an integer between {1} and {2}.'],
    ['{0} 請使用小寫英文字母、數字、連字號或句點。', '{0} must use lowercase letters, digits, hyphens or dots.'],
    ['節點 {0} 的 ID 必須以 {1}. 開頭。', 'Node {0} must have an ID beginning with {1}.'],
    ['節點 ID 重複：{0}', 'Duplicate node ID: {0}'],
    ['主題 ID 重複：{0}', 'Duplicate topic ID: {0}'],
    ['{0} 的 parents 必須是先修 ID 陣列，最多 10 個。', 'The parents of {0} must be an array of up to 10 prerequisite IDs.'],
    ['{0} 的先修 ID', 'Prerequisite ID of {0}'],
    ['{0} 的先修節點重複。', '{0} has duplicate prerequisites.'],
    ['{0} 需要 1–60 段教學內容。', '{0} needs 1–60 content blocks.'],
    ['{0} 的內容類型無效。', '{0} has an invalid content type.'],
    ['{0} 的教學內容', 'Content of {0}'],
    ['{0} 需要 1–20 題練習。', '{0} needs 1–20 practice questions.'],
    ['{0} 每題需要 2–6 個選項。', 'Each question in {0} needs 2–6 options.'],
    ['{0} 的題目包含重複選項。', 'A question in {0} has duplicate options.'],
    ['{0} 的 kind 無效。', '{0} has an invalid kind.'],
    ['{0} 的先修節點不存在：{1}', 'Missing prerequisite for {0}: {1}'],
    ['ZIP 包含重複檔案：{0}', 'Duplicate ZIP file: {0}'],
    ['ZIP 檔案校驗失敗：{0}', 'ZIP checksum failed: {0}'],
    ['不支援的檔案位置：{0}', 'Unsupported file location: {0}'],
    ['{0} 不是有效的 UTF-8 JSON。', '{0} is not valid UTF-8 JSON.']
  ].map(([source, target]) => {
    const pattern = source.split(/(\{\d+\})/).map(part => /^\{\d+\}$/.test(part)
      ? '([\\s\\S]+?)' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('');
    return {pattern:new RegExp('^'+pattern+'$'), target};
  });
  function english(text, depth = 0) {
    if (depth > 6 || !/\p{Script=Han}/u.test(text)) return text;
    if (Object.hasOwn(messages, text)) return messages[text];
    const trimmed = text.trim();
    if (trimmed !== text) return text.slice(0,text.indexOf(trimmed)) + english(trimmed,depth+1) + text.slice(text.indexOf(trimmed)+trimmed.length);
    for (const {pattern,target} of templates) {
      const match = text.match(pattern);
      if (match) return target.replace(/\{(\d+)\}/g, (_, index) => english(match[Number(index)+1],depth+1));
    }
    const numbered = text.match(/^(\d+\.\s*)(.+)$/s);
    if (numbered) return numbered[1]+english(numbered[2],depth+1);
    // Compound labels use the same catalog titles and status strings as visible text.
    for (const separator of ['」與「','，','、']) {
      if (text.includes(separator)) {
        const parts=text.split(separator), translated=parts.map(part=>english(part,depth+1));
        if (parts.some((part,index)=>part!==translated[index])) return translated.join(separator==='」與「'?'” and “':', ');
      }
    }
    return text; // Imported content without a translation retains its original wording.
  }
  if (typeof document === 'undefined') return {english};
  let language = 'zh-Hant';
  try { if (localStorage.getItem(KEY)==='en') language='en'; } catch (_) {}
  const sourceText = new WeakMap();
  const sourceAttributes = new WeakMap();
  const attributes = ['aria-label','title','placeholder','content'];
  const ignored = 'script,style,noscript,textarea,[data-language-control]';
  const t = text => language==='en' ? english(text) : text;

  function updateText(node) {
    if (node.parentElement?.closest(ignored)) return;
    let record = sourceText.get(node);
    if (!record || node.data !== record.rendered) record={source:node.data};
    record.rendered = t(record.source);
    if (node.data !== record.rendered) node.data=record.rendered;
    sourceText.set(node,record);
  }
  function updateElement(element) {
    if (element.closest(ignored)) return;
    let records=sourceAttributes.get(element);
    if (!records) { records=new Map(); sourceAttributes.set(element,records); }
    for (const name of attributes) {
      if (!element.hasAttribute(name)) { records.delete(name); continue; }
      const current=element.getAttribute(name);
      let record=records.get(name);
      if (!record || current!==record.rendered) record={source:current};
      record.rendered=t(record.source);
      if (current!==record.rendered) element.setAttribute(name,record.rendered);
      records.set(name,record);
    }
  }
  function translate(root) {
    if (root.nodeType===Node.TEXT_NODE) return updateText(root);
    if (root.nodeType!==Node.ELEMENT_NODE || root.closest(ignored)) return;
    updateElement(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{
      acceptNode: node => node.nodeType===Node.ELEMENT_NODE && node.matches(ignored) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    while (walker.nextNode()) {
      if (walker.currentNode.nodeType===Node.TEXT_NODE) updateText(walker.currentNode);
      else updateElement(walker.currentNode);
    }
  }
  const options={subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes};
  const observer=new MutationObserver(records=>{
    observer.disconnect();
    for(const record of records) {
      if(record.type==='attributes') updateElement(record.target);
      else if(record.type==='characterData') updateText(record.target);
      else for(const node of record.addedNodes) translate(node);
    }
    observer.observe(document.documentElement,options);
  });
  function setLanguage(next, persist=true) {
    language=next==='en'?'en':'zh-Hant';
    observer.disconnect();
    document.documentElement.lang=language;
    translate(document.documentElement);
    document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    observer.observe(document.documentElement,options);
    if(persist) try { localStorage.setItem(KEY,language); } catch (_) {}
  }
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  window.addEventListener('storage',event=>{
    if(event.key===KEY || event.key===null) {
      let next='zh-Hant';
      try { next=localStorage.getItem(KEY); } catch (_) {}
      setLanguage(next,false);
    }
  });
  setLanguage(language,false);
  return {t,english,setLanguage,get language(){return language;}};
})();
