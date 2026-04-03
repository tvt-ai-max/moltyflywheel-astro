# AI Tools Directory Schema v1

Status: approved working spec
Date: 2026-04-03
Scope: AI tools, internal skills, ops utilities, frameworks, calculators

## Purpose

Operational schema for migrating the current 52-record dataset into a scalable directory/CMS structure that supports:
- frontend directory filters
- category pages
- comparison pages
- featured logic
- future expansion to 100+ records

## Classification Model

Primary rule:
- `primary_category` = the main job the record performs in the operating system

Supporting dimensions:
- `entity_type` = what kind of thing the record is
- `secondary_category` = optional sub-family inside the same job family
- `suggested_tags` = channel, audience, output, vendor, or format metadata

## Enums

### `entity_type`
- `external-ai-tool`
- `internal-skill`
- `ops-utility`
- `framework`
- `calculator`

### `primary_category`
- `research-discovery`
- `planning-governance`
- `content-production`
- `conversion-assets`
- `distribution-activation`
- `measurement-optimization`
- `platform-operations`

### `secondary_category`

Allowed values:
- `niche-research`
- `program-intelligence`
- `competitor-intelligence`
- `financial-modeling`
- `system-design`
- `compliance`
- `portfolio-management`
- `tool-discovery`
- `longform-editorial`
- `social-content`
- `repurposing`
- `evidence-generation`
- `landing-pages`
- `offer-design`
- `paid-media-creative`
- `email-activation`
- `social-publishing`
- `deployment`
- `link-hub`
- `seo-optimization`
- `attribution-reporting`
- `experimentation`
- `content-optimization`
- `runtime-health`
- `alerts`
- `cost-control`
- `system-improvement`

### `cost_model`
- `free`
- `paid`
- `freemium`
- `unknown`

### `status`
- `active`
- `draft`
- `archived`

### `output_type`
- `article-draft`
- `comparison-draft`
- `tutorial-draft`
- `social-post`
- `video-script`
- `landing-page`
- `offer-framework`
- `email-sequence`
- `report`
- `audit`
- `score`
- `recommendation`
- `deployment`
- `alert`
- `inventory`
- `workflow-plan`
- `unknown`

## Record Shape

```ts
interface DirectoryRecord {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  entity_type:
    | 'external-ai-tool'
    | 'internal-skill'
    | 'ops-utility'
    | 'framework'
    | 'calculator';
  primary_category:
    | 'research-discovery'
    | 'planning-governance'
    | 'content-production'
    | 'conversion-assets'
    | 'distribution-activation'
    | 'measurement-optimization'
    | 'platform-operations';
  secondary_category?:
    | 'niche-research'
    | 'program-intelligence'
    | 'competitor-intelligence'
    | 'financial-modeling'
    | 'system-design'
    | 'compliance'
    | 'portfolio-management'
    | 'tool-discovery'
    | 'longform-editorial'
    | 'social-content'
    | 'repurposing'
    | 'evidence-generation'
    | 'landing-pages'
    | 'offer-design'
    | 'paid-media-creative'
    | 'email-activation'
    | 'social-publishing'
    | 'deployment'
    | 'link-hub'
    | 'seo-optimization'
    | 'attribution-reporting'
    | 'experimentation'
    | 'content-optimization'
    | 'runtime-health'
    | 'alerts'
    | 'cost-control'
    | 'system-improvement';
  core_function: string;
  best_use_case?: string;
  user_type?: string[];
  output_type:
    | 'article-draft'
    | 'comparison-draft'
    | 'tutorial-draft'
    | 'social-post'
    | 'video-script'
    | 'landing-page'
    | 'offer-framework'
    | 'email-sequence'
    | 'report'
    | 'audit'
    | 'score'
    | 'recommendation'
    | 'deployment'
    | 'alert'
    | 'inventory'
    | 'workflow-plan'
    | 'unknown';
  suggested_tags: string[];
  cost_model: 'free' | 'paid' | 'freemium' | 'unknown';
  source_tier?: string;
  featured?: boolean;
  status: 'active' | 'draft' | 'archived';
  logo?: string;
  website?: string;
  affiliate_status?: 'yes' | 'no' | 'unknown';
  program_slug?: string;
  strength_summary?: string;
  limitation_summary?: string;
  legacy_category?: string;
  migration_notes?: string;
  manual_review?: boolean;
}
```

## Required Fields

- `id`
- `slug`
- `name`
- `short_description`
- `entity_type`
- `primary_category`
- `core_function`
- `output_type`
- `suggested_tags`
- `cost_model`
- `status`

## Optional Fields

- `secondary_category`
- `best_use_case`
- `user_type`
- `source_tier`
- `featured`
- `logo`
- `website`
- `affiliate_status`
- `program_slug`
- `strength_summary`
- `limitation_summary`
- `legacy_category`
- `migration_notes`
- `manual_review`

## Validation Rules

### Identity
- `id` must be stable and unique.
- `slug` must be unique and kebab-case.
- `name` must be unique among active records.

### Description
- `short_description` should be 60-180 characters.
- `core_function` should be one sentence and role-based, not hype-based.

### Category Integrity
- every record must have exactly 1 `primary_category`
- `secondary_category` is optional
- `secondary_category` must belong to the same family as `primary_category`
- do not use `secondary_category` for audience, channel, vendor, or pricing

### Tag Rules
- `suggested_tags` must be lowercase kebab-case
- `suggested_tags` must be unique inside the record
- recommended tag count: `3` to `10`
- use tags for channel, format, audience, vendor, and business-model context
- do not create tags that duplicate `entity_type` or `primary_category`

### Operational Flags
- set `manual_review: true` when:
  - the name is unclear
  - the description is vague
  - overlap/duplicate risk exists
  - the category assignment is ambiguous
- set `status: archived` instead of deleting records when they are retired but still referenced historically

### External Tool Rules
- `website` should be present for `external-ai-tool`
- `program_slug` should only be used when there is a real mapped affiliate/program detail page

## Display-Critical vs Backend-Only

### Display-Critical
- `name`
- `slug`
- `short_description`
- `entity_type`
- `primary_category`
- `secondary_category`
- `output_type`
- `suggested_tags`
- `featured`
- `logo`

### Backend-Only or Ops-Facing
- `legacy_category`
- `migration_notes`
- `manual_review`
- `source_tier`
- `affiliate_status`
- `program_slug`

## Filter Logic

Primary frontend filters should use:
- `entity_type`
- `primary_category`
- `secondary_category`
- `cost_model`
- `featured`
- `suggested_tags`

Do not build category pages from:
- `source_tier`
- `legacy_category`
- `manual_review`

## Notes for Future Expansion

- Keep top-level categories fixed unless there is sustained evidence of a new job family.
- Prefer adding tags or subcategories before adding a new top-level category.
- Separate internal and external entities with `entity_type`, not category.
- If a record truly represents two products, split it into two records rather than overloading one record.
