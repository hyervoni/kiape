# KIAPE — Landing

Landing page for KIAPE (premium floor installation in Mallorca). Built with Astro, zero client frameworks.
Analysis and visual direction: [`docs/PROPUESTA.md`](docs/PROPUESTA.md).

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
npx astro check   # type check
```

## Structure

```
src/
  config.ts              # business data + all editable copy (materials, steps, FAQs)
  layouts/Base.astro     # <head>: SEO, Open Graph, JSON-LD, optional GTM
  components/            # Header, Footer, MobileCta, SectionHead, ContactForm, Icon
  pages/index.astro      # landing sections
  pages/gracias.astro    # conversion page (noindex) for Ads / Meta
  pages/privacidad.astro
  scripts/main.ts        # scroll state, reveal, UTM capture, form, dataLayer events
  assets/img/            # source photos (optimised to AVIF/WebP at build)
public/                  # favicon, og.jpg (1200×630), robots.txt
```

## Environment (optional)

Copy `.env.example` to `.env`:

| Variable | Effect |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Form posts to Web3Forms (email to KIAPE). Without it, the form opens WhatsApp with a pre-filled message. |
| `PUBLIC_GTM_ID` | Enables the cookie banner. GTM loads **only after consent** (Consent Mode v2, basic mode). Configure GA4 / Google Ads / Meta Pixel inside GTM. |

## Tracking

`dataLayer` events: `cta_click`, `whatsapp_click`, `phone_click`, `email_click`, `material_click`, `lead_form_submit`, `generate_lead` (on `/gracias`).
UTM params, `gclid` and `fbclid` are captured per session and sent with the form.
Instagram bio link suggestion: `https://www.kiape.co/?utm_source=instagram&utm_medium=bio`.

## Before going live

- [ ] Replace placeholder photos in `src/assets/img/` (Unsplash) with real KIAPE projects — keep the same file names or update `config.ts` / `index.astro`. Regenerate `public/og.jpg`.
- [ ] Confirm WhatsApp number and Facebook URL in `src/config.ts` (Instagram: @kiape.suelos ✓).
- [ ] Replace the 6 Instagram grid images in `src/components/Instagram.astro` with real posts from @kiape.suelos (static images on purpose: the official embed is heavy and sets third-party cookies).
- [ ] Validate claims: supply + install, island-wide coverage, "respuesta en 24 h", samples at the visit ("Visita con muestras"), install times in FAQ.
- [ ] Fill `site.legal` in `src/config.ts` (holder, NIF, address) — used by Aviso legal and Privacidad.
- [ ] Add real testimonials to `testimonials` in `src/config.ts` — the section stays hidden while empty.
- [ ] Set `PUBLIC_WEB3FORMS_KEY` and `PUBLIC_GTM_ID` in the hosting environment.

## Brand

The logo (`src/components/Logo.astro`) is a vector redraw of KIAPE's existing mark. `public/favicon.svg` and `favicon.ico` use a simplified version that stays legible at 16–32 px.
