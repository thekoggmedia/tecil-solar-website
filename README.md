# TECIL Solar Website

Nigeria's leading solar and inverter specialists — end-to-end renewable energy solutions.
Live at **https://tecil-solar-website.pages.dev** (Cloudflare Pages, SSR).

Built with Astro 5 + Tailwind CSS 4.

## Stack
- **Framework:** Astro 5 (server output, `@astrojs/cloudflare` adapter)
- **Styling:** Tailwind CSS 4 + Custom CSS Variables
- **Fonts:** Nunito Sans (variable, self-hosted in `public/fonts/`)
- **Analytics:** Plausible
- **Forms:** Turnstile + Resend transactional email (`/api/contact`)
- **Products:** Live catalogue fetched client-side from a Google Sheet (69 products)
- **Extras:** WhatsApp cart checkout, load calculator, product modal, SEO schema, sitemap

## Pages
| Route | Description |
|---|---|
| `/` | Homepage (hero slider, services, audiences, projects, testimonials) |
| `/services` | Full services page (anchor-linked sections) |
| `/products` | Live product catalogue (Google Sheets feed) + filter/search |
| `/projects` | Project portfolio + timeline |
| `/branches` | All 8 branch locations with maps |
| `/contact` | Contact form (Turnstile-protected, Resend delivery) |
| `/team` | Team / about page |
| `/solar-installation-in-abuja` | SEO landing page (LocalBusiness + FAQ schema) |

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` for local development.
Production values live in Cloudflare Pages environment variables:
`RESEND_API_KEY`, `CONTACT_EMAIL`, `PUBLIC_SITE_URL`, `PUBLIC_WA_NUMBER`,
`PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`.

## Project Structure

```
src/
  layouts/
    Layout.astro        → Global shell (nav + footer + Plausible)
  components/           → Hero, sliders, cart drawer, load calculator, product modal, etc.
  data/
    site.ts             → Central content: services, products, projects, branches, brands
    team.ts             → Staff profiles
  lib/
    cart.js             → localStorage cart
    products.js         → Google Sheets catalogue parser
    security/           → rate limit, sanitization, Turnstile verification
    seo/                → schema.org helpers
  middleware.ts         → Security headers + CSP
  pages/
    index.astro         → Homepage
    services.astro      → Full services page
    products.astro      → Product portfolio
    projects.astro      → Project portfolio + timeline
    branches.astro      → All 8 branch locations
    contact.astro       → Contact form + info
    team.astro          → Team page
    solar-installation-in-abuja.astro → SEO landing page
    404.astro           → Branded not-found page
    api/contact.ts      → Contact form endpoint (Resend)
    api/og.png.ts       → OG image redirect
  scripts/
    contact-form.ts     → Client-side form logic
  styles/               → tokens, base, layout, typography, transitions, global
```

## Brand Colors
- TECIL Red: `#CC1417`
- Solar Orange: `#E8601A`
- Midnight Black: `#111111`
- Clean White: `#FFFFFF`
- Amber Gold: `#C8960C`
- Deep Teal: `#006D77`

## Deploy

Push to `main` → Cloudflare Pages builds automatically.
