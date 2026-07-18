#!/usr/bin/env python3
"""Convert og-image.svg to og-image.png using a headless browser for pixel-perfect rendering."""
import subprocess
import sys
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "playwright"])
    from playwright.sync_api import sync_playwright

SCRIPT_DIR = Path(__file__).parent
PUBLIC_DIR = SCRIPT_DIR.parent / "public"
SVG_PATH = PUBLIC_DIR / "og-image.svg"
PNG_PATH = PUBLIC_DIR / "og-image.png"

WIDTH, HEIGHT = 1200, 630


def svg_to_png():
    svg_html = SVG_PATH.read_text(encoding="utf-8")
    # Wrap SVG in a full HTML page so the browser renders it at exact dimensions
    page_html = f"""<!DOCTYPE html>
<html>
<head>
  <style>
    * {{ margin: 0; padding: 0; }}
    body {{ width: {WIDTH}px; height: {HEIGHT}px; overflow: hidden; }}
    svg {{ display: block; width: {WIDTH}px; height: {HEIGHT}px; }}
  </style>
</head>
<body>{svg_html}</body>
</html>"""

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": WIDTH, "height": HEIGHT})
        page.set_content(page_html, wait_until="networkidle")
        page.screenshot(path=str(PNG_PATH), type="png")
        browser.close()

    size_kb = PNG_PATH.stat().st_size / 1024
    print(f"Saved: {PNG_PATH} ({size_kb:.1f} KB)")


if __name__ == "__main__":
    svg_to_png()
