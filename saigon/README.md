# Saigon Bistro Langenfeld — Website

Statische, mehrseitige Website für das Saigon Bistro (Langenfeld, Rheinland). Reines HTML/CSS/JS
ohne Build-Schritt und ohne Abhängigkeiten — kann direkt über GitHub Pages gehostet werden.

## Seiten

- `index.html` — Startseite: Hero, Restaurant-Fotos, Google-Rezensionen, Bildergalerie (Slider) der
  Gerichte **und Reservierungsformular** (`#reservierung`)
- `speisekarte.html` — Vollständige, filterbare Speisekarte
- `anfahrt.html` — Anfahrtsbeschreibung mit Karte

## Lokal ansehen

Kein Server nötig — einfach `index.html` im Browser öffnen. Für eine realistischere Vorschau
(empfohlen, da manche Browser lokale `fetch`-Aufrufe blockieren) reicht ein einfacher lokaler
Server, z. B.:

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` öffnen.

## Auf GitHub veröffentlichen (GitHub Pages)

1. Neues Repository auf GitHub anlegen (z. B. `saigon-bistro-website`), **ohne** README/License,
   damit es leer ist.
2. In diesem Ordner:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<dein-benutzername>/<repo-name>.git
   git push -u origin main
   ```

3. Auf GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   Branch `main`, Ordner `/ (root)` auswählen, speichern.
4. Nach 1–2 Minuten ist die Seite unter `https://<dein-benutzername>.github.io/<repo-name>/`
   erreichbar.

Wer eine eigene Domain (z. B. `saigon-bistro-langenfeld.de`) verwenden möchte, trägt sie unter
**Settings → Pages → Custom domain** ein und richtet beim Domain-Anbieter einen CNAME/A-Record
auf GitHub Pages ein.

### Als Unterseite der eigenen Homepage einbinden

Alle Links und Bild-/CSS-/JS-Pfade in diesem Projekt sind **relativ** (z. B. `href="speisekarte.html"`,
`src="images/logo.webp"`, nicht `/images/...`). Der Ordner funktioniert deshalb unverändert, egal ob er
unter der Domain-Wurzel liegt oder als Unterordner einer bestehenden Seite eingebunden wird, z. B.:

```
https://ihre-domain.de/saigon-bistro/index.html
https://ihre-domain.de/saigon-bistro/speisekarte.html
```

Einfach den kompletten `website/`-Ordner (Inhalt, nicht den Ordner selbst) per FTP/SFTP oder über das
Hosting-Panel in einen Unterordner (z. B. `saigon-bistro/`) auf dem bestehenden Webspace hochladen.

## Vor Suchmaschinen & Bots verbergen (aktuell aktiv)

Die Seite ist momentan **nicht für Suchmaschinen/Crawler bestimmt** — sie soll erst ausgewählten Kunden
per direktem Link gezeigt werden, bevor sie öffentlich auffindbar wird. Dafür ist bereits eingerichtet:

- **`<meta name="robots" content="noindex, nofollow">`** in allen drei HTML-Seiten — seriöse Suchmaschinen
  (Google, Bing, …) indexieren die Seite dadurch nicht und folgen auch keinen Links von ihr aus. Das
  funktioniert unabhängig davon, unter welchem Pfad die Seite liegt (Domain-Wurzel oder Unterordner).
- **`robots.txt`** (im Ordner enthalten) mit `Disallow: /` — das greift allerdings nur, wenn diese Datei
  am **Domain-Root** liegt (z. B. bei einem eigenen GitHub-Pages-Auftritt). Wird die Seite stattdessen als
  Unterordner in eine bestehende Homepage eingebunden, hat deren eigene, bereits vorhandene `robots.txt`
  Vorrang — in dem Fall bitte dort zusätzlich eine Zeile
  ```
  Disallow: /saigon-bistro/
  ```
  (Pfad an den tatsächlichen Unterordner anpassen) ergänzen. Die mitgelieferte `robots.txt` kann dann
  gelöscht oder ignoriert werden.
- Über einen direkten Link (z. B. per QR-Code oder E-Mail) ist die Seite trotzdem für jeden normal
  erreichbar — `noindex` blockiert nur das Auffinden über Suchmaschinen, nicht den Zugriff selbst.

**Sobald die Seite öffentlich gehen soll:** die Zeile `<meta name="robots" content="noindex, nofollow">`
in allen drei HTML-Dateien entfernen (oder auf `index, follow` ändern) und ggf. die `Disallow`-Zeile aus
der (eigenen oder eingebundenen) `robots.txt` wieder streichen.

## Reservierungsformular aktivieren (wichtig!)

Die Seite ist rein statisch (kein eigener Server) — GitHub Pages kann daher keine Formulare selbst
entgegennehmen. Das Formular unter `index.html#reservierung` ist deshalb für
**[Formspree](https://formspree.io)** vorbereitet, einen kostenlosen Dienst, der Formular-Absendungen
direkt per E-Mail zustellt (kostenloser Plan: 50 Absendungen/Monat, ausreichend für die meisten
kleinen Restaurants).

1. Kostenloses Konto auf [formspree.io](https://formspree.io) anlegen.
2. Ein neues Formular erstellen und die Ziel-E-Mail-Adresse hinterlegen (z. B. die echte
   Restaurant-E-Mail-Adresse).
3. Formspree zeigt eine Endpunkt-URL wie `https://formspree.io/f/abcdEFGH` an.
4. In `index.html` die Zeile

   ```html
   <form data-reservation-form data-fallback-email="info@saigon-bistro-langenfeld.de"
         action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

   anpassen: `YOUR_FORM_ID` durch die eigene Formspree-ID ersetzen.

Solange kein echtes Formular hinterlegt ist, öffnet der "Reservierung anfragen"-Button automatisch
das E-Mail-Programm des Besuchers mit den ausgefüllten Angaben (Fallback) — das Formular funktioniert
also so oder so.

**Wichtig:** Die im Footer und im Kontaktbereich verwendete Adresse `info@saigon-bistro-langenfeld.de`
ist ein Platzhalter (im Chat wurde keine echte E-Mail-Adresse übergeben). Bitte in allen HTML-Dateien
durch die tatsächliche E-Mail-Adresse des Bistros ersetzen (Suche nach `info@saigon-bistro-langenfeld.de`).

## Inhalte, die noch ergänzt werden sollten

- **Echte E-Mail-Adresse** (aktuell Platzhalter, siehe oben)
- **Öffnungszeiten** — wurden nicht bereitgestellt und sind daher bewusst nicht auf der Seite
  aufgeführt, um keine falschen Angaben zu machen. Am einfachsten in `index.html` im Bereich
  „Kontakt & Adresse" ergänzen.
- **Telefonnummer** — bisher ist nur die Fax-Nummer (0800 202 07 702) bekannt.
- Die Speisekarten-Preise wurden aus den gescannten Menükarten übertragen; bei mehreren Gerichten
  mit gleicher „wahlweise dazu"-Auswahl (Hühnerfleisch/Rind/Ente/Garnelen/Gemüse/Tofu/vegane
  Sesam-Ente) wurde die auf der Karte wiederkehrende Standard-Preistabelle verwendet. Bitte vor
  Veröffentlichung mit der aktuellen Karte gegenprüfen.

## Struktur

```
website/
├── index.html
├── speisekarte.html
├── anfahrt.html
├── robots.txt        (nur wirksam, wenn am Domain-Root gehostet — siehe oben)
├── css/style.css
├── js/main.js
└── images/
    ├── logo.webp
    ├── restaurant-1.webp / restaurant-2.webp   (Innenraum)
    └── dish-*.webp                             (Gerichte, auch im Startseiten-Slider)
```

## Technik

- Kein Framework, kein Build-Schritt — reines HTML/CSS/JS, läuft auf jedem Static-Hosting
  (GitHub Pages, Netlify, eigener Webspace …).
- Schriften: [Fraunces](https://fonts.google.com/specimen/Fraunces) (Überschriften) und
  [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro) (Fließtext), von Google Fonts
  eingebunden.
- Kartenanzeige über den offiziellen [OpenStreetMap](https://www.openstreetmap.org)-Iframe-Embed
  (kein API-Key, keine Google-Cookies/-Drittanbieterübertragung — daher auch kein separater
  Datenschutz-Hinweis für die Karte nötig). Koordinaten wurden per OSM-Nominatim für „Zum Stadion 71,
  40764 Langenfeld" ermittelt.
