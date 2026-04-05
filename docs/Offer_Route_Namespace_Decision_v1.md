# Offer Route Namespace Decision v1

## 1. Purpose

This file governs the route strategy for public offer pages in `moltyflywheel.com`.

Its purpose is to prevent route drift while the offer system still uses two public route patterns.

## 2. Current state

The current offer layer is split across two route models:

- `/offers/` = public offer hub
- static semantic offer pages live under `/offers/*`
- dynamic content-driven offer pages currently live under `/p/[offer]`

This means the site already has one semantic offer namespace and one temporary legacy-style offer namespace.

## 3. Decision

Current decision:

- keep `/p/` temporarily
- do not migrate routes now
- the preferred long-term target remains `/offers/[slug]`

## 4. Why `/p/` is not ideal long-term

`/p/` is operational, but it is not the preferred long-term route pattern because it has:

- weak semantics
- route fragmentation inside the offer system
- lower clarity than `/blog/[slug]`, `/programs/[slug]`, and `/offers/*`
- higher risk of future IA inconsistency

## 5. Why migration is delayed

Migration is delayed because the offer namespace is not yet unified.

The main blocker is not route mechanics. The blocker is namespace ownership:

- static offer pages already exist under `/offers/*`
- dynamic content-driven offer entries would also want to live under `/offers/[slug]`
- slug collision risk is not yet fully governed
- a coexistence rule for static vs dynamic offer pages has not been formally locked

## 6. Temporary operating rule

Until a formal migration decision is approved:

- do not casually expand `/p/` as if it were the permanent long-term namespace
- do not migrate `/p/` to `/offers/[slug]` without a dedicated migration decision
- check namespace implications before adding any new offer routes
- prefer consistency and caution over quick route additions

## 7. Long-term target

The preferred future architecture is:

- `/offers/` as the unified public offer namespace
- with one explicit rule for how static offer pages and dynamic content-driven offer entries coexist

## 8. Trigger for future migration

Migration should only happen after all of the following are defined:

- slug ownership rules
- coexistence model for static and dynamic offer pages
- redirect plan from `/p/[offer]`
- internal link update scope
- canonical and SEO handling for the final namespace

## 9. Practical note for current work

Current work may continue with `/p/` temporarily.

However:

- `/p/` should be treated as a temporary legacy route
- not as the long-term offer-page pattern for the site
