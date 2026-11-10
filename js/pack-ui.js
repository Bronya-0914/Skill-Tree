'use strict';

let pendingPack = null;
let importSequence = 0;
const packDialog = $('#pack-dialog');
const escapePack = TopicPacks.escape;

function renderLibrary() {
  $('#pack-count').textContent = library.length;
  $('#topic-jump').innerHTML = '<option value="">前往主題…</option>' + library.map(pack => `<option value="${pack.topic.id}">${escapePack(pack.topic.title)}</option>`).join('');
  $('#pack-library').innerHTML = library.length ? library.map(pack => `<div class="library-item"><div><strong>${escapePack(pack.topic.title)}</strong><small>版本 ${pack.topic.version} · ${pack.nodes.length} 個節點</small></div><button class="quiet" data-export="${pack.topic.id}">匯出 ZIP</button></div>`).join('') : '<p class="empty-library">尚未有學習包，請上傳一個主題 ZIP。</p>';
  if (catalogError) {
    $('#catalog-warning').hidden = false;
    $('#catalog-warning').textContent = catalogError;
    $('#pack-file').disabled = true;
  }
}
function setPackStatus(message, error = false) {
  $('#pack-status').textContent = message;
  $('#pack-status').className = error ? 'pack-error' : '';
}
function clearPreview() {
  importSequence++;
  pendingPack = null;
  $('#pack-preview').hidden = true;
  $('#pack-confirm-actions').hidden = true;
  $('#pack-file').value = '';
  $('#confirm-import').disabled = true;
  setPackStatus('');
}
async function previewPack(file) {
  clearPreview();
  if (!file || catalogError) return;
  const sequence = importSequence;
  try {
    if (!file.name.toLowerCase().endsWith('.zip') || file.size > 5*1024*1024) throw new Error('請選擇 5 MB 以內的 .zip 學習包。');
    setPackStatus('正在檢查學習包…');
    const buffer = await file.arrayBuffer();
    if (sequence !== importSequence) return;
    const pack = TopicPacks.readZip(new Uint8Array(buffer), fflate);
    const prepared = TopicPacks.prepare(pack, library);
    if (localStorage.getItem(PACKS_KEY) !== librarySnapshot) throw new Error('其他分頁已更新教材，請重新整理後再上傳。');
    pendingPack = prepared;
    const added = prepared.changes.filter(change => change.action === '新增').length;
    const updated = prepared.changes.filter(change => change.action === '更新').length;
    const labels = new Map([['start','Start'],...prepared.lessons.map(node => [node.id,node.title])]);
    $('#pack-preview').innerHTML = `<div class="preview-summary"><span class="pill">版本 ${pack.topic.version}</span><h3>${escapePack(pack.topic.title)}</h3><p>${escapePack(pack.topic.description)}</p><strong>新增 ${added} 個 · 更新 ${updated} 個 · 相同 ${prepared.changes.length-added-updated} 個</strong></div><ul class="preview-nodes">${prepared.changes.map(change => `<li><span class="change-type">${change.action}</span><div><strong>${escapePack(change.title)}</strong><small>${escapePack(change.id)}</small><p>先修 ${change.parents.map(id => labels.get(id)).join('、')}</p></div></li>`).join('')}</ul>${prepared.retained ? `<p>另保留原主題中 ${prepared.retained} 個未列於這次學習包的節點。</p>` : ''}<p class="pack-footnote">更新會保留已完成紀錄。需要複習時，可重新挑戰該節點。</p>`;
    $('#pack-preview').hidden = false;
    $('#pack-confirm-actions').hidden = !prepared.changed;
    $('#confirm-import').disabled = !prepared.changed;
    setPackStatus(prepared.changed ? '檢查通過，確認後才會儲存與加入技能樹。' : '這個版本已經匯入，內容相同。');
  } catch (error) {
    if (sequence !== importSequence) return;
    pendingPack = null;
    setPackStatus(`無法匯入：${error.message}`, true);
  }
}
$('#manage-packs').onclick = () => { renderLibrary(); packDialog.showModal(); };
$('#close-packs').onclick = () => packDialog.close();
packDialog.addEventListener('close', clearPreview);
$('#cancel-import').onclick = clearPreview;
$('#pack-file').onchange = event => previewPack(event.target.files[0]);
$('#pack-drop').addEventListener('dragover', event => { event.preventDefault(); $('#pack-drop').classList.add('drag-over'); });
$('#pack-drop').addEventListener('dragleave', () => $('#pack-drop').classList.remove('drag-over'));
$('#pack-drop').addEventListener('drop', event => {
  event.preventDefault();
  $('#pack-drop').classList.remove('drag-over');
  if (event.dataTransfer.files.length !== 1) { clearPreview(); setPackStatus('每次請上傳一個主題 ZIP。',true); return; }
  previewPack(event.dataTransfer.files[0]);
});
$('#confirm-import').onclick = () => {
  if (!pendingPack) return;
  try {
    if (localStorage.getItem(PACKS_KEY) !== librarySnapshot) throw new Error('其他分頁已更新教材，請重新整理後再上傳。');
    const snapshot = JSON.stringify({schemaVersion:1,packs:pendingPack.packs});
    // 一次寫入完整教材集合。配額或權限失敗時，記憶體與既有教材均不提交變更。
    localStorage.setItem(PACKS_KEY,snapshot);
    librarySnapshot = snapshot;
    library = pendingPack.packs;
    lessons = pendingPack.lessons;
    allNodes = [startNode,...lessons];
    for (const change of pendingPack.changes) attempts.delete(change.id);
    const title = pendingPack.topic.title;
    renderLibrary();renderTree();renderLesson();
    packDialog.close();
    fitTree();
    notify(`「${title}」已加入技能樹。可用「前往主題」找到新節點。`);
  } catch (error) { setPackStatus(`儲存失敗：${error.message}。請先匯出備份或釋放瀏覽器儲存空間後重試。`,true); }
};
$('#pack-library').onclick = event => {
  const button=event.target.closest('[data-export]');
  if (!button) return;
  const pack=library.find(item=>item.topic.id===button.dataset.export);
  const blob=new Blob([TopicPacks.writeZip(pack,fflate)],{type:'application/zip'});
  const url=URL.createObjectURL(blob);
  const anchor=document.createElement('a');
  anchor.href=url;anchor.download=`${pack.topic.id}-v${pack.topic.version}.zip`;
  anchor.click();
  setTimeout(()=>URL.revokeObjectURL(url),10000);
};
$('#topic-jump').onchange = event => {
  const id=event.target.value;
  if (!id) return;
  if (!progress.started) { selectNode('start'); notify('先點亮 Start，即可探索所有主題。'); event.target.value=''; return; }
  const candidates=lessons.filter(node=>node.topicId===id);
  if (!candidates.length) return;
  const node=candidates.find(item=>isAvailable(item)&&!isCompleted(item.id)) || candidates.find(isAvailable) || candidates[0];
  selectNode(node.id);
  if (!isAvailable(node)) {
    viewport.x=map.clientWidth/2-node.x*viewport.scale;
    viewport.y=map.clientHeight*.35-node.y*viewport.scale;
    applyTransform();
  }
  event.target.value='';
};
window.addEventListener('storage', event => {
  if (event.key===PACKS_KEY || event.key===null) {
    pendingPack=null;
    $('#confirm-import').disabled=true;
    notify('另一個分頁已修改教材，請重新整理以載入最新內容。');
  }
});
renderLibrary();
