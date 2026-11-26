'use strict';

(() => {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;
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
