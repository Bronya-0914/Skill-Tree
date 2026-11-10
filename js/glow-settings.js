'use strict';

/* 光效設定：獨立模組，只處理「點亮動畫的顏色」，不碰技能樹狀態機、教材或進度。
   儲存格式含 schemaVersion，日後改格式時可辨識與遷移。 */

(function () {
  const KEY = 'calculus-tree-glow-v1';
  const SCHEMA = 1;
  const DEFAULT = '#ffffff';
  const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

  const root = document.documentElement;
  const swatches = document.getElementById('glow-swatches');
  const picker = document.getElementById('glow-color');
  const value = document.getElementById('glow-value');
  const previewButton = document.getElementById('glow-preview');
  const resetButton = document.getElementById('glow-reset');
  const sample = document.getElementById('glow-sample');
  if (!swatches || !picker || !value || !previewButton || !resetButton || !sample) return;

  function normalize(input) {
    if (typeof input !== 'string' || !HEX.test(input)) return DEFAULT;
    const hex = input.slice(1);
    const full = hex.length === 3 ? hex.split('').map(char => char + char).join('') : hex;
    return '#' + full.toLowerCase();
  }

  function toRgb(hex) {
    const full = hex.slice(1);
    return [0, 2, 4].map(index => parseInt(full.slice(index, index + 2), 16)).join(',');
  }

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return DEFAULT;
      const saved = JSON.parse(raw);
      if (saved && saved.schemaVersion === SCHEMA) return normalize(saved.color);
      return DEFAULT;
    } catch (_) {
      return DEFAULT;
    }
  }

  function write(hex) {
    try { localStorage.setItem(KEY, JSON.stringify({schemaVersion: SCHEMA, color: hex})); }
    catch (_) { /* 隱私模式或配額不足：本次仍可套用，只是不保存 */ }
  }

  function paint(hex) {
    const color = normalize(hex);
    root.style.setProperty('--glow-rgb', toRgb(color));
    picker.value = color;
    value.textContent = color.toUpperCase();
    for (const button of swatches.querySelectorAll('.glow-swatch')) {
      button.setAttribute('aria-pressed', button.dataset.color.toLowerCase() === color ? 'true' : 'false');
    }
    return color;
  }

  function replay() {
    sample.classList.remove('just-lit');
    void sample.offsetWidth; // 強制回流，讓同一段動畫可以連續重播
    sample.classList.add('just-lit');
  }
  // 只認節點本體的 ignite-node 與連線的 ignite-line；::after 的 ignite-flash 較早結束，不可拿來清類別
  const endGlow = event => {
    if (!event.pseudoElement && (event.animationName === 'ignite-node' || event.animationName === 'ignite-line')) {
      event.target.classList.remove('just-lit');
    }
  };
  sample.addEventListener('animationend', endGlow);
  const treeNodes = document.getElementById('nodes');
  if (treeNodes) treeNodes.addEventListener('animationend', endGlow);
  const treeLines = document.getElementById('connections');
  if (treeLines) treeLines.addEventListener('animationend', endGlow);

  function choose(hex, preview) {
    const color = paint(hex);
    write(color);
    if (preview) replay();
  }

  swatches.addEventListener('click', event => {
    const button = event.target.closest('.glow-swatch');
    if (button) choose(button.dataset.color, true);
  });
  picker.addEventListener('input', () => choose(picker.value, false));
  picker.addEventListener('change', () => choose(picker.value, true));
  previewButton.addEventListener('click', replay);
  resetButton.addEventListener('click', () => choose(DEFAULT, true));

  window.addEventListener('storage', event => {
    if (event.key === KEY || event.key === null) paint(read());
  });

  paint(read());
})();
