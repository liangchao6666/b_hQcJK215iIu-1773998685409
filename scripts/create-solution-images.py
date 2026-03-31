#!/usr/bin/env python3
"""
Create solution images with text labels for each solution card
"""
import os
import sys
from pathlib import Path

# Use current directory as base
BASE_DIR = Path(".").resolve()
IMAGES_DIR = BASE_DIR / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# URL of the middleware solution image to use as base
BASE_IMAGE_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png"

# Solution data with their text labels
solutions_data = [
    {
        "filename": "solution-ai-agent.png",
        "text": "AI 智能体管理平台解决方案"
    },
    {
        "filename": "solution-middleware.png", 
        "text": "信创中间件双活容灾解决方案"
    },
    {
        "filename": "solution-xinchuang.png",
        "text": "信创全栈自主可控中间件解决方案"
    }
]

try:
    # Download base image
    print("Downloading base image...")
    response = requests.get(BASE_IMAGE_URL, timeout=10)
    response.raise_for_status()
    base_image = Image.open(BytesIO(response.content))
    
    # For each solution, create a copy with text overlay
    for solution in solutions_data:
        print(f"Creating {solution['filename']}...")
        
        # Create a copy of the base image
        img = base_image.copy()
        draw = ImageDraw.Draw(img)
        
        # Try to use a Chinese font, fallback to default
        try:
            # Try common Chinese font paths
            font_paths = [
                "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
                "/System/Library/Fonts/PingFang.ttc",
                "C:\\Windows\\Fonts\\msyh.ttc"
            ]
            font = None
            for font_path in font_paths:
                if os.path.exists(font_path):
                    font = ImageFont.truetype(font_path, 28)
                    break
            if not font:
                font = ImageFont.load_default()
        except:
            font = ImageFont.load_default()
        
        # Get image dimensions
        width, height = img.size
        
        # Calculate text position (center bottom)
        text = solution["text"]
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (width - text_width) // 2
        y = height - text_height - 30
        
        # Draw semi-transparent background for text
        padding = 10
        draw.rectangle(
            [(x - padding, y - padding), (x + text_width + padding, y + text_height + padding)],
            fill=(255, 255, 255, 200)
        )
        
        # Draw text
        draw.text((x, y), text, fill=(0, 0, 0), font=font)
        
        # Save image
        output_path = IMAGES_DIR / solution["filename"]
        img.save(output_path, quality=95)
        print(f"✓ Created {output_path}")
    
    print("\nAll solution images created successfully!")

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
