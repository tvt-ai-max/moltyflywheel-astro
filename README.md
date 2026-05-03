# moltyflywheel.com

Astro 6 affiliate marketing site with automated daily blog publishing via Claude Code remote agents.

**For AI agents working in this repo: read `CLAUDE.md` first.**

---

## Automated Daily Blog System

A remote Claude Code agent (CCR) runs every day at **8:00 AM Saigon** and writes the scheduled blog post from `docs/May_2026_Content_Plan_v1.md`.

| | |
|---|---|
| **Routine ID** | `trig_019jfYfyTxgG5qSNsF2CWgsp` |
| **Schedule** | Daily 8:00 AM Saigon (`0 1 * * *` UTC) |
| **Output** | Draft post pushed to `src/content/blog/` |
| **Manage** | https://claude.ai/code/routines/trig_019jfYfyTxgG5qSNsF2CWgsp |

### Blog post schema (CRITICAL — build fails if violated)

```yaml
category: guide | review | comparison | case-study | tutorial  # ONLY these 5 values
description: "Max 160 characters"                              # count carefully
draft: true                                                    # always for new posts
```

### Cover image workflow

After the agent pushes a draft, generate the cover manually via Canva MCP:
1. Open repo in Claude Code
2. Run: "Create and push cover image for [date] blog post"
3. Claude generates via Canva → converts to WebP → saves to `public/images/blog/[slug]-cover.webp` → pushes

### Publish workflow

`scripts/auto_publish.sh` handles flipping `draft: true → false` on the scheduled date.
Deploy: GitHub Actions → Cloudflare Pages.

---

## SEO-First Rule

This repo is SEO-first by default.

Before shipping route, content, image, metadata, or layout changes, check:
- canonical and host consistency
- title, description, and indexability
- internal linking and route clarity
- robots and sitemap compatibility
- image/OG compatibility when assets are involved

Current canonical host:
- `https://www.moltyflywheel.com`

Do not introduce changes that weaken:
- `www` canonical consistency
- sitemap/robots alignment
- search intent clarity
- internal-link structure
- stable public URL patterns

If there is a tradeoff between a quick UI shortcut and SEO integrity, prefer the SEO-safe path.

---

## 🚀 Local SEO Writing Workflow

This project features a dedicated local skill pack for content creation, located in the `seo-writer/` directory. This system is designed to produce high-quality, "Answer-first" content that is optimized for both traditional search engines (Google) and AI-powered search (GEO/SGE).

### **Workflow Rules for AI Agents**

Whenever a request is made for **blog posts, SEO articles, GEO articles, tutorials, comparisons, or answer-first content**, the following files **MUST** be read and applied in order before drafting:

1. **`seo-writer/SKILL.md`**: The primary workflow source and content framework.
2. **`seo-writer/references/blog-template.md`**: The standard structure for long-form content.
3. **`seo-writer/references/cta-blocks.md`**: Rules for UTM tracking and CTA levels (Soft/Medium/Strong).
4. **`seo-writer/references/internal-linking-rules.md`**: Guidelines for building topical authority through internal links.
5. **Language Rule**: For `moltyflywheel.com`, blog content must be written in English by default. Do not output Vietnamese unless the task explicitly asks for Vietnamese or a bilingual rollout has been implemented.

## Blog Writing Rule

All production blog posts must follow the internal writing workflow before drafting begins.

Required source files to read first:
- `seo-writer/SKILL.md`
- `seo-writer/references/blog-template.md`
- `seo-writer/references/cta-blocks.md`
- `seo-writer/references/internal-linking-rules.md`
- `docs/Blog_Writing_Prompt_Template_v1.md`

Default language rule:
- Blog content must be written in English by default.
- Do not output Vietnamese unless the task explicitly asks for Vietnamese or a bilingual rollout has been implemented.

Execution rule:
- A blog task is not complete until the final file is created, build validation passes, and Git push succeeds.

## Program Page Writing Rule

All production program pages must follow the current Programs system before drafting begins.

Required source files to read first:
- `src/content.config.ts`
- `src/pages/programs/index.astro`
- `src/pages/programs/[program].astro`
- `docs/Program_Page_Writing_Prompt_Template_v1.md`

Execution rule:
- A program-page task is not complete until the content file is created or updated, build validation passes, and Git push succeeds.

## Offer Page Writing Rule

All production offer pages must follow the current offer framework and execution layer before drafting begins.

Required source files to read first:
- `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`
- `src/content/_engine/offer-page-template-v1.md`
- `docs/Offer_Page_Writing_Prompt_Template_v1.md`

Execution rule:
- An offer-page task is not complete until the content file is created or updated, build validation passes, and Git push succeeds.

---

## 🛠️ Project Setup & Commands

This project is built using [Astro](https://astro.build).

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

---

## 🔒 Local-Only Skills

The `seo-writer/` folder contains proprietary writing rules and is configured to be **local-only**. It is ignored by Git and should not be pushed to the public repository.

---

## 🧠 Codebase Memory

To avoid re-reading the entire repository on every session, this project maintains a local codebase memory file at:

- `docs/CODEBASE_MEMORY.md`
- `docs/MoltyFlywheel_System_Snapshot_v1.md`

For future analysis, review this file first, then scan only the files changed since the last log entry or the files directly relevant to the current task. Update the memory file after major codebase reads, architecture changes, or significant implementation work.

For SEO-sensitive work, also read:

- `docs/OpenClaw_Content_Execution_Rules_v1.md`

---

## 🗂️ AI Tools Taxonomy Assets

The approved AI tools taxonomy has been operationalized into tracked repo assets for future directory and CMS work:

- `src/data/tools/directory-schema-v1.md`
- `src/data/tools/migration-map-v1.json`

Use these as the source of truth before refactoring the current tools dataset, building category pages, or implementing new filters/search for the tools directory.

---

## 🧭 Current Site Snapshot

As of the latest implementation sweep, the public site now has:

- a decision-hub homepage in `src/pages/index.astro`
- a redesigned `/blog` index with image-aware editorial cards
- blog detail pages using `src/layouts/BlogLayout.astro`
- a redesigned `/programs` directory plus richer program detail pages
- a local logo system for program cards and program detail heroes
- a full `/offers/` hub plus article-style offer detail pages
- content-driven offer routes at `/p/[offer]`
- a working site search entry point in the header plus `/search/`
- a tools library in `src/pages/tools/index.astro` with internal tool pages
- canonical, robots, and sitemap standardized to `https://www.moltyflywheel.com`

Current tracked content inventory:

- `43` blog posts in `src/content/blog/`
- `20` program entries in `src/content/programs/`
- `7` static offer detail pages in `src/pages/offers/` plus the `/offers/` hub
- `2` content-driven offer entries in `src/content/offers/`
- `6` niche pages in `src/content/niches/`
- `48` blog cover assets in `public/images/blog/`
- `10` program logo assets in `public/images/programs/logos/`

If you are continuing work on this repo, review these files first:

- `docs/CODEBASE_MEMORY.md`
- `docs/MoltyFlywheel_System_Snapshot_v1.md`
- `docs/OpenClaw_Content_Execution_Rules_v1.md`
- `src/content.config.ts`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/layouts/BlogLayout.astro`
- `src/pages/programs/index.astro`
- `src/pages/programs/[program].astro`
- `src/layouts/OfferArticleLayout.astro`
- `src/pages/offers/index.astro`
- `src/pages/search/index.astro`
- `src/components/nav/Header.astro`
- `src/components/seo/SEO.astro`
- `astro.config.mjs`
- `public/robots.txt`

---

## 🎯 Offer System Assets

The offer layer is now split into three levels:

1. Framework
   - `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`

2. Execution Template
   - `src/content/_engine/offer-page-template-v1.md`

3. QA / Mapping Docs
   - `docs/MoltyFlywheel_Offer_QA_Checklist_v1.md`
   - `docs/sset name: MoltyFlywheel_OfferPages_Map_v1.md`

Use this order whenever new offer pages or content-driven offers are added:

1. framework
2. execution template
3. real page/content implementation
4. QA checklist
