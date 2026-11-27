(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;

  /* Theme: light by default, dark only when chosen */
  const tBtn = $('.theme-toggle');
  const paintTheme = () => {
    const dark = root.dataset.theme === 'dark';
    if (!tBtn) return;
    tBtn.querySelector('i').className = 'ph-light ' + (dark ? 'ph-sun' : 'ph-moon');
    const l = tBtn.querySelector('[data-theme-label]'); if (l) l.textContent = dark ? 'Light' : 'Dark';
    tBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    $('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0F1217' : '#F4F5F2');
  };
  tBtn?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('srl-theme', root.dataset.theme); } catch (e) {}
    paintTheme();
  });
  paintTheme();

  /* Sticky header condense (sentinel, no scroll listener) */
  const header = $('.site-header');
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:120px;height:1px;width:1px';
  document.body.prepend(sentinel);
  new IntersectionObserver(([e]) => header.classList.toggle('is-stuck', !e.isIntersecting)).observe(sentinel);

  /* Desktop dropdown: button toggles, Escape closes */
  $$('.has-drop').forEach(li => {
    const b = $('.drop-toggle', li);
    b.addEventListener('click', () => { const o = li.classList.toggle('open'); b.setAttribute('aria-expanded', o); });
    li.addEventListener('mouseenter', () => b.setAttribute('aria-expanded', 'true'));
    li.addEventListener('mouseleave', () => { li.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
    li.addEventListener('keydown', e => { if (e.key === 'Escape') { li.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); b.focus(); } });
  });
  document.addEventListener('click', e => { $$('.has-drop.open').forEach(li => { if (!li.contains(e.target)) { li.classList.remove('open'); $('.drop-toggle', li).setAttribute('aria-expanded', 'false'); } }); });

  /* Mobile drawer */
  const burger = $('.burger'), drawer = $('#drawer');
  const setDrawer = (open) => {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('drawer-open', open);
    if (open) {
      drawer.style.setProperty('--drawer-top', Math.max(0, header.getBoundingClientRect().bottom) + 'px');
      drawer.hidden = false; requestAnimationFrame(() => drawer.classList.add('show'));
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('show'); document.body.style.overflow = '';
      setTimeout(() => { if (burger.getAttribute('aria-expanded') === 'false') drawer.hidden = true; }, 300);
    }
  };
  burger?.addEventListener('click', () => setDrawer(burger.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && burger?.getAttribute('aria-expanded') === 'true') { setDrawer(false); burger.focus(); } });
  $$('.m-toggle').forEach(b => b.addEventListener('click', () => {
    const sub = b.closest('.m-group').querySelector('.m-sub');
    const o = !sub.classList.contains('show'); sub.classList.toggle('show', o); b.setAttribute('aria-expanded', o);
  }));
  matchMedia('(min-width: 1181px)').addEventListener('change', e => { if (e.matches) setDrawer(false); });

  /* Reveal on enter */
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });
  } else $$('.reveal').forEach(el => el.classList.add('in'));

  /* Open now (Trinidad time, UTC-4, Mon-Sat 8:00-16:00) */
  const tt = new Date(Date.now() + (new Date().getTimezoneOffset() - 240) * 60000);
  const day = tt.getDay(), mins = tt.getHours() * 60 + tt.getMinutes();
  const open = day >= 1 && day <= 6 && mins >= 480 && mins < 960;
  $$('[data-open-status]').forEach(el => { el.hidden = false; el.textContent = open ? 'Open now' : 'Closed now'; el.classList.toggle('is-open', open); });
  $$(`.hours tr[data-day="${day}"]`).forEach(tr => tr.classList.add('today'));
  $$('[data-year]').forEach(el => el.textContent = tt.getFullYear());

  /* FAQ filter */
  const q = $('#faq-q');
  if (q) {
    const items = $$('.faq-acc .acc'), empty = $('.faq-empty'); let cat = 'all';
    const run = () => {
      const term = q.value.trim().toLowerCase(); let shown = 0;
      items.forEach(d => { const ok = (cat === 'all' || d.dataset.cat === cat) && (!term || d.textContent.toLowerCase().includes(term)); d.hidden = !ok; if (ok) shown++; });
      empty.hidden = shown > 0;
    };
    q.addEventListener('input', run);
    $$('.tab').forEach(t => t.addEventListener('click', () => { cat = t.dataset.cat; $$('.tab').forEach(x => x.setAttribute('aria-pressed', x === t)); run(); }));
  }

  /* Consultation form (demo: validates, then shows a confirmation) */
  const form = $('.consult-form');
  if (form) {
    const pre = new URLSearchParams(location.search).get('area');
    if (pre) { const r = form.querySelector(`input[name="area"][value="${CSS.escape(pre)}"]`); if (r) r.checked = true; }
    const msg = $('#f-msg'), count = $('[data-count]');
    msg.addEventListener('input', () => count.textContent = msg.value.length);
    const fieldOf = (id) => $('#' + id)?.closest('.field');
    const mark = (ok, wrap, errId) => { wrap?.classList.toggle('invalid', !ok); $('#' + errId).classList.toggle('show', !ok); return ok; };
    const checks = {
      name: () => mark(form.name.value.trim().length > 1, fieldOf('f-name'), 'e-name'),
      phone: () => mark(form.phone.value.replace(/\D/g, '').length >= 7, fieldOf('f-phone'), 'e-phone'),
      email: () => mark(!form.email.value.trim() || /^\S+@\S+\.\S+$/.test(form.email.value.trim()), fieldOf('f-email'), 'e-email'),
      area: () => mark(!!form.querySelector('input[name="area"]:checked'), form.querySelector('.pick').closest('.field'), 'e-area'),
      msg: () => mark(msg.value.trim().length > 4, fieldOf('f-msg'), 'e-msg'),
      ok: () => mark(form.ok.checked, null, 'e-ok'),
    };
    ['name', 'phone', 'email', 'msg'].forEach(k => {
      // clear an error as soon as the input becomes valid, so no layout shift happens later on blur
      form[k].addEventListener('input', () => { if (form[k].closest('.field').classList.contains('invalid')) checks[k](); });
      form[k].addEventListener('blur', () => { if (form[k].value) checks[k](); });
    });
    form.addEventListener('change', e => { if (e.target.name === 'area') checks.area(); if (e.target.name === 'ok') checks.ok(); });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const res = Object.values(checks).map(f => f());
      if (res.includes(false)) { form.querySelector('.invalid input, .invalid textarea, .err.show')?.closest('.field, .consent, .err')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); const first = form.querySelector('.invalid input, .invalid textarea'); first?.focus({ preventScroll: true }); return; }
      const btn = $('.btn-submit', form); btn.classList.add('loading'); btn.firstChild.textContent = 'Sending ';
      setTimeout(() => {
        const area = form.querySelector('input[name="area"]:checked');
        const c = $('.confirm');
        $('[data-c-name]', c).textContent = form.name.value.trim().split(/\s+/)[0];
        $('[data-c-ref]', c).textContent = 'SRL-' + (tt.getMonth() + 1).toString().padStart(2, '0') + tt.getDate().toString().padStart(2, '0') + '-' + Math.floor(1000 + Math.random() * 9000);
        $('[data-c-via]', c).textContent = form.via.value === 'email' && form.email.value ? 'email' : 'phone';
        $('[data-c-area]', c).textContent = area.value === 'other' ? 'legal' : area.closest('label').textContent.trim().toLowerCase();
        form.hidden = true; c.hidden = false; c.focus();
        c.closest('.form-wrap').querySelectorAll('.form-wrap > h2, .form-intro').forEach(el => el.hidden = true);
        c.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 700);
    });
    $('[data-reset]')?.addEventListener('click', () => {
      form.reset(); count.textContent = '0';
      const btn = $('.btn-submit', form); btn.classList.remove('loading'); btn.firstChild.textContent = 'Send request ';
      $('.confirm').hidden = true; form.hidden = false;
      $$('.form-wrap > h2, .form-intro').forEach(el => el.hidden = false);
      form.name.focus();
    });
  }
})();
