"""
Generate favicon files in multiple sizes from logo.svg
Requires: pip install cairosvg pillow
"""

from cairosvg import svg2png
from PIL import Image
import io

# Read the SVG file
with open("public/logo.svg", "r") as f:
    svg_data = f.read()

# Define sizes needed for different platforms
sizes = [
    (16, 16),    # Browser favicon
    (32, 32),    # Browser favicon
    (48, 48),    # Windows site icons
    (180, 180),  # Apple touch icon
    (192, 192),  # Android Chrome
    (512, 512),  # Android Chrome, PWA
]

print("Generating favicon files...")

# Generate PNG files at different sizes
for width, height in sizes:
    print(f"Generating {width}x{height}...")
    
    # Convert SVG to PNG at specified size
    png_data = svg2png(
        bytestring=svg_data.encode('utf-8'),
        output_width=width,
        output_height=height,
    )
    
    # Save individual size
    with open(f"public/favicon-{width}x{height}.png", "wb") as f:
        f.write(png_data)

# Create favicon.ico with multiple sizes (16x16 and 32x32)
print("Creating favicon.ico...")
images = []
for size in [(16, 16), (32, 32), (48, 48)]:
    png_data = svg2png(
        bytestring=svg_data.encode('utf-8'),
        output_width=size[0],
        output_height=size[1],
    )
    img = Image.open(io.BytesIO(png_data))
    images.append(img)

# Save as ICO file
images[0].save(
    "public/favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=images[1:]
)

# Create apple-touch-icon.png (180x180)
print("Creating apple-touch-icon.png...")
png_data = svg2png(
    bytestring=svg_data.encode('utf-8'),
    output_width=180,
    output_height=180,
)
with open("public/apple-touch-icon.png", "wb") as f:
    f.write(png_data)

print("✓ All favicon files generated successfully!")
print("\nGenerated files:")
print("  - favicon.ico (16x16, 32x32, 48x48)")
print("  - apple-touch-icon.png (180x180)")
for width, height in sizes:
    print(f"  - favicon-{width}x{height}.png")
