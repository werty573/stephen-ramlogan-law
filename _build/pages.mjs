import { FIRM, AREAS, img } from './data.mjs';

const ic = (n) => `<i class="ph-light ${n}" aria-hidden="true"></i>`;
const arrow = `<span class="btn-ic">${ic('ph-arrow-right')}</span>`;
const sfHill = (p) => `${p}assets/img/san-fernando-hill.jpg`;
const credit = `Photo: San Fernando Hill by Kalamazadkhan, <a href="https://commons.wikimedia.org/wiki/File:San_Fernando_Hill_-Trinidad_and_Tobago.jpg" rel="noopener">CC BY-SA 4.0</a>, via Wikimedia Commons`;

const accordion = (items, cls = '') => `<div class="accordion ${cls}">${items.map(([q, a, cat]) => `
  <details class="acc"${cat ? ` data-cat="${cat}"` : ''}><summary><span>${q}</span>${ic('ph-plus')}</summary><div class="acc-body"><p>${a}</p></div></details>`).join('')}
</div>`;

const hoursTable = `<table class="hours"><caption class="sr-only">Office hours</caption><tbody>
  ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d, i) => `<tr data-day="${i + 1}"><th scope="row">${d}</th><td>8:00 am to 4:00 pm</td></tr>`).join('')}
  <tr data-day="0"><th scope="row">Sunday</th><td>Closed</td></tr></tbody></table>`;

/* ---------------------------------------------------------------- HOME */
const home = {
  key: 'home', nav: 'home', path: '',
  title: 'Stephen Ramlogan & Co. | Attorneys-at-Law, San Fernando, Trinidad',
  desc: 'Attorneys-at-Law at Nos. 16-18 Gordon Street, San Fernando. Civil, criminal, family, land and conveyancing, and wills and estates. Call 868-322-5551.',
  body: (p) => `
<section class="hero">
  <img class="hero-img" src="${img('hero', 2000)}" srcset="${img('hero', 900)} 900w, ${img('hero', 1400)} 1400w, ${img('hero', 2000)} 2000w" sizes="100vw" alt="A law library with bound reports and marble busts" fetchpriority="high">
  <div class="wrap hero-in">
    <p class="eyebrow eyebrow-light">Attorneys-at-Law, San Fernando</p>
    <h1>Considered legal counsel, from Gordon Street.</h1>
    <p class="hero-sub">Civil, criminal, family, property and estate matters, explained plainly and handled with care for clients across South Trinidad.</p>
    <div class="hero-ctas">
      <a class="btn btn-paper" href="${p}contact/#consultation">Request a consultation ${arrow}</a>
      <a class="btn btn-ghost" href="tel:${FIRM.tel}">${ic('ph-phone')}Call ${FIRM.phone}</a>
    </div>
  </div>
</section>

<section class="infobar" aria-label="Contact essentials">
  <div class="wrap infobar-grid">
    <a class="info-box" href="tel:${FIRM.tel}">${ic('ph-phone')}<span><strong>Call the office</strong>${FIRM.phone}</span></a>
    <a class="info-box" href="${p}contact/#map">${ic('ph-map-pin')}<span><strong>Visit the firm</strong>Nos. 16-18 Gordon Street, San Fernando</span></a>
    <div class="info-box">${ic('ph-clock')}<span><strong>Office hours</strong>Mon to Sat, 8 am to 4 pm <em class="open-pill" data-open-status hidden></em></span></div>
  </div>
</section>

<section class="section intro">
  <div class="wrap intro-grid">
    <figure class="intro-fig reveal">
      <img src="${img('books', 1100)}" alt="Bound books and a fountain pen on a dark desk" loading="lazy" width="1100" height="1300">
    </figure>
    <div class="intro-copy reveal">
      <h2>A focused practice for the matters that shape people's lives.</h2>
      <p>${FIRM.name} is a San Fernando law practice, established in ${FIRM.est}. The firm acts for individuals, families and small businesses in disputes, criminal matters, family proceedings, property transactions and estates.</p>
      <p>Each matter is handled personally, with time taken to explain the law, the options and the likely costs before any step is taken.</p>
      <dl class="facts">
        <div><dt>Established</dt><dd>${FIRM.est}</dd></div>
        <div><dt>Practice areas</dt><dd>Five</dd></div>
        <div><dt>Consultations</dt><dd>By appointment</dd></div>
      </dl>
      <a class="text-link" href="${p}about/">About the firm ${ic('ph-arrow-right')}</a>
    </div>
  </div>
</section>

<section class="section practice-home" aria-labelledby="pa-h">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2 id="pa-h">Practice areas</h2>
      <a class="text-link" href="${p}practice-areas/">View all ${ic('ph-arrow-right')}</a>
    </div>
    <div class="bento">
      ${AREAS.map((a, i) => `<a class="tile ${i === 0 ? 'tile-lg' : ''} reveal" href="${p}practice-areas/${a.slug}/">
        <img src="${img(a.photo, i === 0 ? 1200 : 700)}" alt="" loading="lazy">
        <span class="tile-body">
          <span class="tile-ic">${ic(a.icon)}</span>
          <span class="tile-name">${a.name}</span>
          ${i === 0 ? `<span class="tile-text">${a.card}</span>` : `<span class="tile-text">${a.short}</span>`}
          <span class="tile-more">Read more ${ic('ph-arrow-right')}</span>
        </span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="section expect" aria-labelledby="ex-h">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2 id="ex-h">What to expect when you contact the firm</h2>
      <a class="text-link" href="${p}our-approach/">Our approach ${ic('ph-arrow-right')}</a>
    </div>
    <ol class="timeline">
      <li class="reveal"><span class="t-ic">${ic('ph-phone-call')}</span><h3>Call or write</h3><p>Tell the office briefly what the matter concerns. You will be offered an appointment.</p></li>
      <li class="reveal"><span class="t-ic">${ic('ph-chats-circle')}</span><h3>Meet in confidence</h3><p>A private first meeting to hear the facts, look at your documents and answer your questions.</p></li>
      <li class="reveal"><span class="t-ic">${ic('ph-file-text')}</span><h3>A clear plan and fee</h3><p>You are told the options, the likely next steps and how fees will be charged, before you commit.</p></li>
      <li class="reveal"><span class="t-ic">${ic('ph-seal-check')}</span><h3>Kept informed</h3><p>Your matter moves forward with regular updates and plain explanations at every stage.</p></li>
    </ol>
  </div>
</section>

<section class="section split-dual">
  <div class="wrap dual-grid">
    <div class="fees-panel reveal">
      <h2>Fees, explained before you commit.</h2>
      <p>Many conveyancing, will and document matters can be quoted as a fixed fee. Court matters are usually charged in stages. Either way, you will know how fees work before work begins.</p>
      <a class="btn btn-paper" href="${p}fees/">Fees &amp; consultations ${arrow}</a>
    </div>
    <div class="faq-peek reveal">
      <h2>Common questions</h2>
      ${accordion([
        ['Do I need an appointment?', 'Yes. Consultations are by appointment so that time can be set aside for your matter. Call the office or send a consultation request.'],
        ['Is what I tell the firm confidential?', 'Yes. Communications with your attorney for the purpose of legal advice are confidential and protected by legal professional privilege.'],
        ['What should I bring to the first meeting?', 'Identification and any documents connected to the matter: letters, contracts, deeds, court papers or photographs. A short written timeline helps too.'],
      ])}
      <a class="text-link" href="${p}faqs/">All FAQs ${ic('ph-arrow-right')}</a>
    </div>
  </div>
</section>

<section class="place" aria-labelledby="pl-h">
  <img src="${sfHill(p)}" alt="San Fernando Hill rising above the rooftops of San Fernando" loading="lazy">
  <div class="wrap place-in reveal">
    <h2 id="pl-h">In the heart of San Fernando.</h2>
    <p>The office is at Nos. 16-18 Gordon Street in central San Fernando, within reach of clients from across South Trinidad.</p>
    <a class="btn btn-paper" href="${p}contact/#map">Directions ${arrow}</a>
  </div>
  <p class="credit">${credit}</p>
</section>`,
};

/* ---------------------------------------------------------------- ABOUT */
const about = {
  key: 'about', nav: 'about', path: 'about/',
  title: 'About the Firm | Stephen Ramlogan & Co., San Fernando',
  desc: 'Stephen Ramlogan & Co. is a San Fernando law practice established in 2019 at Nos. 16-18 Gordon Street.',
  h1: 'About the firm', crumb: 'About the Firm', banner: 'shelf',
  lede: 'A San Fernando practice, established in 2019, built on personal attention and plain explanations.',
  body: (p) => `
<section class="section">
  <div class="wrap about-grid">
    <div class="prose reveal">
      <h2>A practice that knows its clients by name.</h2>
      <p class="lead">${FIRM.name} practises from Nos. 16-18 Gordon Street in San Fernando. The firm was established in ${FIRM.est} and acts for individuals, families and small businesses across South Trinidad.</p>
      <p>The practice covers the matters people most often need an attorney for: disputes that need resolving, criminal charges, separation and children, buying and transferring land, and planning for and administering estates.</p>
      <p>As a smaller firm, it can give each matter direct attention. You will know who is handling your file, how to reach the office and what is happening next.</p>
    </div>
    <aside class="glance reveal" aria-labelledby="gl-h">
      <h3 id="gl-h">The firm at a glance</h3>
      <dl>
        <div><dt>${ic('ph-buildings')}Office</dt><dd>Nos. 16-18 Gordon Street, San Fernando</dd></div>
        <div><dt>${ic('ph-calendar-blank')}Established</dt><dd>${FIRM.est}</dd></div>
        <div><dt>${ic('ph-clock')}Hours</dt><dd>Monday to Saturday, 8:00 am to 4:00 pm</dd></div>
        <div><dt>${ic('ph-phone')}Telephone</dt><dd><a href="tel:${FIRM.tel}">${FIRM.phone}</a></dd></div>
        <div><dt>${ic('ph-briefcase')}Practice</dt><dd>Civil, criminal, family, land and conveyancing, wills and estates</dd></div>
      </dl>
    </aside>
  </div>
</section>

<section class="section principal">
  <div class="wrap principal-grid">
    <div class="principal-mark reveal" aria-hidden="true"><span>SR</span></div>
    <div class="reveal">
      <h2>Stephen Ramlogan</h2>
      <p class="role">Attorney-at-Law, Principal</p>
      <p>The firm bears the name of its principal, Stephen Ramlogan.</p>
      <p class="placeholder">${ic('ph-pencil-simple-line')}<span>Biography to be supplied by the firm: year of admission, education, court experience and professional memberships.</span></p>
    </div>
  </div>
</section>

<section class="section values" aria-labelledby="va-h">
  <div class="wrap">
    <h2 id="va-h" class="reveal">How the firm works</h2>
    <div class="values-grid">
      <article class="reveal">${ic('ph-chat-circle-text')}<h3>Plain explanations</h3><p>The law is explained in everyday language, with the options and risks set out so you can decide.</p></article>
      <article class="reveal">${ic('ph-lock-key')}<h3>Confidentiality</h3><p>What you share stays between you and the firm, protected by legal professional privilege.</p></article>
      <article class="reveal">${ic('ph-receipt')}<h3>Clarity on fees</h3><p>You are told how fees will be charged, and what government fees apply, before work begins.</p></article>
      <article class="reveal">${ic('ph-calendar-check')}<h3>Steady communication</h3><p>You are kept informed as your matter moves, and told before each hearing what to expect.</p></article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap wide-fig reveal">
    <img src="${sfHill(p)}" alt="San Fernando Hill above the city" loading="lazy">
    <p class="credit-below">${credit}</p>
  </div>
</section>`,
};

/* ---------------------------------------------------------------- PRACTICE INDEX */
const practiceIndex = {
  key: 'practice', nav: 'practice', path: 'practice-areas/',
  title: 'Practice Areas | Stephen Ramlogan & Co., San Fernando',
  desc: 'Civil litigation, criminal law, family law, land and conveyancing, and wills and estates in San Fernando, Trinidad.',
  h1: 'Practice areas', crumb: 'Practice Areas', banner: 'justice',
  lede: 'Five areas of practice, each covering the matters clients in South Trinidad most often bring to an attorney.',
  body: (p) => `
<section class="section">
  <div class="wrap">
    <div class="area-list">
      ${AREAS.map((a, i) => `<article class="area-row reveal">
        <a class="area-fig" href="${p}practice-areas/${a.slug}/" tabindex="-1" aria-hidden="true"><img src="${img(a.photo, 900)}" alt="" loading="lazy"></a>
        <div class="area-copy">
          <span class="area-ic">${ic(a.icon)}</span>
          <h2><a href="${p}practice-areas/${a.slug}/">${a.name}</a></h2>
          <p>${a.card}</p>
          <ul class="chips">${a.handles.slice(0, 4).map(h => `<li>${h}</li>`).join('')}</ul>
          <a class="text-link" href="${p}practice-areas/${a.slug}/">${a.name} ${ic('ph-arrow-right')}</a>
        </div>
      </article>`).join('')}
    </div>
    <div class="unsure reveal">
      ${ic('ph-question')}
      <div><h2>Not sure which area your matter falls under?</h2><p>Many matters touch more than one area. Call the office and describe it briefly, and you will be pointed in the right direction.</p></div>
      <a class="btn btn-ink" href="tel:${FIRM.tel}">${ic('ph-phone')}${FIRM.phone}</a>
    </div>
  </div>
</section>`,
};

/* ---------------------------------------------------------------- PRACTICE AREA PAGES */
const sidebar = (p, a) => `<aside class="sidebar">
  <div class="side-box">
    <h2>Practice areas</h2>
    <ul class="side-nav">${AREAS.map(x => `<li><a href="${p}practice-areas/${x.slug}/"${x.slug === a.slug ? ' aria-current="page"' : ''}>${ic(x.icon)}${x.name}${ic('ph-caret-right')}</a></li>`).join('')}</ul>
  </div>
  <div class="side-box side-consult">
    <h2>Request a consultation</h2>
    <p>Speak with the firm about your ${a.name.toLowerCase()} matter. Appointments are available Monday to Saturday.</p>
    <a class="btn btn-paper btn-block" href="${p}contact/?area=${a.slug}#consultation">Request a consultation</a>
    <a class="side-phone" href="tel:${FIRM.tel}">${ic('ph-phone')}${FIRM.phone}</a>
  </div>
  <div class="side-box">
    <h2>Office hours</h2>
    ${hoursTable}
  </div>
</aside>`;

const areaPages = AREAS.map(a => ({
  key: 'area', nav: 'practice', path: `practice-areas/${a.slug}/`, slug: a.slug,
  title: `${a.name} | Stephen Ramlogan & Co., San Fernando`,
  desc: `${a.lede} ${FIRM.name}, Gordon Street, San Fernando. Call ${FIRM.phone}.`,
  h1: a.name, banner: a.photo, lede: a.lede,
  crumbs: [['Practice Areas', 'practice-areas/']],
  body: (p) => `
<section class="section">
  <div class="wrap with-sidebar">
    <article class="area-main">
      <div class="prose reveal">
        ${a.intro.map((t, i) => `<p${i === 0 ? ' class="lead"' : ''}>${t}</p>`).join('')}
      </div>
      <h2 class="reveal">Matters the firm handles</h2>
      <ul class="checks reveal">${a.handles.map(h => `<li>${ic('ph-check')}${h}</li>`).join('')}</ul>
      <figure class="area-photo reveal"><img src="${img(a.photo, 1300)}" alt="" loading="lazy"></figure>
      <h2 class="reveal">How a matter usually proceeds</h2>
      <ol class="steps reveal">${a.steps.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
      <div class="notice reveal">${ic('ph-warning-circle')}<p>${a.note}</p></div>
      <div class="bring reveal">
        <h2>What to bring to your first meeting</h2>
        <ul>${a.bring.map(b => `<li>${ic('ph-file-text')}${b}</li>`).join('')}</ul>
      </div>
      <h2 class="reveal">Common questions</h2>
      <div class="reveal">${accordion(a.faqs)}</div>
    </article>
    ${sidebar(p, a)}
  </div>
</section>`,
}));

/* ---------------------------------------------------------------- APPROACH */
const approach = {
  key: 'approach', nav: 'approach', path: 'our-approach/',
  title: 'Our Approach | What to Expect | Stephen Ramlogan & Co.',
  desc: 'What to expect when you instruct Stephen Ramlogan & Co.: the first meeting, fees, communication and confidentiality.',
  h1: 'Our approach', crumb: 'Our Approach', banner: 'meeting',
  lede: 'What working with the firm looks like, from the first phone call to the close of your matter.',
  body: (p) => `
<section class="section">
  <div class="wrap narrow prose reveal">
    <p class="lead">Legal problems are stressful enough without uncertainty about the process. This page sets out what you can expect when you bring a matter to the firm.</p>
  </div>
</section>
<section class="section journey" aria-labelledby="jr-h">
  <div class="wrap">
    <h2 id="jr-h" class="reveal">From first call to resolution</h2>
    <ol class="journey-list">
      <li class="reveal"><div class="j-ic">${ic('ph-phone-call')}</div><div><h3>Your first call</h3><p>The office takes your name, a contact number and a short description of the matter, then offers you an appointment. If the matter is urgent, such as an arrest or a court date this week, say so.</p></div></li>
      <li class="reveal"><div class="j-ic">${ic('ph-identification-card')}</div><div><h3>A conflict check</h3><p>Before advising, the firm confirms it is not already acting for anyone on the other side. This is why you may be asked for the names of other parties.</p></div></li>
      <li class="reveal"><div class="j-ic">${ic('ph-chats-circle')}</div><div><h3>The consultation</h3><p>A private meeting to go through the facts and your documents. You will leave knowing where you stand, what the options are, and what you would need to decide.</p></div></li>
      <li class="reveal"><div class="j-ic">${ic('ph-file-text')}</div><div><h3>Instructions and fees</h3><p>If you decide to proceed, the scope of the work and how fees will be charged are confirmed with you before work starts.</p></div></li>
      <li class="reveal"><div class="j-ic">${ic('ph-arrows-clockwise')}</div><div><h3>Working on your matter</h3><p>Letters, documents and court steps are explained before they happen. You receive copies of important documents and updates when something changes.</p></div></li>
      <li class="reveal"><div class="j-ic">${ic('ph-seal-check')}</div><div><h3>Closing your file</h3><p>When the matter ends, you are told the outcome, what it means for you, and where your original documents are kept.</p></div></li>
    </ol>
  </div>
</section>
<section class="section">
  <div class="wrap dual-grid">
    <div class="bring bring-lg reveal">
      <h2>Bring to your first meeting</h2>
      <ul>
        <li>${ic('ph-identification-card')}A valid form of identification</li>
        <li>${ic('ph-files')}Every document connected to the matter, even ones that seem minor</li>
        <li>${ic('ph-list-numbers')}A short timeline of events with dates</li>
        <li>${ic('ph-users')}Names and contact details of the other people involved</li>
        <li>${ic('ph-note-pencil')}A list of the questions you want answered</li>
      </ul>
    </div>
    <div class="confidential reveal">
      ${ic('ph-lock-key')}
      <h2>Confidentiality</h2>
      <p>What you tell your attorney for the purpose of legal advice is confidential and protected by legal professional privilege. Staff at the firm are bound by the same duty.</p>
      <p>Please use the consultation form only for a brief description. Detailed or sensitive information is best shared in person.</p>
      <a class="text-link" href="${p}contact/#consultation">Request a consultation ${ic('ph-arrow-right')}</a>
    </div>
  </div>
</section>`,
};

/* ---------------------------------------------------------------- FEES */
const fees = {
  key: 'fees', nav: 'fees', path: 'fees/',
  title: 'Fees & Consultations | Stephen Ramlogan & Co., San Fernando',
  desc: 'How legal fees, consultations and government charges work at Stephen Ramlogan & Co., San Fernando.',
  h1: 'Fees & consultations', crumb: 'Fees & Consultations', banner: 'paperwork',
  lede: 'How fees are charged, what affects the cost of a matter, and which charges are paid to the State.',
  body: (p) => `
<section class="section">
  <div class="wrap with-sidebar sidebar-left-sm">
    <article class="area-main">
      <div class="prose reveal">
        <p class="lead">Every matter is different, so the firm does not publish a single price list. What it does promise is clarity: before work begins you will know how fees will be charged and roughly what to expect.</p>
      </div>
      <div class="fee-types">
        <article class="fee-card reveal"><span class="fee-ic">${ic('ph-tag')}</span><h2>Fixed fees</h2><p>Often available for defined work such as wills, powers of attorney, deeds of gift and many sale or purchase transactions.</p><p class="fee-eg">Typical for: Wills &amp; Estates, Land &amp; Conveyancing</p></article>
        <article class="fee-card reveal"><span class="fee-ic">${ic('ph-stack')}</span><h2>Staged fees</h2><p>Court matters are usually charged stage by stage, so you know the cost of the next step before it is taken.</p><p class="fee-eg">Typical for: Civil, Criminal and Family matters</p></article>
        <article class="fee-card reveal"><span class="fee-ic">${ic('ph-bank')}</span><h2>Government fees</h2><p>Stamp duty, registration fees and court filing fees are paid to the State. They are separate from legal fees and shown separately.</p><p class="fee-eg">Paid on your behalf and itemised</p></article>
      </div>
      <h2 class="reveal">The first consultation</h2>
      <div class="consult-box reveal">
        <dl>
          <div><dt>Format</dt><dd>In person at Gordon Street, by appointment</dd></div>
          <div><dt>Length</dt><dd><span class="tbc">To be confirmed by the firm</span></dd></div>
          <div><dt>Consultation fee</dt><dd><span class="tbc">To be confirmed by the firm</span></dd></div>
          <div><dt>Payment</dt><dd><span class="tbc">Accepted methods to be confirmed</span></dd></div>
        </dl>
      </div>
      <h2 class="reveal">What affects the cost of a matter</h2>
      <ul class="checks reveal">
        <li>${ic('ph-check')}How complex the facts and the law are</li>
        <li>${ic('ph-check')}Whether the other side contests the matter</li>
        <li>${ic('ph-check')}How many court hearings are needed</li>
        <li>${ic('ph-check')}The value of the property or claim involved</li>
        <li>${ic('ph-check')}Urgency and the time available</li>
        <li>${ic('ph-check')}The documents and searches required</li>
      </ul>
      <div class="notice reveal">${ic('ph-info')}<p>If you cannot afford an attorney, you may qualify for help from the <strong>Legal Aid and Advisory Authority</strong> of Trinidad and Tobago, which assists eligible people in certain criminal, family and civil matters.</p></div>
    </article>
    <aside class="sidebar">
      <div class="side-box side-consult">
        <h2>Ask for a fee estimate</h2>
        <p>Describe your matter briefly and the office will explain how it would be charged.</p>
        <a class="btn btn-paper btn-block" href="${p}contact/#consultation">Request a consultation</a>
        <a class="side-phone" href="tel:${FIRM.tel}">${ic('ph-phone')}${FIRM.phone}</a>
      </div>
      <div class="side-box"><h2>Office hours</h2>${hoursTable}</div>
    </aside>
  </div>
</section>`,
};

/* ---------------------------------------------------------------- FAQS */
const FAQS = [
  ['general', 'Do I need an appointment?', 'Yes. Consultations are by appointment so that time is set aside for your matter. Call the office on 868-322-5551 or send a consultation request.'],
  ['general', 'What are the office hours?', 'Monday to Saturday, 8:00 am to 4:00 pm. The office is closed on Sundays and public holidays.'],
  ['general', 'Is what I tell the firm confidential?', 'Yes. Communications with your attorney for the purpose of legal advice are confidential and protected by legal professional privilege.'],
  ['general', 'Does contacting the firm make it my attorney?', 'No. The firm acts for you once it has confirmed there is no conflict and you have agreed the scope of the work. Until then, please share only a brief description.'],
  ['fees', 'How much will my matter cost?', 'It depends on the type and complexity of the matter. Many document and property matters can be quoted as a fixed fee, while court matters are usually charged in stages. You will be told before work begins.'],
  ['fees', 'Are stamp duty and registration fees included?', 'No. These are government charges, separate from legal fees. They are shown separately so you can see exactly what is paid to the State.'],
  ['fees', 'What if I cannot afford an attorney?', 'You may be eligible for assistance from the Legal Aid and Advisory Authority of Trinidad and Tobago, which helps eligible people in certain criminal, family and civil matters.'],
  ['court', 'Will I have to go to court?', 'Not always. Many civil and family matters are resolved by agreement. Where court is needed, you will be told what to expect before every hearing.'],
  ['court', 'I have been served with court papers. What now?', 'Contact an attorney promptly. Court documents carry deadlines, and missing them can lead to orders being made without you being heard.'],
  ['court', 'A family member has been arrested. How can the firm help?', 'Call the office as early as possible with the person\'s name and the police station. A detained person has the right to communicate with an attorney.'],
  ['property', 'What is the difference between RPA title and common law title?', 'Land under the Real Property Act has a certificate of title issued by the State. Common law title is proved through a chain of deeds recorded at the Registrar General\'s Department.'],
  ['property', 'Do I need a lawyer to buy a house?', 'It is strongly advisable. An attorney checks the title, prepares the deed and attends to stamping and registration so the property is properly transferred to you.'],
  ['estates', 'What happens if someone dies without a will?', 'The estate passes according to rules set by law. Usually someone must apply to the High Court for letters of administration before property can be dealt with.'],
  ['estates', 'What is the difference between probate and letters of administration?', 'Probate is granted to the executor named in a will. Letters of administration are granted when there is no will, or no executor able to act.'],
];
const faqs = {
  key: 'faqs', nav: 'faqs', path: 'faqs/',
  title: 'Frequently Asked Questions | Stephen Ramlogan & Co.',
  desc: 'Answers to common questions about appointments, fees, court, property and estates at Stephen Ramlogan & Co., San Fernando.',
  h1: 'Frequently asked questions', crumb: 'FAQs', banner: 'shelfDark',
  lede: 'Short answers to the questions clients ask most often. For advice on your own matter, request a consultation.',
  body: (p) => `
<section class="section">
  <div class="wrap faq-layout">
    <div class="faq-tools reveal">
      <label class="search" for="faq-q">${ic('ph-magnifying-glass')}<span class="sr-only">Search questions</span><input id="faq-q" type="search" placeholder="Search questions" autocomplete="off"></label>
      <div class="tabs" role="group" aria-label="Filter by topic">
        ${[['all', 'All'], ['general', 'General'], ['fees', 'Fees'], ['court', 'Court'], ['property', 'Property'], ['estates', 'Estates']].map(([k, l], i) => `<button type="button" class="tab" data-cat="${k}" aria-pressed="${i === 0}">${l}</button>`).join('')}
      </div>
    </div>
    <div class="reveal">${accordion(FAQS.map(([c, q, a]) => [q, a, c]), 'faq-acc')}</div>
    <div class="faq-empty" hidden>${ic('ph-chat-circle-dots')}<p>No questions match that search. Call the office on <a href="tel:${FIRM.tel}">${FIRM.phone}</a> and ask directly.</p></div>
  </div>
</section>`,
};

/* ---------------------------------------------------------------- CONTACT */
const contact = {
  key: 'contact', nav: 'contact', path: 'contact/', noCta: true,
  title: 'Contact & Consultations | Stephen Ramlogan & Co., San Fernando',
  desc: 'Request a consultation with Stephen Ramlogan & Co., Nos. 16-18 Gordon Street, San Fernando. Call 868-322-5551.',
  h1: 'Contact the firm', crumb: 'Contact', banner: 'signing',
  lede: 'Call during office hours or send a consultation request. The office will contact you to arrange a time.',
  body: (p) => `
<section class="section" id="consultation">
  <div class="wrap contact-grid">
    <div class="form-wrap reveal">
      <h2>Request a consultation</h2>
      <p class="form-intro">Please keep the description brief. Do not include confidential details until the firm confirms it can act for you.</p>
      <form class="consult-form" novalidate>
        <div class="row2">
          <div class="field"><label for="f-name">Full name</label><input id="f-name" name="name" autocomplete="name" required><p class="err" id="e-name">Please enter your name.</p></div>
          <div class="field"><label for="f-phone">Phone number</label><input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="868 000 0000" required><p class="err" id="e-phone">Please enter a phone number with at least 7 digits.</p></div>
        </div>
        <div class="field"><label for="f-email">Email <span class="opt">(optional)</span></label><input id="f-email" name="email" type="email" autocomplete="email"><p class="err" id="e-email">Please check the email address.</p></div>
        <fieldset class="field"><legend>What is the matter about?</legend>
          <div class="pick">${AREAS.map(a => `<label><input type="radio" name="area" value="${a.slug}" required><span>${ic(a.icon)}${a.name}</span></label>`).join('')}<label><input type="radio" name="area" value="other"><span>${ic('ph-question')}Not sure</span></label></div>
          <p class="err" id="e-area">Please choose the closest area.</p>
        </fieldset>
        <div class="field"><label for="f-other">Names of any other parties involved <span class="opt">(optional)</span></label><input id="f-other" name="other"><p class="help">Used only to check the firm is not already acting for the other side.</p></div>
        <div class="field"><label for="f-msg">Brief description</label><textarea id="f-msg" name="msg" rows="4" maxlength="500" required></textarea><p class="help"><span data-count>0</span> / 500 characters</p><p class="err" id="e-msg">Please add a short description.</p></div>
        <div class="row2">
          <fieldset class="field"><legend>Preferred contact</legend><div class="seg"><label><input type="radio" name="via" value="phone" checked><span>Phone</span></label><label><input type="radio" name="via" value="email"><span>Email</span></label></div></fieldset>
          <div class="field"><label for="f-when">Best time to call</label><select id="f-when" name="when"><option>Any time in office hours</option><option>Morning, 8 am to 12 pm</option><option>Afternoon, 12 pm to 4 pm</option><option>Saturday</option></select></div>
        </div>
        <label class="consent"><input type="checkbox" name="ok" required><span>I understand that sending this request does not make the firm my attorney.</span></label>
        <p class="err" id="e-ok">Please confirm to continue.</p>
        <button class="btn btn-ink btn-submit" type="submit">Send request ${arrow}</button>
        <p class="demo-note">${ic('ph-info')}Concept site: this form shows a confirmation but does not send anything.</p>
      </form>
      <div class="confirm" hidden tabindex="-1">
        <span class="confirm-ic">${ic('ph-seal-check')}</span>
        <h2>Request received</h2>
        <p>Thank you, <strong data-c-name></strong>. Your reference is <strong data-c-ref></strong>.</p>
        <ol class="next">
          <li>The office will contact you by <span data-c-via></span> within office hours to arrange a consultation.</li>
          <li>Please have any documents about your <span data-c-area></span> matter ready.</li>
          <li>If your matter is urgent, call <a href="tel:${FIRM.tel}">${FIRM.phone}</a>.</li>
        </ol>
        <button type="button" class="btn btn-line" data-reset>Send another request</button>
      </div>
    </div>
    <aside class="contact-side">
      <div class="side-box reveal">
        <h2>Visit or call</h2>
        <ul class="c-list">
          <li>${ic('ph-map-pin')}<span><strong>Office</strong>${FIRM.address}</span></li>
          <li>${ic('ph-phone')}<span><strong>Telephone</strong><a href="tel:${FIRM.tel}">${FIRM.phone}</a></span></li>
          <li>${ic('ph-envelope-simple')}<span><strong>Email</strong><span class="tbc">To be confirmed by the firm</span></span></li>
        </ul>
      </div>
      <div class="side-box reveal">
        <h2>Office hours <span class="open-pill" data-open-status hidden></span></h2>
        ${hoursTable}
        <p class="small">Closed on public holidays.</p>
      </div>
    </aside>
  </div>
</section>
<section class="map-sec" id="map" aria-label="Map">
  <iframe title="Map showing Gordon Street, San Fernando" src="https://maps.google.com/maps?q=10.278068,-61.466183&z=17&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <div class="wrap"><a class="btn btn-ink map-btn" href="https://www.google.com/maps/dir/?api=1&destination=10.278068,-61.466183" target="_blank" rel="noopener">${ic('ph-navigation-arrow')}Get directions</a></div>
</section>`,
};

/* ---------------------------------------------------------------- 404 */
const notFound = {
  key: '404', nav: '', path: '', file: '404.html', abs: true, noCta: true,
  title: 'Page not found | Stephen Ramlogan & Co.',
  desc: 'The page you were looking for could not be found.',
  body: (p) => `<section class="section nf"><div class="wrap narrow"><h1>Page not found</h1><p>The page may have moved. Try the links below, or call the office on <a href="tel:${FIRM.tel}">${FIRM.phone}</a>.</p><div class="hero-ctas"><a class="btn btn-ink" href="${p}">Home</a><a class="btn btn-line" href="${p}practice-areas/">Practice areas</a><a class="btn btn-line" href="${p}contact/">Contact</a></div></div></section>`,
};

export const PAGES = [home, about, practiceIndex, ...areaPages, approach, fees, faqs, contact, notFound];
