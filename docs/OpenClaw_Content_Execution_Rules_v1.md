# OpenClaw Content Execution Rules v1

Project: `moltyflywheel.com`  
Language: English  
Purpose: active daily content execution rules
Last updated: 2026-04-04

## 1. Active planning source

`docs/lich_xuat_ban_moltyflywheel.xlsx` is the active content production board.

Read it before starting any content task.
Do not treat ad hoc topic ideas as production priorities unless the task explicitly overrides the board.

## 2. Topic selection rule

Do not choose blog topics randomly.

Always select the next article by checking, in order:
1. publish date
2. priority
3. status
4. lane fit

If the board and the task conflict, report the conflict clearly before proceeding.

## 3. Lane rule

Keep these lanes separate:
- affiliate/content support lane
- AI education lane

Do not mix lanes unless the task explicitly requires it.

Lane fit must be checked before drafting begins.

## 4. Language rule

Respect the current site language rule.

For this repo:
- blog content is written in English by default
- do not switch language arbitrarily
- do not output Vietnamese unless the task explicitly asks for Vietnamese or a bilingual rollout has been implemented

## 5. Writing workflow rule

Before writing any blog article:
1. read `README.md`
2. read `docs/CODEBASE_MEMORY.md` if present
3. read:
   - `seo-writer/SKILL.md`
   - `seo-writer/references/blog-template.md`
   - `seo-writer/references/cta-blocks.md`
   - `seo-writer/references/internal-linking-rules.md`
4. read `docs/Blog_Writing_Prompt_Template_v1.md`
5. inspect recent posts in `src/content/blog/`
6. run `git status`

Use the existing blog production system already defined in the repo.

## 6. Draft / publish rule

- if scheduling is supported, keep content in draft mode until publish date
- if scheduling is not supported, mark the article publish-ready and report that clearly

Do not imply scheduled publishing exists unless the actual build/deploy flow supports it.

## 7. Image verification rule

For any file saved as `.webp`:
- verify the file is a real WebP before commit
- do not rename JPG or PNG files to `.webp` by hand
- do not treat extension alone as proof of format validity

If a blog image is generated or replaced, validate:
- actual file format
- dimensions
- render compatibility with article hero and card usage

If a live blog cover image had a broken format or a severe cache/render issue:
- regenerate to a new filename/path
- update the article to the new path
- do not overwrite the old file in place as the default fix

## 8. Git rule

A content task is not complete until `git push` succeeds.

Do not confuse:
- successful `git push`
- successful GitHub Actions or deployment

They are separate.

## 9. Return format rule

Return only:
- Status
- Files changed
- Commit
- Message
- Git push
- Error if any
