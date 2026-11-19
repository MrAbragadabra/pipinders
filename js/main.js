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
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

shareButton.addEventListener('click', async () => {
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

const canvas = document.getElementById('particles');
const context = canvas ? canvas.getContext('2d', { alpha: true }) : null;
if (context && !reducedMotion.matches) {
  let width = 0, height = 0, dpr = 1, points = [], raf = null;
  let lastTime = 0;
  const palette = ['84,252,84', '192,241,192', '220,255,220'];

  const resize = () => {
    width = window.innerWidth;
    height = Math.min(1100, Math.max(700, window.innerHeight + 240));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(width * dpr);
    canvas.height = Math.ceil(height * dpr);
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(66, Math.max(18, Math.round(width / 21)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + .35,
      speed: Math.random() * .006 + .003,
      phase: Math.random() * Math.PI * 2,
      color: palette[Math.floor(Math.random() * palette.length)]
    }));
  };

  const draw = (time) => {
    if (document.hidden) { raf = null; return; }
    if (time - lastTime < 33) { raf = requestAnimationFrame(draw); return; } // ~30 fps
    lastTime = time;
    context.clearRect(0, 0, width, height);
    for (const p of points) {
      const a = (.14 + Math.sin(time * p.speed + p.phase) * .09).toFixed(3);
      context.fillStyle = `rgba(${p.color},${a})`;
      context.fillRect(p.x, p.y, p.size, p.size);
    }
    raf = requestAnimationFrame(draw);
  };
  const start = () => { if (raf === null && !document.hidden) raf = requestAnimationFrame(draw); };
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden && raf !== null) { cancelAnimationFrame(raf); raf = null; } else start(); });
  resize();
  start();
}

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
  tick();
  if (Date.now() < target) timer = setInterval(tick, 1000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
})();

(() => {
  const form = document.getElementById('application-form');
  const submit = document.getElementById('apply-submit');
  const label = document.getElementById('apply-submit-label');
  const copy = document.getElementById('copy-application');
  const status = document.getElementById('form-status');
  const about = document.getElementById('about-player');
  const counter = document.getElementById('about-count');
  const config = window.PIPINDERS_FORM || {};
  const email = config.email || 'apply@pipinders.ru';
  const apiUrl = typeof config.apiUrl === 'string' && config.apiUrl.startsWith('https://') ? config.apiUrl : '';
  const captchaKey = typeof config.captchaSiteKey === 'string' ? config.captchaSiteKey.trim() : '';
  const captchaBox = document.getElementById('application-captcha');
  let widgetId = null;
  let busy = false;
  const setStatus = (message, state='') => { status.textContent = message; status.dataset.state = state; };
  const updateCount = () => { counter.textContent = `${about.value.length} / 1000`; };
  const values = () => ({ nickname: form.nickname.value.trim(), contact: form.contact.value.trim(), about: about.value.trim(), rules: form.rules.checked, privacy: form.privacy.checked, website: form.website.value });
  const prepare = () => {
    form.contact.setCustomValidity(''); about.setCustomValidity('');
    const data = values();
    if (data.contact.length < 3) form.contact.setCustomValidity('Укажи способ связи и контакт.');
    if (data.about.length < 10) about.setCustomValidity('Расскажи о себе хотя бы в нескольких словах.');
    return form.reportValidity() ? data : null;
  };
  const body = d => `Заявка на PIPINDERS\n\nНик Minecraft: ${d.nickname}\nКонтакт: ${d.contact}\n\nО себе:\n${d.about}\n\nС правилами ознакомлен(а): да\nС обработкой данных для заявки согласен(на): да`;
  const subject = d => `PIPINDERS — заявка от ${d.nickname}`;
  submit.disabled = false; copy.disabled = false;
  if (apiUrl) {
    label.textContent = 'ОТПРАВИТЬ ЗАЯВКУ';
    if (!captchaKey) {
      setStatus('Онлайн-отправка ещё настраивается. Можно скопировать заявку и отправить вручную.', 'error');
      submit.disabled = true;
    } else {
      captchaBox.hidden = false;
      submit.disabled = true;
      setStatus('Подтверди, что ты не робот.');
      window.pipindersCaptchaInit = () => {
        try {
          widgetId = window.smartCaptcha.render(captchaBox, {
            sitekey: captchaKey, hl: 'ru',
            callback: token => { if (!busy) submit.disabled = !token; }
          });
          window.smartCaptcha.subscribe(widgetId, 'token-expired', () => { submit.disabled = true; });
          window.smartCaptcha.subscribe(widgetId, 'network-error', () => { if (!busy) setStatus('Не удалось загрузить проверку. Можно отправить заявку вручную.', 'error'); });
        } catch { setStatus('Проверка недоступна. Можно отправить заявку вручную.', 'error'); }
      };
      const script = document.createElement('script');
      script.src = 'https://smartcaptcha.cloud.yandex.ru/captcha.js?render=onload&onload=pipindersCaptchaInit';
      script.async = true;
      script.onerror = () => setStatus('Не удалось загрузить проверку. Можно отправить заявку вручную.', 'error');
      document.head.appendChild(script);
    }
  }
  about.addEventListener('input', () => { about.setCustomValidity(''); updateCount(); });
  form.contact.addEventListener('input', () => form.contact.setCustomValidity(''));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy) return;
    const data = prepare(); if (!data) return;
    if (!apiUrl) {
      const href = `mailto:${email}?subject=${encodeURIComponent(subject(data))}&body=${encodeURIComponent(body(data))}`;
      setStatus('Письмо подготовлено. Нажми «Отправить» в почтовом приложении. Если оно не открылось — скопируй заявку и отправь вручную.');
      if (href.length <= 1800) window.location.href = href;
      else setStatus('Заявка длинная. Скопируй её кнопкой ниже и отправь на ' + email + '.');
      return;
    }
    const captchaToken = widgetId !== null && window.smartCaptcha ? window.smartCaptcha.getResponse(widgetId) : '';
    if (!captchaToken) { setStatus('Подтверди, что ты не робот.', 'error'); return; }
    data.captchaToken = captchaToken;
    busy = true; submit.disabled = true; copy.disabled = true; label.textContent = 'ОТПРАВЛЯЕМ…'; setStatus('Связываемся с сервером…');
    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(40000) });
      const result = await response.json();
      if (!response.ok || result.ok !== true || typeof result.id !== 'string') { const messages = {400:'Проверь заполнение полей.',403:'Повтори проверку «Я не робот».',429:'Слишком много запросов. Попробуй позже.',503:'Отправка временно недоступна.'}; setStatus((messages[response.status] || 'Не удалось подтвердить отправку.') + ' Данные остались в форме.', 'error'); return; }
      form.reset(); updateCount(); setStatus('Заявка отправлена! Мы рассмотрим её и свяжемся с тобой. Номер: ' + result.id, 'success');
    } catch (err) { setStatus('Не удалось подтвердить доставку. Данные сохранены в форме; можно повторить позже или отправить вручную.', 'error'); }
    finally { busy = false; submit.disabled = true; copy.disabled = false; label.textContent = 'ОТПРАВИТЬ ЗАЯВКУ'; if (widgetId !== null) { try { window.smartCaptcha.reset(widgetId); } catch {} } }
  });
  copy.addEventListener('click', async () => {
    const data = prepare(); if (!data) return;
    const msg = `Кому: ${email}\nТема: ${subject(data)}\n\n${body(data)}`;
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(msg);
      else {
        const field = document.createElement('textarea'); field.value = msg; field.style.position = 'fixed'; field.style.opacity = '0'; document.body.appendChild(field); field.select(); const ok = document.execCommand('copy'); field.remove(); if (!ok) throw new Error('copy');
      }
      setStatus('Заявка скопирована. Вставь её в письмо на ' + email + '.');
    } catch { setStatus('Не удалось скопировать. Отправь ник, контакт и рассказ о себе вручную на ' + email + '.', 'error'); }
  });
})();
