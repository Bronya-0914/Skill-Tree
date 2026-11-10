'use strict';

const STORAGE_KEY = 'calculus-tree-progress-v1';
const $ = (selector) => document.querySelector(selector);
const startNode = {id:'start',title:'Start',en:'從這裡開始',icon:'✧',x:590,y:65,parents:[]};
const PACKS_KEY = 'calculus-tree-packs-v1';
let library = TopicPacks.loadLibrary(LEARNING_PACKS);
let librarySnapshot = null;
let catalogError = '';
let lessons = TopicPacks.buildLessons(library);
try {
  librarySnapshot = localStorage.getItem(PACKS_KEY);
  if (librarySnapshot) {
    const saved = JSON.parse(librarySnapshot);
    if (saved.schemaVersion !== 1 || !Array.isArray(saved.packs)) throw new Error('教材儲存格式不相容。');
    const restored = TopicPacks.loadLibrary(LEARNING_PACKS, saved.packs);
    lessons = TopicPacks.buildLessons(restored);
    library = restored;
  }
} catch (error) { catalogError = '無法載入已存教材。請保留備份並重新整理後再試。' + error.message; }
let allNodes = [startNode, ...lessons];
let progress = {started:false,completed:[],scores:{}};
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved && typeof saved.started === 'boolean' && Array.isArray(saved.completed)) {
    progress.started = saved.started;
    // 只還原仍存在的課程；教材更新先修關係時，保留已取得的完成紀錄。
    for (const lesson of lessons) {
      if (progress.started && saved.completed.includes(lesson.id)) progress.completed.push(lesson.id);
    }
    for (const lesson of lessons) {
      const score = saved.scores?.[lesson.id];
      if (Number.isInteger(score) && score >= 0 && score <= lesson.quiz.length) progress.scores[lesson.id] = score;
    }
  }
} catch { storageAvailable = false; }
let selectedId = 'start';
let activeTab = 'learn';
const attempts = new Map();
const viewport = {x:0,y:0,scale:1};
let toastTimer;
let justLitId = null;

function isCompleted(id) { return id === 'start' ? progress.started : progress.completed.includes(id); }
function isAvailable(node) { return isCompleted(node.id) || node.parents.every(isCompleted); }
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
  catch { storageAvailable = false; }
  if (!storageAvailable) $('#storage-note').textContent = '瀏覽器儲存不可用，本次進度僅暫存';
}
function notify(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 3500);
}
// 連線走線常數：分層間距、卡片上下緣、層間空隙中線。
const LAYER_STEP = 115;
const NODE_HALF_HEIGHT = 36;

// 記錄每一層被卡片擋住的 x 區間（含接點外環的餘量），供垂直段找安全通道。
function buildLaneMap(nodes) {
  const byLayer = new Map();
  for (const node of nodes) {
    if (!byLayer.has(node.y)) byLayer.set(node.y, []);
    byLayer.get(node.y).push(node.x);
  }
  const lanes = new Map();
  for (const [y, xs] of byLayer) {
    const blocked = xs.sort((a, b) => a - b).map(x => [x - 99, x + 99]);
    const merged = [];
    for (const [lo, hi] of blocked) {
      if (merged.length && lo <= merged[merged.length - 1][1]) merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], hi);
      else merged.push([lo, hi]);
    }
    lanes.set(y, merged);
  }
  return lanes;
}
// 最接近目標、且不落在任何卡片上的 x：目標本身安全就直接用，水平段因此盡量短。
function nearestLane(blocked, target) {
  let x = target;
  for (let pass = 0; pass < 6; pass++) {
    const hit = (blocked || []).find(([lo, hi]) => x > lo && x < hi);
    if (!hit) return x;
    const left = hit[0] - 2, right = hit[1] + 2;
    x = Math.abs(x - left) < Math.abs(x - right) ? left : right;
  }
  return x;
}
// 第一層接第二層、第二層接第三層：一條邊切成「每層一段」的線段，
// 每段只跨一層（最長垂直 115px），段與段在層間接點相接；跨層邊補上可見接點。
// 全程只有 V / H，無斜線；先修關係、教材與進度狀態完全不變。
function connectionSegments(parent, node, lanes) {
  const y1 = parent.y + NODE_HALF_HEIGHT;
  const y2 = node.y - NODE_HALF_HEIGHT;
  const steps = Math.max(1, Math.round((node.y - parent.y) / LAYER_STEP));
  const gaps = [];
  for (let step = 0; step < steps; step++) {
    const gapY = parent.y + step * LAYER_STEP + LAYER_STEP / 2;
    const layerY = parent.y + (step + 1) * LAYER_STEP;
    const target = parent.x + (node.x - parent.x) * (step + 1) / steps;
    const nextX = step === steps - 1 ? node.x : nearestLane(lanes.get(layerY) || [], target);
    gaps.push({x:nextX,y:gapY});
  }
  const segments = [];
  let fromX = parent.x, fromY = y1;
  for (const point of gaps) {
    segments.push(`M ${fromX} ${fromY} V ${point.y} H ${point.x}`);
    fromX = point.x; fromY = point.y;
  }
  segments.push(`M ${fromX} ${fromY} V ${y2}`);
  // 最後一個轉折直接垂直接入子節點，不算中繼；其餘才是「接住中間層」的接點。
  return {segments,relays:gaps.slice(0,-1)};
}
function renderTree() {
  const visible = progress.started ? allNodes : [startNode];
  const lanes = buildLaneMap(allNodes);
  $('#nodes').innerHTML = visible.map(node => {
    const completed = isCompleted(node.id);
    const available = isAvailable(node);
    const state = completed ? 'lit' : available ? 'available' : 'locked';
    const subtitle = node.id === 'start' ? completed ? '旅程已開啟' : node.en : completed ? '已掌握 · 可以複習' : available ? `${node.minutes} 分鐘 · 可學習` : '完成先修後解鎖';
    return `<button class="node ${node.kind || 'start'} ${state} ${selectedId === node.id ? 'selected' : ''} ${node.id === justLitId ? 'just-lit' : ''}" data-id="${node.id}" style="left:${node.x-(node.id === 'start' ? 80 : 87)}px;top:${node.y-35}px" aria-label="${node.title}，${subtitle}" aria-pressed="${selectedId === node.id}" ${!available ? 'aria-disabled="true"' : ''}><span class="node-icon" aria-hidden="true">${completed ? '✓' : node.icon}</span><strong>${node.title}</strong><small>${subtitle}</small></button>`;
  }).join('');
  const lineParts = [], relayParts = [];
  for (const node of visible) for (const id of node.parents) {
    const parent = allNodes.find(item => item.id === id);
    if (!parent) continue;
    const done = isCompleted(parent.id) ? 'done' : '';
    const lit = id === justLitId ? 'just-lit' : '';
    const routed = connectionSegments(parent, node, lanes);
    const edge = `${id}>${node.id}`;
    for (const d of routed.segments) lineParts.push(`<path class="connection ${done} ${lit}" data-edge="${edge}" d="${d}"/>`);
    // 接點畫成「外環＋實心點」，縮小到 60% 仍看得出每層都被接住。
    for (const point of routed.relays) {
      relayParts.push(`<circle class="relay-halo ${done}" data-edge="${edge}" cx="${point.x}" cy="${point.y}" r="9"/>`);
      relayParts.push(`<circle class="relay ${done}" data-edge="${edge}" cx="${point.x}" cy="${point.y}" r="5"/>`);
    }
  }
  $('#connections').innerHTML = lineParts.join('') + relayParts.join('');
  $('#map-empty').hidden = progress.started;
  $('#progress').max = lessons.length;
  $('#progress').value = progress.completed.length;
  $('#progress-text').textContent = `${progress.completed.length} / ${lessons.length}`;
  $('#progress-caption').textContent = progress.completed.length === lessons.length ? '整棵技能樹已點亮，做得好。' : progress.started ? '每次完成小測驗，就點亮一個新技能。' : '第一步，從 Start 開始。';
  justLitId = null;
}
function selectNode(id) {
  const node = allNodes.find(item => item.id === id);
  if (!node || !isAvailable(node)) {
    if (node) notify(`先完成「${node.parents.filter(parent => !isCompleted(parent)).map(parent => allNodes.find(item => item.id === parent).title).join('」與「')}」即可解鎖。`);
    return;
  }
  selectedId = id;
  activeTab = 'learn';
  renderTree();
  renderLesson();
  $('#lesson').scrollTop = 0;
  focusTree();
  if (matchMedia('(max-width:760px)').matches) $('#lesson').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderWelcome() {
  const finished = progress.completed.length === lessons.length;
  $('#lesson').innerHTML = `<div class="lesson-top"><span class="lesson-kicker">${finished ? 'JOURNEY COMPLETE' : 'A SMALL BEGINNING'}</span><span class="pill">${finished ? '全部完成' : '準備出發'}</span></div><h2>${finished ? '你的技能樹，已經長成。' : '你好，未來的<br>微積分探索者。'}</h2><p class="lead">${finished ? '你已掌握微分與積分的基礎。隨時點選樹上的節點，重溫概念與練習。' : '變化與累積，是理解微積分的兩把鑰匙。讓我們從一個小小的起點，一起把它們找出來。'}</p><div class="hero-art"><svg viewBox="0 0 280 150" aria-hidden="true"><path d="M140 135V86M140 109Q95 110 80 70M140 97Q192 100 206 55M140 86Q121 61 135 25" stroke="currentColor" stroke-opacity=".55" fill="none" stroke-width="2"/><ellipse cx="113" cy="90" rx="24" ry="12" transform="rotate(30 113 90)" fill="currentColor" fill-opacity=".18"/><ellipse cx="174" cy="80" rx="27" ry="13" transform="rotate(-35 174 80)" fill="currentColor" fill-opacity=".14"/><ellipse cx="134" cy="46" rx="12" ry="25" fill="currentColor" fill-opacity=".22"/><circle cx="75" cy="47" r="3" fill="currentColor" fill-opacity=".45"/><circle cx="220" cy="103" r="3" fill="currentColor" fill-opacity=".45"/><path d="M115 137h50" stroke="currentColor" stroke-opacity=".35"/><text x="55" y="110" fill="currentColor" fill-opacity=".5" font-size="23" font-family="Georgia">d</text><text x="205" y="40" fill="currentColor" fill-opacity=".5" font-size="28" font-family="Georgia">∫</text></svg></div><ol class="welcome-list"><li><b>1</b><span>讀懂概念<small>短講解與逐步例題，讓公式有意義。</small></span></li><li><b>2</b><span>動手練習<small>完成每課練習，達到該課通過條件。</small></span></li><li><b>3</b><span>點亮技能，繼續探索<small>解鎖下一課，將微分與積分連起來。</small></span></li></ol><button class="primary" id="begin">${progress.started ? finished ? '回到第一課複習' : '繼續我的旅程' : '點亮 Start · 開始探索'} <span aria-hidden="true">↗</span></button><p class="button-note">無需登入 · 依自己的步調 · 隨時回來複習</p>`;
  $('#begin').onclick = () => {
    const firstStart = !progress.started;
    progress.started = true;
    if (firstStart) justLitId = 'start';
    saveProgress();
    const next = lessons.find(node => !isCompleted(node.id) && isAvailable(node)) || lessons[0];
    selectNode(next.id);
    focusTree();
    if (firstStart) notify('Start 已點亮！可以開始學習第一個節點。');
  };
}
function renderLesson() {
  if (selectedId === 'start') return renderWelcome();
  const lesson = lessons.find(item => item.id === selectedId);
  $('#lesson').innerHTML = `<div class="lesson-top"><span class="lesson-kicker">${lesson.kind === 'derivative' ? 'DIFFERENTIATION' : lesson.kind === 'integral' ? 'INTEGRATION' : 'FOUNDATIONS'}</span><span class="pill">${isCompleted(lesson.id) ? '✓ 已掌握' : `約 ${lesson.minutes} 分鐘`}</span></div><h2>${lesson.title}</h2><p class="lead">${lesson.intro}</p><div class="lesson-tabs" role="tablist" aria-label="課程分頁"><button id="learn-tab" role="tab" aria-selected="${activeTab === 'learn'}" class="${activeTab === 'learn' ? 'active' : ''}">概念與例題</button><button id="quiz-tab" role="tab" aria-selected="${activeTab === 'quiz'}" class="${activeTab === 'quiz' ? 'active' : ''}">練習 · ${lesson.quiz.length} 題</button><button id="scratch-tab" role="tab" aria-selected="${activeTab === 'scratch'}" class="${activeTab === 'scratch' ? 'active' : ''}">草稿紙</button></div><div class="lesson-body" id="lesson-body" role="tabpanel" aria-labelledby="${activeTab === 'learn' ? 'learn-tab' : activeTab === 'quiz' ? 'quiz-tab' : 'scratch-tab'}"></div>`;
  $('#learn-tab').onclick = () => { activeTab = 'learn'; renderLesson(); };
  $('#quiz-tab').onclick = () => { activeTab = 'quiz'; renderLesson(); };
  $('#scratch-tab').onclick = () => { activeTab = 'scratch'; renderLesson(); };
  if (activeTab === 'quiz') renderQuiz(lesson);
  else if (activeTab === 'scratch') window.LessonWorkspace?.mountScratchpad($('#lesson-body'));
  else {
    $('#lesson-body').innerHTML = lesson.body + '<button class="primary" id="to-quiz">試試看 · 開始練習 →</button>';
    $('#to-quiz').onclick = () => { activeTab = 'quiz'; renderLesson(); $('#lesson').scrollTop = 0; };
  }
}
function renderQuiz(lesson) {
  const attempt = attempts.get(lesson.id) || {answers:{},submitted:false};
  attempts.set(lesson.id, attempt);
  const score = lesson.quiz.filter((question,index) => attempt.answers[index] === question[2]).length;
  const passed = score >= lesson.passCount;
  const result = attempt.submitted ? `<div class="result ${passed ? '' : 'retry'}" role="status"><strong>${score} / ${lesson.quiz.length} 題正確 · ${passed ? '技能已點亮 ✓' : '再試一次，就更接近了'}</strong><br>${passed ? '你可以繼續探索下一個技能，也可以重做練習。' : '看一看每題解析，準備好後重新挑戰。'}</div>` : `<p class="lead">共 ${lesson.quiz.length} 題，答對至少 ${lesson.passCount} 題即可點亮技能。選好所有答案後，按下檢查答案。</p>`;
  $('#lesson-body').innerHTML = result + `<form id="quiz-form">${lesson.quiz.map((question,index) => `<fieldset class="quiz-question"><legend>${index+1}. ${question[0]}</legend>${question[1].map((option,optionIndex) => `<label class="option ${attempt.submitted ? optionIndex === question[2] ? 'correct' : attempt.answers[index] === optionIndex ? 'incorrect' : '' : ''}"><input type="radio" name="q${index}" value="${optionIndex}" ${attempt.answers[index] === optionIndex ? 'checked' : ''} ${attempt.submitted ? 'disabled' : 'required'}><span>${option}</span></label>`).join('')}${attempt.submitted ? `<div class="feedback">${attempt.answers[index] === question[2] ? '✓ 答對了' : '↗ 正確答案為 ' + question[1][question[2]]}<br>${question[3]}</div>` : ''}</fieldset>`).join('')}<button class="primary" type="${attempt.submitted ? 'button' : 'submit'}" id="quiz-submit">${attempt.submitted ? '再練習一次 ↺' : '檢查答案 · 點亮技能'}</button></form>${attempt.submitted && passed ? '<button class="primary" id="next-lesson">繼續探索 →</button>' : ''}`;
  $('#quiz-form').onchange = event => {
    if (event.target.name?.startsWith('q')) attempt.answers[Number(event.target.name.slice(1))] = Number(event.target.value);
  };
  $('#quiz-form').onsubmit = event => {
    event.preventDefault();
    if (attempt.submitted) return;
    const correct = lesson.quiz.filter((question,index) => attempt.answers[index] === question[2]).length;
    attempt.submitted = true;
    progress.scores[lesson.id] = Math.max(progress.scores[lesson.id] || 0, correct);
    if (correct >= lesson.passCount && !isCompleted(lesson.id)) {
      progress.completed.push(lesson.id);
      justLitId = lesson.id;
    }
    saveProgress();
    renderTree();
    renderLesson();
    $('#lesson').scrollTop = 0;
    if (correct >= lesson.passCount) notify(progress.completed.length === lessons.length ? '恭喜！整棵微積分技能樹已點亮。' : `「${lesson.title}」已點亮！`);
  };
  if (attempt.submitted) $('#quiz-submit').onclick = () => { attempts.delete(lesson.id); renderLesson(); $('#lesson').scrollTop = 0; };
  if ($('#next-lesson')) $('#next-lesson').onclick = () => {
    const next = lessons.find(node => !isCompleted(node.id) && isAvailable(node));
    selectNode(next?.id || 'start');
  };
}
function applyTransform() {
  $('#world').style.transform = `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.scale})`;
  $('#zoom-label').textContent = `${Math.round(viewport.scale*100)}%`;
}
// 以「不被課程側板遮住的最大連續畫布」的中心為準，樹才不會被側板壓住。
// 側板可拖曳到左側或中間；收合（移出畫布）或手機底部工作表時回到整個視窗中心。
function usableCenterX(mapElement) {
  const width = mapElement.clientWidth;
  const rect = $('#lesson').getBoundingClientRect();
  if (rect.width < 300 || rect.left >= width - 20 || rect.right <= 20) return width / 2;
  const leftSpace = Math.max(0, rect.left);
  const rightEdge = Math.min(rect.right, width);
  const rightSpace = Math.max(0, width - rightEdge);
  // 側板橫跨整個畫布（手機底部工作表）：兩側都沒有可用空間，回到全視窗中心。
  if (leftSpace < 140 && rightSpace < 140) return width / 2;
  return leftSpace >= rightSpace ? leftSpace / 2 : (rightEdge + width) / 2;
}
function fitTree() {
  const map = $('#map');
  const centerX = usableCenterX(map);
  if (!progress.started) {
    viewport.scale = 1;
    viewport.x = centerX - startNode.x;
    viewport.y = map.clientHeight*.32 - 65;
  } else {
    const minX = Math.min(...allNodes.map(node => node.x)) - 100;
    const maxX = Math.max(...allNodes.map(node => node.x)) + 100;
    const maxY = Math.max(...allNodes.map(node => node.y)) + 45;
    viewport.scale = Math.min(1, (map.clientWidth-35)/(maxX-minX), (map.clientHeight-80)/maxY);
    viewport.x = centerX - (maxX+minX)/2*viewport.scale;
    viewport.y = Math.max(0, (map.clientHeight - maxY*viewport.scale)/2);
  }
  applyTransform();
}
function focusTree() {
  if (!progress.started) return fitTree();
  const node = allNodes.find(item => item.id === selectedId);
  viewport.scale = map.clientWidth < 500 ? .85 : 1;
  viewport.x = usableCenterX(map) - node.x*viewport.scale;
  viewport.y = Math.max(20, map.clientHeight*.35) - node.y*viewport.scale;
  applyTransform();
}
function zoomAt(scale,x,y) {
  const next = Math.max(.03,Math.min(2.2,scale));
  const ratio = next/viewport.scale;
  viewport.x = x - (x-viewport.x)*ratio;
  viewport.y = y - (y-viewport.y)*ratio;
  viewport.scale = next;
  applyTransform();
}
const map = $('#map');
const pointers = new Map();
let gesture = null;
let suppressClick = false;
map.addEventListener('pointerdown', event => {
  if (event.target.closest('.map-tools')) return;
  pointers.set(event.pointerId, {x:event.clientX,y:event.clientY});
  if (pointers.size === 1) {
    gesture = {x:event.clientX,y:event.clientY,startX:viewport.x,startY:viewport.y};
    suppressClick = false;
  } else if (pointers.size === 2) {
    const [a,b] = [...pointers.values()];
    gesture = {distance:Math.hypot(a.x-b.x,a.y-b.y),scale:viewport.scale};
    suppressClick = true;
  }
  // 節點保留原始點擊目標。只在開始拖曳後捕捉指標。
});
map.addEventListener('pointermove', event => {
  if (!pointers.has(event.pointerId) || !gesture) return;
  pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
  if (pointers.size === 2 && gesture.distance) {
    const [a,b] = [...pointers.values()];
    const box = map.getBoundingClientRect();
    zoomAt(gesture.scale*Math.hypot(a.x-b.x,a.y-b.y)/gesture.distance,(a.x+b.x)/2-box.left,(a.y+b.y)/2-box.top);
  } else if (pointers.size === 1 && !gesture.distance) {
    const dx = event.clientX-gesture.x;
    const dy = event.clientY-gesture.y;
    if (Math.hypot(dx,dy)>5) {
      suppressClick = true;
      map.setPointerCapture(event.pointerId);
      map.classList.add('dragging');
      viewport.x=gesture.startX+dx;
      viewport.y=gesture.startY+dy;
      applyTransform();
    }
  }
});
function endPointer(event) {
  pointers.delete(event.pointerId);
  if (pointers.size === 1) {
    const [point] = pointers.values();
    gesture = {x:point.x,y:point.y,startX:viewport.x,startY:viewport.y};
  } else if (!pointers.size) { gesture=null; map.classList.remove('dragging'); }
}
window.addEventListener('pointerup',endPointer);
window.addEventListener('pointercancel',endPointer);
$('#nodes').addEventListener('click',event => {
  const node = event.target.closest('[data-id]');
  if (node && (!suppressClick || event.detail === 0)) selectNode(node.dataset.id);
});
map.addEventListener('wheel',event => {
  event.preventDefault();
  const box = map.getBoundingClientRect();
  zoomAt(viewport.scale*Math.exp(-event.deltaY*.002),event.clientX-box.left,event.clientY-box.top);
},{passive:false});
$('#zoom-in').onclick = () => zoomAt(viewport.scale*1.2,usableCenterX(map),map.clientHeight/2);
$('#zoom-out').onclick = () => zoomAt(viewport.scale/1.2,usableCenterX(map),map.clientHeight/2);
$('#fit').onclick = fitTree;
$('#reset').onclick = () => $('#reset-dialog').showModal();
$('#cancel-reset').onclick = () => $('#reset-dialog').close();
$('#confirm-reset').onclick = () => {
  progress={started:false,completed:[],scores:{}};
  attempts.clear();
  saveProgress();
  selectedId='start';
  renderTree();renderLesson();fitTree();
  $('#reset-dialog').close();
  notify('旅程已重設，從 Start 再次出發。');
};
new ResizeObserver(focusTree).observe(map);
renderTree();renderLesson();fitTree();
if (!storageAvailable) $('#storage-note').textContent = '瀏覽器儲存不可用，本次進度僅暫存';
