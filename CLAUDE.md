# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📋 Overview

This is the TECIL Solar Website built with Astro 5 and Tailwind CSS 4. It's a live business website for Tecil Solar (Nigeria) deployed to Cloudflare Pages, with automatic deployment on every push to the `main` branch.

## ⚠️ Important Guidelines for Working on this Live Site

- **Never run `git push`** - The human maintains control of deployments and pushes after checking changes on localhost.
- **Never delete or rewrite files wholesale** - Always show diffs and explain changes before making modifications.
- **Make incremental changes** - Prefer small, focused edits over large refactors.
- **When creating new pages** (especially for SEO location pages like `/solar-installation-in-abuja`), match existing page conventions exactly.

## 🛠️ Development Commands

### Common Tasks
- `npm install` - Install dependencies
- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build for production (output to `dist/`)
- `npm run preview` - Preview production build locally

### Component Development
Astro components use the `.astro` extension and can contain:
- HTML/template markup
- TypeScript/JavaScript logic in `---` frontmatter blocks
- Scoped or global CSS

### File Types
- `.astro` - Main component files (pages, components, layouts)
- `.css` - Stylesheets (Tailwind utilities in `styles/global.css`)
- `.mjs` - Configuration files (ES modules)

## 🏗️ Project Architecture

### Core Structure
```
src/
├── layouts/           # Global layout components (nav, footer)
├── components/        # Reusable UI sections and widgets
├── pages/             # Route-based pages (auto-routed by filename)
└── styles/            # Global styles and CSS variables
```

### Key Directories
- **layouts/**: Contains `Layout.astro` - the global shell with navigation and footer used site-wide. Accepts `title`, `description`, and `page` props for SEO and customization.
- **components/**: Atomic and section-level components:
  - Section components (HeroSection, AboutSection, ServicesPreview, etc.)
  - UI widgets (MarqueeStrip, LoadCalculator, ProductModal, etc.)
  - Sliders and galleries (ImageSlider, ProjectGallerySlider, etc.)
- **pages/**: Each `.astro` file becomes a route:
  - `index.astro` → homepage
  - `services.astro` → /services
  - `products.astro` → /products
  - `projects.astro` → /projects
  - `branches.astro` → /branches
  - `contact.astro` → /contact
  - **SEO location pages** (in progress): e.g., `solar-installation-in-abuja.astro` → `/solar-installation-in-abuja` (must match existing page conventions exactly)

### Styling Approach
- **Tailwind CSS 4** configured via `@tailwindcss/vite` plugin (do NOT edit `astro.config.mjs` without asking)
- Custom CSS variables defined in `src/styles/global.css` for brand colors:
  - TECIL Red: `#CC1417`
  - Solar Orange: `#E8601A`
  - Midnight Black: `#111111`
  - Clean White: `#FFFFFF`
  - Amber Gold: `#C8960C`
  - Deep Teal: `#006D77`
- Fonts: Barlow Condensed (headings) and Inter (body) via Google Fonts/@fontsource

### Data & Content
- Content is primarily hardcoded in components for this marketing site
- Images likely stored in `public/` directory (not shown in initial scan)
- No external CMS or data fetching in current implementation

### Deployment
- **Astro configuration**: `output: "server"` and `@astrojs/cloudflare` adapter
- **Automatic deployment**: Pushes to `main` branch trigger automatic deployment to Cloudflare Pages
- **Sitemap**: Generated via `@astrojs/sitemap` with site set to `https://www.tecilsolar.com` (do NOT edit `astro.config.mjs` without asking)
- HTML compression enabled

## 🔧 Claude Code Specifics

### RTK Integration
This repository uses the Rust Token Killer (RTK) hook to optimize token usage:
- RTK automatically prefixes bash commands to reduce output verbosity
- Use `rtk gain` to see token savings analytics
- Commands like `git status` are transparently rewritten as `rtk git status`

### Recommended Workflow
1. Edit Astro components in `src/` directory
2. Test changes with `npm run dev`
3. Build preview with `npm run build && npm run preview`
4. Components follow Astro's island architecture - minimal client-side JS by default

### Component Patterns
- Sections typically export props for customization (see existing components)
- Reusable UI elements follow atomic design principles
- Animation/interaction handled via CSS (Tailwind) or minimal client-side JS

## 📝 File Conventions
- Component filenames: PascalCase (e.g., `HeroSection.astro`)
- Page filenames: lowercase matching route (e.g., `about.astro` would be `/about`)
- CSS utilities: Tailwind classes with occasional custom CSS in `global.css`
- Configuration: ES modules (`.mjs`) for Astro, Tailwind, TypeScript configs
- **Critical**: Do NOT edit `astro.config.mjs` without explicit permission - it controls deployment, Tailwind, sitemap, and other critical settings.