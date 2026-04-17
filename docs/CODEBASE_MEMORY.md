# MoltyFlywheel Codebase Memory

Muc dich:
- Luu bo nho lam viec cho repo nay de khong phai doc lai toan bo codebase moi lan.
- Moi lan quay lai, uu tien doc file nay truoc, sau do chi doi chieu cac file da thay doi.

Quy uoc cap nhat:
- Append them mot muc log moi cho moi lan doc lon, review lon, hoac thay doi kien truc dang ke.
- Ghi ngay, pham vi da doc, tom tat kien truc, va cac diem can chu y.
- Neu co thay doi lon o routing, content model, affiliate flow, hoac build system, cap nhat phan "Current Snapshot".

## Current Snapshot

Last updated: 2026-04-17

### Stack
- Astro 6 static site
- Tailwind CSS v4 via Vite plugin
- Content Collections for `blog`, `programs`, `offers`, `niches`
- Static hosting target configured for `https://www.moltyflywheel.com`

### Primary Structure
- `src/pages`: public routes
- `src/layouts`: shared page shells
- `src/components`: nav, SEO, affiliate UI, blog UI
- `src/content`: markdown content powering dynamic routes
- `src/data/skills.json`: data source for tools/skills hub
- `src/content/_engine`: keyword clusters and content templates
- `seo-writer`: local-only SEO/GEO writing workflow and references
- `public/_redirects`: affiliate redirect mapping for `/go/*`
- `public/robots.txt`: crawl rules and sitemap declaration

### Public Site Model
- Homepage is now a decision hub that routes traffic into `Programs`, `Blog`, and `Offers`.
- Blog pages are generated from `src/content/blog` via `src/pages/blog/[slug].astro`.
- Blog index is a premium editorial hub with category filters, search, featured cards, and real thumbnail/fallback handling.
- Header now includes a real search entry point routed to `src/pages/search/index.astro`.
- Program review pages are generated from `src/content/programs` via `src/pages/programs/[program].astro`.
- Programs index is a dark directory page with filters, search, featured programs, and local logo/fallback rendering.
- Program detail pages are now decision-oriented review pages with hero, scorecard, sticky sidebar, alternatives, FAQ, and richer CTA structure.
- Niche pages are generated from `src/content/niches` via `src/pages/niche/[niche].astro`.
- Offer landing pages are generated from `src/content/offers` via `src/pages/p/[offer].astro`, and that route now renders markdown body content.
- Static offer pages live under `src/pages/offers/*.astro` and now share an article-style layout aligned to the blog reading system.
- `/offers/` now exists as a hub route at `src/pages/offers/index.astro`.
- Tools hub is driven by `src/data/skills.json` plus local interpretation in `src/pages/tools/index.astro`.
- Tools now include dedicated internal detail pages for `Higgsfield` and `Abacus AI`.
- Canonical, sitemap, and robots have been standardized to the `www` host.

### Important Files
- `src/content.config.ts`: collection schemas
- `src/layouts/BlogLayout.astro`: premium blog reading layout with TOC, read-time, CTA
- `src/pages/index.astro`: homepage decision hub for Programs / Blog / Offers
- `src/pages/blog/index.astro`: category filter + client-side search
- `src/pages/programs/index.astro`: program directory
- `src/pages/programs/[program].astro`: program review template
- `src/layouts/OfferArticleLayout.astro`: shared article-style layout for `/offers/*`
- `src/components/offers/OfferSidebar.astro`: sticky sidebar for static offer pages
- `src/pages/offers/index.astro`: offers hub
- `src/pages/p/[offer].astro`: content-driven offer route
- `src/content/_engine/offer-page-template-v1.md`: execution template for offer content
- `src/pages/tools/index.astro`: tools and skills operating library
- `src/pages/tools/higgsfield.astro`: tool detail page
- `src/pages/tools/abacus-ai.astro`: tool detail page
- `src/pages/search/index.astro`: lightweight site search page
- `src/components/nav/Header.astro`: shared nav including search entry point
- `src/components/seo/SEO.astro`: canonical/OG meta generation
- `astro.config.mjs`: canonical site host
- `seo-writer/SKILL.md`: required workflow for long-form SEO/GEO content requests
- `src/content/_engine/seo-keyword-clusters.json`: content roadmap
- `src/data/tools/directory-schema-v1.md`: approved tools directory schema spec
- `src/data/tools/migration-map-v1.json`: migration map from legacy 52-record tools dataset
- `docs/MoltyFlywheel_System_Snapshot_v1.md`: higher-level project snapshot for future sessions

### Content Inventory At Last Read
- Blog posts: 43
- Program reviews: 20
- Offer markdown files: 2
- Static offer pages: 7
- Niche pages: 6
- Blog cover images: 48
- Program logo files: 10

### Behavioral Notes
- Site is content-marketing-first and affiliate-funnel-driven.
- Blog UX includes left sidebar, right TOC, reading progress, share tools, disclosure, affiliate CTA, newsletter CTA.
- Offer pages under `/offers/*` now intentionally mirror the blog detail reading experience while shifting content blocks toward decision support and CTA fit.
- Affiliate buttons route internally to `/go/[program]`, then redirect via `public/_redirects`.
- `SEO.astro` supports `ogImage` with fallback from legacy `og_image`.
- Canonical URLs should resolve to `https://www.moltyflywheel.com/...` regardless of incoming host.
- `public/robots.txt` and Astro sitemap output must stay aligned to the `www` host.
- Program cards and program detail pages use local logos where available and a branded fallback otherwise.
- Homepage review/comparison cards now render blog thumbnails from `ogImage` and fall back cleanly if needed.
- This repo should be treated as SEO-first by default: prefer canonical safety, stable public URLs, internal-link clarity, and search-intent consistency over cosmetic shortcuts.

### Known Mismatches / Follow-up Checks
- Several offer pages link to `/niches`, but the repo currently exposes `/niche/[niche]`, not `/niches`.
- `src/pages/tools/[skill].astro` only defines 4 static placeholder routes and is not synced with `src/data/skills.json`.
- The content-driven offer system (`/p/[offer]`) and the static `/offers/*` layer now both exist; future work should keep their UX and copy system aligned instead of letting them drift.
- GSC verification and host unification are in place, but Google recrawl/index consolidation still depends on time and reindexing, not more repo changes alone.

### Verification At Last Read
- `npm run build` succeeded on 2026-04-03.
- Static build generated 65 pages.

## Read Log

### 2026-04-02 - Full codebase read
- Read root config, README, Astro config, Tailwind config, TS config.
- Read all layouts and shared components.
- Read main route files in `src/pages`, including dynamic routes.
- Read content collection schemas and scanned all markdown content collections.
- Read `seo-writer` workflow and `_engine` planning/template files.
- Confirmed project builds successfully with `npm run build`.
- Outcome: enough context captured to avoid rereading the whole repo next time unless architecture changes significantly.

### 2026-04-03 - AI tools taxonomy operationalization
- Audited `src/data/skills.json` as the current 52-record tools dataset.
- Confirmed current tools hub still uses legacy category grouping and placeholder detail routing.
- Added `docs/AI_Tools_Directory_Schema_v1.md` as the approved schema spec for future normalized tools records.
- Added `docs/AI_Tools_Migration_Map_v1.json` mapping all 52 legacy records to the new taxonomy with entity type, primary category, secondary category, tags, cleanup flags, and overlap groups.
- Outcome: taxonomy is now operationalized enough to support a future normalized `tools` collection and frontend migration without redoing the classification audit.

### 2026-04-03 - Full implementation sweep snapshot
- Homepage was redesigned into a premium dark decision hub centered on Programs, Blog, and Offers.
- `/blog` index was redesigned into an editorial content hub with search, category filters, featured cards, newsletter blocks, and fixed thumbnail rendering.
- Blog detail pages kept the same core layout but now render featured images correctly when `ogImage` exists.
- All current blog posts were given local cover assets in `public/images/blog/`, and homepage/blog index now consume them.
- `/programs` index was redesigned into a stronger directory page, and program detail pages were rebuilt as decision-oriented review pages.
- A local program logo system was added with assets in `public/images/programs/logos/` plus shared fallback handling.
- Wave imports expanded `src/content/programs/` to 20 program entries, with matching `/go/*` redirects where needed.
- Offer system was formalized into:
  - `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`
  - `src/content/_engine/offer-page-template-v1.md`
  - normalized `src/content/offers/claude-flywheel-starter.md`
  - content-driven route `/p/[offer]` that now renders markdown
  - article-style `/offers/*` pages aligned with the blog detail system
  - `/offers/` hub route
- Navigation was updated so Home and Offers appear in shared site navigation, including offer layouts.
- Outcome: the repo now has a stable public content system snapshot that should be read first before future route, content, or design work.

### 2026-04-17 - SEO-first memory refresh and host consolidation snapshot
- Canonical host was standardized to `https://www.moltyflywheel.com` in Astro config, SEO component output, `robots.txt`, and sitemap generation.
- Google Search Console HTML verification tag was added and verified successfully.
- Header search entry point and dedicated `/search/` page are live and part of the public IA.
- Tools layer expanded beyond placeholder routing with real internal detail pages for `Higgsfield` and `Abacus AI`.
- Content inventory increased significantly through scheduled article production; counts in `README.md` and this memory file were refreshed.
- Operational rule clarified: future agents should treat the repo as SEO-first by default and protect canonical, sitemap, robots, route clarity, and internal-link integrity before shipping changes.
