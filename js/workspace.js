'use strict';

/* 學習工作區：可拖曳、八方向調整大小的答題框，以及並排手寫白板。
   純呈現與本機狀態，不碰技能樹狀態機、教材格式、進度與既有三個 localStorage 鍵。
   新增鍵皆含 schemaVersion：calculus-tree-lesson-frame-v1、calculus-tree-scratch-v1。 */

(function () {
  const FRAME_KEY = 'calculus-tree-lesson-frame-v1';
  const SCRATCH_KEY = 'calculus-tree-scratch-v1';
  const SCHEMA = 1;
  const VW = 1000, VH = 700;                 // 手寫區虛擬座標，縮放後按比例重繪
  const MAX_STROKES = 300, MAX_POINTS = 30000;
  const card = document.getElementById('lesson');
  const toggle = document.getElementById('lesson-toggle');
  if (!card) return;

  const isDesktop = () => window.matchMedia('(min-width:761px)').matches;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function readJson(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const data = JSON.parse(raw);
      return data && data.schemaVersion === SCHEMA ? data : null;
    } catch (_) {
      return null;
    }
  }
  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(Object.assign({schemaVersion:SCHEMA}, value)));
    } catch (_) {
      // 儲存空間不足或隱私模式：功能仍可用，只是不持久化。
    }
  }

  /* ---- 工作區：獨立拖曳與八方向縮放，沿用已保存的視窗資料 ---- */
  let frame = readJson(FRAME_KEY);
  let frameGesture = null;
  let suppressFrameClick = false;
  let quizInitialized = frame?.quizInitialized === true;

  function setFrame(next) {
    const width = clamp(next.width, Math.min(340, innerWidth-16), innerWidth-16);
    const height = clamp(next.height, Math.min(300, innerHeight-16), innerHeight-16);
    const left = clamp(next.left, 8, innerWidth-width-8);
    const top = clamp(next.top, 8, innerHeight-height-8);
    Object.assign(card.style, {left:`${left}px`, top:`${top}px`, right:'auto', bottom:'auto', width:`${width}px`, height:`${height}px`});
  }
  function applyFrame() {
    if (!isDesktop()) return;
    const next = {left:card.offsetLeft, top:card.offsetTop, width:card.offsetWidth, height:card.offsetHeight};
    for (const key of Object.keys(next)) if (Number.isFinite(frame?.[key])) next[key] = frame[key];
    setFrame(next);
    syncCollapseDirection();
  }
  function rememberFrame() {
    frame = {left:card.offsetLeft, top:card.offsetTop, width:card.offsetWidth, height:card.offsetHeight, quizInitialized};
    writeJson(FRAME_KEY, frame);
  }
  function syncCollapseDirection() {
    if (!isDesktop()) { card.style.transform = ''; return; }
    // Move fully outside the viewport even after the user positions the panel in its center.
    const distance = card.offsetLeft < innerWidth/2 ? -card.offsetLeft-card.offsetWidth-16 : innerWidth-card.offsetLeft+16;
    card.style.transform = toggle?.checked ? `translateX(${distance}px)` : '';
  }
  function setQuizMode(enabled) {
    card.classList.toggle('quiz-mode', enabled);
    if (!enabled || !isDesktop() || quizInitialized) return;
    quizInitialized = true;
    setFrame({left:card.offsetLeft, top:card.offsetTop, width:Math.max(900,card.offsetWidth), height:Math.max(600,card.offsetHeight)});
    rememberFrame();
    syncCollapseDirection();
  }

  card.addEventListener('pointerdown', event => {
    if (!isDesktop() || toggle?.checked || frameGesture || event.button !== 0) return;
    const handle = event.target.closest('[data-resize]');
    if (!handle && !event.target.closest('.lesson-frame-bar')) return;
    frameGesture = {pointerId:event.pointerId, edge:handle?.dataset.resize || '', x:event.clientX, y:event.clientY,
      left:card.offsetLeft, top:card.offsetTop, width:card.offsetWidth, height:card.offsetHeight, moved:false};
    card.setPointerCapture(event.pointerId);
    card.classList.add('frame-interacting');
    document.body.classList.add('frame-interacting');
    event.preventDefault();
    event.stopPropagation();
  });
  card.addEventListener('pointermove', event => {
    const start = frameGesture;
    if (!start || event.pointerId !== start.pointerId) return;
    const dx = event.clientX-start.x, dy = event.clientY-start.y;
    start.moved ||= Math.hypot(dx,dy) > 3;
    let {left, top, width, height} = start;
    if (!start.edge) {
      left += dx;
      top += dy;
    } else {
      const right = left+width, bottom = top+height;
      const minWidth = Math.min(340,innerWidth-16), minHeight = Math.min(300,innerHeight-16);
      if (start.edge.includes('w')) { left = clamp(left+dx,8,right-minWidth); width = right-left; }
      if (start.edge.includes('e')) width = clamp(width+dx,minWidth,innerWidth-left-8);
      if (start.edge.includes('n')) { top = clamp(top+dy,8,bottom-minHeight); height = bottom-top; }
      if (start.edge.includes('s')) height = clamp(height+dy,minHeight,innerHeight-top-8);
    }
    setFrame({left, top, width, height});
    event.preventDefault();
    event.stopPropagation();
  });
  function finishFrame(event) {
    if (!frameGesture || (event?.pointerId !== undefined && event.pointerId !== frameGesture.pointerId)) return;
    const {pointerId, moved} = frameGesture;
    frameGesture = null;
    if (card.hasPointerCapture(pointerId)) card.releasePointerCapture(pointerId);
    card.classList.remove('frame-interacting');
    document.body.classList.remove('frame-interacting');
    rememberFrame();
    suppressFrameClick = moved;
    setTimeout(() => { suppressFrameClick = false; }, 0);
  }
  card.addEventListener('pointerup', finishFrame);
  card.addEventListener('pointercancel', finishFrame);
  card.addEventListener('lostpointercapture', finishFrame);
  window.addEventListener('blur', () => finishFrame());
  card.addEventListener('click', event => {
    if (!suppressFrameClick) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
  if (toggle) toggle.addEventListener('change', () => { finishFrame(); syncCollapseDirection(); });
  window.addEventListener('resize', () => {
    finishFrame();
    if (isDesktop()) {
      applyFrame();
      setQuizMode(card.classList.contains('quiz-mode'));
    } else card.style.cssText = '';
  });
  applyFrame();

  /* ---- 草稿紙：canvas 手寫，筆跡以虛擬座標保存，縮放與換主題後重繪 ---- */
  const savedScratch = readJson(SCRATCH_KEY);
  let strokes = [];
  if (savedScratch && Array.isArray(savedScratch.strokes)) {
    strokes = savedScratch.strokes.filter(stroke =>
      stroke && (stroke.tool === 'pen' || stroke.tool === 'eraser') &&
      Number.isFinite(stroke.size) && Array.isArray(stroke.points) && stroke.points.length
    ).slice(-MAX_STROKES);
  }
  let tool = 'pen', size = 6;
  let activeResize = null, activeTheme = null, clearedBackup = null;
  let finishDrawing = null;

  function unmountScratchpad() {
    if (finishDrawing) finishDrawing();
    finishDrawing = null;
    if (activeResize) activeResize.disconnect();
    if (activeTheme) activeTheme.disconnect();
    activeResize = null;
    activeTheme = null;
  }

  function saveStrokes() {
    let total = strokes.reduce((sum, stroke) => sum + stroke.points.length, 0);
    while (strokes.length && (strokes.length > MAX_STROKES || total > MAX_POINTS)) {
      total -= strokes.shift().points.length;
    }
    writeJson(SCRATCH_KEY, {strokes});
  }

  function mountScratchpad(container) {
    if (!container) return;
    unmountScratchpad();
    container.innerHTML = `<div class="scratch" aria-label="手寫草稿區">
      <div class="scratch-bar">
        <span class="scratch-label">答題白板</span>
        <div class="scratch-tools" role="group" aria-label="草稿紙工具">
          <button type="button" data-tool="pen" aria-pressed="true">筆</button>
          <button type="button" data-tool="eraser" aria-pressed="false">橡皮擦</button>
          <select id="scratch-size" aria-label="筆畫粗細"><option value="3">細</option><option value="6" selected>中</option><option value="12">粗</option></select>
          <button type="button" data-action="undo">還原</button>
          <button type="button" data-action="clear">清除</button>
        </div>
      </div>
      <div class="scratch-frame"><canvas id="scratch-canvas" aria-label="手寫草稿畫布，可用滑鼠或手指書寫"></canvas></div>
      <p class="scratch-hint">可用滑鼠、觸控筆或手指書寫。筆跡自動儲存。</p>
    </div>`;
    const canvas = container.querySelector('#scratch-canvas');
    const holder = container.querySelector('.scratch-frame');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function redraw() {
      const ink = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#24242a';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(canvas.width / VW, 0, 0, canvas.height / VH, 0, 0);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (const stroke of strokes) {
        const erasing = stroke.tool === 'eraser';
        ctx.globalCompositeOperation = erasing ? 'destination-out' : 'source-over';
        ctx.strokeStyle = erasing ? 'rgba(0,0,0,1)' : ink;
        ctx.lineWidth = erasing ? stroke.size * 4 : stroke.size;
        ctx.beginPath();
        stroke.points.forEach((point, index) => index ? ctx.lineTo(point[0], point[1]) : ctx.moveTo(point[0], point[1]));
        if (stroke.points.length === 1) ctx.lineTo(stroke.points[0][0] + .01, stroke.points[0][1] + .01);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';
    }
    function resizeCanvas() {
      const box = holder.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(box.width * dpr));
      canvas.height = Math.max(1, Math.round(box.height * dpr));
      redraw();
    }
    const toPoint = event => {
      const rect = canvas.getBoundingClientRect();
      return [
        clamp((event.clientX - rect.left) / rect.width * VW, 0, VW),
        clamp((event.clientY - rect.top) / rect.height * VH, 0, VH)
      ];
    };

    let drawing = false, current = null, drawingPointer = null;
    canvas.addEventListener('pointerdown', event => {
      if (drawing || (event.pointerType === 'mouse' && event.button !== 0)) return;
      drawingPointer = event.pointerId;
      drawing = true;
      current = {tool, size, points:[toPoint(event)]};
      strokes.push(current);
      clearedBackup = null;
      try { canvas.setPointerCapture(event.pointerId); } catch (_) {}
      redraw();
      event.preventDefault();
    });
    canvas.addEventListener('pointermove', event => {
      if (!drawing || !current || event.pointerId !== drawingPointer) return;
      const point = toPoint(event);
      const last = current.points[current.points.length - 1];
      if (Math.hypot(point[0] - last[0], point[1] - last[1]) < 1.2) return;
      current.points.push(point);
      redraw();
    });
    const finish = event => {
      if (!drawing || (event?.pointerId !== undefined && event.pointerId !== drawingPointer)) return;
      drawing = false;
      if (canvas.hasPointerCapture(drawingPointer)) canvas.releasePointerCapture(drawingPointer);
      drawingPointer = null;
      current = null;
      saveStrokes();
    };
    canvas.addEventListener('pointerup', finish);
    canvas.addEventListener('pointercancel', finish);
    canvas.addEventListener('lostpointercapture', finish);
    finishDrawing = finish;

    const toolButtons = [...container.querySelectorAll('[data-tool]')];
    for (const button of toolButtons) button.setAttribute('aria-pressed', String(button.dataset.tool === tool));
    container.querySelector('#scratch-size').value = String(size);
    for (const button of toolButtons) button.onclick = () => {
      tool = button.dataset.tool;
      for (const other of toolButtons) other.setAttribute('aria-pressed', String(other === button));
    };
    container.querySelector('#scratch-size').onchange = event => { size = Number(event.target.value) || 6; };
    container.querySelector('[data-action="undo"]').onclick = () => {
      if (strokes.length) strokes.pop();
      else if (clearedBackup) { strokes = clearedBackup; clearedBackup = null; }
      saveStrokes();
      redraw();
    };
    container.querySelector('[data-action="clear"]').onclick = () => {
      clearedBackup = strokes.slice();
      strokes = [];
      saveStrokes();
      redraw();
    };

    if (typeof ResizeObserver !== 'undefined') {
      activeResize = new ResizeObserver(resizeCanvas);
      activeResize.observe(holder);
    }
    activeTheme = new MutationObserver(redraw);
    activeTheme.observe(document.documentElement, {attributes:true, attributeFilter:['class']});
    resizeCanvas();
  }

  window.LessonWorkspace = {mountScratchpad, unmountScratchpad, setQuizMode, resetFrame:() => {
    try { localStorage.removeItem(FRAME_KEY); } catch (_) {}
    frame = null;
    quizInitialized = false;
    card.style.cssText = '';
    applyFrame();
  }};
})();
