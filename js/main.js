/* =============================================================
   DOLCE CHIARA — script condiviso
   Tutti i dati del negozio sono qui in alto: per aggiornare orari,
   contatti o prodotti basta modificare questa sezione.
   ============================================================= */

const NEGOZIO = {
  nome: 'Dolce Chiara',
  telefono: '+393665488260',
  telefonoVisibile: '+39 366 548 8260',
  whatsapp: '393665488260',
  email: 'studiomenny.web@gmail.com',
  indirizzo: 'Via delle Rose 5',
  citta: '37054 Nogara (VR)',
  mappa: 'https://www.google.com/maps?q=Nogara+VR&output=embed',
  mappaLink: 'https://www.google.com/maps/search/?api=1&query=Nogara+VR'
};

/* Orari: 0 = domenica ... 6 = sabato. Ore in formato decimale (15.5 = 15:30) */
const ORARI = {
  0: [[7.5, 13]],
  1: [],
  2: [],
  3: [[7, 13], [15.5, 19.5]],
  4: [[7, 13], [15.5, 19.5]],
  5: [[7, 13], [15.5, 19.5]],
  6: [[7, 19.5]]
};
const GIORNI = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];
const MESI = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

const PRODOTTI = [
  {id:'cornetto', nome:'Cornetto classico', cat:'colazione', img:'cornetto_classico', desc:'Sfogliato al burro, lucidato e sfornato ogni mattina. Vuoto o farcito al momento.', all:['Glutine','Uova','Latte']},
  {id:'cornetto-marmellata', nome:'Cornetto alla marmellata', cat:'colazione', img:'cornetto_alla_marmellata', desc:'Farcito con confettura di frutti rossi, albicocca o ciliegia.', all:['Glutine','Uova','Latte']},
  {id:'cornetto-nocciola', nome:'Cornetto alla crema di nocciole', cat:'colazione', img:'cornetto_alla_nutella', desc:'Morbido e generoso, riempito di crema alla nocciola calda.', all:['Glutine','Uova','Latte','Frutta a guscio']},
  {id:'cornetto-crema', nome:'Cornetto alla crema', cat:'colazione', img:'colazione', desc:'Con crema pasticcera e zucchero a velo: il preferito col cappuccino al tavolino.', all:['Glutine','Uova','Latte']},
  {id:'pangoccioli', nome:'Pangoccioli', cat:'colazione', img:'pangoccioli', desc:'Panini dolci soffici con gocce di cioccolato, ottimi anche per la merenda.', all:['Glutine','Uova','Latte']},
  {id:'ciambella', nome:'Ciambella allo zucchero', cat:'colazione', img:'ciambella_zucchero', desc:'Fritta al momento e passata nello zucchero semolato.', all:['Glutine','Uova','Latte']},
  {id:'donuts', nome:'Donuts glassate', cat:'colazione', img:'donuts', desc:'Glassa al cioccolato, alla fragola o con granella: le preferite dai più piccoli.', all:['Glutine','Uova','Latte','Frutta a guscio']},
  {id:'bigne', nome:'Bignè al cioccolato', cat:'pasticceria', img:'bigne_cioccolato', desc:'Pasta choux ripiena di crema e glassa lucida al cioccolato fondente.', all:['Glutine','Uova','Latte']},
  {id:'frolla', nome:'Pasticcini di frolla', cat:'pasticceria', img:'pasticcini_di_frolla', desc:'Frollini montati alla siringa, con amarena o intinti nel cioccolato.', all:['Glutine','Uova','Latte']},
  {id:'frutta', nome:'Tartellette alla frutta', cat:'pasticceria', img:'pasticcini_frutta', desc:'Frolla, crema pasticcera e frutta fresca di stagione.', all:['Glutine','Uova','Latte']},
  {id:'macarons', nome:'Macarons', cat:'pasticceria', img:'macarons', desc:'Gusci alle mandorle in colori e gusti che cambiano con le stagioni.', all:['Uova','Latte','Frutta a guscio']},
  {id:'cookies', nome:'Mini cookies al cioccolato', cat:'pasticceria', img:'minicookies_al_cioccolato', desc:'Piccoli, scuri e morbidi dentro, pieni di gocce di cioccolato.', all:['Glutine','Uova','Latte']},
  {id:'crostatine', nome:'Crostatine alla marmellata', cat:'pasticceria', img:'crostatine_marmellata', desc:'Frolla friabile a grata e confettura: la merenda di una volta.', all:['Glutine','Uova','Latte']},
  {id:'assortita', nome:'Pasticceria assortita', cat:'pasticceria', img:'vetrina_mista', desc:'Cannoli, sfogliatelle, tartellette e mignon: la vetrina completa, anche a vassoio.', all:['Glutine','Uova','Latte','Frutta a guscio']},
  {id:'tiramisu', nome:'Torta tiramisù', cat:'torte', img:'torta_tiramisu', desc:'Savoiardi, caffè e crema al mascarpone, spolverata di cacao amaro.', all:['Glutine','Uova','Latte']},
  {id:'redvelvet', nome:'Red velvet', cat:'torte', img:'torta_red_velvet', desc:'Pan di spagna rosso al cacao, crema al formaggio e frutti di bosco.', all:['Glutine','Uova','Latte']},
  {id:'oreo', nome:'Torta ai biscotti al cacao', cat:'torte', img:'torta_oreo', desc:'Base croccante e crema fredda con biscotti al cacao sbriciolati.', all:['Glutine','Latte']},
  {id:'crostata', nome:'Crostata alle fragole', cat:'torte', img:'crostata_alle_fragole', desc:'Frolla, crema pasticcera e fragole fresche lucidate.', all:['Glutine','Uova','Latte']},
  {id:'dedica', nome:'Torta con dedica', cat:'torte', img:'torta_con_dedica', desc:'Decorata a mano con la scritta che vuoi tu. Si ordina dal configuratore.', all:['Glutine','Uova','Latte']},
  {id:'monoporzione', nome:'Monoporzione ai frutti rossi', cat:'monoporzioni', img:'monoporzione_frutti_rossi', desc:'Mousse ai lamponi su base sablé, con gelée lucida e fiori eduli.', all:['Glutine','Uova','Latte']},
  {id:'cupcake', nome:'Cupcake red velvet', cat:'monoporzioni', img:'cupcake_red_velvet', desc:'Soffici e rossi, con frosting alla vaniglia e cuoricino di zucchero.', all:['Glutine','Uova','Latte']}
];
const CATEGORIE = {colazione:'Colazione', pasticceria:'Pasticceria', torte:'Torte', monoporzioni:'Monoporzioni'};

/* Banco del giorno: un dolce in evidenza per ogni giorno di apertura */
const BANCO = {
  3: {id:'bigne', frase:'Il mercoledì la vetrina si apre con i bignè: crema fatta la mattina stessa e glassa ancora lucida.'},
  4: {id:'crostata', frase:'Il giovedì è il giorno della crostata alle fragole, anche a fetta da gustare al tavolino.'},
  5: {id:'tiramisu', frase:'Venerdì si chiude la settimana col tiramisù: intero da portare a casa o in monoporzione.'},
  6: {id:'macarons', frase:'Il sabato i macarons cambiano colore: gusti nuovi ogni settimana, da scegliere al banco.'},
  0: {id:'frutta', frase:'La domenica è per il vassoio: tartellette alla frutta fresca da portare al pranzo in famiglia.'}
};

/* ---------------- utilità ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const ora = h => { const hh = Math.floor(h), mm = Math.round((h - hh) * 60); return hh + ':' + String(mm).padStart(2, '0'); };
const fasce = f => f.map(([a, b]) => ora(a) + '–' + ora(b)).join(' e ');
const sitoUrl = () => location.origin + location.pathname.replace(/[^/]*$/, '');
const inviaWhatsApp = testo => window.open('https://wa.me/' + NEGOZIO.whatsapp + '?text=' + encodeURIComponent(testo + '\n\nInviato dal sito: ' + sitoUrl()), '_blank', 'noopener');
const inizioGiorno = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const giorniTra = (a, b) => Math.round((inizioGiorno(b) - inizioGiorno(a)) / 86400000);
const memoria = {
  leggi: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  scrivi: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  togli: k => { try { localStorage.removeItem(k); } catch (e) {} }
};
const ICONA_WA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm4.52 11.93c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z"/></svg>';

/* ---------------- stato aperto/chiuso ---------------- */
function statoNegozio(adesso = new Date()) {
  const g = adesso.getDay(), h = adesso.getHours() + adesso.getMinutes() / 60;
  const aperta = ORARI[g].find(([a, b]) => h >= a && h < b);
  if (aperta) return {aperto: true, testo: 'Aperto ora, chiude alle ' + ora(aperta[1])};
  const piuTardi = ORARI[g].find(([a]) => h < a);
  if (piuTardi) return {aperto: false, testo: 'Chiuso ora, riapre alle ' + ora(piuTardi[0])};
  for (let i = 1; i <= 7; i++) {
    const gg = (g + i) % 7;
    if (ORARI[gg].length) return {aperto: false, testo: 'Chiuso ora, riapre ' + (i === 1 ? 'domani' : GIORNI[gg]) + ' alle ' + ora(ORARI[gg][0][0])};
  }
  return {aperto: false, testo: 'Chiuso'};
}

/* ---------------- parti comuni della pagina ---------------- */
function montaLayout() {
  const pagina = document.body.dataset.pagina;
  const oggi = new Date().getDay();
  const s = statoNegozio();
  const voce = (href, id, testo) => `<a href="${href}"${pagina === id ? ' aria-current="page"' : ''}>${testo}</a>`;

  document.body.insertAdjacentHTML('afterbegin', `
  <a class="sr" href="#contenuto">Vai al contenuto</a>
  <div class="stato"><div class="wrap">
    <p class="stato-live${s.aperto ? '' : ' chiuso'}"><span class="stato-punto" aria-hidden="true"></span><span data-stato>${s.testo}</span></p>
    <p class="stato-orari">Oggi, ${GIORNI[oggi]}: <strong>${ORARI[oggi].length ? fasce(ORARI[oggi]) : 'chiuso'}</strong></p>
    <a href="tel:${NEGOZIO.telefono}">Chiama ${NEGOZIO.telefonoVisibile}</a>
  </div></div>
  <header class="testata"><div class="wrap">
    <a class="marchio" href="index.html" aria-label="Dolce Chiara, torna alla home"><span class="marchio-sigillo" aria-hidden="true">dc</span><span class="marchio-nome">Dolce Chiara</span></a>
    <nav class="menu" id="menu" aria-label="Menu principale">
      ${voce('index.html', 'home', 'Home')}
      ${voce('menu.html', 'menu', 'Il menù')}
      ${voce('ordina.html', 'ordina', 'Ordina')}
      ${voce('chi-siamo.html', 'chi-siamo', 'Chi siamo')}
    </nav>
    <a class="btn btn-pieno" href="ordina.html#torta">Ordina una torta</a>
    <button class="hamburger" aria-label="Apri il menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
  </div></header>`);

  document.body.insertAdjacentHTML('beforeend', `
  <footer class="piede"><div class="wrap">
    <div class="piede-alto">
      <div><span class="marchio-nome">Dolce Chiara</span><p>Pasticceria e caffetteria a Nogara. Tutto fatto a mano, ogni mattina.</p></div>
      <div><h4>Il sito</h4><ul>
        <li><a href="menu.html">Il menù</a></li><li><a href="ordina.html#torta">Torta su misura</a></li>
        <li><a href="ordina.html#vassoi">Vassoi per eventi</a></li><li><a href="ordina.html#buono">Buono regalo</a></li><li><a href="chi-siamo.html">Chi siamo</a></li></ul></div>
      <div><h4>Orari</h4><ul>
        <li>Mer–Ven 7:00–13:00, 15:30–19:30</li><li>Sabato 7:00–19:30</li><li>Domenica 7:30–13:00</li><li>Lunedì e martedì chiuso</li></ul></div>
      <div><h4>Contatti</h4><ul>
        <li><a href="tel:${NEGOZIO.telefono}">${NEGOZIO.telefonoVisibile}</a></li>
        <li><a href="mailto:${NEGOZIO.email}">${NEGOZIO.email}</a></li>
        <li>${NEGOZIO.indirizzo}, ${NEGOZIO.citta}</li></ul></div>
    </div>
    <div class="piede-basso">
      <p>© ${new Date().getFullYear()} Dolce Chiara. P.IVA 00000000000<br>Sito realizzato da <a href="https://www.studiomenny.it/" target="_blank" rel="noopener">Studio Menny</a></p>
      <nav aria-label="Informazioni legali">
        <a href="legale.html#note-legali">Note legali</a>
        <a href="legale.html#privacy">Privacy</a>
        <a href="legale.html#cookie">Cookie</a>
        <button type="button" data-apri-cookie>Preferenze cookie</button>
      </nav>
    </div>
  </div></footer>

  <div class="cookie" role="dialog" aria-labelledby="cookie-titolo" aria-live="polite">
    <h2 id="cookie-titolo">Due parole sui cookie</h2>
    <p>Usiamo solo cookie tecnici, necessari al funzionamento del sito. La mappa di Google, che può impostare cookie propri, si carica solo se la attivi tu. <a class="link" href="legale.html#cookie">Leggi la cookie policy</a></p>
    <div class="cookie-azioni">
      <button class="btn btn-pieno" data-cookie="tutti">Accetta, mappa inclusa</button>
      <button class="btn btn-bordo" data-cookie="necessari">Solo necessari</button>
    </div>
  </div>

  <div class="fluttua">
    <button class="su" aria-label="Torna in cima alla pagina">↑</button>
    <a class="wa" href="https://wa.me/${NEGOZIO.whatsapp}" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">${ICONA_WA}</a>
  </div>`);

  // menu mobile
  const ham = $('.hamburger'), menu = $('#menu');
  ham.addEventListener('click', () => {
    const aperto = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded', String(!aperto));
    ham.setAttribute('aria-label', aperto ? 'Apri il menu' : 'Chiudi il menu');
    menu.classList.toggle('aperto', !aperto);
  });

  // ombra testata + torna su
  const testata = $('.testata'), su = $('.fluttua .su');
  const alScroll = () => {
    testata.classList.toggle('ombra', scrollY > 10);
    su.classList.toggle('visibile', scrollY > 600);
  };
  addEventListener('scroll', alScroll, {passive: true}); alScroll();
  su.addEventListener('click', () => scrollTo({top: 0, behavior: 'smooth'}));

  // aggiorna lo stato ogni minuto
  setInterval(() => {
    const n = statoNegozio();
    $('[data-stato]').textContent = n.testo;
    $('.stato-live').classList.toggle('chiuso', !n.aperto);
  }, 60000);
}

/* ---------------- cookie e mappa ---------------- */
function gestisciCookie() {
  const box = $('.cookie');
  if (!memoria.leggi('dc-cookie')) setTimeout(() => box.classList.add('visibile'), 900);
  $$('[data-cookie]').forEach(b => b.addEventListener('click', () => {
    const tutti = b.dataset.cookie === 'tutti';
    memoria.scrivi('dc-cookie', tutti ? 'tutti' : 'necessari');
    box.classList.remove('visibile');
    tutti ? caricaMappa() : scaricaMappa();
  }));
  $$('[data-apri-cookie]').forEach(b => b.addEventListener('click', () => box.classList.add('visibile')));
}
function caricaMappa() {
  const m = $('[data-mappa]');
  if (!m || m.querySelector('iframe')) return;
  m.innerHTML = `<iframe src="${NEGOZIO.mappa}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mappa: Dolce Chiara, ${NEGOZIO.indirizzo}, Nogara"></iframe>`;
}
function scaricaMappa() {
  const m = $('[data-mappa]');
  if (m && m.querySelector('iframe')) m.innerHTML = m.dataset.segnaposto;
  if (m) collegaBottoneMappa();
}
function collegaBottoneMappa() {
  const b = $('[data-attiva-mappa]');
  if (b) b.addEventListener('click', () => { memoria.scrivi('dc-cookie', 'tutti'); $('.cookie').classList.remove('visibile'); caricaMappa(); });
}
function preparaMappa() {
  const m = $('[data-mappa]');
  if (!m) return;
  m.dataset.segnaposto = m.innerHTML;
  collegaBottoneMappa();
  if (memoria.leggi('dc-cookie') === 'tutti') caricaMappa();
}

/* ---------------- comparsa allo scorrimento ---------------- */
function comparse() {
  const el = $$('.appare');
  if (!('IntersectionObserver' in window)) return el.forEach(e => e.classList.add('visto'));
  const oss = new IntersectionObserver(voci => voci.forEach(v => {
    if (v.isIntersecting) { v.target.classList.add('visto'); oss.unobserve(v.target); }
  }), {threshold: .12, rootMargin: '0px 0px -60px 0px'});
  el.forEach(e => oss.observe(e));
}

/* ---------------- transizione tra pagine ---------------- */
function transizioni() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname || !/\.html$|\/$/.test(url.pathname)) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    e.preventDefault();
    document.body.classList.add('uscita');
    setTimeout(() => { location.href = a.href; }, 280);
  });
  addEventListener('pageshow', () => document.body.classList.remove('uscita'));
}

/* =============================================================
   HOME
   ============================================================= */
function home() {
  const box = $('[data-banco]');
  if (!box) return;
  const oggi = new Date().getDay();
  let giorno = BANCO[oggi] ? oggi : [3, 4, 5, 6, 0].find(g => g === 3);
  const disegna = g => {
    const b = BANCO[g], p = PRODOTTI.find(x => x.id === b.id);
    $('[data-banco-foto]').src = 'images/' + p.img + '.jpg';
    $('[data-banco-foto]').alt = p.nome;
    $('[data-banco-giorno]').textContent = g === oggi ? 'Oggi, ' + GIORNI[g] : (BANCO[oggi] ? 'Il ' + GIORNI[g] : 'Alla riapertura, ' + GIORNI[g]);
    $('[data-banco-nome]').textContent = p.nome;
    $('[data-banco-frase]').textContent = b.frase;
    $$('.oggi-settimana button').forEach(x => x.setAttribute('aria-pressed', String(+x.dataset.g === g)));
  };
  $('.oggi-settimana').innerHTML = [3, 4, 5, 6, 0].map(g => `<button type="button" data-g="${g}">${GIORNI[g][0].toUpperCase() + GIORNI[g].slice(1)}</button>`).join('');
  $$('.oggi-settimana button').forEach(b => b.addEventListener('click', () => disegna(+b.dataset.g)));
  disegna(giorno);

  // prossima ricorrenza
  const r = $('[data-prossima]');
  if (r) {
    const f = prossimeFeste()[0];
    r.querySelector('[data-conta]').innerHTML = f.giorni === 0 ? 'Oggi' : f.giorni + '<small>' + (f.giorni === 1 ? 'giorno' : 'giorni') + ' a ' + f.nome + '</small>';
    r.querySelector('[data-festa-nome]').textContent = f.nome + ', ' + f.data.getDate() + ' ' + MESI[f.data.getMonth()];
    r.querySelector('[data-festa-testo]').textContent = f.consiglio + ' Per essere sicuri, prenota entro il ' + f.entro.getDate() + ' ' + MESI[f.entro.getMonth()] + '.';
  }
}

/* =============================================================
   RICORRENZE (con Pasqua calcolata)
   ============================================================= */
function pasqua(anno) {
  const a = anno % 19, b = Math.floor(anno / 100), c = anno % 100, d = Math.floor(b / 4), e = b % 4,
    f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
    i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
    mese = Math.floor((h + l - 7 * m + 114) / 31), giorno = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(anno, mese - 1, giorno);
}
function secondaDomenicaMaggio(anno) {
  const d = new Date(anno, 4, 1);
  const primaDom = 1 + ((7 - d.getDay()) % 7);
  return new Date(anno, 4, primaDom + 7);
}
function prossimeFeste() {
  const oggi = inizioGiorno(new Date());
  const definizioni = [
    {nome: 'Carnevale', data: a => { const p = pasqua(a); return new Date(a, p.getMonth(), p.getDate() - 47); }, consiglio: 'Chiacchiere, frittelle e castagnole fritte ogni mattina.'},
    {nome: 'San Valentino', data: a => new Date(a, 1, 14), consiglio: 'Cuori di mousse, cupcake red velvet e torte per due.'},
    {nome: 'Festa del papà', data: a => new Date(a, 2, 19), consiglio: 'Zeppole di San Giuseppe e la sua torta preferita.'},
    {nome: 'Pasqua', data: pasqua, consiglio: 'Colombe artigianali e uova di cioccolato con sorpresa su richiesta.'},
    {nome: 'Festa della mamma', data: secondaDomenicaMaggio, consiglio: 'Torte con dedica e vassoi di pasticcini da regalare.'},
    {nome: 'Natale', data: a => new Date(a, 11, 25), consiglio: 'Panettoni e pandori farciti, anche in confezione regalo.'}
  ];
  return definizioni.map(def => {
    let d = def.data(oggi.getFullYear());
    if (d < oggi) d = def.data(oggi.getFullYear() + 1);
    const entro = new Date(d); entro.setDate(entro.getDate() - 5);
    return {...def, data: d, giorni: giorniTra(oggi, d), entro};
  }).sort((a, b) => a.data - b.data);
}
function feste() {
  const box = $('[data-feste]');
  if (!box) return;
  box.innerHTML = prossimeFeste().map((f, i) => `
    <li class="festa${i === 0 ? ' prossima' : ''}">
      <span class="quando">${GIORNI[f.data.getDay()]} ${f.data.getDate()} ${MESI[f.data.getMonth()]}</span>
      <h3>${f.nome}</h3>
      <p class="quando">${f.consiglio}</p>
      <p class="mancano">${f.giorni === 0 ? 'Oggi' : f.giorni}<small>${f.giorni === 0 ? 'passa a trovarci' : (f.giorni === 1 ? 'giorno' : 'giorni') + ', prenota entro il ' + f.entro.getDate() + ' ' + MESI[f.entro.getMonth()]}</small></p>
    </li>`).join('');
}

/* =============================================================
   MENÙ — filtri + scheda prodotto
   ============================================================= */
function menu() {
  const griglia = $('[data-prodotti]');
  if (!griglia) return;
  let categoria = 'tutti', senzaGuscio = false, visibili = [], indice = 0;

  griglia.innerHTML = PRODOTTI.map(p => `
    <button class="prodotto appare" type="button" data-id="${p.id}" data-cat="${p.cat}">
      <span class="prodotto-foto"><img src="images/${p.img}.jpg" alt="" loading="lazy"><span class="prodotto-cat">${CATEGORIE[p.cat]}</span></span>
      <h3>${p.nome}</h3>
      <p>${p.desc}</p>
      <span class="allergeni" aria-label="Allergeni">${p.all.map(a => `<span>${a}</span>`).join('')}</span>
    </button>`).join('') + '<p class="vuoto" hidden>Nessun dolce in questa selezione. Prova un\'altra categoria o togli il filtro sulla frutta a guscio.</p>';

  const chips = $('[data-chips]');
  const conta = c => PRODOTTI.filter(p => c === 'tutti' || p.cat === c).length;
  chips.innerHTML = [['tutti', 'Tutto'], ...Object.entries(CATEGORIE)].map(([k, v]) =>
    `<button class="chip" type="button" data-cat="${k}" aria-pressed="${k === 'tutti'}">${v}<span class="n">${conta(k)}</span></button>`).join('');

  const filtra = () => {
    visibili = [];
    $$('.prodotto', griglia).forEach(el => {
      const p = PRODOTTI.find(x => x.id === el.dataset.id);
      const ok = (categoria === 'tutti' || p.cat === categoria) && !(senzaGuscio && p.all.includes('Frutta a guscio'));
      el.hidden = !ok;
      if (ok) { visibili.push(p); el.classList.add('visto'); }
    });
    $('.vuoto', griglia).hidden = visibili.length > 0;
  };
  $$('.chip', chips).forEach(c => c.addEventListener('click', () => {
    categoria = c.dataset.cat;
    $$('.chip', chips).forEach(x => x.setAttribute('aria-pressed', String(x === c)));
    filtra();
  }));
  $('[data-guscio]').addEventListener('change', e => { senzaGuscio = e.target.checked; filtra(); });

  // scheda prodotto (lightbox)
  const lb = $('.lightbox');
  let ultimoFocus = null;
  const mostra = i => {
    indice = (i + visibili.length) % visibili.length;
    const p = visibili[indice];
    $('[data-lb-img]').src = 'images/' + p.img + '.jpg';
    $('[data-lb-img]').alt = p.nome;
    $('[data-lb-cat]').textContent = CATEGORIE[p.cat];
    $('[data-lb-nome]').textContent = p.nome;
    $('[data-lb-desc]').textContent = p.desc;
    $('[data-lb-all]').innerHTML = p.all.map(a => `<span>${a}</span>`).join('');
  };
  const apri = id => {
    ultimoFocus = document.activeElement;
    mostra(visibili.findIndex(p => p.id === id));
    lb.classList.add('aperto'); lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('.lb-chiudi').focus();
  };
  const chiudi = () => {
    lb.classList.remove('aperto'); lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (ultimoFocus) ultimoFocus.focus();
  };
  griglia.addEventListener('click', e => { const b = e.target.closest('.prodotto'); if (b) apri(b.dataset.id); });
  $('.lb-chiudi').addEventListener('click', chiudi);
  $('.lb-prec').addEventListener('click', () => mostra(indice - 1));
  $('.lb-succ').addEventListener('click', () => mostra(indice + 1));
  lb.addEventListener('click', e => { if (e.target === lb) chiudi(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('aperto')) return;
    if (e.key === 'Escape') chiudi();
    if (e.key === 'ArrowLeft') mostra(indice - 1);
    if (e.key === 'ArrowRight') mostra(indice + 1);
  });
  $('[data-lb-chiedi]').addEventListener('click', () => inviaWhatsApp('Ciao Dolce Chiara! Vorrei informazioni su: ' + visibili[indice].nome + '. È disponibile?'));
  filtra();
}

/* =============================================================
   ORDINA — configuratore torta con anteprima
   ============================================================= */
const BASI = {'Pan di Spagna': '#EFCF8E', 'Cacao': '#5A3526', 'Red velvet': '#A3243A', 'Pistacchio': '#A9BD78'};
const CREME = {'Chantilly': '#FFF4DC', 'Mascarpone': '#F6E7C8', 'Cioccolato': '#6E4431', 'Frutti rossi': '#E58CA3', 'Pistacchio': '#D3E0AE'};

function disegnaTorta(o) {
  const base = BASI[o.base], crema = CREME[o.crema];
  const nude = o.decoro === 'Naked cake';
  const piani = o.persone > 24 ? [{w: 290, h: 110}, {w: 190, h: 90}] : [{w: o.persone > 14 ? 290 : 240, h: 120}];
  let y = 300, svg = `<ellipse cx="200" cy="304" rx="178" ry="26" fill="#fff" stroke="#E6CBD3"/><ellipse cx="200" cy="300" rx="160" ry="20" fill="#FBF4F2"/>`;
  piani.forEach((p, i) => {
    const x = 200 - p.w / 2, ry = p.w * .11, top = y - p.h;
    const lato = nude ? base : crema;
    svg += `<ellipse cx="200" cy="${y}" rx="${p.w / 2}" ry="${ry}" fill="${lato}" stroke="rgba(42,14,26,.18)"/>`;
    svg += `<rect x="${x}" y="${top}" width="${p.w}" height="${p.h}" fill="${lato}"/>`;
    svg += `<path d="M${x} ${top} V${y} M${x + p.w} ${top} V${y}" stroke="rgba(42,14,26,.18)"/>`;
    if (nude) [1, 2].forEach(k => { svg += `<rect x="${x}" y="${top + p.h * k / 3 - 6}" width="${p.w}" height="12" fill="${crema}"/>`; });
    else {
      svg += `<rect x="${x}" y="${top}" width="${p.w}" height="${p.h}" fill="url(#luce)"/>`;
      const fx = x + p.w * .7, fw = p.w * .3;
      svg += `<rect x="${fx}" y="${top}" width="${fw}" height="${p.h}" fill="${base}"/>`;
      [1, 2].forEach(k => { svg += `<rect x="${fx}" y="${top + p.h * k / 3 - 5}" width="${fw}" height="10" fill="${crema}"/>`; });
      svg += `<rect x="${fx}" y="${top}" width="5" height="${p.h}" fill="${crema}"/><rect x="${fx}" y="${top}" width="${fw}" height="${p.h}" fill="url(#luce)" opacity=".6"/>`;
    }
    svg += `<ellipse cx="200" cy="${top}" rx="${p.w / 2}" ry="${ry}" fill="${crema}" stroke="rgba(42,14,26,.14)"/>`;
    const ultimo = i === piani.length - 1;
    if (o.decoro === 'Ciuffi di panna') {
      const n = Math.round(p.w / 30);
      for (let k = 0; k < n; k++) {
        const a = Math.PI * (k + .5) / n, cx = 200 - Math.cos(a) * (p.w / 2 - 14), cy = top + Math.sin(a) * (ry - 6);
        svg += `<circle cx="${cx}" cy="${cy}" r="10" fill="#FFF9EE" stroke="#EADCC4"/><circle cx="${cx - 2}" cy="${cy - 3}" r="4" fill="#fff"/>`;
      }
    }
    if (o.decoro === 'Frutta fresca' && ultimo) {
      const pos = [[-60, -2, '#C7243F'], [-30, 6, '#8E1C3A'], [0, -6, '#C7243F'], [32, 4, '#4B2A6B'], [60, -2, '#C7243F'], [-12, 12, '#4B2A6B'], [18, 12, '#C7243F']];
      pos.forEach(([dx, dy, c]) => { svg += `<circle cx="${200 + dx * p.w / 240}" cy="${top + dy}" r="9" fill="${c}"/><circle cx="${197 + dx * p.w / 240}" cy="${top + dy - 3}" r="2.5" fill="rgba(255,255,255,.6)"/>`; });
      svg += `<path d="M${200 + 40 * p.w / 240} ${top - 14} q8 -10 16 -2 q-6 2 -16 2z" fill="#6E9A3E"/>`;
    }
    if (ultimo && o.dedica) {
      const testo = o.dedica.replace(/[<>&"]/g, '');
      const dim = Math.max(11, Math.min(20, 280 / Math.max(testo.length, 8)));
      const tY = o.decoro === 'Frutta fresca' ? top - 34 : top + 4;
      if (o.decoro === 'Frutta fresca') svg += `<rect x="${200 - Math.min(p.w / 2, testo.length * dim * .3 + 20)}" y="${tY - 16}" width="${2 * Math.min(p.w / 2, testo.length * dim * .3 + 20)}" height="26" rx="13" fill="#fff" stroke="#E6CBD3"/>`;
      svg += `<text x="200" y="${tY + 2}" text-anchor="middle" font-family="Bodoni Moda, Georgia, serif" font-style="italic" font-size="${dim}" fill="${o.crema === 'Cioccolato' && o.decoro !== 'Frutta fresca' ? '#FBEFF2' : '#5E1433'}">${testo}</text>`;
    }
    y = top + 4;
  });
  return `<defs><linearGradient id="luce" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".12"/><stop offset=".35" stop-color="#fff" stop-opacity=".18"/><stop offset=".7" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".16"/></linearGradient></defs>` + svg;
}

function configuratore() {
  const form = $('[data-torta]');
  if (!form) return;
  const svg = $('.torta-svg'), range = $('[name=persone]', form), out = $('[data-persone]'), data = $('[name=data]', form), err = $('[data-errore-data]');
  const minimo = new Date(); minimo.setDate(minimo.getDate() + 3);
  const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  data.min = iso(minimo);
  const leggi = () => {
    const f = new FormData(form);
    return {base: f.get('base'), crema: f.get('crema'), decoro: f.get('decoro'), persone: +f.get('persone'), dedica: (f.get('dedica') || '').trim(), data: f.get('data'), nome: (f.get('nome') || '').trim(), tel: (f.get('tel') || '').trim(), note: (f.get('note') || '').trim()};
  };
  const controllaData = () => {
    if (!data.value) { err.textContent = 'Serve almeno 3 giorni di anticipo.'; err.classList.remove('errore'); return true; }
    const d = new Date(data.value + 'T12:00');
    if (d < inizioGiorno(minimo)) { err.textContent = 'Serve almeno 3 giorni di anticipo: scegli dal ' + minimo.getDate() + ' ' + MESI[minimo.getMonth()] + ' in poi.'; err.classList.add('errore'); return false; }
    if (!ORARI[d.getDay()].length) { err.textContent = 'Il ' + GIORNI[d.getDay()] + ' siamo chiusi: scegli un altro giorno per il ritiro.'; err.classList.add('errore'); return false; }
    err.textContent = 'Ritiro ' + GIORNI[d.getDay()] + ' ' + d.getDate() + ' ' + MESI[d.getMonth()] + ', dalle ' + ora(ORARI[d.getDay()][0][0]) + '.'; err.classList.remove('errore'); return true;
  };
  const aggiorna = () => {
    const o = leggi();
    out.textContent = o.persone;
    range.style.setProperty('--p', ((o.persone - 6) / 34 * 100) + '%');
    $('[data-conta-dedica]').textContent = o.dedica.length + '/28';
    svg.innerHTML = disegnaTorta(o);
    svg.setAttribute('viewBox', o.persone > 24 ? '0 20 400 320' : '0 90 400 250');
    const d = o.data ? new Date(o.data + 'T12:00') : null;
    $('[data-riepilogo]').innerHTML = [
      ['Base', o.base], ['Crema', o.crema], ['Finitura', o.decoro],
      ['Persone', o.persone + (o.persone > 24 ? ', due piani' : ', un piano')],
      ['Dedica', o.dedica || 'nessuna'],
      ['Ritiro', d ? d.getDate() + ' ' + MESI[d.getMonth()] : 'da scegliere']
    ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v.replace(/[<>&]/g, '')}</dd></div>`).join('');
    controllaData();
  };
  form.addEventListener('input', aggiorna);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const o = leggi();
    if (!o.nome) { $('[name=nome]', form).focus(); $('[name=nome]', form).setCustomValidity('Scrivi il tuo nome'); form.reportValidity(); $('[name=nome]', form).setCustomValidity(''); return; }
    if (!o.data) { data.focus(); err.textContent = 'Scegli il giorno di ritiro per inviare la richiesta.'; err.classList.add('errore'); return; }
    if (!controllaData()) { data.focus(); return; }
    const d = new Date(o.data + 'T12:00');
    inviaWhatsApp(`Ciao Dolce Chiara! Vorrei ordinare una torta:
- Base: ${o.base}
- Crema: ${o.crema}
- Finitura: ${o.decoro}
- Persone: ${o.persone}
- Dedica: ${o.dedica || 'nessuna'}
- Ritiro: ${GIORNI[d.getDay()]} ${d.getDate()} ${MESI[d.getMonth()]}
- Nome: ${o.nome}${o.tel ? '\n- Telefono: ' + o.tel : ''}${o.note ? '\n- Note e allergie: ' + o.note : ''}`);
  });
  aggiorna();
}

/* ---------------- calcolatore vassoi ---------------- */
function calcolatore() {
  const box = $('[data-calcolo]');
  if (!box) return;
  const occ = $('[name=occasione]', box), pers = $('[name=quanti]', box);
  const scelta = () => {
    const p = Math.max(1, Math.min(300, +pers.value || 1));
    const pezzi = Math.ceil(p * +occ.value);
    const formato = p <= 12 ? 'piccolo' : p <= 25 ? 'medio' : 'grande';
    return {p, pezzi, formato, occasione: occ.options[occ.selectedIndex].text};
  };
  const aggiorna = () => {
    const s = scelta();
    $('[data-pezzi]').textContent = s.pezzi;
    $('[data-formato-testo]').textContent = s.p > 40 ? 'più vassoi grandi, ne parliamo insieme' : 'il vassoio ' + s.formato;
    $$('.vassoio').forEach(v => v.classList.toggle('consigliato', v.dataset.formato === s.formato));
  };
  box.addEventListener('input', aggiorna);
  $('[data-chiedi-vassoio]').addEventListener('click', () => {
    const s = scelta();
    inviaWhatsApp(`Ciao Dolce Chiara! Vorrei un vassoio di pasticcini:\n- Occasione: ${s.occasione}\n- Persone: ${s.p}\n- Pezzi indicativi: ${s.pezzi} (vassoio ${s.formato})\nQuando posso passare a ritirarlo?`);
  });
  aggiorna();
}

/* ---------------- buono regalo ---------------- */
function buono() {
  const form = $('[data-buono]');
  if (!form) return;
  const leggi = () => Object.fromEntries(new FormData(form));
  const pulisci = s => (s || '').replace(/[<>&]/g, '').trim();
  const aggiorna = () => {
    const o = leggi();
    $('[data-b-nome]').textContent = pulisci(o.per) || 'Il nome di chi lo riceve';
    $('[data-b-msg]').textContent = pulisci(o.messaggio) || 'Il tuo messaggio comparirà qui.';
    $('[data-b-da]').textContent = pulisci(o.da) ? 'da ' + pulisci(o.da) : '';
    $('[data-b-valore]').textContent = o.valore === 'libero' ? 'Valore a scelta' : o.valore + ' €';
    $('[data-conta-msg]').textContent = (o.messaggio || '').length + '/70';
  };
  form.addEventListener('input', aggiorna);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const o = leggi();
    if (!pulisci(o.per)) { form.per.focus(); return; }
    inviaWhatsApp(`Ciao Dolce Chiara! Vorrei un buono regalo:\n- Per: ${pulisci(o.per)}\n- Da parte di: ${pulisci(o.da) || '-'}\n- Valore: ${o.valore === 'libero' ? 'da concordare' : o.valore + ' €'}\n- Messaggio: ${pulisci(o.messaggio) || '-'}`);
  });
  aggiorna();
}

/* ---------------- orari in "chi siamo" ---------------- */
function tabellaOrari() {
  const t = $('[data-orari]');
  if (!t) return;
  const oggi = new Date().getDay();
  t.innerHTML = [3, 4, 5, 6, 0, 1, 2].map(g => `<tr class="${g === oggi ? 'riga-oggi' : ''}${ORARI[g].length ? '' : ' chiuso'}"><td>${GIORNI[g][0].toUpperCase() + GIORNI[g].slice(1)}${g === oggi ? ' (oggi)' : ''}</td><td>${ORARI[g].length ? fasce(ORARI[g]) : 'Chiuso'}</td></tr>`).join('');
  const s = $('[data-stato-grande]');
  if (s) s.textContent = statoNegozio().testo;
}

/* ---------------- avvio ---------------- */
montaLayout();
gestisciCookie();
preparaMappa();
home();
feste();
menu();
configuratore();
calcolatore();
buono();
tabellaOrari();
comparse();
transizioni();
requestAnimationFrame(() => document.body.classList.add('pronto'));
