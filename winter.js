'use strict';
/* PIPINDERS WINTER — interactive pixel garland and blocky snowfall.
   No external dependencies. Does not read or modify application-form data. */
(() => {
  const hero = document.querySelector('.hero');
  const bulbsRoot = document.getElementById('winter-bulbs');
  const garland = document.getElementById('winter-garland');
  const snowCanvas = document.getElementById('winter-snow');
  const snowButton = document.getElementById('winter-snow-toggle');
  const lightButton = document.getElementById('winter-lights-toggle');
  const lightState = document.getElementById('winter-lights-state');
  const snowState = document.getElementById('winter-snow-state');
  if (!hero || !bulbsRoot || !garland || !snowCanvas || !snowButton || !lightButton || !lightState || !snowState) return;

  const storageKey = 'pipinders-winter-2026';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile = window.matchMedia('(max-width: 700px)');
  const saveData = Boolean(navigator.connection?.saveData);
  const totalBulbs = 25;
  let prefs = {};
  try { prefs = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch { /* storage optional */ }
  // Retain the previous Winter Edition master-switch preference for existing visitors.
  let bulbStates = Array.isArray(prefs.bulbs) && prefs.bulbs.length === totalBulbs
    ? prefs.bulbs.map(Boolean)
    : Array(totalBulbs).fill(prefs.lights !== false);
  let snowEnabled = typeof prefs.snow === 'boolean' ? prefs.snow : !reduceMotion.matches && !saveData;
  if (reduceMotion.matches) snowEnabled = false;
  const save = () => {
    try { localStorage.setItem(storageKey, JSON.stringify({ bulbs: bulbStates, lights: bulbStates.every(Boolean), snow: snowEnabled })); }
    catch { /* localStorage is optional */ }
  };

  const colors = ['#54fc54', '#e9be83', '#c0f1c0', '#eaa49a', '#e6e7b2'];
  const wireY = x => {
    const segment = Math.min(3, Math.floor(x / 300));
    const progress = (x - segment * 300) / 300;
    return Math.round((12 + 168 * progress * (1 - progress)) / 6) * 6;
  };
  const visibleIndices = () => {
    const count = isMobile.matches ? 13 : totalBulbs;
    return Array.from({ length: count }, (_, i) => Math.round(((i + .5) / count) * totalBulbs - .5));
  };
  let activeIndex = 0;
  let shownIndices = [];
  function syncBulbs() {
    for (const lamp of bulbsRoot.querySelectorAll('.winter-bulb')) {
      const idx = Number(lamp.dataset.index);
      const enabled = bulbStates[idx];
      lamp.classList.toggle('is-off', !enabled);
      lamp.setAttribute('aria-pressed', String(enabled));
      lamp.setAttribute('aria-label', `Лампочка ${shownIndices.indexOf(idx) + 1}: ${enabled ? 'выключить' : 'включить'}`);
      lamp.title = enabled ? 'Выключить лампочку' : 'Включить лампочку';
    }
    const all = bulbStates.every(Boolean);
    const some = bulbStates.some(Boolean);
    lightButton.setAttribute('aria-pressed', String(all));
    lightButton.setAttribute('aria-label', all ? 'Выключить все огни' : 'Включить все огни');
    lightButton.dataset.state = all ? 'all' : some ? 'mixed' : 'off';
    lightState.textContent = all ? 'ВКЛ' : some ? 'ЧАСТЬ' : 'ВЫКЛ';
    hero.classList.toggle('winter-lights-off', !some);
    save();
  }
  function assignRovingTabIndex() {
    for (const lamp of bulbsRoot.querySelectorAll('.winter-bulb')) {
      lamp.tabIndex = Number(lamp.dataset.index) === activeIndex ? 0 : -1;
    }
  }
  function buildBulbs() {
    const prevFocus = document.activeElement?.classList?.contains('winter-bulb');
    const fragment = document.createDocumentFragment();
    shownIndices = visibleIndices();
    if (!shownIndices.includes(activeIndex)) activeIndex = shownIndices[0];
    shownIndices.forEach((idx, displayIndex) => {
      const x = (displayIndex + .5) / shownIndices.length * 1200;
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'winter-bulb';
      el.dataset.index = String(idx);
      el.style.setProperty('--x', `${(x / 1200 * 100).toFixed(4)}%`);
      el.style.setProperty('--y', `${(wireY(x) / 92 * 100).toFixed(4)}%`);
      el.style.setProperty('--bulb-color', colors[idx % colors.length]);
      el.style.setProperty('--delay', `${((idx % 5) * -.43).toFixed(2)}s`);
      el.style.setProperty('--duration', `${(2.1 + (idx % 4) * .38).toFixed(2)}s`);
      const core = document.createElement('span');
      core.className = 'pixel-bulb-core';
      core.setAttribute('aria-hidden', 'true');
      el.appendChild(core);
      el.addEventListener('click', () => { bulbStates[idx] = !bulbStates[idx]; activeIndex = idx; assignRovingTabIndex(); syncBulbs(); });
      el.addEventListener('focus', () => { activeIndex = idx; assignRovingTabIndex(); });
      el.addEventListener('keydown', event => {
        let pos = shownIndices.indexOf(idx);
        if (event.key === 'ArrowRight') pos = (pos + 1) % shownIndices.length;
        else if (event.key === 'ArrowLeft') pos = (pos - 1 + shownIndices.length) % shownIndices.length;
        else if (event.key === 'Home') pos = 0;
        else if (event.key === 'End') pos = shownIndices.length - 1;
        else return;
        event.preventDefault();
        activeIndex = shownIndices[pos];
        assignRovingTabIndex();
        bulbsRoot.querySelector(`[data-index="${activeIndex}"]`)?.focus();
      });
      fragment.appendChild(el);
    });
    bulbsRoot.replaceChildren(fragment);
    assignRovingTabIndex();
    syncBulbs();
    if (prevFocus) bulbsRoot.querySelector(`[data-index="${activeIndex}"]`)?.focus();
  }
  lightButton.addEventListener('click', () => {
    const next = !bulbStates.every(Boolean);
    bulbStates.fill(next);
    syncBulbs();
  });
  buildBulbs();
  if (isMobile.addEventListener) isMobile.addEventListener('change', buildBulbs);
  else if (isMobile.addListener) isMobile.addListener(buildBulbs);

  // One low-resolution canvas follows the viewport, not the full document.
  // It keeps snowfall visible on all sections without thousands of DOM particles.
  const ctx = snowCanvas.getContext('2d', { alpha: true, desynchronized: true });
  let width = 1, height = 1, flakes = [], raf = null, lastFrame = 0;
  let resizePending = false;
  const mobileSnow = () => window.innerWidth <= 700;
  const randomFlake = (anywhere = true) => ({
    x: Math.random() * width,
    y: anywhere ? Math.random() * height : -12,
    size: mobileSnow() ? 2 + Math.floor(Math.random() * 2) : 2 + Math.floor(Math.random() * 3),
    speed: .32 + Math.random() * .62,
    drift: .1 + Math.random() * .3,
    alpha: .17 + Math.random() * .34
  });
  function resize() {
    if (!ctx) return;
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    // Pixel-sized particles need no 2× or 3× canvas on high-DPI phones.
    snowCanvas.width = width;
    snowCanvas.height = height;
    ctx.imageSmoothingEnabled = false;
    const count = mobileSnow() ? Math.min(24, Math.round(width / 17)) : Math.min(56, Math.round(width / 27));
    flakes = Array.from({ length: count }, () => randomFlake());
  }
  function stop(clear = false) {
    if (raf !== null) cancelAnimationFrame(raf);
    raf = null;
    if (clear && ctx) ctx.clearRect(0, 0, width, height);
  }
  function draw(time) {
    raf = null;
    if (!snowEnabled || document.hidden || !ctx || reduceMotion.matches) return;
    // About 24 frames/s on desktop, 20 on phones; motion is intentionally slow.
    const frameInterval = mobileSnow() ? 50 : 42;
    if (lastFrame && time - lastFrame < frameInterval) {
      raf = requestAnimationFrame(draw);
      return;
    }
    const step = lastFrame ? Math.min(2.8, (time - lastFrame) / 16.67) : 1;
    lastFrame = time;
    ctx.clearRect(0, 0, width, height);
    const breeze = Math.sin(time * .00026) * .15;
    for (const f of flakes) {
      f.y += f.speed * step;
      f.x += (breeze + f.drift) * step;
      if (f.y > height + 10) Object.assign(f, randomFlake(false));
      if (f.x > width + 10) f.x = -6;
      ctx.fillStyle = `rgba(234,255,239,${f.alpha.toFixed(2)})`;
      const x = Math.round(f.x / 2) * 2, y = Math.round(f.y / 2) * 2;
      ctx.fillRect(x, y, f.size, f.size);
    }
    raf = requestAnimationFrame(draw);
  }
  function start() {
    if (raf === null && snowEnabled && !document.hidden && ctx && !reduceMotion.matches) {
      lastFrame = 0;
      raf = requestAnimationFrame(draw);
    }
  }
  function syncSnow() {
    document.body.classList.toggle('winter-snow-off', !snowEnabled);
    snowButton.setAttribute('aria-pressed', String(snowEnabled));
    snowButton.setAttribute('aria-label', snowEnabled ? 'Выключить снег' : 'Включить снег');
    snowState.textContent = snowEnabled ? 'ВКЛ' : 'ВЫКЛ';
    if (snowEnabled) start(); else stop(true);
    // Snow caps listen to this event; no polling or duplicate animation loop.
    window.dispatchEvent(new CustomEvent('pipinders:snow', { detail: { enabled: snowEnabled } }));
    save();
  }
  snowButton.addEventListener('click', () => {
    if (reduceMotion.matches) {
      snowButton.title = 'Для анимации снега отключи уменьшение движения в настройках устройства';
      return;
    }
    snowEnabled = !snowEnabled;
    syncSnow();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  window.addEventListener('resize', () => {
    if (resizePending) return;
    resizePending = true;
    requestAnimationFrame(() => { resizePending = false; resize(); start(); });
  }, { passive: true });
  const changed = () => { if (reduceMotion.matches) snowEnabled = false; syncSnow(); };
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', changed);
  resize();
  syncSnow();
})();
