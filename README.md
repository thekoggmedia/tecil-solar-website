# TECIL Solar Website

Built with Astro 5 + Tailwind CSS 4

## Stack
- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4 + Custom CSS Variables
- **Fonts:** Barlow Condensed (display) + Inter (body) via Google Fonts

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

## Project Structure

```
src/
  layouts/
    Layout.astro        → Global shell (nav + footer)
  components/
    HeroSection.astro   → Homepage hero with orbital animation
    MarqueeStrip.astro  → Scrolling ticker (red or dark variant)
    AboutSection.astro  → Company info + stat cards
    ServicesPreview.astro
    AudienceSection.astro
    ProjectsPreview.astro
    BranchesPreview.astro
    CTASection.astro
  pages/
    index.astro         → Homepage
    services.astro      → Full services page
    products.astro      → Product portfolio
    projects.astro      → Project portfolio + timeline
    branches.astro      → All 7 branch locations
    contact.astro       → Contact form + info
  styles/
    global.css          → Brand tokens + utilities
```

## Brand Colors
- TECIL Red: `#CC1417`
- Solar Orange: `#E8601A`
- Midnight Black: `#111111`
- Clean White: `#FFFFFF`
- Amber Gold: `#C8960C`
- Deep Teal: `#006D77`

## Deploying
Works out of the box with Vercel, Netlify, or Cloudflare Pages.
