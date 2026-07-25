# Well Mat Solutions — One-Page Website

Static one-page site for **Well Mat Solutions**, built from the site structure brief
(sticky header, smooth scroll, Industrial Minimalist style). Pure HTML/CSS/JS —
no build step, no framework, no backend required to view it.

## Structure

```
well-mat-site/
├── index.html        # All 9 sections (header, hero, about, industries,
│                      clients, products, quality, contact, footer)
├── css/
│   └── styles.css    # Design tokens + all styling, responsive to ~360px
└── js/
    └── script.js     # Mobile nav, product tabs, hero mesh animation,
                        clients marquee, RFQ form handling
```

## Design notes

- **Palette**: graphite/steel base with a petrol-teal accent (filtration/clarity)
  and an amber accent (industrial safety signage) for calls to action.
- **Type**: Oswald (display/headings), Inter (body), IBM Plex Mono (specs, years,
  tab numbers, eyebrows) — a technical/industrial pairing rather than a generic one.
- **Signature element**: a woven mesh motif (the hero canvas grid, the logo mark,
  the dotted list markers) — a direct nod to the woven filter fabric and mesh
  screens in the product line, not a decorative afterthought.
- Respects `prefers-reduced-motion`, has visible keyboard focus states, and is
  responsive down to small phone widths.

## Things to hook up before going live

1. **RFQ form** (`#contact`) — currently client-side only (shows a confirmation
   message, does not send email). Point it at a real form backend, e.g.:
   - [Formspree](https://formspree.io) — add `action="https://formspree.io/f/yourID"`
     and `method="POST"` to the `<form>`, and you can remove the JS `preventDefault`
     handler in `js/script.js`.
   - Or your own API endpoint (fetch call from `script.js`).
2. **Trusted clients logos** — the marquee currently shows placeholder monogram
   badges built from a name list at the top of `script.js` (`clientNames`).
   Swap in real client logos (as `<img>` tags) once you have permission to use them.
3. **PDF certificates** — the "View FDA Test Report" / "Download Quatest
   Certificate" buttons link to `#contact` as placeholders. Point their `href`
   at the actual PDF files once you have them (e.g. `assets/fda-report.pdf`).
4. **Favicon / social preview image** — a real favicon and Open Graph image are
   worth adding once brand assets exist.

## Uploading to GitHub

```bash
cd well-mat-site
git init
git add .
git commit -m "Initial Well Mat Solutions one-page site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Publishing with GitHub Pages (free hosting)

1. Push the repo as above.
2. On GitHub: **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder.
4. Save — your site will be live at
   `https://<your-username>.github.io/<your-repo>/` within a minute or two.

No build step is needed since this is plain HTML/CSS/JS.
