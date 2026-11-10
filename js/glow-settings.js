'use strict';

/* 統一技能樹點亮顏色、動畫與內嵌 HSV 色盤。
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
  const spectrum = document.getElementById('glow-spectrum');
  const cursor = document.getElementById('glow-cursor');
  const hue = document.getElementById('glow-hue');
  const hueValue = document.getElementById('glow-hue-value');
  const spectrumValue = document.getElementById('glow-spectrum-value');
  let hsv = {h:0, s:0, v:1};
  let currentColor = DEFAULT;
  let palettePointer = null;
  const previewButton = document.getElementById('glow-preview');
  const resetButton = document.getElementById('glow-reset');
  const sample = document.getElementById('glow-sample');
  if (!swatches || !picker || !value || !previewButton || !resetButton || !sample || !spectrum || !cursor || !hue || !hueValue || !spectrumValue) return;

  function normalize(input) {
    if (typeof input !== 'string' || !HEX.test(input)) return DEFAULT;
    const hex = input.slice(1);
    const full = hex.length === 3 ? hex.split('').map(char => char + char).join('') : hex;
    return '#' + full.toLowerCase();
  }

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  function rgbChannels(hex) {
    return [1, 3, 5].map(index => parseInt(hex.slice(index, index + 2), 16));
  }
  function toHsv(hex) {
    const [r, g, b] = rgbChannels(hex).map(channel => channel / 255);
    const max = Math.max(r,g,b), min = Math.min(r,g,b), delta = max-min;
    let h = hsv.h; // Keep the selected hue when choosing white, grey or black.
    if (delta) {
      if (max === r) h = 60 * (((g-b)/delta + 6) % 6);
      else if (max === g) h = 60 * ((b-r)/delta + 2);
      else h = 60 * ((r-g)/delta + 4);
    }
    return {h, s:max ? delta/max : 0, v:max};
  }
  function hsvToHex({h, s, v}) {
    const chroma = v*s;
    const middle = chroma * (1-Math.abs((h/60)%2-1));
    const sector = Math.floor(h/60)%6;
    const channels = [[chroma,middle,0],[middle,chroma,0],[0,chroma,middle],
      [0,middle,chroma],[middle,0,chroma],[chroma,0,middle]][sector];
    return '#' + channels.map(channel => Math.round((channel+v-chroma)*255).toString(16).padStart(2,'0')).join('');
  }
  function textColor(channels) {
    const linear = channels.map(channel => {
      const value = channel/255;
      return value <= .04045 ? value/12.92 : ((value+.055)/1.055)**2.4;
    });
    const luminance = linear[0]*.2126 + linear[1]*.7152 + linear[2]*.0722;
    return luminance > .179 ? '#181a20' : '#ffffff';
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

  function paint(hex, {preserveHsv = false, preserveInput = false} = {}) {
    const color = normalize(hex);
    const channels = rgbChannels(color);
    const rgb = channels.join(',');
    currentColor = color;
    if (!preserveHsv) hsv = toHsv(color);
    root.style.setProperty('--glow-rgb', rgb);
    // Lighten the selected hue instead of replacing particles with pure white.
    const tint = amount => channels.map(channel => Math.round(channel + (255-channel)*amount)).join(',');
    root.style.setProperty('--glow-bright-rgb', tint(.42));
    root.style.setProperty('--glow-core-rgb', tint(.68));
    root.style.setProperty('--lit', color);
    root.style.setProperty('--lit-soft', `rgba(${rgb},0.16)`);
    root.style.setProperty('--lit-ink', textColor(channels));
    spectrum.style.setProperty('--picker-hue', hsv.h);
    cursor.style.left = `${hsv.s*100}%`;
    cursor.style.top = `${(1-hsv.v)*100}%`;
    hue.value = Math.round(hsv.h);
    hueValue.textContent = `${Math.round(hsv.h)}°`;
    spectrumValue.textContent = `飽和度 ${Math.round(hsv.s*100)}% · 亮度 ${Math.round(hsv.v*100)}%`;
    if (!preserveInput) picker.value = color.toUpperCase();
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
    window.SkillTreeEffects?.play(sample, {compact:true});
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

  function choose(hex, preview, options) {
    const color = paint(hex, options);
    write(color);
    if (preview) replay();
  }

  swatches.addEventListener('click', event => {
    const button = event.target.closest('.glow-swatch');
    if (button) choose(button.dataset.color, true);
  });
  picker.addEventListener('input', () => {
    if (HEX.test(picker.value)) choose(picker.value, false, {preserveInput:true});
  });
  picker.addEventListener('change', () => {
    if (HEX.test(picker.value)) choose(picker.value, true);
    else paint(currentColor);
  });
  function chooseHsv() {
    choose(hsvToHex(hsv), false, {preserveHsv:true});
  }
  function pickPoint(event) {
    const bounds = spectrum.getBoundingClientRect();
    hsv.s = clamp((event.clientX-bounds.left)/bounds.width, 0, 1);
    hsv.v = 1-clamp((event.clientY-bounds.top)/bounds.height, 0, 1);
    chooseHsv();
  }
  spectrum.addEventListener('pointerdown', event => {
    if (event.button !== 0 || palettePointer !== null) return;
    palettePointer = event.pointerId;
    spectrum.setPointerCapture(event.pointerId);
    spectrum.focus({preventScroll:true});
    pickPoint(event);
    event.preventDefault();
  });
  spectrum.addEventListener('pointermove', event => {
    if (event.pointerId === palettePointer) pickPoint(event);
  });
  const finishPalette = event => {
    if (event.pointerId !== palettePointer) return;
    palettePointer = null;
    if (spectrum.hasPointerCapture(event.pointerId)) spectrum.releasePointerCapture(event.pointerId);
  };
  spectrum.addEventListener('pointerup', finishPalette);
  spectrum.addEventListener('pointercancel', finishPalette);
  spectrum.addEventListener('lostpointercapture', finishPalette);
  spectrum.addEventListener('keydown', event => {
    const step = event.shiftKey ? .1 : .01;
    if (event.key === 'ArrowLeft') hsv.s = clamp(hsv.s-step,0,1);
    else if (event.key === 'ArrowRight') hsv.s = clamp(hsv.s+step,0,1);
    else if (event.key === 'ArrowUp') hsv.v = clamp(hsv.v+step,0,1);
    else if (event.key === 'ArrowDown') hsv.v = clamp(hsv.v-step,0,1);
    else return;
    event.preventDefault();
    chooseHsv();
  });
  hue.addEventListener('input', () => { hsv.h = Number(hue.value); chooseHsv(); });
  previewButton.addEventListener('click', replay);
  resetButton.addEventListener('click', () => choose(DEFAULT, true));

  window.addEventListener('storage', event => {
    if (event.key === KEY || event.key === null) paint(read());
  });

  paint(read());
})();
