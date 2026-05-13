// ── Projekte — hier echte Bilder und Texte eintragen ──
var projects = [
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

function openLb(i) {
  currentIdx = i;
  renderLb();
  document.getElementById('lb-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  document.getElementById('lb-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function prevLb() {
  currentIdx = (currentIdx - 1 + projects.length) % projects.length;
  renderLb();
}

function nextLb() {
  currentIdx = (currentIdx + 1) % projects.length;
  renderLb();
}

function renderLb() {
  var p = projects[currentIdx];
  document.getElementById('lb-img').innerHTML =
    '<img src="' + p.img + '" alt="' + p.title + '" style="max-width:100%;max-height:100%;display:block;object-fit:contain;">';
  document.getElementById('lb-title').innerHTML =
    '<strong>' + p.title + '</strong>' + p.desc;
  document.getElementById('lb-client').innerHTML =
    (p.client ? '<strong>Client</strong>' + p.client : '') +
    (p.url ? '<br><a href="' + p.url + '" target="_blank" rel="noopener">' + p.url + '</a>' : '');
  document.getElementById('lb-num').innerHTML = p.num;
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

// Keyboard navigation
document.getElementById('lb-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeLb();
});

document.addEventListener('keydown', function(e) {
  var overlay = document.getElementById('lb-overlay');
  if (overlay.classList.contains('open')) {
    if (e.key === 'ArrowLeft')  prevLb();
    if (e.key === 'ArrowRight') nextLb();
    if (e.key === 'Escape')     closeLb();
  }
});

