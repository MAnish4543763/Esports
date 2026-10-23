#!/usr/bin/env python3
"""Basic offline checks for a static GitHub Pages site."""
from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", ".github"}

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs = []
        self.has_title = False
        self.in_title = False
        self.has_description = False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title": self.in_title = True
        if tag == "meta" and attrs.get("name", "").lower() == "description" and attrs.get("content", "").strip():
            self.has_description = True
        for key in ("href", "src"):
            value = attrs.get(key, "").strip()
            if value: self.refs.append((tag, key, value))
    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
    def handle_data(self, data):
        if self.in_title and data.strip(): self.has_title = True

def local_target(page, raw):
    raw = raw.split("#", 1)[0].split("?", 1)[0].strip()
    if not raw or raw.startswith(("http://", "https://", "mailto:", "tel:", "javascript:", "data:", "//", "#")):
        return None
    path = raw.lstrip("/")
    if not path:
        path = "index.html"
    candidate = (ROOT / path) if raw.startswith("/") else (page.parent / path)
    return candidate.resolve()

def main():
    errors = []
    pages = sorted(p for p in ROOT.rglob("*.html") if not any(part in SKIP_DIRS for part in p.relative_to(ROOT).parts))
    if not pages:
        print("No HTML pages found."); return 1
    for page in pages:
        parser = PageParser()
        try: parser.feed(page.read_text(encoding="utf-8"))
        except Exception as exc:
            errors.append(f"{page.relative_to(ROOT)}: cannot parse HTML: {exc}"); continue
        rel = page.relative_to(ROOT)
        if not parser.has_title: errors.append(f"{rel}: missing or empty title")
        if not parser.has_description: errors.append(f"{rel}: missing meta description")
        for tag, key, raw in parser.refs:
            if raw.startswith(("#", "http://", "https://", "mailto:", "tel:", "javascript:", "data:", "//")):
                continue
            target = local_target(page, raw)
            if target is not None and not target.exists():
                errors.append(f"{rel}: broken local {key}={raw}")
    if errors:
        print("Static site checks found issues:")
        print("\n".join("- " + e for e in errors))
        return 1
    print(f"Static site checks passed for {len(pages)} HTML pages.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
