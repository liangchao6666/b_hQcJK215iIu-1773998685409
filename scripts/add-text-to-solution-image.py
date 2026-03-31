#!/usr/bin/env python3
"""
Add text overlay to solution card image
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if needed
os.makedirs("public/images", exist_ok=True)

# Load the middleware solution image as base
img = Image.open("public/images/solution-middleware.png")
width, height = img.size

# Create a copy for AI agent solution
ai_agent_img = img.copy()
draw = ImageDraw.Draw(ai_agent_img)

# Try to use a nice Chinese-compatible font
try:
    # Try different font paths that might exist on the system
    font_paths = [
        "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
        "/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttf",
        "/System/Library/Fonts/PingFang.ttc",
        "C:\\Windows\\Fonts\\simhei.ttf",
    ]
    
    font = None
    for font_path in font_paths:
        if os.path.exists(font_path):
            font = ImageFont.truetype(font_path, int(height * 0.08))
            break
    
    if font is None:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Add text to the center of the image
    text = "AI 智能体管理平台解决方案"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Center the text
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text with white color and black outline for better visibility
    outline_width = 2
    for adj_x in range(-outline_width, outline_width + 1):
        for adj_y in range(-outline_width, outline_width + 1):
            draw.text((x + adj_x, y + adj_y), text, font=font, fill="black")
    
    draw.text((x, y), text, font=font, fill="white")
    
    # Save the modified image
    ai_agent_img.save("public/images/solution-ai-agent-labeled.png")
    print(f"✓ Created AI agent solution image with text at public/images/solution-ai-agent-labeled.png")

except Exception as e:
    print(f"Error adding text to image: {e}")
    print("Falling back to default image without text")
