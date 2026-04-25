# Global Traffic and Infrastructure Decision RFC v2

## Purpose

This document defines the decision framework for evaluating infrastructure changes based on country-level traffic data.

It is intended for:
- DevOps
- platform engineering
- technical leads
- operators responsible for CDN, hosting, cache, and performance decisions

Source data reviewed:
- `/Users/phiyen/Downloads/Cinematic/all_sites_for_account_2026-04-25T03_46_34.164Z.csv`

---

## Executive Summary

### Observed traffic concentration

Total observed volume:
- `33,946` requests

Top markets:
- `US`: `11,658` requests (`34.34%`)
- `CN`: `7,776` requests (`22.91%`)
- `VN`: `3,486` requests (`10.27%`)

Concentration:
- Top 3 markets = `67.52%`
- Top 10 markets = `89.21%`

At a regional level, request volume is concentrated in:
- North America
- Asia
- Europe

### What this does and does not prove

This data is sufficient to identify where to investigate first.

It is not sufficient to approve infrastructure changes such as:
- multi-region hosting
- read replicas
- CN-specific routing investment
- premium transit upgrades
- large CDN spend increases

Reason:
- the dataset contains only `country code` and `request count`
- it does not contain latency, error rate, cache efficiency, bot ratio, or business value

### Main decision rule

Do not approve infrastructure changes from request volume alone.

Only optimize aggressively in regions where both are true:
- measured performance pain exists
- meaningful business value exists

### Immediate recommendation

Run a 1-2 week measurement phase first:
1. classify bot vs human traffic
2. measure latency and cache efficiency by region
3. measure error distribution by region
4. correlate request volume with business value

Only after that should the team decide whether to:
- keep the current architecture
- optimize CDN and edge caching
- add regional infrastructure
- or block/rate-limit low-value traffic

---

## Confirmed Facts

From the reviewed CSV, we can confirm:
- request volume by country code
- request concentration across regions
- ranking of top traffic sources

We cannot confirm from this dataset alone:
- human vs bot traffic
- latency by country
- TTFB or LCP
- cache HIT/MISS ratio
- 4xx/5xx distribution
- conversion or revenue value
- whether the bottleneck is network, edge, or origin

---

## Observed Distribution

Top 10 markets:

1. `US` — `11,658` (`34.34%`)
2. `CN` — `7,776` (`22.91%`)
3. `VN` — `3,486` (`10.27%`)
4. `SG` — `1,664` (`4.90%`)
5. `NL` — `1,605` (`4.73%`)
6. `DE` — `1,252` (`3.69%`)
7. `GB` — `852` (`2.51%`)
8. `JP` — `755` (`2.22%`)
9. `FR` — `718` (`2.12%`)
10. `CH` — `516` (`1.52%`)

Regional grouping at a high level:
- North America: `35.33%`
- Asia: `43.35%`
- Europe: `18.00%`

Notable caution:
- `T1` appears in the dataset and is not a standard country code
- this should be traced in the source system before any interpretation

---

## Risk Notes

### CN traffic risk

High request count from `CN` does not automatically imply:
- high-value user traffic
- real user demand
- a need for dedicated regional infrastructure

It may include:
- bots
- crawlers
- scanners
- proxy traffic

### Request volume risk

High request volume alone does not prove:
- poor latency
- poor user experience
- revenue impact
- origin stress

### Planning risk

The wrong sequence is:
- see high traffic
- buy infrastructure

The correct sequence is:
- measure
- validate value
- isolate bottleneck
- choose the lowest-cost effective intervention

---

## Unknowns That Must Be Measured

Before any major infrastructure decision, answer these:

### Traffic quality
- What percent of traffic is human by major market?
- What percent is verified bot, crawler, or suspicious automation?
- What does `T1` represent in the export source?

### Performance
- What is `TTFB p50/p95` by region?
- What is `LCP p75` for real users by region?
- Which regions are actually slow?
- Is slowness caused by network path, cache miss, or origin performance?

### Stability
- What is `4xx` rate by region?
- What is `5xx` rate by region?
- Are timeouts concentrated in any market?
- Are failures route-specific or globally distributed?

### Business value
- Which markets produce real sessions, leads, revenue, or retained users?
- Does request share correlate with value share?
- Are some high-volume markets low-value or mostly noise?

---

## Measurement Checklist

### A. Data hygiene
- [ ] Classify bot vs human using WAF, CDN, or server-side logs
- [ ] Use analytics only as supporting evidence, not source of truth for bot detection
- [ ] Identify the meaning of `T1` in the export source
- [ ] Map top routes by market
- [ ] Separate static traffic from dynamic traffic

### B. Performance baseline
- [ ] Measure `TTFB p50/p95` by region
- [ ] Measure `LCP p75` for real users
- [ ] Run synthetic tests from at least:
- [ ] US
- [ ] Singapore
- [ ] Hong Kong or nearby Asia edge
- [ ] Vietnam if available
- [ ] Compare static and dynamic response times
- [ ] Record cache HIT/MISS ratio by region

### C. CDN and cache review
- [ ] Inspect edge cache hit ratio
- [ ] Identify high-request assets with low cache hit rates
- [ ] Validate cache headers and TTL
- [ ] Confirm what share of traffic is cacheable

### D. Stability review
- [ ] Compare `4xx` rate by region
- [ ] Compare `5xx` rate by region
- [ ] Check timeout and origin failure patterns
- [ ] Determine whether failures are route-specific or region-wide

### E. Business correlation
- [ ] Map sessions by region
- [ ] Map conversions/leads/revenue by region
- [ ] Compare request share vs value share
- [ ] Flag high-volume, low-value regions separately

---

## Decision Matrix

Apply this matrix only after the measurement phase is complete.

### Case 1
`Traffic high + Value high + Latency low`

Action:
- keep current architecture
- continue monitoring

### Case 2
`Traffic high + Value high + Latency high + Cache MISS high`

Action:
- optimize CDN
- improve edge caching
- tune cache headers and TTL

### Case 3
`Traffic high + Value high + Latency high + Dynamic workload high`

Action:
- evaluate regional compute
- evaluate read replicas
- justify cost before rollout

### Case 4
`Traffic high + Bot high`

Action:
- tighten WAF rules
- apply bot controls
- rate-limit abusive segments
- do not expand infrastructure based on raw request count

### Case 5
`Traffic high + Latency high + Value low`

Action:
- avoid major infrastructure spend
- prioritize cost control
- optimize only where low-cost fixes are available

### Case 6
`Traffic low + Latency high`

Action:
- monitor first
- apply light optimization only if needed
- do not justify major regional expansion

---

## Infrastructure Approval Gates

No major infrastructure upgrade should be approved unless all are true:

- the target region has significant human traffic
- the target region has measurable business value
- the target region has verified performance pain
- the problem cannot be solved by cache/CDN tuning alone
- the expected ROI is stronger than lower-cost alternatives

---

## Recommended Next Step

For the next 1-2 weeks:

1. instrument regional latency and cache metrics
2. classify bot vs human traffic
3. correlate request volume with business value
4. rerun this RFC using measured evidence

Until that is done, the current recommendation is:
- no major infrastructure change
- no multi-region commitment
- no CN-specific network investment
- no performance claims based only on request counts
