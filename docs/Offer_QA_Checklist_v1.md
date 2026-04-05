# Offer QA Checklist v1

## 1. Purpose

This checklist exists to verify that a MoltyFlywheel offer page is honest, decision-supportive, operationally valid, and ready to ship.

## 2. When to use it

Use this checklist before any offer page is considered complete.

An offer task is not done until:
- the content passes this checklist
- the build passes
- the final Git push succeeds

## 3. Core QA checklist

### A. Promise integrity

- Does the page promise any guide, blueprint, bonus, framework, toolkit, or included asset?
- If yes, is that asset real, accessible, and connected to the current site flow?
- If the asset is not clearly real, remove or rewrite the promise.

### B. CTA realism

- Does the CTA promise a defensible next step?
- Is the CTA aligned with the page type?
- Is the CTA practical and non-hype?
- Does the CTA avoid fake urgency or unsupported outcomes?

### C. Audience-fit clarity

- Is it clear who this page is for?
- Is it clear who it is not for?
- Are constraints or trade-offs stated honestly?
- Does the page explain when another option may be better?

### D. Alternatives / Related Paths integrity

- Does the page contain real internal links?
- Do those links point to existing pages only?
- Do those links help the reader make a better decision?
- Is the alternatives block more than filler text?

### E. Framework compliance

- Does the page follow the current offer framework structure closely enough?
- Does it include a useful decision summary?
- Does it feel like a decision-support page rather than generic promotional copy?
- Does it avoid unsupported proof, vague claims, or fake certainty?

### F. Route consistency

- Does the page fit the current offer route system without adding confusion?
- Is it using the current route model correctly?
- Does it avoid creating accidental route drift relative to the current namespace decision?

### G. Build / operational checks

- Frontmatter matches the current offers schema
- Internal links resolve to real pages
- `npm run build` passes
- Staged files match the task scope exactly

## 4. Fail conditions

Do not mark an offer page complete if any of these are true:

- unsupported promise
- fake or missing bonus/included asset
- alternatives section has no real internal links
- CTA is hype-heavy or overpromising
- audience-fit is vague
- internal links are broken or speculative
- page drifts from the current route rule
- unrelated files are staged

## 5. Done definition

An offer page is done only when:

- promises are real and defensible
- CTA logic is practical
- fit and trade-offs are clear
- alternatives contain real decision-supporting links
- the page is framework-aligned
- the build passes
- only the intended files are staged, committed, and pushed
