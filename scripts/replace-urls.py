#!/usr/bin/env python3
"""
Replace all external image URLs with local paths in the codebase
"""

import os
import re
from pathlib import Path

# URL mapping (local paths)
URL_MAPPING = {
    # Banner images
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png": "/images/home/banner-careers.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format": "/images/home/customers.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920": "/images/home/honors.jpg",
    
    # Footer QR codes
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode-2DUnWMBfNJhVmKGN6YqnvC8K5Wbp8B.png": "/images/footer/qrcode-wechat.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode-video-wCBBjO4GtAeZmKLz3xVo7RhQ9p1K6L.png": "/images/footer/qrcode-video.png",
    
    # Online service icon  
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png": "/images/icons/online-service.png",
    
    # Solution diagrams
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png": "/images/diagrams/middleware-arch.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png": "/images/diagrams/ai-agent-arch.png",
}

# Files to search (exclude node_modules and .next)
SOURCE_DIRS = [
    "app",
    "components", 
    "lib",
    "scripts",
]

FILE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"]

def replace_urls_in_file(file_path):
    """Replace external URLs with local paths in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Replace each URL
        for old_url, new_url in URL_MAPPING.items():
            # Escape special characters in URL for regex
            escaped_url = re.escape(old_url)
            content = re.sub(escaped_url, new_url, content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    return False

# Process all files
base_path = Path(".")
updated_count = 0

for source_dir in SOURCE_DIRS:
    dir_path = base_path / source_dir
    if not dir_path.exists():
        continue
    
    for file_path in dir_path.rglob("*"):
        if file_path.suffix in FILE_EXTENSIONS and file_path.is_file():
            if replace_urls_in_file(file_path):
                print(f"✓ Updated: {file_path}")
                updated_count += 1

print(f"\nTotal files updated: {updated_count}")
print("URL replacement complete!")
