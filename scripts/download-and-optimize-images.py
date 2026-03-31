#!/usr/bin/env python3
"""
Download all external images and optimize them for local deployment
This script downloads images from URLs and compresses them for faster loading
"""

import os
import sys
import requests
from pathlib import Path
from PIL import Image
from io import BytesIO
import json
from urllib.parse import unquote

# Get the base directory (one level up from scripts)
BASE_DIR = Path(".").resolve()
IMAGES_DIR = BASE_DIR / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# Mapping of external URLs to local paths and metadata
IMAGE_MAPPINGS = {
    # Banner images
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png": {
        "local_path": "banners/ws-banner.png",
        "quality": 85,
        "max_width": 1920
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png": {
        "local_path": "banners/ump-banner.png",
        "quality": 85,
        "max_width": 1920
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png": {
        "local_path": "banners/paas-banner.png",
        "quality": 85,
        "max_width": 1920
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png": {
        "local_path": "banners/news-banner.png",
        "quality": 85,
        "max_width": 1920
    },
    
    # Architecture and structure diagrams
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png": {
        "local_path": "diagrams/architecture-1.png",
        "quality": 85,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png": {
        "local_path": "diagrams/architecture-2.png",
        "quality": 85,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260311133604_48_6-42arHy3qpvuB2PAppt7dZtEYBzrSwv.png": {
        "local_path": "diagrams/wechat-diagram.png",
        "quality": 85,
        "max_width": 1200
    },
    
    # QR codes
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-57sFPmnhiXZUGIDptfDZm3lWnVvXJc.png": {
        "local_path": "qrcodes/qrcode-1.png",
        "quality": 95,
        "max_width": 300
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-ZvQiroB73HZa0RR8y9kaVvioBvP79A.png": {
        "local_path": "qrcodes/qrcode-2.png",
        "quality": 95,
        "max_width": 300
    },
    
    # Icon images
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-6d5wAw1CHEcpX66jutL9j2Scq3HUMO.png": {
        "local_path": "icons/icon-1.png",
        "quality": 85,
        "max_width": 400
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-c1OauyrI23GgNpNIEMLVhuOIdLOE86.png": {
        "local_path": "icons/icon-2.png",
        "quality": 85,
        "max_width": 400
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-GcoP45TnMaJV6RhY8eFBFIS9DlX7eH.png": {
        "local_path": "icons/icon-3.png",
        "quality": 85,
        "max_width": 400
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-PnfeP3iYKRToIgm6GmSLkuhn2UNCt3.png": {
        "local_path": "icons/icon-4.png",
        "quality": 85,
        "max_width": 400
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-jKOGbnhvXBI5xsNOuDh2d8tPXZJS22.png": {
        "local_path": "icons/icon-5.png",
        "quality": 85,
        "max_width": 400
    },
    
    # Contact and form images
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpRN1ck3SjU81tEMFe9TTmXF2u0ZU5.png": {
        "local_path": "forms/contact-image.png",
        "quality": 85,
        "max_width": 800
    },
    
    # Case study images (blob storage)
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wzDDjXNYldMRcXymHg9pXhStrZLQfC.png": {
        "local_path": "cases/case-1.png",
        "quality": 80,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2vLSzACXUdT3bOmCuSihwITEKJIQZ7.png": {
        "local_path": "cases/case-2.png",
        "quality": 80,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-6vyVVzFsfQRocGp2VHUMPwcZy8k3in.png": {
        "local_path": "cases/case-3.png",
        "quality": 80,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2gVGEhPZZV6ubuGxjPLoDJIRjT1nQj.png": {
        "local_path": "cases/ump-case-1.png",
        "quality": 80,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-pklbuE2xRZPd2DrmTLrHDlJQAESZdu.jpeg": {
        "local_path": "cases/ump-case-2.jpg",
        "quality": 80,
        "max_width": 1200
    },
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-GPhdSWbW1RhAuqjoDJXylfIewOVbZs.jpeg": {
        "local_path": "cases/ump-case-3.jpg",
        "quality": 80,
        "max_width": 1200
    },
    
    # News images
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png": {
        "local_path": "news/as-banner.png",
        "quality": 85,
        "max_width": 1200
    },
}

# News list images - download as JPEG with optimization
NEWS_IMAGES = {
    f"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/{i}-{hash}.jpg": f"news/news-{i:02d}.jpg"
    for i in range(1, 11)
}

def download_image(url: str) -> bytes:
    """Download image from URL"""
    print(f"Downloading: {url}")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.content
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return None

def optimize_image(image_data: bytes, max_width: int = 1920, quality: int = 85) -> Image.Image:
    """Optimize image by resizing and reducing quality"""
    img = Image.open(BytesIO(image_data))
    
    # Convert RGBA to RGB for JPEG
    if img.mode in ('RGBA', 'LA', 'P'):
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
        img = background
    
    # Resize if too large
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
    
    return img

def save_optimized_image(img: Image.Image, output_path: Path, quality: int = 85) -> int:
    """Save optimized image and return file size"""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Determine format from extension
    ext = output_path.suffix.lower()
    if ext in ('.jpg', '.jpeg'):
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
    elif ext == '.png':
        img.save(output_path, 'PNG', optimize=True)
    else:
        img.save(output_path)
    
    return output_path.stat().st_size

def process_images():
    """Download and optimize all images"""
    print("Starting image optimization...")
    print(f"Output directory: {IMAGES_DIR}\n")
    
    mapping_file = IMAGES_DIR / "image-mappings.json"
    mappings_json = {}
    
    total_original_size = 0
    total_optimized_size = 0
    
    for url, config in IMAGE_MAPPINGS.items():
        local_path = config["local_path"]
        output_path = IMAGES_DIR / local_path
        
        # Download image
        image_data = download_image(url)
        if not image_data:
            continue
        
        total_original_size += len(image_data)
        
        # Optimize
        try:
            img = optimize_image(
                image_data,
                max_width=config.get("max_width", 1920),
                quality=config.get("quality", 85)
            )
            file_size = save_optimized_image(
                img,
                output_path,
                quality=config.get("quality", 85)
            )
            total_optimized_size += file_size
            
            # Store mapping
            mappings_json[url] = f"/images/{local_path}"
            print(f"✓ Saved: {local_path} ({file_size / 1024:.1f} KB)")
        except Exception as e:
            print(f"✗ Error processing {url}: {e}")
    
    # Save mappings
    with open(mapping_file, 'w', encoding='utf-8') as f:
        json.dump(mappings_json, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Image mappings saved to: {mapping_file}")
    print(f"\nOptimization Summary:")
    print(f"Original size: {total_original_size / 1024 / 1024:.2f} MB")
    print(f"Optimized size: {total_optimized_size / 1024 / 1024:.2f} MB")
    print(f"Reduction: {(1 - total_optimized_size / total_original_size) * 100:.1f}%")

if __name__ == "__main__":
    process_images()
