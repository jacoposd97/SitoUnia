# Unia Games Landing Page — Version 0.2

python3 -m http.server 8000

ctrl+F5 per refreshare le cache del borwser

Bilingual, accessible and responsive starter landing page for Unia Games.

## Folder structure

```text
unia-games-landing-v02/
├── index.html
├── it/
│   ├── index.html
│   └── accessibility/
│       └── index.html
├── accessibility/
│   └── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon.svg
│   ├── logo-placeholder.svg
│   └── social-preview.svg
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── open-in-chrome.bat
└── README.md
```

## Version 0.2 improvements

- Added Project section.
- Added Accessibility section.
- Added Partners and investors section.
- Expanded Contact section with four contact categories.
- Added bilingual Accessibility Statement pages.
- Added footer links.
- Added SEO metadata.
- Added canonical URLs.
- Added hreflang metadata.
- Added Open Graph metadata for social previews.
- Added Twitter/X card metadata.
- Added placeholder SVG favicon.
- Added placeholder SVG logo mark.
- Added placeholder SVG social preview image.
- Added `robots.txt`.
- Added `sitemap.xml`.
- Added `site.webmanifest`.
- Improved responsive layout for iPhone and Android.
- Improved language selector behavior with Escape and outside-click close.
- Kept native HTML elements for accessibility.

## Language structure

- English homepage: `/`
- Italian homepage: `/it/`
- English accessibility page: `/accessibility/`
- Italian accessibility page: `/it/accessibility/`

## Local preview

### Standard method

Double-click `index.html`.

### Open directly in Chrome on Windows

Double-click:

```text
open-in-chrome.bat
```

If Chrome is not installed in the standard path, open Chrome manually and drag `index.html` into the Chrome window.

## What to edit

### English homepage

Edit:

```text
index.html
```

### Italian homepage

Edit:

```text
it/index.html
```

### English accessibility page

Edit:

```text
accessibility/index.html
```

### Italian accessibility page

Edit:

```text
it/accessibility/index.html
```

### Colors, spacing and layout

Edit:

```text
css/styles.css
```

The main color variables are at the top of the file:

```css
:root {
  --bg: #080812;
  --surface: #121225;
  --text: #f7f7ff;
  --accent: #f0c96a;
}
```

### Minimal JavaScript

Edit:

```text
js/main.js
```

JavaScript currently manages only:

- current year in the footer
- accessible light/dark theme toggle
- saved theme preference in the browser
- closing the language menu with Escape or outside click

## Replacing the logo

Put the final logo files inside:

```text
assets/
```

Recommended files:

```text
logo-dark.svg
logo-light.svg
logo-icon.svg
```

Then update the `img` element in `index.html`, `it/index.html`, `accessibility/index.html` and `it/accessibility/index.html`.

## Contact emails

The current placeholder emails are:

```text
info@uniagames.com
partnerships@uniagames.com
accessibility@uniagames.com
press@uniagames.com
```

Replace or remove them when the final email setup is active.

## Social links

Replace the placeholder `href="#social-status"` values with real URLs when the channels are active.

Current placeholders:

- Discord
- Instagram
- LinkedIn
- Facebook
- Steam — Echos of Void

## SEO notes

Before publishing, update these if needed:

- Page titles
- Meta descriptions
- Open Graph descriptions
- Social preview image
- `sitemap.xml` last modified dates
- canonical URLs if the final domain structure changes

## Accessibility checklist

Before publishing or after graphic design changes, check:

- Each page has one `h1`.
- The language selector uses real links.
- The English pages keep `lang="en"`.
- The Italian pages keep `lang="it"`.
- Headings remain in a logical order.
- Links have meaningful names.
- Images added inside `assets/` have useful `alt` text in HTML.
- Keyboard navigation works with Tab and Shift + Tab.
- Focus outline is always visible.
- Text contrast remains high.
- Touch targets remain large enough on phones.
- No autoplay video or audio is added.
- No accessibility overlay is used as a substitute for good code.

## Publishing on Cloudflare Pages with Direct Upload

1. Open Cloudflare Dashboard.
2. Go to `Workers & Pages`.
3. Choose `Create application`.
4. Choose `Pages`.
5. Choose `Upload assets` or `Direct Upload`.
6. Upload this folder or the ZIP file.
7. After the first deploy, open the project.
8. Go to `Custom domains`.
9. Add:
   - `uniagames.com`
   - `www.uniagames.com`

## Recommended workflow later

For easier updates:

1. Put this folder in a GitHub repository.
2. Connect Cloudflare Pages to GitHub.
3. Every change pushed to GitHub will redeploy the site automatically.
