#!/usr/bin/env python3
"""
Fast blog post schema validator for MoltyFlywheel.com
Runs in <1 second. Use BEFORE npm run build to catch errors early.

Usage:
  python3 scripts/validate_blog.py src/content/blog/my-post.md

Exit codes:
  0 = valid
  1 = validation errors found
"""

import sys
import re
from pathlib import Path

VALID_CATEGORIES = {"guide", "review", "comparison", "case-study", "tutorial"}
MAX_DESCRIPTION = 160

REQUIRED_FIELDS = ["title", "description", "pubDate", "category", "tags", "draft"]


def parse_frontmatter(content: str) -> dict:
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return {}
    fm = {}
    for line in match.group(1).splitlines():
        if ':' in line:
            key, _, val = line.partition(':')
            fm[key.strip()] = val.strip().strip('"').strip("'")
    return fm


def validate(filepath: str) -> list[str]:
    errors = []
    path = Path(filepath)

    if not path.exists():
        return [f"File not found: {filepath}"]

    content = path.read_text(encoding="utf-8")
    fm = parse_frontmatter(content)

    if not fm:
        return ["No frontmatter found — missing --- delimiters"]

    # Required fields
    for field in REQUIRED_FIELDS:
        if field not in fm:
            errors.append(f"Missing required field: {field}")

    # category enum
    cat = fm.get("category", "")
    if cat and cat not in VALID_CATEGORIES:
        errors.append(
            f"Invalid category '{cat}' — must be one of: {', '.join(sorted(VALID_CATEGORIES))}"
        )

    # description length
    desc = fm.get("description", "")
    if len(desc) > MAX_DESCRIPTION:
        errors.append(
            f"description is {len(desc)} chars — must be ≤{MAX_DESCRIPTION} "
            f"(trim {len(desc) - MAX_DESCRIPTION} chars)"
        )

    # draft must be boolean
    draft = fm.get("draft", "")
    if draft not in ("true", "false"):
        errors.append(f"draft must be 'true' or 'false', got: '{draft}'")

    # ogImage should end in .webp
    og = fm.get("ogImage", "")
    if og and not og.endswith(".webp"):
        errors.append(f"ogImage should end in .webp, got: '{og}'")

    # pubDate format
    pub = fm.get("pubDate", "")
    if pub and not re.match(r'^\d{4}-\d{2}-\d{2}$', pub):
        errors.append(f"pubDate format should be YYYY-MM-DD, got: '{pub}'")

    # title length warning
    title = fm.get("title", "")
    if len(title) > 80:
        errors.append(f"Warning: title is {len(title)} chars — consider keeping under 80")

    return errors


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/validate_blog.py <path-to-post.md>")
        sys.exit(1)

    filepath = sys.argv[1]
    errors = validate(filepath)

    if not errors:
        print(f"✅ Schema valid: {filepath}")
        sys.exit(0)
    else:
        print(f"❌ Schema errors in: {filepath}")
        for e in errors:
            print(f"  • {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
