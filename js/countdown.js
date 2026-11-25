'use strict';

(() => {
  const target = Date.parse('2026-12-19T14:00:00+03:00');
  const countdown = document.getElementById('countdown');
  const passed = document.getElementById('launch-passed');
  const parts = ['days','hours','minutes','seconds'].map(id => document.getElementById(id));
  let timer = null;
  const tick = () => {
    const left = Math.max(0, Math.ceil((target - Date.now()) / 1000));
    if (left === 0) {
      countdown.hidden = true; passed.hidden = false;
      if (timer !== null) { clearInterval(timer); timer = null; }
      return;
    }
    const values = [Math.floor(left / 86400), Math.floor(left / 3600) % 24, Math.floor(left / 60) % 60, left % 60];
    values.forEach((value, i) => { const text = String(value).padStart(2,'0'); if (parts[i].textContent !== text) parts[i].textContent = text; });
    countdown.hidden = false;
  };
  function stop() { if (timer !== null) clearInterval(timer); timer = null; }
  function start() {
    tick();
    if (!document.hidden && Date.now() < target && timer === null) timer = setInterval(tick, 1000);
  }
  start();
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
})();
