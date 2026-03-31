#!/usr/bin/env python3
"""
Download and optimize critical images for local deployment
"""

import os
import requests
from pathlib import Path
from PIL import Image
from io import BytesIO

# Create images directory
BASE_DIR = Path(".")
IMAGES_DIR = BASE_DIR / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# Critical images mapping
IMAGES = {
    # Banner images
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png": "home/banner-careers.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format": "home/customers.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920": "home/honors.jpg",
    
    # Footer QR code
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode-2DUnWMBfNJhVmKGN6YqnvC8K5Wbp8B.png": "footer/qrcode.png",
    
    # Online service icon  
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png": "icons/online-service.png",
    
    # Solution diagrams
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png": "diagrams/middleware-arch.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png": "diagrams/ai-agent-arch.png",
}

print("Starting image download and optimization...")
downloaded_count = 0
failed_count = 0

for url, local_path in IMAGES.items():
    try:
        print(f"Processing: {local_path}...")
        
        # Create subdirectory
        local_file = IMAGES_DIR / local_path
        local_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Download image
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Open and optimize image
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGB if necessary (remove alpha channel)
        if img.mode in ('RGBA', 'LA', 'P'):
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = rgb_img
        
        # Resize if too large
        max_width = 1920 if 'banner' in local_path or 'arch' in local_path else 800
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save optimized
        quality = 80 if 'banner' in local_path or 'arch' in local_path else 85
        img.save(str(local_file), 'JPEG', quality=quality, optimize=True)
        
        print(f"✓ Downloaded and optimized: {local_path}")
        downloaded_count += 1
        
    except Exception as e:
        print(f"✗ Failed to download {local_path}: {str(e)}")
        failed_count += 1

print(f"\n完成: {downloaded_count} 个成功, {failed_count} 个失败")
