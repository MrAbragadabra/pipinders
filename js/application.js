'use strict';

(() => {
  const form = document.getElementById('application-form');
  const submit = document.getElementById('apply-submit');
  const label = document.getElementById('apply-submit-label');
  const copy = document.getElementById('copy-application');
  const status = document.getElementById('form-status');
  const about = document.getElementById('about-player');
  const counter = document.getElementById('about-count');
  if (!form || !submit || !label || !copy || !status || !about || !counter) return;
  const config = window.PIPINDERS_FORM || {};
  const email = config.email || 'apply@pipinders.ru';
  const apiUrl = (() => {
    try {
      const url = new URL(config.apiUrl);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
    } catch { return ''; }
  })();
  const captchaKey = typeof config.captchaSiteKey === 'string' ? config.captchaSiteKey.trim() : '';
  const captchaBox = document.getElementById('application-captcha');
  let widgetId = null;
  let busy = false;
  const setStatus = (message, state='') => { status.textContent = message; status.dataset.state = state; };
  const updateCount = () => { counter.textContent = `${about.value.length} / 1000`; };
  const timeoutSignal = (ms) => {
    if (typeof AbortSignal.timeout === 'function') return { signal: AbortSignal.timeout(ms), dispose() {} };
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return { signal: controller.signal, dispose: () => clearTimeout(timer) };
  };
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
      script.referrerPolicy = 'strict-origin-when-cross-origin';
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
    const timeout = timeoutSignal(40000);
    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), credentials: 'omit', redirect: 'error', signal: timeout.signal });
      const result = await response.json();
      if (!response.ok || result?.ok !== true || typeof result.id !== 'string') { const messages = {400:'Проверь заполнение полей.',403:'Повтори проверку «Я не робот».',429:'Слишком много запросов. Попробуй позже.',503:'Отправка временно недоступна.'}; setStatus((messages[response.status] || 'Не удалось подтвердить отправку.') + ' Данные остались в форме.', 'error'); return; }
      form.reset(); updateCount(); setStatus('Заявка отправлена! Мы рассмотрим её и свяжемся с тобой. Номер: ' + result.id, 'success');
    } catch (err) { setStatus('Не удалось подтвердить доставку. Данные сохранены в форме; можно повторить позже или отправить вручную.', 'error'); }
    finally { timeout.dispose(); busy = false; submit.disabled = true; copy.disabled = false; label.textContent = 'ОТПРАВИТЬ ЗАЯВКУ'; if (widgetId !== null) { try { window.smartCaptcha.reset(widgetId); } catch {} } }
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
