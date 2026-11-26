'use strict';

(() => {
  const config = window.PipindersTheme;
  if (!config) return;
  const { theme, preference, storageKey } = config;
  const winter = theme === 'winter';
  document.body.classList.toggle('winter-edition', winter);
  if (winter) {
    document.querySelectorAll('[data-winter-text]').forEach(node => { node.textContent = node.dataset.winterText; });
    document.querySelectorAll('template[data-winter]').forEach(template => template.replaceWith(template.content.cloneNode(true)));
    const word = document.getElementById('snowy-word');
    if (word) {
      word.classList.add('snowy-word');
      word.setAttribute('role', 'button');
      word.tabIndex = 0;
      word.setAttribute('aria-label', 'Стряхнуть снег с надписи СКОРО');
      word.title = 'Нажми, чтобы стряхнуть снег';
    }
  } else {
    document.querySelectorAll('template[data-winter]').forEach(template => template.remove());
  }
  const world = document.querySelector('[data-world-art]');
  if (world) world.src = `./assets/images/themes/${theme}/world.svg`;
  function load(file) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `./js/themes/winter/${file}?v=1`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
  }
  if (winter && world) load('effects.js').then(() => load('title-snow.js')).catch(() => {});
  if (winter && document.getElementById('gallery-snow')) load('gallery-snow.js').catch(() => {});
  const form = document.getElementById('application-form');
  const hasDraft = () => form && ['nickname', 'contact', 'about'].some(key => Boolean(form.elements.namedItem(key)?.value.trim()));
  document.querySelectorAll('[data-theme-picker]').forEach(picker => {
    picker.value = preference;
    picker.closest('.theme-picker').hidden = false;
    picker.addEventListener('change', () => {
      const choice = picker.value;
      if (hasDraft() && !window.confirm('Смена темы перезагрузит страницу. Несохранённая заявка может быть потеряна. Продолжить?')) {
        picker.value = preference;
        return;
      }
      try {
        localStorage.setItem(storageKey, choice);
      } catch {
        picker.value = preference;
        window.alert('Браузер не разрешает сохранить настройку оформления.');
        return;
      }
      window.location.reload();
    });
  });
})();
