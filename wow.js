/* GeoVista — wow.js v2. Load LAST (after compare.js). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover)').matches;
  const secs = () => $$('main section:not(.hero)');

  // 0. First-time visitors get the dark observatory theme; anyone who toggled the theme keeps their choice.
  try { if (!localStorage.getItem('gv-theme') && typeof setTheme === 'function') setTheme('dark'); } catch (e) {}

  // 1. Renumber (map/compare are injected late) and stamp each heading with a big numeral.
  secs().forEach((s, i) => { const n = String(i + 1).padStart(2, '0'), e = $('.eyebrow', s);
    if (e) e.textContent = e.textContent.replace(/^\d+/, n); });

  // 2. Hero: orbiting satellites + cursor light.
  const hero = $('#home'), hud = hero && $('.hero-hud', hero);
  if (hero && hud) {
    hud.insertAdjacentHTML('beforebegin', '<div class="orbits" aria-hidden="true"><i></i><i></i><i></i></div>');
    if (!calm && fine) { const s = document.createElement('div'); s.className = 'wow-spot'; hud.before(s);
      hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); s.style.setProperty('--mx', e.clientX - r.left + 'px'); s.style.setProperty('--my', e.clientY - r.top + 'px'); }, { passive: true }); }
  }

  // 2b. Portrait above the name (hidden automatically if the file is missing).
  try { const src = DATA.profile.photo, c = $('.hero-center'); if (src && c) c.insertAdjacentHTML('afterbegin', `<img class="hero-photo" src="${src}" alt="${DATA.profile.name}">`); } catch (e) {}
  document.addEventListener('error', e => { const t = e.target; if (t.tagName === 'IMG' && (t.closest('.avatar') || t.classList.contains('hero-photo'))) (t.closest('.avatar') || t).style.display = 'none'; }, true);

  // 3. At-a-glance strip from real DATA counts.
  try {
    const len = a => Array.isArray(a) ? a.length : 0, certs = typeof allCerts === 'function' ? allCerts().length : 0;
    const facts = [[len(DATA.projects), 'Research projects'], [certs, 'Certificates on record'], [len(DATA.experience), 'Professional roles'], ['Scholarships · Collaboration', 'Open to']].filter(f => f[0] !== 0);
    hero.insertAdjacentHTML('afterend', `<div class="glance"><div class="shell glance-grid">${facts.map(([v, l]) => `<div>${typeof v === 'number' ? `<b data-to="${v}">0</b>` : `<b class="txt">${v}</b>`}<span>${l}</span></div>`).join('')}</div></div>`);
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.unobserve(e.target);
      $$('b[data-to]', e.target).forEach(b => { const to = +b.dataset.to, t0 = performance.now();
        const step = t => { const k = Math.min(1, (t - t0) / 1200); b.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
        calm ? b.textContent = to : requestAnimationFrame(step); }); }), { threshold: .4 });
    io.observe($('.glance'));
  } catch (e) { console.warn('glance skipped', e); }

  // 4. Scroll-spy menu + side rail.
  const ids = ['home', ...secs().map(s => s.id)].filter(Boolean), label = id => { const e = $('.eyebrow', $('#' + id)); return id === 'home' ? 'Home' : (e && e.textContent.split('/')[1] || id).trim(); };
  document.body.insertAdjacentHTML('beforeend', `<nav class="rail" aria-label="Page sections">${ids.map(id => `<a href="#${id}" aria-label="${label(id)}"><span>${label(id)}</span></a>`).join('')}</nav>`);
  const mark = id => $$('.rail a').forEach(a => a.getAttribute('href') === '#' + id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && mark(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
  ids.forEach(id => spy.observe($('#' + id)));

  // 5. Cursor-lit cards, 3D tilt on project cards, magnetic primary buttons (re-scanned because cards render late).
  const wire = () => $$('.proj,.stat,.t-card,.cv-card,.cmp-card,.counters,.research article').forEach(c => {
    if (c.dataset.wow) return; c.dataset.wow = 1; c.classList.add('glow'); c.insertAdjacentHTML('afterbegin', '<i class="gl" aria-hidden="true"></i>');
    if (calm || !fine) return;
    c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty('--cx', x + 'px'); c.style.setProperty('--cy', y + 'px');
      if (c.classList.contains('proj')) c.style.transform = `perspective(900px) rotateX(${((y / r.height) - .5) * -7}deg) rotateY(${((x / r.width) - .5) * 9}deg) translateY(-6px)`; });
    c.addEventListener('pointerleave', () => { c.style.transform = ''; });
  });
  wire(); new MutationObserver(wire).observe($('main'), { childList: true, subtree: true });
  if (!calm && fine) $$('.btn.primary').forEach(b => { b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .28}px)`; }); b.addEventListener('pointerleave', () => b.style.transform = ''); });
})();
