'use strict';

(() => {
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const word = document.getElementById('snowy-word');
  const canvas = document.getElementById('title-snow');
  if (!word || !canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 1, height = 1, topEdges = [], flakes = [], shakeFrame = null;
  let level = .28;
  let fontPx = 0, geometryKey = null, shakeTimer = null;
  let snowActive = !body.classList.contains('winter-snow-off') && !reducedMotion.matches;
  const wordText = 'СКОРО';
  const rand = n => (Math.sin(n * 19.137 + 11.78) * 43758.5453) % 1;
  const noise = n => Math.abs(rand(n));

  function measureWord() {
    const rect = word.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    const style = getComputedStyle(word);
    const key = [width, height, style.fontWeight, style.fontSize, style.fontFamily, style.letterSpacing].join("|");
    if (geometryKey === key) return;
    geometryKey = key;
    fontPx = parseFloat(style.fontSize);
    canvas.width = width;
    canvas.height = height;
    const mask = document.createElement('canvas');
    mask.width = width;
    mask.height = height;
    const m = mask.getContext('2d', { willReadFrequently: true });
    if (!m) return;
    m.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    if ('letterSpacing' in m) m.letterSpacing = style.letterSpacing;
    m.textBaseline = 'alphabetic';
    const met = m.measureText(wordText);
    const paintedHeight = (met.actualBoundingBoxAscent || parseFloat(style.fontSize) * .8) +
      (met.actualBoundingBoxDescent || parseFloat(style.fontSize) * .2);
    const baseline = Math.round((height - paintedHeight) / 2 + met.actualBoundingBoxAscent);
    const textWidth = Math.max(1, met.width);
    m.save();
    m.scale(width / textWidth, 1);
    m.fillStyle = '#fff';
    m.fillText(wordText, 0, baseline);
    m.restore();
    const image = m.getImageData(0, 0, width, height).data;
    topEdges = [];
    for (let x = 0; x < width; x += 3) {
      let top = -1;
      for (let y = 0; y < height; y++) {
        if (image[(y * width + x) * 4 + 3] > 120) { top = y; break; }
      }
      if (top >= 0) topEdges.push({ x, y: top });
    }
    if (topEdges.length) {
      const minY = Math.min(...topEdges.map(e => e.y));
      const band = Math.max(11, Math.round(parseFloat(style.fontSize) * .085));
      topEdges = topEdges.filter(e => e.y < minY + band);
    }
    drawTitle();
  }

  function drawTitle() {
    ctx.clearRect(0, 0, width, height);
    if (!snowActive) return;
    const depth = Math.min(Math.max(3, fontPx * .044), 8) * level;
    for (const p of topEdges) {
      const n = noise(p.x);
      if (n > Math.min(.96, .42 + level * .58)) continue;
      const y = Math.max(0, Math.round((p.y - 2 - depth * (.4 + noise(p.x + 44) * .6)) / 2) * 2);
      const h = Math.max(2, Math.round((depth + 2) / 2) * 2);
      ctx.fillStyle = n > .73 ? '#cce8da' : n > .45 ? '#e6f6ed' : '#f7fff9';
      ctx.fillRect(p.x, y, 4, h);
      if (level > .55 && noise(p.x + 19) > .82) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(p.x, Math.max(0, y - 2), 2, 2);
      }
    }
    for (const p of flakes) {
      ctx.fillStyle = '#eafdf1';
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
    }
  }

  let prev = 0;
  function burstFrame(time) {
    shakeFrame = null;
    if (!snowActive || reducedMotion.matches || document.hidden) { flakes = []; drawTitle(); return; }
    const dt = prev ? Math.min(2.5, (time - prev) / 16.67) : 1;
    prev = time;
    flakes = flakes.filter(p => p.life > 0 && p.y < height + 8);
    for (const p of flakes) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += .18 * dt;
      p.life -= .022 * dt;
    }
    drawTitle();
    if (flakes.length) shakeFrame = requestAnimationFrame(burstFrame);
  }
  function shakeSnow() {
    if (!snowActive || reducedMotion.matches) return;
    flakes = Array.from({ length: 22 }, (_, i) => {
      const origin = topEdges[Math.floor((i + noise(i + 8)) / 22 * topEdges.length)] || {x:width / 2, y:height / 3};
      return { x: origin.x, y: Math.max(0, origin.y - 5), vx: (noise(i + 6) - .5) * 5,
        vy: -2 - noise(i + 9) * 2, life: 1, size: i % 3 === 0 ? 3 : 2 };
    });
    level = 0;
    word.classList.remove('is-shaking');
    void word.offsetWidth;
    word.classList.add('is-shaking');
    clearTimeout(shakeTimer);
    shakeTimer = setTimeout(() => word.classList.remove('is-shaking'), 440);
    if (shakeFrame !== null) cancelAnimationFrame(shakeFrame);
    prev = 0;
    shakeFrame = requestAnimationFrame(burstFrame);
  }
  word.addEventListener('click', shakeSnow);
  word.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); shakeSnow(); }
  });
  window.addEventListener('pipinders:snow', e => {
    snowActive = Boolean(e.detail?.enabled) && !reducedMotion.matches;
    if (!snowActive) {
      flakes = [];
      if (shakeFrame !== null) cancelAnimationFrame(shakeFrame);
      shakeFrame = null;
    } else if (level === 0) level = .12;
    drawTitle();
  });
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', () => {
    snowActive = !reducedMotion.matches && !body.classList.contains('winter-snow-off');
    drawTitle();
  });
  setInterval(() => {
    if (!snowActive || document.hidden || level >= 1) return;
    level = Math.min(1, level + .075);
    drawTitle();
  }, 18_000);
  if ('ResizeObserver' in window) new ResizeObserver(measureWord).observe(word);
  else window.addEventListener('resize', measureWord, { passive: true });
  measureWord();
  if (document.fonts?.ready) document.fonts.ready.then(() => { geometryKey = null; measureWord(); }).catch(() => {});
})();
