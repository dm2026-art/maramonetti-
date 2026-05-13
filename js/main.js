// Kirby setzt window.projects vor diesem Script — Fallback für statischen Betrieb
var projects = window.projects || [
  {
    title: 'Titel der Arbeit',
    desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    client: 'Horizont Magazin',
    url: 'https://www.horizont.net',
    num: '1 / 20',
    img: 'images/projekt-01-gross.jpg'
  },
  {
    title: 'Titel der Arbeit',
    desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
    client: 'Royal Bounce Magazin',
    url: '',
    num: '1 / 20',
    img: 'images/projekt-02-gross.jpg'
  },
  {
    title: 'Titel der Arbeit',
    desc: 'Portrait. Donec pede justo, fringilla vel, aliquet nec.',
    client: 'Editorial',
    url: '',
    num: '1 / 20',
    img: 'images/projekt-03-gross.jpg'
  },
  {
    title: 'Titel der Arbeit',
    desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget.',
    client: 'Studio',
    url: '',
    num: '2 / 20',
    img: 'images/projekt-04-gross.jpg'
  },
  {
    title: 'Titel der Arbeit',
    desc: 'Donec pede justo, fringilla vel, aliquet nec.',
    client: 'Editorial',
    url: '',
    num: '1 / 20',
    img: 'images/projekt-05-gross.jpg'
  },
  {
    title: 'Titel der Arbeit',
    desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
    client: 'Horizont Magazin',
    url: 'https://www.horizont.net',
    num: '3 / 20',
    img: 'images/projekt-06-gross.jpg'
  }
];

var currentIdx = 0;

function openPd(i) {
  currentIdx = i;
  renderPd();
  var pd = document.getElementById('pd');
  pd.classList.add('open');
  pd.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePd() {
  document.getElementById('pd').classList.remove('open');
}

function prevPd() {
  currentIdx = (currentIdx - 1 + projects.length) % projects.length;
  renderPd();
}

function nextPd() {
  currentIdx = (currentIdx + 1) % projects.length;
  renderPd();
}

function renderPd() {
  var p = projects[currentIdx];
  var img = document.getElementById('pd-img');
  img.src = p.img;
  img.alt = p.title;

  var sub = '';
  if (p.desc) sub += p.desc;
  if (p.client) sub += (sub ? ' — ' : '') + p.client;
  if (p.url) sub += ' — <a href="' + p.url + '" target="_blank" rel="noopener">' + p.url + '</a>';

  document.getElementById('pd-main').innerHTML =
    '<div id="pd-title">' + p.title + '</div>' +
    (sub ? '<div id="pd-sub">' + sub + '</div>' : '');
  document.getElementById('pd-num').innerHTML = p.num;
}

function showView(name) {
  var views = ['gallery', 'about', 'impressum', 'datenschutz'];
  views.forEach(function(v) {
    var el = document.getElementById('view-' + v);
    if (el) el.style.display = (v === name ? 'block' : 'none');
  });
  window.scrollTo(0, 0);
}

function setLang(l) {
  document.querySelectorAll('.hdr-lang span').forEach(function(s) {
    s.classList.remove('active');
  });
  if (l === 'de') document.querySelectorAll('.hdr-lang span')[0].classList.add('active');
  else document.querySelectorAll('.hdr-lang span')[2].classList.add('active');
}

function newsletter() {
  var inp = document.querySelector('.nl-wrap input');
  if (inp && inp.value) {
    alert('Vielen Dank für Ihre Anmeldung!');
    inp.value = '';
  }
}

function fillLastTiles() {
  var cols = Array.from(document.querySelectorAll('.gcol'));
  if (!cols.length) return;

  // reset any previous explicit heights
  cols.forEach(function(col) {
    var img = col.querySelector('.gc:last-child .gc-img');
    if (img) img.style.height = '';
  });

  var maxH = cols.reduce(function(m, c) { return Math.max(m, c.offsetHeight); }, 0);

  cols.forEach(function(col) {
    var tiles = Array.from(col.querySelectorAll('.gc'));
    var last  = tiles[tiles.length - 1];
    var gcImg = last.querySelector('.gc-img');
    var gcMeta = last.querySelector('.gc-meta');
    if (!gcImg) return;

    var fixedH = 0;
    for (var i = 0; i < tiles.length - 1; i++) fixedH += tiles[i].offsetHeight + 1;

    var metaH   = gcMeta ? gcMeta.offsetHeight + 14 : 50;
    var imgH    = maxH - fixedH - 30 - 30 - metaH; // 30+30 = gc-inner top+bottom padding

    if (imgH > 40) gcImg.style.height = imgH + 'px';
  });
}

window.addEventListener('load', fillLastTiles);
window.addEventListener('resize', fillLastTiles);

document.addEventListener('keydown', function(e) {
  var pd = document.getElementById('pd');
  if (pd.classList.contains('open')) {
    if (e.key === 'ArrowLeft')  prevPd();
    if (e.key === 'ArrowRight') nextPd();
    if (e.key === 'Escape')     closePd();
  }
});
