# CLAUDE.md — MoltyFlywheel.com Operational Guide

Project: `moltyflywheel.com`
Stack: Astro 6 + Tailwind CSS v4 + Cloudflare Pages
Canonical host: `https://www.moltyflywheel.com`
GitHub: `https://github.com/tvt-ai-max/moltyflywheel-astro`
Last updated: 2026-05-03

---

## 1. Read This First

Before any content, code, or route work, read in order:

1. This file
2. `docs/CODEBASE_MEMORY.md` — architecture and content snapshot
3. `src/content.config.ts` — collection schemas (critical for blog posts)
4. The 3 most recent blog posts in `src/content/blog/` sorted by pubDate DESC

For SEO or route changes, also read:
- `docs/OpenClaw_Content_Execution_Rules_v1.md`
- `docs/MoltyFlywheel_InternalLinking_Map_v1.md`

---

## 2. SEO-First Rule

This repo is SEO-first by default. Protect before shipping any change:

- `www` canonical consistency (`https://www.moltyflywheel.com`)
- sitemap and robots.txt alignment
- internal-link structure and route clarity
- search intent consistency
- OG/image meta compatibility

If there is a tradeoff between a quick shortcut and SEO integrity, prefer the SEO-safe path.

---

## 3. Blog Post Schema — CRITICAL

Violating these rules causes `npm run build` to fail and blocks deployment.

### Required frontmatter fields

```yaml
---
title: "Full title here"
description: "Must be ≤160 characters — count every character carefully"
pubDate: 2026-MM-DD
category: guide          # see enum below
tags: ["tag1", "tag2"]
keyword: "primary seo keyword"
cluster: "cluster-x-topic"
ogImage: "/images/blog/[slug]-cover.webp"
draft: true              # always true for new posts; flip to false only to publish
featured: false
---
```

### category enum — ONLY these 5 values are valid

```
guide | review | comparison | case-study | tutorial
```

Any other value (e.g. `framework`, `explainer`, `commercial-guide`) will **break the build**.

### description limit

160 characters maximum. Count before committing. Strings over 160 chars break the build.

### Validation rule

Always run `npm run build` before committing a new blog post. Fix all schema errors before pushing.

---

## 4. Blog Writing Rules

All production blog posts must follow the internal writing workflow.

Read before writing:
- `seo-writer/SKILL.md`
- `seo-writer/references/blog-template.md`
- `seo-writer/references/cta-blocks.md`
- `seo-writer/references/internal-linking-rules.md`
- `docs/Blog_Writing_Prompt_Template_v1.md`

Content structure required:
1. Answer-first opening — direct, no hype
2. Quick Answer blockquote (`> **Quick Answer:** ...`)
3. H2/H3 sections with practical framework
4. Trade-offs and honest limitations
5. FAQ (4–6 questions)
6. CTA block pointing to the post's Primary CTA Target

Internal links required (minimum 3 per post):
- 1 same-cluster link
- 1 cross-cluster link
- 1 route-support link to `/tools/`, `/offers/`, or `/programs/`
- All UTM-tagged: `?utm_source=blog&utm_medium=internal&utm_campaign=[slug]`

Language rule: English only. Never write in Vietnamese unless explicitly requested.

Minimum length: 1000 words.

A blog task is not complete until: file created → build passes → git push succeeds.

---

## 5. Cover Image Workflow

Cover images are generated via Canva MCP and stored as WebP.

### Naming convention

```
public/images/blog/[slug]-cover.webp
```

### Generation steps (Canva MCP)

1. `generate-design` — design_type: `youtube_thumbnail`, query: dark navy #0a1628 background, glowing teal/cyan nodes representing the article topic, clean minimal tech aesthetic, 16:9
2. Auto-select `candidates[0]` (first candidate)
3. `create-design-from-candidate` — returns `design_id`
4. `export-design` — type: `png`, width: 1280, height: 720, export_quality: `pro`
5. Download PNG: `curl -L -s "[url]" -o /tmp/cover-draft.png` — verify > 50KB
6. Convert to WebP: `python3 -c "from PIL import Image; img=Image.open('/tmp/cover-draft.png'); img.save('public/images/blog/[slug]-cover.webp','WEBP',quality=85)"`

If the export URL returns < 50KB, call `export-design` again to get a fresh signed URL.

---

## 6. Git and Deploy Workflow

### Push to GitHub

```bash
# Read token
TOKEN=$(grep GITHUB_TOKEN .env | cut -d= -f2)

# Stage files
git add src/content/blog/[slug].md
git add public/images/blog/[slug]-cover.webp   # if cover was generated

# Commit
git commit -m "Add YYYY-MM-DD [POST-ID] draft — [Title]"

# Push
git push "https://${TOKEN}@github.com/tvt-ai-max/moltyflywheel-astro.git" main
```

If push is rejected (non-fast-forward):
```bash
git pull "https://${TOKEN}@github.com/tvt-ai-max/moltyflywheel-astro.git" main --rebase
git push "https://${TOKEN}@github.com/tvt-ai-max/moltyflywheel-astro.git" main
```

Never skip `npm run build` before pushing.

### Deploy pipeline

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) → `npm run build` → Cloudflare Pages.

If the build fails in GitHub Actions, the live site does not update. Fix schema errors locally and push again.

### Publishing a draft

To publish a draft (flip `draft: true` → `draft: false`):
- Manual: edit the file and push
- Automated: `scripts/auto_publish.sh` handles this on the scheduled publish date

---

## 7. Automated Daily Content System

A remote Claude Code agent (CCR) runs every day at **8:00 AM Saigon (01:00 UTC)**.

### Routine

- **ID:** `trig_019jfYfyTxgG5qSNsF2CWgsp`
- **Schedule:** `0 1 * * *` (daily 8am Saigon)
- **View/manage:** https://claude.ai/code/routines/trig_019jfYfyTxgG5qSNsF2CWgsp

### What the agent does

1. Gets today's date
2. Reads `docs/May_2026_Content_Plan_v1.md` → finds today's scheduled post
3. Checks if post already exists (skips if yes)
4. Reads reference files for style and schema
5. Writes the blog post with `draft: true`
6. Runs `npm run build` — fixes errors if any
7. Commits and pushes to GitHub

### What the agent does NOT do (currently)

- Cover image generation (Canva MCP is attached but not in current agent prompt)
- Publishing (flipping draft to false) — this is handled by `scripts/auto_publish.sh`

### Cover image — after agent runs

After the agent pushes a draft, generate the cover manually:
1. Open this repo in Claude Code
2. Ask: "Create and push cover image for [date] blog post"
3. Claude will use Canva MCP, convert to WebP, and push

---

## 8. Content Planning

### Active schedule

- `docs/May_2026_Content_Plan_v1.md` — daily post calendar for May 2026
- `docs/lich_xuat_ban_moltyflywheel.xlsx` — full production workbook

### Content tracks (May 2026)

| Track | Focus | Cluster prefix |
|---|---|---|
| A | Abacus AI | `cluster-a-abacus-ai` |
| T | Topview AI | `cluster-t-topview-ai` |
| O | Offer / decision-support | `cluster-o-offer-decision` |
| P | Program / workflow | `cluster-p-affiliate-programs` |
| N | News / trend | `cluster-d-ai-news` |

### Internal link targets (priority)

```
/tools/abacus-ai/
/tools/topview-ai/
/tools/higgsfield/
/offers/find-your-best-affiliate-fit/
/offers/affiliate-tools-for-content-creators/
/offers/compare-affiliate-platforms/
/programs/convertkit/
/programs/beehiiv/
/programs/n8n/
/programs/make/
```

---

## 9. Key Files Reference

| File | Purpose |
|---|---|
| `src/content.config.ts` | Schema for all content collections |
| `src/content/blog/` | Blog post markdown files |
| `public/images/blog/` | Blog cover images (WebP) |
| `docs/May_2026_Content_Plan_v1.md` | Daily content calendar |
| `docs/CODEBASE_MEMORY.md` | Architecture and content snapshot |
| `docs/Blog_Writing_Prompt_Template_v1.md` | Blog writing template |
| `docs/MoltyFlywheel_InternalLinking_Map_v1.md` | Internal link map |
| `docs/OpenClaw_Content_Execution_Rules_v1.md` | SEO content execution rules |
| `seo-writer/SKILL.md` | SEO writing workflow |
| `scripts/auto_publish.sh` | Automated publish script |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `.env` | GITHUB_TOKEN (local only, not committed) |

---

## 10. Common Errors and Fixes

### Build fails: invalid category value
```
Error: category must be one of: guide | review | comparison | case-study | tutorial
```
Fix: Change `category:` to one of the 5 valid values.

### Build fails: description too long
```
Error: Too big: expected string to have <=160 characters
```
Fix: Shorten the description to ≤160 characters.

### git push rejected (non-fast-forward)
```
error: failed to push some refs
```
Fix: `git pull --rebase` then push again.

### Canva export URL returns < 50KB file
The signed URL expired. Call `export-design` again to get a fresh URL.
