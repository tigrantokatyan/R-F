# Rich & Fabulous — static site

Deploy as-is. Everything is relative, no build step.

## GitHub Pages
1. Create a repo and upload the contents of this folder to the repo **root** (not inside a subfolder).
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`.
3. Site goes live at `https://<user>.github.io/<repo>/`.

## Files
- `index.html` — landing page
- `shop.html` — shop, product pages, bag, checkout
- `support.js` — runtime required by both pages
- `assets/` — images and videos

Notes: Google Fonts and the OpenStreetMap embed load from the internet, so the site needs a
connection for type and the map. Sign-in and currency are stored in the visitor's browser
(localStorage) — there is no server or payment processing.
