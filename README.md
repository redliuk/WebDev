# Bio&Natura — sito vetrina

Next.js 15 (App Router) con **static export**: nessun database, nessun backend, output HTML statico in `out/`.

## Comandi

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera out/
npm start        # serve out/ in locale
```

## Struttura

- `app/` — pagine (`/`, `/chi-siamo/`, `/prodotti/`, `/contatti/`), `sitemap.ts`, `robots.ts`
- `components/` — Header, Footer, ContactForm, JSON-LD
- `lib/site.ts` — **unica fonte dei dati aziendali** (indirizzo, orari, telefono, servizi, marchi)
- `public/images/` — asset SVG segnaposto

## Da personalizzare prima della pubblicazione

1. `lib/site.ts` → `url` (dominio definitivo), `openingHours` + `openingHoursSchema` (orari reali, ora segnaposto), `geo`.
2. Form contatti → crea il form su [Formspree](https://formspree.io) e imposta `NEXT_PUBLIC_FORM_ENDPOINT` (vedi `.env.example`). Su Netlify il form funziona già via `data-netlify`.
3. Sostituisci gli SVG in `public/images/`, `public/og-image.svg` e `public/icon.svg` con foto reali (JPG/WebP ~1600px lato lungo).

## Deploy

**Vercel** (repo già collegato): framework Next.js, nessuna configurazione extra. Con `output: 'export'` Vercel pubblica i file statici.
**Netlify**: già configurato in `netlify.toml` (`npm run build` → `out`).

## SEO incluso

Meta title/description per pagina, Open Graph + Twitter Card, canonical, `sitemap.xml`, `robots.txt`, JSON-LD `HealthAndBeautyBusiness` (LocalBusiness) con indirizzo, orari, telefono, geo e social, più `BreadcrumbList` e `OfferCatalog`.
