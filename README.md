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

1. **RFQ form** (`#contact`) — wired up to Formspree (`https://formspree.io/f/xeeypbla`).
   Submissions land in that Formspree account's dashboard and forward to whatever
   email address(es) are linked there. Free-tier Formspree caps at 50
   submissions/month with 30 days of history — check the dashboard periodically
   and export/upgrade if volume grows. To switch to a different backend, change
   the form's `action` in `index.html` and adjust the fetch call in
   `js/script.js` if the response format differs.
2. **Trusted clients logos** — the marquee shows Masan Consumer, Nestlé, and
   Abbott logos (`assets/clients/`) followed by placeholder monogram badges.
   Only include real logos here if there's an actual business relationship —
   using a company's trademark to imply endorsement or partnership without one
   can be legally risky. Swap the images in `assets/clients/` and the
   `clientLogos` array in `js/script.js` as the client list changes.
3. **PDF certificate** — the "View Test Report" button (Food Contact Approved
   card) links to `assets/docs/food-contact-nylon-fabric.pdf` (a real MNAQ test
   report). The Product Portfolio section also has a "Download Full Catalogue
   (PDF)" button linking to `assets/docs/filter-products-well-mat.pdf`. Swap
   either file (keep the same filename, or update the `href` in `index.html`)
   as documents are revised.
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
