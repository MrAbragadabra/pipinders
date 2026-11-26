'use strict';

(() => {
  const storageKey = 'pipinders-theme';
  const choices = ['auto', 'overworld', 'winter'];
  let preference = 'auto';
  try {
    const stored = localStorage.getItem(storageKey);
    if (choices.includes(stored)) preference = stored;
  } catch { }
  const fallback = new Date(Date.now() + 3 * 3600000).getUTCMonth() + 1;
  let month = fallback;
  try {
    month = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Moscow', month: 'numeric' }).format(new Date()));
  } catch { }
  const theme = preference === 'auto' ? ([12, 1, 2].includes(month) ? 'winter' : 'overworld') : preference;
  const root = document.documentElement;
  root.dataset.theme = theme;
  if (theme === 'winter') root.classList.add('winter-edition');
  function style(file, before) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.setAttribute('blocking', 'render');
    link.href = `./css/themes/${file}?v=1`;
    before.before(link);
  }
  const before = document.querySelector('meta[name="pipinders-theme-before"]');
  const after = document.querySelector('meta[name="pipinders-theme-after"]');
  if (theme === 'winter') {
    style('winter/base.css', before);
    style('winter/minecraft.css', after);
    if (document.querySelector('link[href*="css/world.css"]')) {
      style('winter/weather.css', document.querySelector('link[href*="css/gallery-link.css"]'));
    }
  } else {
    style('overworld/theme.css', document.currentScript);
  }
  window.PipindersTheme = Object.freeze({ theme, preference, storageKey });
})();
