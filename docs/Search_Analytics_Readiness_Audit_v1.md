# Search & Analytics Readiness Audit — moltyflywheel.com
> Audit date: 2026-04-05
> Scope: codebase only — no external account status is verified or assumed

---

## Summary Verdicts

| Dimension | Status | Notes |
|---|---|---|
| **Sitemap generation** | ✅ Ready | `@astrojs/sitemap` configured with correct `site` URL |
| **robots.txt** | ✅ Ready | Present, allows all, points to sitemap |
| **Canonical tags** | ✅ Ready | Auto-generated via `SEO.astro` using `Astro.url.href` |
| **Base SEO meta** | ✅ Ready | title, description, OG, Twitter card all wired |
| **Analytics script loaded** | ✅ Present | Plausible self-hosted loaded in `BaseLayout.astro` |
| **Pageview tracking** | ⚠️ Unverified | Script present in code but self-hosted server not confirmed live |
| **Event tracking** | ❌ Not implemented | No custom events fire on any click or CTA |
| **Outbound affiliate tracking** | ❌ Not implemented | `/go/*` redirects work but no click is captured before redirect |
| **Search Console verified** | ❌ Not confirmed | No verification meta tag or DNS TXT record visible in codebase |
| **Ready for Search Console submission** | ✅ Yes (codebase) | Sitemap, robots, canonicals, crawlability all in place |
| **Ready for measurement** | ⚠️ Partial | Pageviews may fire; events do not |

---

## Phase 1 — SEO / Indexing Readiness

### 1. Sitemap Generation
- **Status: ✅ Configured and ready**
- `@astrojs/sitemap` is installed and active in `astro.config.mjs`
- `site` is set to `https://moltyflywheel.com` (correct production URL)
- Filter excludes `/newsletter` and `/privacy` (correct — these should not be indexed)
- `changefreq: 'weekly'` and `priority: 0.7` set globally
- Sitemap output path referenced in `robots.txt` as `https://moltyflywheel.com/sitemap-index.xml` ✅
- **Risk note**: No per-route priority differentiation. Blog detail, program detail, and offer detail pages will all share the same `0.7` priority as the homepage. Consider differentiating homepage/hub pages at 0.9 and detail at 0.6–0.7 in a future pass.

### 2. robots.txt
- **Status: ✅ Correct and minimal**
- `User-agent: *` with `Allow: /` — crawlability fully open
- Sitemap URL correctly referenced
- No disallowed paths misfire
- No risk to indexing from robots config

### 3. Canonical Tags
- **Status: ✅ Auto-generated per page**
- `SEO.astro` defaults `canonical` to `Astro.url.href` on every page
- Every page that uses `BaseLayout` or `BlogLayout` inherits canonical automatically
- No duplicate canonical conflicts detected in codebase

### 4. Base SEO Meta
- **Status: ✅ Present and consistent**
- Every page has: `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`
- Twitter card: `summary_large_image` with title, description, image
- `ogImage` defaults to `/assets/og-default.png` — **note: this file does not appear in `public/` directory — confirms missing default OG image asset**

### 5. OG Default Image
- **Status: ❌ Missing asset**
- `SEO.astro` line 6: `ogImage = '/assets/og-default.png'` is the fallback
- `public/` directory does not contain `/assets/og-default.png`
- Any page without an explicit `ogImage` prop will generate a broken OG image reference
- Affected pages: about, contact, free-guide, privacy, offers hub, all static offer pages, homepage if not explicitly set

### 6. Blog Post Draft Filter
- **Status: ✅ Correct**
- `[slug].astro` filters `draft: true` items from `getStaticPaths()` — drafts are not generated as live pages

---

## Phase 2 — Route / Index Coverage Audit

### Current Public Route Families

| Route Family | Type | Count | Notes |
|---|---|---|---|
| `/` | Static — homepage | 1 | Decision hub — indexable |
| `/blog` | Static — hub | 1 | Editorial index — indexable |
| `/blog/[slug]` | Dynamic — blog detail | 23 | Generated from `src/content/blog/` |
| `/programs` | Static — hub | 1 | Program directory — indexable |
| `/programs/[program]` | Dynamic — program detail | 20 | Generated from `src/content/programs/` |
| `/offers` | Static — hub | 1 | Offer hub — indexable |
| `/offers/[page]` | Static — offer pages | 7 | Hardcoded `.astro` files |
| `/p/[offer]` | Dynamic — content-driven | 2 | Generated from `src/content/offers/` |
| `/niche/[niche]` | Dynamic — niche pages | 6 | Generated from `src/content/niches/` |
| `/tools` | Static — skills hub | 1 | Placeholder |
| `/about`, `/contact`, `/free-guide`, `/privacy` | Static misc | 4 | Low SEO priority |

**Estimated total indexed pages at last build: ~67**

### Route Namespace Issues to Note

1. **`/offers/*` vs `/p/*` dual-layer**: Both serve offer content. `/offers/` has 7 static pages. `/p/` has 2 content-driven pages. These are not duplicates — they serve different templates — but the naming inconsistency may confuse Google over time. `CODEBASE_MEMORY.md` acknowledges this risk. **Before doing heavy link-building, align or clearly differentiate the namespaces.**

2. **`/niches` vs `/niche/[slug]`**: `CODEBASE_MEMORY.md` notes that some offer pages link to `/niches` (plural) but the actual route is `/niche/[niche]` (singular). This will produce 404s for those internal links — a crawl signal risk.

3. **`/go/*` redirects**: These are affiliate exit redirects. They are 301s handled by Cloudflare Pages `_redirects` file. Google will follow these and may index the destination. This is expected behavior, and `rel="nofollow sponsored"` is correctly applied to `AffiliateButton.astro` as partial mitigation. However, the redirects file still has placeholder/generic destination URLs for several programs (e.g., `/go/heygen` routes to Affitor, not to HeyGen's actual affiliate URL). **These should be updated to real tracked affiliate URLs before any measurement work begins.**

---

## Phase 3 — Measurement Readiness Audit

### Analytics Script

- **Tool**: Plausible Analytics (self-hosted)
- **Script URL**: `https://plausible.moltyflywheel.com/js/script.js`
- **Domain tracking**: `data-domain="moltyflywheel.com"`
- **Location**: `BaseLayout.astro` line 23 — inside `<head>`, deferred
- **Coverage**: All pages using `BaseLayout` will fire the script on load
- **BlogLayout** wraps `BaseLayout` → all blog detail pages are covered
- **OfferArticleLayout** (static `/offers/*`) — not verified to inherit `BaseLayout` (CHECK: `OfferArticleLayout.astro` not audited in this pass)

> **Critical unknown**: Whether `https://plausible.moltyflywheel.com` is live and accepting events cannot be confirmed from codebase. The domain is self-hosted on a Mac Mini per comments — uptime and reachability on production are **not verified here**.

### Pageview Tracking
- **Status: ⚠️ Wired in code, not verified as live**
- Plausible fires a pageview automatically on script load — no custom JS needed for this
- If the self-hosted server is up and matched to the domain, pageviews are being tracked
- If not, no data is being captured — **verify in Plausible dashboard immediately**

### Event Tracking
- **Status: ❌ Zero custom events implemented**
- Plausible supports custom events via `plausible()` JS call or via `script.tagged-events.js` variant
- The current script loads the standard `script.js` — meaning **custom events are not enabled**
- No `plausible('EventName')` calls exist anywhere in the codebase
- No `data-goal` attributes detected on any element

### CTA / Affiliate Click Tracking
- **Status: ❌ Not implemented**
- `AffiliateButton.astro` renders a standard `<a>` tag to `/go/${program}` — no tracking hook
- The button has `target="_blank"` and `rel="nofollow sponsored"` — click fires and browser navigates before any event can fire unless explicitly tracked
- `BlogLayout.astro` inline CTA toward bottom of layout (`href="/go/..."`) — same pattern, no tracking
- Static offer pages use `AffiliateButton` — same issue
- Content-driven offer pages (`/p/[offer]`) use `AffiliateButton` — same issue

### UTM Usage (Partial — Inline in Content)
- **Status: ⚠️ Inconsistent and manual**
- UTM params are present in **some inline markdown link hrefs** within blog content
- Example: `moltyflywheel.com/go/surfer-seo?utm_source=blog&utm_medium=internal&utm_campaign=surfer-seo-review-2026`
- These UTMs are embedded in markdown, not injected at the template/component level
- Not all blog posts have UTMs applied
- `AffiliateButton.astro` does **not** append UTMs — only manual markdown links do

### Can the Current Setup Answer These Questions?

| Question | Answerable? | Notes |
|---|---|---|
| Which page types get traffic? | ⚠️ Maybe | Only if Plausible is live and up |
| Which pages drive affiliate clicks? | ❌ No | Clicks not tracked — only `/go/` server-side 301 fires |
| Which offer pages generate outbound action? | ❌ No | No event tracking on AffiliateButton or CTA links |
| Which referral links are clicked most? | ❌ No | No event tracking — redirect happens before capture |
| Which blog posts convert to program pages? | ❌ No | Internal navigation not tracked |

---

## Blockers and Risks

### Blockers (must fix before measurement is useful)

1. **Plausible self-hosted server reachability** — verify `plausible.moltyflywheel.com` is live from production
2. **No custom event tracking** — the analytics layer cannot answer any conversion or click question
3. **Standard `script.js` instead of `script.tagged-events.js`** — events cannot fire without switching the script variant or manually calling `plausible()`
4. **Missing `/assets/og-default.png`** — all pages without an explicit OG image will show a broken social preview

### Risks (lower urgency but should be noted)

5. **`/go/*` placeholders still pointing to generic URLs** — affiliate tracking data will be meaningless until real tracked URLs are in place
6. **`/niches` vs `/niche` link mismatch** — internal 404s are a crawl signal problem
7. **`/p/` vs `/offers/` dual namespace** — not a blocker today, but creates content architecture ambiguity before Search Console work begins
8. **No sitemap priority differentiation** — not a blocker, but weakens crawl efficiency as the site grows

### Non-blockers (verified as ready)

- Sitemap: configured, filtering, referencing correct URL
- robots.txt: open, correct, points to sitemap
- Canonicals: auto-generated per page
- Base SEO meta: complete
- Blog detail pages: correctly filtered, laid out, meta-tagged
- Affiliate buttons: correctly marked `nofollow sponsored`
- Draft filter: in place

---

## Search Console Submission Readiness

**Verdict: ✅ Codebase is ready for Search Console submission**

The following are confirmed from code:
- Sitemap URL is deterministic: `https://moltyflywheel.com/sitemap-index.xml`
- robots.txt references it and allows all crawling
- All pages have title, description, and canonical tags
- No noindex directives found anywhere in code
- Static site output means no SSR edge cases

**What is NOT confirmed from codebase (requires manual action):**
- Domain ownership verification in Search Console (DNS TXT / HTML tag / file method — none in repo)
- Whether sitemap has been submitted to Search Console
- Whether coverage errors exist post-deployment
- Whether the site is currently indexed at all

---

## Analytics / Measurement Readiness

**Verdict: ⚠️ Partially ready — pageviews may be firing, events are not**

- Plausible script is present in code and should fire on every page load
- Self-hosted server uptime is not verified here
- Zero custom events implemented — no click, CTA, affiliate, or outbound tracking exists
- Site cannot currently answer the core affiliate measurement questions without implementing a minimum event layer

---
*Audit grounded in direct codebase inspection. No external account status assumed. Verified files: `astro.config.mjs`, `BaseLayout.astro`, `BlogLayout.astro`, `SEO.astro`, `public/robots.txt`, `public/_redirects`, `AffiliateButton.astro`, `src/pages/blog/[slug].astro`, `src/pages/p/[offer].astro`, `src/pages/offers/`, `docs/CODEBASE_MEMORY.md`, `src/content/blog/` (23 files), `src/content/programs/` (20 files), `src/content/offers/` (2 files), git log.*
