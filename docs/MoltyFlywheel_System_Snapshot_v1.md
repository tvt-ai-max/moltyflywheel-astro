# MoltyFlywheel System Snapshot v1

Last updated: 2026-04-03  
Purpose: fast project-level snapshot so future sessions can regain context without rereading the full codebase

## 1. What the site is now

MoltyFlywheel is now a dark editorial affiliate decision system with four main public layers:

- Homepage decision hub
- Programs directory + program review pages
- Blog editorial hub + blog detail pages
- Offers hub + offer detail pages

It should be treated as:

- directory-aware
- editorial-trust-driven
- affiliate decision-focused

It should not be treated as:

- a course platform
- a generic SaaS landing page
- a pure one-layer blog

## 2. Public route map

### Core hubs
- `/` → homepage decision hub
- `/programs` → affiliate programs directory
- `/blog` → editorial content hub
- `/offers` → static offer pages hub
- `/tools` → legacy tools/skills hub

### Detail layers
- `/programs/[program]` → program review / decision page
- `/blog/[slug]` → blog detail page
- `/offers/*` → static article-style offer pages
- `/p/[offer]` → content-driven offer page from `src/content/offers/`
- `/niche/[niche]` → niche landing page

## 3. Content inventory

- Blog posts: `18`
- Program entries: `20`
- Static offer pages: `7`
- Content-driven offer entries: `1`
- Niche pages: `6`

Local asset counts:

- Blog cover images: `21`
- Program logos: `10`

## 4. Current layout system

### Homepage
File:
- `src/pages/index.astro`

Role:
- routes visitors into Programs / Blog / Offers
- surfaces featured programs, reviews/comparisons, and offer spotlights

### Blog system
Files:
- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`
- `src/layouts/BlogLayout.astro`

Behavior:
- premium article shell
- left sidebar
- right TOC
- featured image rendering from `ogImage`
- disclosure block
- bottom CTA + newsletter CTA

### Programs system
Files:
- `src/pages/programs/index.astro`
- `src/pages/programs/[program].astro`
- `src/components/programs/ProgramLogo.astro`

Behavior:
- directory filters and search
- featured program row
- local logo/fallback system
- program detail pages act like affiliate decision pages

### Offers system
Files:
- `src/pages/offers/index.astro`
- `src/pages/offers/*.astro`
- `src/layouts/OfferArticleLayout.astro`
- `src/components/offers/OfferSidebar.astro`
- `src/pages/p/[offer].astro`

Behavior:
- static offer pages now follow blog-style article rhythm
- content-driven offer route renders markdown body
- offer pages are designed to support decision-first CTA logic

## 5. Important schema reality

### `blog`
Key fields:
- `title`
- `description`
- `pubDate`
- `category`
- `tags`
- `affiliatePrograms`
- `featured`
- `ogImage`
- legacy `og_image`

### `programs`
Key fields:
- `name`
- `description`
- `logo`
- `affiliateUrl`
- `commission.type`
- `commission.rate`
- `commission.cookieDuration`
- `category`
- `rating`
- `featured`

### `offers`
Key fields:
- `title`
- `headline`
- `targetProgram`
- `cta`
- `ctaUrl`
- `draft`

## 6. Offer content system

Source-of-truth order:

1. `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`
2. `src/content/_engine/offer-page-template-v1.md`
3. real offer page or content implementation
4. `docs/MoltyFlywheel_Offer_QA_Checklist_v1.md`

Important:
- do not draft new offer pages from intuition only
- use the framework first, then the execution template

## 7. Tools taxonomy system

Approved normalized assets:

- `src/data/tools/directory-schema-v1.md`
- `src/data/tools/migration-map-v1.json`

Current state:
- taxonomy work is ready for normalized migration
- public `/tools` route is still legacy and not yet fully refactored to the new schema

## 8. Current implementation themes that should be preserved

- dark editorial rhythm
- decision-first UX
- branded fallback states for missing images/logos
- practical CTA hierarchy
- no hype-heavy sales language
- use real content data where possible

## 9. Known follow-up items

- Some older offer pages still contain links to `/niches`, but the site route is `/niche/[niche]`.
- Tools detail routing is still placeholder and not synced to the normalized taxonomy work yet.
- The static offers layer and the content-driven `/p/[offer]` layer should continue converging instead of drifting into separate systems.

## 10. Recommended re-entry path for future sessions

If you return later, read in this order:

1. `docs/CODEBASE_MEMORY.md`
2. `docs/MoltyFlywheel_System_Snapshot_v1.md`
3. `README.md`
4. then only the files directly related to the new task
