// Static site generator: shared header/footer partials duplicated into every page,
// relative links so the site works under any subpath (GitHub Pages /stephen-ramlogan-law/).
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './pages.mjs';
import { FIRM, AREAS, img } from './data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LIVE = 'https://werty573.github.io/stephen-ramlogan-law/';

const NAV = [
  { key: 'home', label: 'Home', href: '' },
  { key: 'about', label: 'About the Firm', href: 'about/' },
  { key: 'practice', label: 'Practice Areas', href: 'practice-areas/', sub: true },
  { key: 'approach', label: 'Our Approach', href: 'our-approach/' },
  { key: 'fees', label: 'Fees', href: 'fees/' },
  { key: 'faqs', label: 'FAQs', href: 'faqs/' },
  { key: 'contact', label: 'Contact', href: 'contact/' },
];

const logo = (p) => `<a class="brand" href="${p}" aria-label="${FIRM.name}, home">
  <span class="brand-mark" aria-hidden="true">SR</span>
  <span class="brand-text"><span class="brand-name">Stephen Ramlogan <em>&amp;</em> Co.</span><span class="brand-sub">Attorneys-at-Law</span></span>
</a>`;

function header(p, active, current) {
  const items = NAV.map(n => {
    const on = n.key === active ? ' aria-current="page"' : '';
    if (!n.sub) return `<li><a class="nav-link" href="${p}${n.href}"${on}>${n.label}</a></li>`;
    const sub = AREAS.map(a => `<li><a href="${p}practice-areas/${a.slug}/"${current === a.slug ? ' aria-current="page"' : ''}><i class="ph-light ${a.icon}" aria-hidden="true"></i><span><strong>${a.name}</strong><small>${a.short}</small></span></a></li>`).join('');
    return `<li class="has-drop">
      <a class="nav-link" href="${p}${n.href}"${on}>${n.label}</a>
      <button class="drop-toggle" type="button" aria-expanded="false" aria-label="Show practice areas"><i class="ph-light ph-caret-down" aria-hidden="true"></i></button>
      <div class="drop"><ul>${sub}</ul>
        <a class="drop-all" href="${p}practice-areas/">All practice areas <i class="ph-light ph-arrow-right" aria-hidden="true"></i></a></div>
    </li>`;
  }).join('');
  const mob = NAV.map(n => {
    if (!n.sub) return `<li><a href="${p}${n.href}"${n.key === active ? ' aria-current="page"' : ''}>${n.label}</a></li>`;
    return `<li class="m-group"><div class="m-row"><a href="${p}${n.href}"${n.key === active ? ' aria-current="page"' : ''}>${n.label}</a><button type="button" class="m-toggle" aria-expanded="false" aria-label="Show practice areas"><i class="ph-light ph-plus" aria-hidden="true"></i></button></div>
      <ul class="m-sub">${AREAS.map(a => `<li><a href="${p}practice-areas/${a.slug}/">${a.name}</a></li>`).join('')}</ul></li>`;
  }).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap topbar-in">
  <ul class="topbar-info">
    <li><i class="ph-light ph-phone" aria-hidden="true"></i><a href="tel:${FIRM.tel}">${FIRM.phone}</a></li>
    <li class="hide-sm"><i class="ph-light ph-map-pin" aria-hidden="true"></i>${FIRM.street}, San Fernando</li>
    <li><i class="ph-light ph-clock" aria-hidden="true"></i><span><span class="hide-xs">Mon to Sat, </span>8 am to 4 pm</span><span class="open-pill hide-xs" data-open-status hidden></span></li>
  </ul>
  <button class="theme-toggle" type="button" aria-label="Switch to dark theme"><i class="ph-light ph-moon" aria-hidden="true"></i><span class="hide-sm" data-theme-label>Dark</span></button>
</div></div>
<header class="site-header">
  <div class="wrap header-in">
    ${logo(p)}
    <nav class="main-nav" aria-label="Main"><ul>${items}</ul></nav>
    <a class="btn btn-ink header-cta" href="${p}contact/#consultation">Request a consultation</a>
    <button class="burger" type="button" aria-expanded="false" aria-controls="drawer" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
</header>
<div class="drawer" id="drawer" hidden>
  <nav aria-label="Mobile"><ul class="m-nav">${mob}</ul></nav>
  <div class="drawer-foot">
    <a class="btn btn-ink btn-block" href="${p}contact/#consultation">Request a consultation</a>
    <a class="btn btn-line btn-block" href="tel:${FIRM.tel}"><i class="ph-light ph-phone" aria-hidden="true"></i>Call ${FIRM.phone}</a>
  </div>
</div>`;
}

function ctaBand(p) {
  return `<section class="cta-band" aria-labelledby="cta-h">
  <div class="wrap cta-in reveal">
    <div>
      <h2 id="cta-h">Talk to the firm about your matter.</h2>
      <p>Consultations are by appointment at Gordon Street, San Fernando. Call during office hours or send a request and the office will contact you.</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-paper" href="${p}contact/#consultation">Request a consultation <span class="btn-ic"><i class="ph-light ph-arrow-right" aria-hidden="true"></i></span></a>
      <a class="cta-phone" href="tel:${FIRM.tel}"><i class="ph-light ph-phone" aria-hidden="true"></i>${FIRM.phone}</a>
    </div>
  </div>
</section>`;
}

function footer(p) {
  return `<footer class="site-footer">
  <div class="wrap foot-grid">
    <div class="foot-about">
      ${logo(p)}
      <p>A San Fernando law practice handling civil, criminal, family, land and conveyancing, and wills and estates matters for clients across South Trinidad.</p>
    </div>
    <div>
      <h3>Practice areas</h3>
      <ul>${AREAS.map(a => `<li><a href="${p}practice-areas/${a.slug}/">${a.name}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h3>The firm</h3>
      <ul>
        <li><a href="${p}about/">About the Firm</a></li>
        <li><a href="${p}our-approach/">Our Approach</a></li>
        <li><a href="${p}fees/">Fees &amp; Consultations</a></li>
        <li><a href="${p}faqs/">FAQs</a></li>
        <li><a href="${p}contact/">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3>Visit or call</h3>
      <ul class="foot-contact">
        <li><i class="ph-light ph-map-pin" aria-hidden="true"></i><span>${FIRM.address.replace(', ', ',<br>')}</span></li>
        <li><i class="ph-light ph-phone" aria-hidden="true"></i><a href="tel:${FIRM.tel}">${FIRM.phone}</a></li>
        <li><i class="ph-light ph-clock" aria-hidden="true"></i><span>Monday to Saturday<br>8:00 am to 4:00 pm<br>Sunday closed</span></li>
      </ul>
    </div>
  </div>
  <div class="wrap foot-legal">
    <p><strong>Disclaimer.</strong> The content of this website is general information about the law of Trinidad and Tobago and is not legal advice. Reading it, calling the office or sending a request through this site does not create an attorney-client relationship. Please do not send confidential details until the firm has confirmed it can act for you.</p>
  </div>
  <div class="wrap foot-bottom">
    <p>&copy; <span data-year>2026</span> ${FIRM.name}</p>
    <p>Concept website by Portside Digital. Details to be confirmed by the firm.</p>
  </div>
</footer>
<nav class="dock" aria-label="Quick contact">
  <a href="tel:${FIRM.tel}"><i class="ph-light ph-phone" aria-hidden="true"></i>Call</a>
  <a href="${p}contact/#consultation" class="dock-main"><i class="ph-light ph-calendar-check" aria-hidden="true"></i>Consultation</a>
</nav>`;
}

function banner(p, pg) {
  const crumbs = [`<li><a href="${p}">Home</a></li>`].concat((pg.crumbs || []).map(([l, h]) => `<li><a href="${p}${h}">${l}</a></li>`), [`<li aria-current="page">${pg.crumb || pg.h1}</li>`]).join('');
  return `<section class="banner" style="--bg:url('${img(pg.banner, 1800)}')">
  <div class="wrap banner-in">
    <nav aria-label="Breadcrumb"><ol class="crumbs">${crumbs}</ol></nav>
    <h1>${pg.h1}</h1>
    ${pg.lede ? `<p>${pg.lede}</p>` : ''}
  </div>
</section>`;
}

function page(pg) {
  const depth = pg.path === '' ? 0 : pg.path.split('/').filter(Boolean).length;
  const p = pg.abs ? '/stephen-ramlogan-law/' : depth === 0 ? './' : '../'.repeat(depth);
  const url = LIVE + pg.path;
  const body = pg.body(p);
  const ld = pg.path === '' ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'LegalService', name: FIRM.name, telephone: '+1-868-322-5551', address: { '@type': 'PostalAddress', streetAddress: 'Nos. 16-18 Gordon Street', addressLocality: 'San Fernando', addressCountry: 'TT' }, geo: { '@type': 'GeoCoordinates', latitude: 10.278068, longitude: -61.466183 }, openingHours: 'Mo-Sa 08:00-16:00', url: LIVE, areaServed: 'Trinidad and Tobago', knowsAbout: AREAS.map(a => a.name) })}</script>` : '';
  return `<!doctype html>
<html lang="en-TT" class="no-js" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${pg.title}</title>
<meta name="description" content="${pg.desc}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#F4F5F2">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${pg.title}">
<meta property="og:description" content="${pg.desc}">
<meta property="og:image" content="${img('hero', 1200)}&h=630">
<meta name="robots" content="noindex">
<script>document.documentElement.classList.remove("no-js");try{var t=localStorage.getItem('srl-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='3' fill='%2324427A'/%3E%3Ctext x='16' y='21.5' font-family='Georgia,serif' font-size='14' fill='%23F4F5F2' text-anchor='middle'%3ESR%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&display=swap">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css">
<link rel="stylesheet" href="${p}assets/site.css">
${ld}
</head>
<body class="pg-${pg.key}">
${header(p, pg.nav, pg.slug)}
<main id="main">
${pg.banner ? banner(p, pg) : ''}
${body}
${pg.noCta ? '' : ctaBand(p)}
</main>
${footer(p)}
<script src="${p}assets/site.js" defer></script>
</body>
</html>
`;
}

let n = 0;
for (const pg of PAGES) {
  const out = pg.file ? join(ROOT, pg.file) : join(ROOT, pg.path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(pg));
  n++;
}
console.log('built', n, 'pages');
