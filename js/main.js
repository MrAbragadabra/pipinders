'use strict';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver((entries, ob) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        ob.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

const shareButton = document.getElementById('shareButton');
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

shareButton?.addEventListener('click', async () => {
  const url = 'https://pipinders.ru/';
  try {
    if (navigator.share) {
      await navigator.share({ title: 'PIPINDERS — 19 декабря 2026', text: 'Открытие Minecraft-мира 19 декабря в 14:00 МСК.', url });
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      showToast('Ссылка скопирована!');
    } else {
      const field = document.createElement('textarea');
      field.value = url;
      field.style.position = 'fixed'; field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      const success = document.execCommand('copy');
      field.remove();
      showToast(success ? 'Ссылка скопирована!' : 'Адрес сайта: pipinders.ru');
    }
  } catch (err) {
    if (err.name !== 'AbortError') showToast('Адрес сайта: pipinders.ru');
  }
});
