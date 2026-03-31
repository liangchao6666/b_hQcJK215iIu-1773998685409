#!/usr/bin/env python3
"""
Download required images for offline deployment
"""
import requests
from pathlib import Path
from PIL import Image
from io import BytesIO

# Create directories
images_dir = Path("public/images")
images_dir.mkdir(parents=True, exist_ok=True)

# Images to download with their URLs and local paths
images_to_download = {
    "icons/online-service.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-FSEFEG6asYuHOWlrfLeqLyQLh6NnYN.png",
    "footer/qrcode-wechat.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-E5GuTtKdhXDCzFLIy5RdbIxTjYqf6k.png",
    "footer/qrcode-video.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-u8eXoO3zYildei5JSTej7TrWsELyEF.png",
}

for local_path, url in images_to_download.items():
    full_path = images_dir / local_path
    full_path.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        print(f"[v0] Downloading {local_path}...")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Open image with PIL to validate and potentially optimize
        img = Image.open(BytesIO(response.content))
        
        # Save image
        img.save(full_path, quality=85, optimize=True)
        print(f"[v0] Successfully saved {local_path}")
    except Exception as e:
        print(f"[v0] Error downloading {local_path}: {str(e)}")

print("[v0] Image download complete!")
