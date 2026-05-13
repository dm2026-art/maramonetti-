# Installation bei STRATO

## Voraussetzungen
- STRATO Webhosting-Paket (Basic oder höher)
- PHP 8.1 oder neuer (im STRATO Control Panel einstellbar)
- FTP-Zugangsdaten oder STRATO Dateimanager

---

## Schritt 1 — Kirby herunterladen

1. Gehe zu [getkirby.com](https://getkirby.com) → Log in → Download
2. Lade **Kirby CMS (nur Core)** herunter — du brauchst nur den `kirby/`-Ordner
3. Entpacke die ZIP-Datei

---

## Schritt 2 — Projektdateien vorbereiten

1. Lade diese Repository-ZIP von GitHub herunter:
   - Branch **`claude/maramonetti-website-8jK3p`** → Code → Download ZIP
2. Entpacke die ZIP
3. Kopiere den `kirby/`-Ordner aus dem Kirby-Download **in den entpackten Projektordner**

Der Projektordner muss so aussehen:
```
maramonetti-/
├── kirby/              ← aus dem Kirby-Download
├── site/
├── content/
├── css/
├── js/
├── fonts/
├── images/
├── index.php
├── .htaccess
└── ...
```

---

## Schritt 3 — PHP-Version bei STRATO einstellen

1. Melde dich im **STRATO Control Panel** an
2. Gehe zu **Hosting → PHP-Version**
3. Wähle **PHP 8.1** oder höher
4. Speichern

---

## Schritt 4 — Dateien hochladen

### Option A: STRATO Dateimanager
1. Control Panel → **Dateimanager**
2. Öffne deinen Webroot-Ordner (meist `/httpdocs/`)
3. Lade alle Dateien aus dem Projektordner hoch (alles, inkl. `.htaccess`)

### Option B: FTP (z.B. FileZilla)
1. FileZilla öffnen → Datei → Servermanager → Neuer Server
2. FTP-Host, Benutzer und Passwort aus dem STRATO Control Panel eintragen
3. Verbinden
4. Alle Projektdateien in den Webroot hochladen (`/httpdocs/`)

**Wichtig:** Die Datei `.htaccess` muss mit hochgeladen werden (unsichtbare Datei — in FileZilla: Ansicht → Versteckte Dateien anzeigen).

---

## Schritt 5 — Website aufrufen

1. Rufe deine Domain auf → die Galerie erscheint
2. Rufe `/panel` auf (z.B. `https://www.maramonetti.de/panel`)
3. Erstelle beim ersten Aufruf einen **Admin-Account**

---

## Panel — Inhalte verwalten

Im Kirby-Panel kannst du:

- **Projekte** hinzufügen, bearbeiten, löschen, umsortieren
- Pro Projekt: Titel, Beschreibung, Kunde, URL, Bildformat (1:1, 2:1 etc.), Spalte (1–3)
- Bilder direkt hochladen (ersetzen die Platzhalter automatisch)
- **About**, **Impressum**, **Datenschutz** bearbeiten
- Portraitfoto hochladen

---

## Ordner-Schreibrechte (falls Fehler)

Kirby braucht Schreibzugriff auf:
- `content/` (755 oder 775)
- `media/` (755 oder 775, wird automatisch angelegt)
- `site/accounts/` (755, wird beim ersten Panel-Login angelegt)

Bei STRATO sind diese Rechte in der Regel korrekt voreingestellt.

---

## Troubleshooting

| Problem | Lösung |
|---|---|
| Weiße Seite | PHP-Version auf 8.1+ stellen |
| 500 Error | `.htaccess` fehlt oder mod_rewrite nicht aktiv → STRATO Support |
| Panel nicht erreichbar | `site/config/config.php` → `'panel' => ['install' => true]` prüfen |
| Bilder zeigen Platzhalter | Echte Fotos im Panel hochladen |
