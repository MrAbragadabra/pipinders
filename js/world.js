'use strict';

(() => {
  const worldLabel = document.getElementById('world-time-label');
  const body = document.body;
  const moscowClock = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Moscow', hour: '2-digit', hourCycle: 'h23'
  });
  function updateWorldTime() {
    const hour = Number(moscowClock.format(new Date()));
    const phase = hour >= 20 || hour < 6 ? 'night'
      : hour < 8 ? 'dawn' : hour < 17 ? 'day' : 'dusk';
    body.dataset.dayphase = phase;
    const captions = { day: 'МСК / ДЕНЬ', dusk: 'МСК / ВЕЧЕР', night: 'МСК / НОЧЬ', dawn: 'МСК / РАССВЕТ' };
    if (worldLabel) worldLabel.textContent = captions[phase];
  }
  updateWorldTime();
  let worldClockInterval = null;
  function syncClock() {
    if (worldClockInterval !== null) clearInterval(worldClockInterval);
    worldClockInterval = null;
    if (!document.hidden) { updateWorldTime(); worldClockInterval = setInterval(updateWorldTime, 60_000); }
  }
  syncClock();
  document.addEventListener('visibilitychange', syncClock);

})();
