# Mara Monetti Fotografie — Website Prototype

## Projektstruktur

```
maramonetti/
├── index.html          ← Hauptdatei (alle Views: Galerie, About, Impressum, Datenschutz)
├── css/
│   └── style.css       ← Alle Stile (Cosmica, Layout, Masonry, Lightbox, Footer, Responsive)
├── js/
│   └── main.js         ← Lightbox, Navigation, Newsletter, Sprache
├── fonts/
│   └── Cosmica-Regular.otf  ← Hausschrift (alle Texte)
├── images/             ← Bilder hier ablegen (siehe Konventionen unten)
└── README.md
```

## Bilder einbinden

Bilder in `/images/` ablegen und in `index.html` referenzieren:

```html
<img src="images/projekt-01.jpg" alt="Titel" loading="lazy">
```

### Bildformate (Masonry-Kacheln)
| Format | Verhältnis | CSS-Klasse |
|--------|-----------|------------|
| Querformat | 3:2 | `ratio-3-2` |
| Hochformat | 2:3 | `ratio-2-3` |
| Hochformat schmal | 4:5 | `ratio-4-5` |
| Panorama | 16:9 | `ratio-16-9` |
| Quadrat | 1:1 | `ratio-1-1` |

### Portrait Mara (About-Seite)
```
images/mara-monetti.jpg   ← Proportionen ca. 3:4
```

## Views / Seiten

Alle Seiten sind in `index.html` als `<div id="view-...">` eingebettet.
Navigation via JavaScript `showView('name')`:

| View | ID | Aufgerufen von |
|------|----|----------------|
| Galerie | `view-gallery` | Klick auf Header-Name |
| About | `view-about` | Footer "About" |
| Impressum | `view-impressum` | Footer "Impressum" |
| Datenschutz | `view-datenschutz` | Footer "Datenschutz" |

## Lightbox — Projekte anpassen

In `js/main.js` das `projects`-Array befüllen:

```js
var projects = [
  {
    title: 'Titel der Arbeit',
    desc: 'Beschreibungstext...',
    client: 'Horizont Magazin',
    url: 'https://www.horizont.net',
    num: '1 / 20',
    img: 'images/projekt-01-gross.jpg'  // Großbild für Lightbox
  },
  // weitere Projekte...
];
```

## Technische Details

- **Breite:** max-width 1920px, zentriert
- **Schrift:** Cosmica Regular (OTF), Fallback Palatino
- **Linien außen:** 1px solid #111
- **Linien innen:** 0.5px solid #111
- **Abstände:** 30px (var(--gap))
- **Masonry:** CSS column-count: 3 — keine Gaps, keine Lücken
- **Responsive:** 1 Spalte ab 768px
- **Lightbox:** Overlay, X oben rechts, Pfeile über Bild, Esc/Pfeiltasten

## CMS-Anbindung (geplant: Kirby oder Grav)

Die HTML-Struktur ist template-ready:
- Galerie-Kacheln → Kirby/Grav Collection
- Lightbox-Daten → JSON aus CMS
- About/CV/Clients → Kirby/Grav Pages
- Newsletter → Mailchimp oder ähnlich

## TODO
- [ ] Echte Bilder einbinden
- [ ] Texte (About, CV, Clients, Impressum, Datenschutz) finalisieren
- [ ] Instagram/LinkedIn URLs setzen
- [ ] Newsletter-Formular an Backend anbinden
- [ ] Favicon erstellen
- [ ] Meta-Tags (OG, Twitter) ergänzen
- [ ] Sprache DE/EN — Texte übersetzen
- [ ] CMS anbinden (Kirby empfohlen, 99€ Einmallizenz)
