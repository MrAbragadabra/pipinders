'use strict';

(() => {
  const lightbox = document.getElementById('gallery-lightbox');
  const photo = document.getElementById('gallery-lightbox-image');
  const original = document.getElementById('gallery-lightbox-original');
  const counter = document.getElementById('gallery-lightbox-counter');
  const seasonLabel = document.getElementById('gallery-lightbox-season');
  const prev = document.getElementById('gallery-lightbox-prev');
  const next = document.getElementById('gallery-lightbox-next');
  const close = document.getElementById('gallery-lightbox-close');
  const stage = document.getElementById('gallery-lightbox-stage');
  if (!lightbox || !photo || !original || !counter || !seasonLabel || !prev || !next || !close || !stage) return;

  const SEASONS = ['season-1', 'season-2'];
  const pictures = { 'season-1': [], 'season-2': [] };
  let activeSeason = SEASONS[0];
  let activeIndex = 0;
  let touchStart = null;
  function localImage(value, allowedRoot) {
    if (typeof value !== 'string') return null;
    try {
      const url = new URL(value, document.baseURI);
      const root = new URL(allowedRoot, document.baseURI);
      if (!['http:', 'https:'].includes(url.protocol) || url.origin !== root.origin ||
          url.username || url.password || !url.pathname.startsWith(root.pathname) || url.search || url.hash) return null;
      const name = decodeURIComponent(url.pathname.slice(root.pathname.length));
      if (!name || name.startsWith('.') || /[\\/\x00-\x1f\x7f]/.test(name) || !/\.(png|jpe?g|webp)$/i.test(name)) return null;
      return url.href;
    } catch { return null; }
  }

  function textForCount(count) { return `${count} ${count % 10 === 1 && count % 100 !== 11 ? 'КАДР' :
    (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)) ? 'КАДРА' : 'КАДРОВ'}`; }

  function updateLightbox() {
    const item = pictures[activeSeason][activeIndex];
    if (!item) return;
    photo.src = item.src;
    photo.alt = `Сезон ${activeSeason === 'season-1' ? 1 : 2}, скриншот ${activeIndex + 1}`;
    original.href = item.src;
    counter.textContent = `${activeIndex + 1} / ${pictures[activeSeason].length}`;
    seasonLabel.textContent = activeSeason === 'season-1' ? 'СЕЗОН I' : 'СЕЗОН II';
    prev.disabled = activeIndex === 0;
    next.disabled = activeIndex === pictures[activeSeason].length - 1;
    const upcoming = pictures[activeSeason][activeIndex + 1];
    if (upcoming && !navigator.connection?.saveData) { const cached = new Image(); cached.src = upcoming.src; }
  }

  function showPicture(season, index) {
    if (!pictures[season] || index < 0 || index >= pictures[season].length) return;
    activeSeason = season;
    activeIndex = index;
    updateLightbox();
    if (!lightbox.open) {
      lightbox.showModal();
      document.body.classList.add('gallery-dialog-open');
      close.focus();
      document.dispatchEvent(new Event('pipinders:gallery-open'));
    }
  }

  function step(delta) {
    const newIndex = activeIndex + delta;
    if (newIndex < 0 || newIndex >= pictures[activeSeason].length) return;
    activeIndex = newIndex;
    updateLightbox();
  }
  prev.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  close.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => {
    document.body.classList.remove('gallery-dialog-open');
    photo.removeAttribute('src');
  });
  document.addEventListener('keydown', event => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
  });
  stage.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) return;
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });
  stage.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
  stage.addEventListener('touchend', event => {
    if (!touchStart || event.changedTouches.length !== 1) { touchStart = null; return; }
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.25) step(dx < 0 ? 1 : -1);
    touchStart = null;
  }, { passive: true });

  function makeCard(item, season, index) {
    const button = document.createElement('button');
    button.className = 'gallery-card';
    button.type = 'button';
    button.setAttribute('aria-label', `Открыть скриншот ${index + 1} — сезон ${season === 'season-1' ? '1' : '2'}`);
    const img = document.createElement('img');
    img.src = item.thumb;
    img.alt = `Сезон ${season === 'season-1' ? '1' : '2'}, скриншот ${index + 1}`;
    img.loading = index < 2 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.width = item.width;
    img.height = item.height;
    const count = document.createElement('span');
    count.className = 'gallery-card-index';
    count.textContent = String(index + 1).padStart(3, '0');
    const expand = document.createElement('span');
    expand.className = 'gallery-card-expand';
    expand.setAttribute('aria-hidden', 'true');
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', 'M5 10V5h5M14 5h5v5M19 14v5h-5M10 19H5v-5');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '2.5');
    svg.append(path);
    expand.append(svg);
    button.append(img, count, expand);
    button.addEventListener('click', () => showPicture(season, index));
    return button;
  }

  function showEmpty(grid, message) {
    const empty = document.createElement('div');
    empty.className = 'gallery-empty';
    const art = document.createElement('span');
    art.className = 'gallery-empty-art';
    art.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.textContent = message;
    empty.append(art, text);
    grid.replaceChildren(empty);
  }

  function renderSeason(season, payload) {
    const grid = document.getElementById(`${season}-grid`);
    const count = document.getElementById(`${season}-count`);
    const heroCount = document.getElementById(`${season}-hero-count`);
    const allowed = Array.isArray(payload) ? payload : [];
    const safe = allowed.map(item => {
      if (!item || typeof item !== 'object') return null;
      const src = localImage(item.src, `./gallery/${season}/`);
      const thumb = localImage(item.thumb, `./assets/images/gallery-thumbs/${season}/`);
      const w = Number(item.width), h = Number(item.height);
      if (!src || !thumb || !Number.isSafeInteger(w) || !Number.isSafeInteger(h) || w < 1 || h < 1 || w * h > 70000000) return null;
      return { src, thumb, width: w, height: h };
    }).filter(Boolean);
    pictures[season] = safe;
    count.textContent = textForCount(safe.length);
    heroCount.textContent = textForCount(safe.length);
    if (!safe.length) showEmpty(grid, 'ЗДЕСЬ ПОЯВЯТСЯ СКРИНШОТЫ');
    else {
      const fragment = document.createDocumentFragment();
      safe.forEach((item, index) => fragment.append(makeCard(item, season, index)));
      grid.replaceChildren(fragment);
    }
    grid.setAttribute('aria-busy', 'false');
  }

  async function loadGallery() {
    try {
      const response = await fetch('./gallery/manifest.json', { cache: 'no-cache', credentials: 'same-origin', redirect: 'error' });
      if (!response.ok) throw new Error('manifest unavailable');
      const data = await response.json();
      if (data?.version !== 1 || !data.seasons) throw new Error('invalid manifest');
      for (const season of SEASONS) renderSeason(season, data.seasons[season]);
    } catch {
      for (const season of SEASONS) {
        const grid = document.getElementById(`${season}-grid`);
        showEmpty(grid, 'НЕ УДАЛОСЬ ЗАГРУЗИТЬ ГАЛЕРЕЮ');
        grid.setAttribute('aria-busy', 'false');
        document.getElementById(`${season}-count`).textContent = 'НЕТ ДАННЫХ';
        document.getElementById(`${season}-hero-count`).textContent = 'НЕТ ДАННЫХ';
      }
    }
  }
  loadGallery();
  const snow = document.getElementById('gallery-snow');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = Boolean(navigator.connection?.saveData);
  let snowAllowed = !motion.matches && !saveData;
  try {
    const saved = JSON.parse(localStorage.getItem('pipinders-winter-2026') || '{}');
    if (typeof saved.snow === 'boolean') snowAllowed = saved.snow && !motion.matches && !saveData;
  } catch {  }
  if (snow && snowAllowed) {
    const ctx = snow.getContext('2d', { alpha: true });
    if (ctx) {
      let flakes = [], width = 0, height = 0, frame = null, last = 0;
      function resize() {
        width = innerWidth;
        height = innerHeight;
        const dpr = Math.min(devicePixelRatio || 1, 1.5);
        snow.width = Math.round(width * dpr);
        snow.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const total = Math.min(width < 700 ? 24 : 48, Math.max(10, Math.round(width * height / 31000)));
        flakes = Array.from({ length: total }, () => ({
          x: Math.random() * width, y: Math.random() * height, size: Math.random() > .82 ? 4 : 2,
          speed: .35 + Math.random() * .55, drift: (Math.random() - .5) * .22
        }));
      }
      function tick(time) {
        frame = null;
        if (document.hidden || motion.matches || lightbox.open) return;
        frame = requestAnimationFrame(tick);
        if (time - last < 48) return;
        const delta = Math.min(2.2, last ? (time - last) / 50 : 1);
        last = time;
        ctx.clearRect(0, 0, width, height);
        for (const flake of flakes) {
          flake.y += flake.speed * delta;
          flake.x += flake.drift * delta;
          if (flake.y > height + 4) { flake.y = -4; flake.x = Math.random() * width; }
          if (flake.x < -4) flake.x = width + 2;
          if (flake.x > width + 4) flake.x = -2;
          ctx.fillStyle = flake.size === 4 ? 'rgba(235,255,242,.65)' : 'rgba(218,243,232,.4)';
          ctx.fillRect(Math.round(flake.x), Math.round(flake.y), flake.size, flake.size);
        }
      }
      function pauseOrResume() {
        if (document.hidden || motion.matches || lightbox.open) {
          if (frame !== null) cancelAnimationFrame(frame);
          frame = null;
          ctx.clearRect(0, 0, width, height);
        } else if (frame === null) { last = 0; frame = requestAnimationFrame(tick); }
      }
      resize(); pauseOrResume();
      window.addEventListener('resize', resize, { passive: true });
      document.addEventListener('visibilitychange', pauseOrResume);
      lightbox.addEventListener('close', pauseOrResume);
      document.addEventListener('pipinders:gallery-open', pauseOrResume);
      motion.addEventListener?.('change', pauseOrResume);
    }
  }
})();
