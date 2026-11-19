'use strict';
// Cosmetic overworld day phases. Consistent for all visitors (Moscow time).
(() => {
  const label = document.getElementById('world-time-label');
  if (!document.body.classList.contains('overworld-edition')) return;
  const clock = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Moscow', hour:'2-digit', hourCycle:'h23' });
  const phases = {day:'МСК / ДЕНЬ', dusk:'МСК / ВЕЧЕР', night:'МСК / НОЧЬ', dawn:'МСК / РАССВЕТ'};
  function update() {
    const hour = Number(clock.format(new Date()));
    const phase = hour >= 20 || hour < 6 ? 'night' : hour < 8 ? 'dawn' : hour < 17 ? 'day' : 'dusk';
    document.body.dataset.dayphase = phase;
    if (label) label.textContent = phases[phase];
  }
  update();
  setInterval(() => { if (!document.hidden) update(); }, 60_000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) update(); });
})();
