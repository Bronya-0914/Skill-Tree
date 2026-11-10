'use strict';

/* 學習工作區：右側答題框可拖曳移動、可調整大小，以及「草稿紙」手寫區。
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

  /* ---- 答題框：拖曳移動、原生 resize 調整大小、位置尺寸保存、雙擊還原 ---- */
  let frame = readJson(FRAME_KEY);
  if (frame && typeof frame !== 'object') frame = null;

  function applyFrame() {
    if (!isDesktop()) return;
    // offset* 不受收合用的 transform 影響，避免收合狀態下重算位置時把位移算進去。
    const base = {left:card.offsetLeft, top:card.offsetTop, width:card.offsetWidth, height:card.offsetHeight};
    const width = Number.isFinite(frame?.width) ? clamp(frame.width, 300, window.innerWidth - 40) : base.width;
    const height = Number.isFinite(frame?.height) ? clamp(frame.height, 220, window.innerHeight - 120) : base.height;
    const left = Number.isFinite(frame?.left) ? clamp(frame.left, 8, window.innerWidth - 140) : base.left;
    const top = Number.isFinite(frame?.top) ? clamp(frame.top, 8, window.innerHeight - 100) : base.top;
    Object.assign(card.style, {
      left:`${left}px`, top:`${top}px`, right:'auto', bottom:'auto',
      width:`${width}px`, height:`${height}px`
    });
    syncCollapseDirection();
  }
  function rememberFrame() {
    if (!isDesktop()) return;
    const rect = card.getBoundingClientRect();
    frame = {left:rect.left, top:rect.top, width:rect.width, height:rect.height};
    writeJson(FRAME_KEY, frame);
  }
  // 側板被拖到左半邊時，收合方向要跟著改成往左，否則會停在畫布中央。
  function syncCollapseDirection() {
    if (!isDesktop()) { card.style.transform = ''; return; }
    const toLeft = card.offsetLeft < window.innerWidth / 2;
    card.style.transform = toggle?.checked
      ? (toLeft ? 'translateX(calc(-100% - 100px))' : 'translateX(calc(100% + 100px))')
      : '';
  }

  card.addEventListener('pointerdown', event => {
    if (!isDesktop() || toggle?.checked || (event.pointerType === 'mouse' && event.button !== 0)) return;
    if (!event.target.closest('.lesson-top')) return;
    if (event.target.closest('button,input,a,label,select,textarea')) return;
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left, offsetY = event.clientY - rect.top;
    let moved = false;
    const onMove = move => {
      card.style.left = `${clamp(move.clientX - offsetX, 8, window.innerWidth - 140)}px`;
      card.style.top = `${clamp(move.clientY - offsetY, 8, window.innerHeight - 100)}px`;
      card.style.right = 'auto';
      card.style.bottom = 'auto';
      moved = true;
    };
    const onUp = () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
      card.classList.remove('frame-dragging');
      if (!moved) return;
      rememberFrame();
      syncCollapseDirection();
      if (typeof window.fitTree === 'function') window.fitTree();
    };
    card.classList.add('frame-dragging');
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
    event.preventDefault();
  });

  // 原生 resize 把手改變尺寸後，把實際尺寸寫回 inline 並保存。
  card.addEventListener('pointerup', () => {
    if (!isDesktop() || toggle?.checked) return;
    const rect = card.getBoundingClientRect();
    if (Math.abs(rect.width - parseFloat(card.style.width)) > 1 ||
        Math.abs(rect.height - parseFloat(card.style.height)) > 1) {
      card.style.width = `${rect.width}px`;
      card.style.height = `${rect.height}px`;
    }
    rememberFrame();
  });

  card.addEventListener('dblclick', event => {
    if (!isDesktop() || !event.target.closest('.lesson-top')) return;
    try { localStorage.removeItem(FRAME_KEY); } catch (_) {}
    frame = null;
    card.style.cssText = '';
    applyFrame();
    if (typeof window.fitTree === 'function') window.fitTree();
  });

  if (toggle) toggle.addEventListener('change', syncCollapseDirection);
  window.addEventListener('resize', () => {
    if (isDesktop()) applyFrame();
    else { card.style.cssText = ''; }
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

  function saveStrokes() {
    let total = strokes.reduce((sum, stroke) => sum + stroke.points.length, 0);
    while (strokes.length && (strokes.length > MAX_STROKES || total > MAX_POINTS)) {
      total -= strokes.shift().points.length;
    }
    writeJson(SCRATCH_KEY, {strokes});
  }

  function mountScratchpad(container) {
    if (!container) return;
    if (activeResize) { activeResize.disconnect(); activeResize = null; }
    if (activeTheme) { activeTheme.disconnect(); activeTheme = null; }
    container.innerHTML = `<div class="scratch" aria-label="手寫草稿區">
      <div class="scratch-bar">
        <span class="scratch-label">草稿紙</span>
        <div class="scratch-tools" role="group" aria-label="草稿紙工具">
          <button type="button" data-tool="pen" aria-pressed="true">筆</button>
          <button type="button" data-tool="eraser" aria-pressed="false">橡皮擦</button>
          <select id="scratch-size" aria-label="筆畫粗細"><option value="3">細</option><option value="6" selected>中</option><option value="12">粗</option></select>
          <button type="button" data-action="undo">還原</button>
          <button type="button" data-action="clear">清除</button>
        </div>
      </div>
      <div class="scratch-frame"><canvas id="scratch-canvas" aria-label="手寫草稿畫布，可用滑鼠或手指書寫"></canvas></div>
      <p class="scratch-hint">拖曳標題列可移動答題框、右下角可調整大小，雙擊標題列還原版面。筆跡自動保存在此瀏覽器。</p>
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

    let drawing = false, current = null;
    canvas.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      drawing = true;
      current = {tool, size, points:[toPoint(event)]};
      strokes.push(current);
      clearedBackup = null;
      try { canvas.setPointerCapture(event.pointerId); } catch (_) {}
      redraw();
      event.preventDefault();
    });
    canvas.addEventListener('pointermove', event => {
      if (!drawing || !current) return;
      const point = toPoint(event);
      const last = current.points[current.points.length - 1];
      if (Math.hypot(point[0] - last[0], point[1] - last[1]) < 1.2) return;
      current.points.push(point);
      redraw();
    });
    const finish = () => {
      if (!drawing) return;
      drawing = false;
      current = null;
      saveStrokes();
    };
    canvas.addEventListener('pointerup', finish);
    canvas.addEventListener('pointercancel', finish);

    const toolButtons = [...container.querySelectorAll('[data-tool]')];
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

  window.LessonWorkspace = {mountScratchpad, resetFrame:() => {
    try { localStorage.removeItem(FRAME_KEY); } catch (_) {}
    frame = null;
    card.style.cssText = '';
    applyFrame();
  }};
})();
