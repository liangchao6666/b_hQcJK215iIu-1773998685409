#!/usr/bin/env python3
"""Generate placeholder images for cases and data integration"""

import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# Create directories if they don't exist
project_root = Path("/vercel/share/v0-project")
cases_dir = project_root / "public" / "images" / "cases"
cases_dir.mkdir(parents=True, exist_ok=True)

# WS Cases images (if missing)
ws_cases = [
    ("ws-case-1.png", "政府部门\n29个部委"),
    ("ws-case-2.png", "金融行业\n金融服务"),
    ("ws-case-3.png", "通讯行业\n运营商防护"),
]

# Data Integration Cases images
di_cases = [
    ("di-case-maritime.jpg", "海事局\n多省覆盖"),
    ("di-case-pharmaceutical.jpg", "医药企业\n数据仓库"),
    ("di-case-government.jpg", "市场监管\n省级应用"),
]

def create_placeholder_image(filepath, text, bg_color=(191, 25, 32), text_color=(255, 255, 255)):
    """Create a placeholder image with text"""
    width, height = 400, 250
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a default font, fall back to default if not available
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
    except:
        font = ImageFont.load_default()
        small_font = font
    
    # Draw text in center
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=text_color, font=font)
    
    return img

# Generate WS case images
for filename, text in ws_cases:
    filepath = cases_dir / filename
    if not filepath.exists():
        print(f"Creating {filename}...")
        img = create_placeholder_image(str(filepath), text)
        img.save(filepath)
        print(f"✓ Created {filename}")
    else:
        print(f"✓ {filename} already exists")

# Generate Data Integration case images
for filename, text in di_cases:
    filepath = cases_dir / filename
    if not filepath.exists():
        print(f"Creating {filename}...")
        # Use different color for data integration
        img = create_placeholder_image(str(filepath), text, bg_color=(100, 150, 200))
        img.save(filepath)
        print(f"✓ Created {filename}")
    else:
        print(f"✓ {filename} already exists")

print("\nAll placeholder images created successfully!")
