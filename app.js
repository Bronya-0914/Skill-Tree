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
let completionPresentation = 0;

// A+ 補強：重開後回到同一課、同一分頁，並保留作答卷。格式帶 schemaVersion 以便日後遷移。
const SESSION_KEY = 'calculus-tree-session-v1';
const BACKUP_KEYS = [STORAGE_KEY, PACKS_KEY, SESSION_KEY, 'skill-tree-theme',
  'calculus-tree-glow-v1', 'calculus-tree-lesson-frame-v1', 'calculus-tree-scratch-v1', 'skill-tree-language'];
window.SkillTreeBackupKeys = BACKUP_KEYS;
function saveSession() {
  try {
    const saved = {};
    for (const [id, attempt] of attempts) saved[id] = {answers:attempt.answers, submitted:attempt.submitted};
    localStorage.setItem(SESSION_KEY, JSON.stringify({schemaVersion:1, selectedId, activeTab, attempts:saved}));
  } catch (_) {}
}
function restoreSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);
    if (!state || state.schemaVersion !== 1) return;
    const node = allNodes.find(item => item.id === state.selectedId);
    if (node && isAvailable(node)) selectedId = node.id;
    if (['learn','quiz','scratch'].includes(state.activeTab)) activeTab = state.activeTab === 'scratch' ? 'quiz' : state.activeTab;
    if (!state.attempts || typeof state.attempts !== 'object') return;
    for (const [id, attempt] of Object.entries(state.attempts)) {
      const lesson = lessons.find(item => item.id === id);
      if (!lesson || !attempt || !attempt.answers || typeof attempt.answers !== 'object') continue;
      const answers = {};
      for (const [key, value] of Object.entries(attempt.answers)) {
        const index = Number(key);
        if (Number.isInteger(index) && index >= 0 && index < lesson.quiz.length &&
            Number.isInteger(value) && value >= 0 && value < lesson.quiz[index][1].length) answers[index] = value;
      }
      attempts.set(id, {answers, submitted:attempt.submitted === true});
    }
  } catch (_) {}
}
restoreSession();

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
let treeLayout;
let layoutNodes;
function updateTreeLayout() {
  if (layoutNodes === allNodes) return;
  treeLayout = SkillTreeLayout.build(allNodes);
  layoutNodes = allNodes;
  const width = treeLayout.bounds.maxX + 24;
  const height = treeLayout.bounds.maxY + 24;
  $('#world').style.width = `${width}px`;
  $('#world').style.height = `${height}px`;
  $('#connections').setAttribute('viewBox', `0 0 ${width} ${height}`);
}
function courseLabel(node) {
  return node.title.match(/^\d+\s*·/)?.[0].replace(/\s*·/, '') || node.title;
}
function renderTree() {
  updateTreeLayout();
  const visible = progress.started ? allNodes : [startNode];
  const halfHeight = treeLayout.nodeHeight / 2;
  $('#nodes').innerHTML = visible.map(node => {
    const completed = isCompleted(node.id);
    const available = isAvailable(node);
    const state = completed ? 'lit' : available ? 'available' : 'locked';
    const status = node.id === 'start' ? completed ? '旅程已開啟' : node.en : completed ? '已掌握 · 可以複習' : available ? `${node.minutes} 分鐘 · 可學習` : '完成先修後解鎖';
    const prerequisites = node.parents.map(id => courseLabel(treeLayout.byId.get(id))).join(' + ');
    const subtitle = node.id === 'start' ? status : `先修 ${prerequisites}`;
    const label = courseLabel(node);
    const numbered = /^\d+$/.test(label);
    const title = numbered ? node.title.replace(/^\d+\s*·\s*/, '') : node.title;
    const extra = treeLayout.additional.get(node.id) || [];
    const references = extra.length ? `<div class="prerequisite-label ${extra.every(isCompleted) ? 'complete' : ''}" style="left:${node.x+17}px;top:${node.y-halfHeight-45}px" role="group" aria-label="${node.title}的其他先修課程"><span>另需</span>${extra.map(id => {
      const parent = treeLayout.byId.get(id);
      return `<button type="button" data-prerequisite="${id}" class="${isCompleted(id) ? 'completed' : ''}" title="${parent.title}" aria-label="前往先修課程 ${parent.title}">${courseLabel(parent)}</button>`;
    }).join('<span aria-hidden="true">·</span>')}</div>` : '';
    return `<button class="node ${node.kind || 'start'} ${state} ${selectedId === node.id ? 'selected' : ''} ${node.id === justLitId ? 'just-lit' : ''}" data-id="${node.id}" style="left:${node.x-treeLayout.nodeWidth/2}px;top:${node.y-halfHeight}px" title="${node.title}，${status}" aria-label="${node.title}，${status}，${subtitle}" aria-pressed="${selectedId === node.id}" ${!available ? 'aria-disabled="true"' : ''}><span class="node-icon" aria-hidden="true">${completed ? '✓' : numbered ? label : node.icon}</span><strong>${title}</strong><small>${subtitle}</small></button>${references}`;
  }).join('');
  const parts = ['<defs><marker id="tree-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L8 4L0 8Z" fill="context-stroke"/></marker></defs>'];
  if (progress.started) {
    for (const parent of visible) {
      const children = treeLayout.children.get(parent.id);
      if (!children.length) continue;
      const done = isCompleted(parent.id) ? 'done' : '';
      const lit = parent.id === justLitId ? 'just-lit' : '';
      const busY = parent.y + halfHeight + 25;
      const xs = [parent.x, ...children.map(child => child.x)];
      parts.push(`<path class="connection ${done} ${lit}" d="M ${parent.x} ${parent.y+halfHeight} V ${busY} M ${Math.min(...xs)} ${busY} H ${Math.max(...xs)}"/>`);
      if (children.length > 1) parts.push(`<circle class="tree-junction ${done}" cx="${parent.x}" cy="${busY}" r="3"/>`);
      for (const node of children) {
        // Every card has exactly one incoming stem. Other prerequisites join as labels.
        parts.push(`<path class="connection ${done} ${lit}" data-edge="${parent.id}>${node.id}" d="M ${node.x} ${busY} V ${node.y-halfHeight}" marker-end="url(#tree-arrow)"/>`);
      }
    }
    for (const node of visible) {
      if (!treeLayout.additional.get(node.id)?.length) continue;
      const y = node.y - halfHeight - 30;
      parts.push(`<path class="prerequisite-join" d="M ${node.x} ${y} H ${node.x+17}"/><circle class="prerequisite-dot" cx="${node.x}" cy="${y}" r="4"/>`);
    }
  }
  $('#connections').innerHTML = parts.join('');
  $('#map-empty').hidden = progress.started;
  $('#progress').max = lessons.length;
  $('#progress').value = progress.completed.length;
  $('#progress-text').textContent = `${progress.completed.length} / ${lessons.length}`;
  $('#progress-caption').textContent = progress.completed.length === lessons.length ? '整棵技能樹已點亮，做得好。' : progress.started ? '每次完成小測驗，就點亮一個新技能。' : '第一步，從 Start 開始。';
  if (justLitId) window.SkillTreeEffects?.play($('#nodes').querySelector('.node.just-lit'));
  justLitId = null;
}
function selectNode(id, {open = true} = {}) {
  const node = allNodes.find(item => item.id === id);
  if (!node || !isAvailable(node)) {
    if (node) notify(`先完成「${node.parents.filter(parent => !isCompleted(parent)).map(parent => allNodes.find(item => item.id === parent).title).join('」與「')}」即可解鎖。`);
    return;
  }
  selectedId = id;
  completionPresentation++;
  if (open) window.LessonWorkspace?.setOpen(true);
  activeTab = 'learn';
  if (open) renderTree();
  else {
    // Keep node elements in place between the two clicks of a double-click.
    for (const button of $('#nodes').querySelectorAll('.node')) {
      const selected = button.dataset.id === selectedId;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    }
  }
  renderLesson();
  ($('#quiz-content') || $('#lesson-content')).scrollTop = 0;
  if (open) {
    focusTree();
    if (matchMedia('(max-width:760px)').matches) $('#lesson').scrollIntoView({behavior:'smooth',block:'start'});
  }
}
function renderWelcome() {
  const finished = progress.completed.length === lessons.length;
  $('#lesson-content').innerHTML = `<div class="lesson-top"><span class="lesson-kicker">${finished ? 'JOURNEY COMPLETE' : 'A SMALL BEGINNING'}</span><span class="pill">${finished ? '全部完成' : '準備出發'}</span></div><h2>${finished ? '你的技能樹，已經長成。' : '你好，未來的<br>微積分探索者。'}</h2><p class="lead">${finished ? '你已掌握微分與積分的基礎。隨時點選樹上的節點，重溫概念與練習。' : '變化與累積，是理解微積分的兩把鑰匙。讓我們從一個小小的起點，一起把它們找出來。'}</p><div class="hero-art"><svg viewBox="0 0 280 150" aria-hidden="true"><path d="M140 135V86M140 109Q95 110 80 70M140 97Q192 100 206 55M140 86Q121 61 135 25" stroke="currentColor" stroke-opacity=".55" fill="none" stroke-width="2"/><ellipse cx="113" cy="90" rx="24" ry="12" transform="rotate(30 113 90)" fill="currentColor" fill-opacity=".18"/><ellipse cx="174" cy="80" rx="27" ry="13" transform="rotate(-35 174 80)" fill="currentColor" fill-opacity=".14"/><ellipse cx="134" cy="46" rx="12" ry="25" fill="currentColor" fill-opacity=".22"/><circle cx="75" cy="47" r="3" fill="currentColor" fill-opacity=".45"/><circle cx="220" cy="103" r="3" fill="currentColor" fill-opacity=".45"/><path d="M115 137h50" stroke="currentColor" stroke-opacity=".35"/><text x="55" y="110" fill="currentColor" fill-opacity=".5" font-size="23" font-family="Georgia">d</text><text x="205" y="40" fill="currentColor" fill-opacity=".5" font-size="28" font-family="Georgia">∫</text></svg></div><ol class="welcome-list"><li><b>1</b><span>讀懂概念<small>短講解與逐步例題，讓公式有意義。</small></span></li><li><b>2</b><span>動手練習<small>完成每課練習，達到該課通過條件。</small></span></li><li><b>3</b><span>點亮技能，繼續探索<small>解鎖下一課，將微分與積分連起來。</small></span></li></ol><button class="primary" id="begin">${progress.started ? finished ? '回到第一課複習' : '繼續我的旅程' : '點亮 Start · 開始探索'} <span aria-hidden="true">↗</span></button><p class="button-note">無需登入 · 依自己的步調 · 隨時回來複習</p>`;
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
  window.LessonWorkspace?.unmountScratchpad();
  window.LessonWorkspace?.setQuizMode(selectedId !== 'start' && activeTab === 'quiz');
  saveSession();
  if (selectedId === 'start') return renderWelcome();
  const lesson = lessons.find(item => item.id === selectedId);
  $('#lesson-content').innerHTML = `<div class="lesson-top"><span class="lesson-kicker">${lesson.kind === 'derivative' ? 'DIFFERENTIATION' : lesson.kind === 'integral' ? 'INTEGRATION' : 'FOUNDATIONS'}</span><span class="pill">${isCompleted(lesson.id) ? '✓ 已掌握' : `約 ${lesson.minutes} 分鐘`}</span></div><h2>${lesson.title}</h2><p class="lead">${lesson.intro}</p><div class="lesson-tabs" role="tablist" aria-label="課程分頁"><button id="learn-tab" role="tab" aria-selected="${activeTab === 'learn'}" class="${activeTab === 'learn' ? 'active' : ''}">概念與例題</button><button id="quiz-tab" role="tab" aria-selected="${activeTab === 'quiz'}" class="${activeTab === 'quiz' ? 'active' : ''}">練習 · ${lesson.quiz.length} 題</button></div><div class="lesson-body" id="lesson-body" role="tabpanel" aria-labelledby="${activeTab === 'learn' ? 'learn-tab' : 'quiz-tab'}"></div>`;
  $('#learn-tab').onclick = () => { activeTab = 'learn'; renderLesson(); };
  $('#quiz-tab').onclick = () => { activeTab = 'quiz'; renderLesson(); };
  if (activeTab === 'quiz') {
    $('#lesson-body').innerHTML = '<div class="quiz-workspace"><section id="quiz-content" class="quiz-content" aria-label="練習題目"></section><aside id="quiz-scratch" class="quiz-scratch" aria-label="答題白板"></aside></div>';
    renderQuiz(lesson);
    window.LessonWorkspace?.mountScratchpad($('#quiz-scratch'));
  }
  else {
    $('#lesson-body').innerHTML = lesson.body + '<button class="primary" id="to-quiz">試試看 · 開始練習 →</button>';
    $('#to-quiz').onclick = () => { activeTab = 'quiz'; renderLesson(); ($('#quiz-content') || $('#lesson-content')).scrollTop = 0; };
  }
}
function answeredCount(attempt, total) {
  let count = 0;
  for (let index = 0; index < total; index++) if (Number.isInteger(attempt.answers[index])) count++;
  return count;
}
function renderQuiz(lesson) {
  const attempt = attempts.get(lesson.id) || {answers:{},submitted:false};
  attempts.set(lesson.id, attempt);
  const score = lesson.quiz.filter((question,index) => attempt.answers[index] === question[2]).length;
  const passed = score >= lesson.passCount;
  const result = attempt.submitted ? `<div class="result ${passed ? '' : 'retry'}" role="status"><strong>${score} / ${lesson.quiz.length} 題正確 · ${passed ? '技能已點亮 ✓' : '再試一次，就更接近了'}</strong><br>${passed ? '你可以繼續探索下一個技能，也可以重做練習。' : '看一看每題解析，準備好後重新挑戰。'}</div>` : `<p class="lead">共 ${lesson.quiz.length} 題，答對至少 ${lesson.passCount} 題即可點亮技能。選好所有答案後，按下檢查答案。</p>`;
  $('#quiz-content').innerHTML = result + `<form id="quiz-form">${lesson.quiz.map((question,index) => `<fieldset class="quiz-question"><legend>${index+1}. ${question[0]}</legend>${question[1].map((option,optionIndex) => `<label class="option ${attempt.submitted ? optionIndex === question[2] ? 'correct' : attempt.answers[index] === optionIndex ? 'incorrect' : '' : ''}"><input type="radio" name="q${index}" value="${optionIndex}" ${attempt.answers[index] === optionIndex ? 'checked' : ''} ${attempt.submitted ? 'disabled' : 'required'}><span>${option}</span></label>`).join('')}${attempt.submitted ? `<div class="feedback ${attempt.answers[index] === question[2] ? 'correct' : 'incorrect'}"><strong>${attempt.answers[index] === question[2] ? '✓ 答對了' : '↗ 正確答案為 ' + question[1][question[2]]}</strong><span class="feedback-detail">${question[3]}</span></div>` : ''}</fieldset>`).join('')}${attempt.submitted ? '<button class="primary" type="button" id="quiz-submit">再練習一次 ↺</button>' : '<div class="quiz-submit-area"><p class="quiz-progress" id="quiz-progress" role="status"></p><button class="primary quiz-pending" type="submit" id="quiz-submit" disabled>檢查答案 · 點亮技能</button></div>'}</form>${attempt.submitted && passed ? '<button class="primary" id="next-lesson">繼續探索 →</button>' : ''}`;
  // 交卷鈕：未作答完畢保持灰色停用，答滿全部題目才轉為光效發光並允許遞交。
  const updateQuizSubmit = () => {
    if (attempt.submitted) return;
    const total = lesson.quiz.length;
    const done = answeredCount(attempt, total);
    const note = $('#quiz-progress');
    const button = $('#quiz-submit');
    if (note) note.textContent = done >= total
      ? `已作答 ${done} / ${total} 題 · 可以交卷了`
      : `已作答 ${done} / ${total} 題 · 全部作答後才能交卷`;
    if (!button) return;
    const ready = done >= total;
    button.disabled = !ready;
    button.classList.toggle('quiz-ready', ready);
    button.classList.toggle('quiz-pending', !ready);
  };
  $('#quiz-form').onchange = event => {
    if (event.target.name?.startsWith('q')) {
      attempt.answers[Number(event.target.name.slice(1))] = Number(event.target.value);
      saveSession();
      updateQuizSubmit();
    }
  };
  $('#quiz-form').onsubmit = event => {
    event.preventDefault();
    if (attempt.submitted || answeredCount(attempt, lesson.quiz.length) < lesson.quiz.length) return;
    const correct = lesson.quiz.filter((question,index) => attempt.answers[index] === question[2]).length;
    attempt.submitted = true;
    progress.scores[lesson.id] = Math.max(progress.scores[lesson.id] || 0, correct);
    const passed = correct >= lesson.passCount;
    const firstCompletion = passed && !isCompleted(lesson.id);
    if (firstCompletion) {
      progress.completed.push(lesson.id);
    }
    saveProgress();
    renderTree();
    renderLesson();
    ($('#quiz-content') || $('#lesson-content')).scrollTop = 0;
    if (passed) presentCompletion(lesson, firstCompletion);
  };
  if (attempt.submitted) $('#quiz-submit').onclick = () => { attempts.delete(lesson.id); renderLesson(); ($('#quiz-content') || $('#lesson-content')).scrollTop = 0; };
  if ($('#next-lesson')) $('#next-lesson').onclick = () => {
    const next = lessons.find(node => !isCompleted(node.id) && isAvailable(node));
    selectNode(next?.id || 'start');
  };
  updateQuizSubmit();
}
async function presentCompletion(lesson, firstCompletion) {
  const presentation = ++completionPresentation;
  // Preserve the graded answers; only collapse the workspace so they can be reopened.
  $('#nav-toggle').checked = false;
  await window.LessonWorkspace?.setOpen(false);
  if (presentation !== completionPresentation || selectedId !== lesson.id ||
      !isCompleted(lesson.id) || window.LessonWorkspace?.isOpen()) return;
  focusTree();
  viewport.y = map.clientHeight * .45 - lesson.y * viewport.scale;
  applyTransform();
  if (firstCompletion) {
    justLitId = lesson.id;
    renderTree();
  }
  $('#nodes').querySelector(`[data-id="${CSS.escape(lesson.id)}"]`)?.focus({preventScroll:true});
  notify(progress.completed.length === lessons.length ? '恭喜！整棵微積分技能樹已點亮。' : `「${lesson.title}」已點亮！`);
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
    viewport.y = map.clientHeight*.32 - startNode.y;
  } else {
    const {minX, maxX, maxY} = treeLayout.bounds;
    const usableWidth = 2 * Math.min(centerX, map.clientWidth - centerX);
    viewport.scale = Math.min(1, Math.max(100, usableWidth-64)/(maxX-minX), Math.max(100, map.clientHeight-180)/maxY);
    viewport.x = centerX - (maxX+minX)/2*viewport.scale;
    viewport.y = 110 + (map.clientHeight-180-maxY*viewport.scale)/2;
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
let previousBackgroundClick = false;
let backgroundDoubleClick = false;
function isMapBackground(target) {
  return target === map || (!!target.closest('#world') && !target.closest('button,a,input,select,textarea,[role="button"]'));
}
map.addEventListener('click', event => {
  const background = event.detail > 0 && !suppressClick && isMapBackground(event.target);
  backgroundDoubleClick = event.detail === 2 && previousBackgroundClick && background;
  previousBackgroundClick = background;
}, true);
map.addEventListener('dblclick', event => {
  if (!backgroundDoubleClick || suppressClick || !isMapBackground(event.target)) return;
  event.preventDefault();
  window.LessonWorkspace?.setOpen(false);
  map.focus({preventScroll:true});
});
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
  if (suppressClick && event.detail !== 0) return;
  const reference = event.target.closest('[data-prerequisite]');
  if (reference) {
    const id = reference.dataset.prerequisite;
    const parent = treeLayout.byId.get(id);
    if (isAvailable(parent)) selectNode(id);
    else {
      selectNode(id);
      viewport.x = usableCenterX(map) - parent.x * viewport.scale;
      viewport.y = map.clientHeight * .35 - parent.y * viewport.scale;
      applyTransform();
    }
    return;
  }
  const node = event.target.closest('[data-id]');
  if (node) selectNode(node.dataset.id, {open:event.detail === 0});
});
$('#nodes').addEventListener('dblclick', event => {
  if (suppressClick) return;
  const node = event.target.closest('.node[data-id]');
  if (!node) return;
  event.preventDefault();
  selectNode(node.dataset.id);
});
map.addEventListener('wheel',event => {
  if (event.target.closest('.prerequisite-label')) return;
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
  completionPresentation++;
  progress={started:false,completed:[],scores:{}};
  attempts.clear();
  saveProgress();
  selectedId='start';
  activeTab='learn';
  try { localStorage.removeItem(SESSION_KEY); } catch (_) {}
  renderTree();renderLesson();fitTree();
  $('#reset-dialog').close();
  notify('旅程已重設，從 Start 再次出發。');
};
new ResizeObserver(focusTree).observe(map);
renderTree();renderLesson();fitTree();
if (!storageAvailable) $('#storage-note').textContent = '瀏覽器儲存不可用，本次進度僅暫存';
