'use strict';

// Pull light inward before releasing shards; all layers inherit the live color.
window.SkillTreeEffects = (() => {
  const active = new WeakMap();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function play(element, {compact = false} = {}) {
    if (!element) return;
    const previous = active.get(element);
    if (previous) {
      clearTimeout(previous.timer);
      previous.layer.remove();
      active.delete(element);
    }
    if (reducedMotion.matches) {
      element.classList.remove('just-lit');
      return;
    }

    const layer = document.createElement('span');
    layer.className = 'unlock-burst';
    layer.setAttribute('aria-hidden', 'true');
    const charge = document.createElement('span');
    charge.className = 'unlock-charge';
    layer.append(charge);
    for (let index = 0; index < (compact ? 10 : 18); index++) {
      const angle = index / (compact ? 10 : 18) * Math.PI * 2 + Math.random() * .2;
      const spark = document.createElement('span');
      spark.className = 'unlock-inward';
      spark.style.setProperty('--charge-x', `${Math.cos(angle) * (element.offsetWidth * .6 + 16)}px`);
      spark.style.setProperty('--charge-y', `${Math.sin(angle) * (element.offsetHeight * .7 + 24)}px`);
      spark.style.setProperty('--charge-size', `${2 + Math.random() * 3}px`);
      layer.append(spark);
    }
    const ring = document.createElement('span');
    ring.className = 'unlock-ring';
    layer.append(ring);
    const count = compact ? 16 : 26;
    const spread = compact ? 70 : 160;
    for (let index = 0; index < count; index++) {
      const angle = Math.random() * Math.PI * 2;
      const dx = Math.cos(angle), dy = Math.sin(angle);
      const startX = dx * 8;
      const startY = dy * 8;
      const distance = spread * (.65 + Math.random() * .65);
      const endX = startX + dx * distance;
      const endY = startY + dy * distance;
      const rotation = angle * 180 / Math.PI + 90;
      const shard = document.createElement('span');
      shard.className = 'unlock-shard';
      const variables = {
        '--shard-width': `${2 + Math.random() * 4}px`,
        '--shard-height': `${(compact ? 12 : 22) + Math.random() * 30}px`,
        '--shard-x': `${startX}px`,
        '--shard-y': `${startY}px`,
        '--shard-mid-x': `${startX + dx * distance * .8}px`,
        '--shard-mid-y': `${startY + dy * distance * .8}px`,
        '--shard-end-x': `${endX}px`,
        '--shard-end-y': `${endY}px`,
        '--shard-rotation': `${rotation}deg`,
        '--shard-spin': `${rotation}deg`,
        '--shard-duration': `${360 + Math.random() * 220}ms`,
        '--shard-delay': `${Math.random() * 65}ms`
      };
      for (const [name, value] of Object.entries(variables)) shard.style.setProperty(name, value);
      layer.append(shard);
    }
    // A slower second layer keeps small soul-like motes after the pointed burst.
    for (let index = 0; index < (compact ? 22 : 46); index++) {
      const mote = document.createElement('span');
      mote.className = 'unlock-mote';
      const angle = Math.random() * Math.PI * 2;
      const radius = (compact ? 55 : 125) * Math.sqrt(Math.random());
      mote.style.setProperty('--mote-x', `${Math.cos(angle) * radius}px`);
      mote.style.setProperty('--mote-y', `${Math.sin(angle) * radius}px`);
      mote.style.setProperty('--mote-size', `${1.5 + Math.random() * 4}px`);
      mote.style.setProperty('--mote-duration', `${650 + Math.random() * 400}ms`);
      layer.append(mote);
    }
    element.append(layer);
    // A timeout also cleans up when animations are disabled or the node is re-rendered.
    const timer = setTimeout(() => {
      layer.remove();
      element.classList.remove('just-lit');
      active.delete(element);
    }, 1600);
    active.set(element, {layer, timer});
  }
  return {play};
})();
