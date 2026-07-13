#!/usr/bin/env python3
"""Generate a branded PNG OG image for Haal Lab (1200x630)."""
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
OUTPUT = Path("/home/z/my-project/public/og-image.png")

BG = (8, 11, 18)
BG2 = (14, 19, 29)
CYAN = (0, 224, 255)
BLUE = (110, 168, 255)
WHITE = (230, 234, 242)
MUTED = (138, 147, 166)

img = Image.new("RGB", (WIDTH, HEIGHT), BG)
draw = ImageDraw.Draw(img)

# Subtle grid
for x in range(0, WIDTH, 48):
    draw.line([(x, 0), (x, HEIGHT)], fill=(20, 24, 34), width=1)
for y in range(0, HEIGHT, 48):
    draw.line([(0, y), (WIDTH, y)], fill=(20, 24, 34), width=1)

# Radial glow at top
glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
for r in range(400, 0, -10):
    alpha = int(50 * (1 - r / 400))
    glow_draw.ellipse([WIDTH // 2 - r, -r, WIDTH // 2 + r, r], fill=(0, 224, 255, alpha))
img = Image.alpha_composite(img.convert("RGBA"), glow)
img = img.convert("RGB")
draw = ImageDraw.Draw(img)

def load_font(size, bold=False):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except:
            continue
    return ImageFont.load_default()

font_logo = load_font(24, bold=True)
font_pill = load_font(13)
font_h1 = load_font(64, bold=True)
font_sub = load_font(22)
font_domain = load_font(14)

# Logo
logo_x, logo_y = 80, 80
draw.rounded_rectangle([logo_x, logo_y, logo_x + 56, logo_y + 56], radius=14, outline=(60, 70, 85), width=1)
draw.line([(logo_x + 16, logo_y + 14), (logo_x + 16, logo_y + 42)], fill=CYAN, width=4)
draw.line([(logo_x + 16, logo_y + 28), (logo_x + 30, logo_y + 28)], fill=CYAN, width=4)
draw.line([(logo_x + 30, logo_y + 14), (logo_x + 30, logo_y + 42)], fill=CYAN, width=4)
draw.ellipse([logo_x + 13, logo_y + 11, logo_x + 19, logo_y + 17], fill=CYAN)
draw.ellipse([logo_x + 27, logo_y + 25, logo_x + 33, logo_y + 31], fill=CYAN)
draw.ellipse([logo_x + 13, logo_y + 39, logo_x + 19, logo_y + 45], fill=BLUE)
draw.text((logo_x + 76, logo_y + 14), "Haal", fill=WHITE, font=font_logo)
bbox = draw.textbbox((logo_x + 76, logo_y + 14), "Haal", font=font_logo)
draw.text((bbox[2], logo_y + 14), "Lab", fill=CYAN, font=font_logo)

# Tagline pill
pill_x, pill_y = 80, 200
draw.rounded_rectangle([pill_x, pill_y, pill_x + 300, pill_y + 36], radius=18, outline=(60, 70, 85), width=1)
draw.ellipse([pill_x + 14, pill_y + 14, pill_x + 22, pill_y + 22], fill=CYAN)
draw.text((pill_x + 32, pill_y + 11), "DEEP-TECH AI ENGINEERING", fill=MUTED, font=font_pill)

# Headline
draw.text((80, 290), "Engineering Intelligent", fill=WHITE, font=font_h1)
draw.text((80, 365), "Systems for the", fill=WHITE, font=font_h1)
# "Future." with gradient
future_x = 80
for i, ch in enumerate("Future."):
    t = i / 7
    r = int(CYAN[0] + (BLUE[0] - CYAN[0]) * t)
    g = int(CYAN[1] + (BLUE[1] - CYAN[1]) * t)
    b = int(CYAN[2] + (BLUE[2] - CYAN[2]) * t)
    draw.text((future_x, 440), ch, fill=(r, g, b), font=font_h1)
    bbox = draw.textbbox((future_x, 440), ch, font=font_h1)
    future_x = bbox[2]

# Subtitle
draw.text((80, 545), "Private AI systems  ·  LLM applications  ·  RAG  ·  AI infrastructure", fill=MUTED, font=font_sub)
draw.text((80, 590), "haal-lab.solutions", fill=MUTED, font=font_domain)

# Node graph (right side)
import math
nodes = [(860, 240, CYAN), (1020, 330, CYAN), (1020, 460, CYAN), (1140, 280, BLUE), (1140, 480, BLUE)]
for i, (x1, y1, _) in enumerate(nodes):
    for j, (x2, y2, _) in enumerate(nodes):
        if i < j:
            dist = math.hypot(x2 - x1, y2 - y1)
            if dist < 250:
                draw.line([(x1, y1), (x2, y2)], fill=(0, 100, 120), width=1)
for x, y, color in nodes:
    glow_img = Image.new("RGBA", (40, 40), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow_img)
    gd.ellipse([4, 4, 36, 36], fill=(*color, 50))
    img.paste(glow_img, (x - 20, y - 20), glow_img)
    draw.ellipse([x - 6, y - 6, x + 6, y + 6], fill=color)
draw.rounded_rectangle([1000, 310, 1040, 350], radius=6, outline=(60, 70, 85), width=1)
draw.rounded_rectangle([1000, 440, 1040, 480], radius=6, outline=(0, 100, 120), width=1)

img.save(OUTPUT, "PNG", optimize=True)
print(f"Saved OG image: {OUTPUT} ({OUTPUT.stat().st_size} bytes)")
