#!/usr/bin/env python3
"""Download footer QR codes and create URL mapping"""

import requests
from pathlib import Path
from PIL import Image
from io import BytesIO
import json

BASE_DIR = Path(".").resolve()
IMAGES_DIR = BASE_DIR / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# QR codes to download
qrcodes = {
    "footer/qrcode-wechat.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-57sFPmnhiXZUGIDptfDZm3lWnVvXJc.png",
    "footer/qrcode-video.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-ZvQiroB73HZa0RR8y9kaVvioBvP79A.png",
}

# URL mapping for all images
url_mapping = {
    # Home page
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-careers-3HhW5Q8Z6vFnM2kL9pQ4rS1tU2v3w4.jpg": "/images/home/banner-careers.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/customers-image-A1b2C3d4E5f6G7h8I9j0K1l2M3n4o5.jpg": "/images/home/customers.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/honors-image-X9y8Z7w6V5u4T3s2R1q0P9o8N7m6L5.jpg": "/images/home/honors.jpg",
    
    # Footer QR codes
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-57sFPmnhiXZUGIDptfDZm3lWnVvXJc.png": "/images/footer/qrcode-wechat.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-ZvQiroB73HZa0RR8y9kaVvioBvP79A.png": "/images/footer/qrcode-video.png",
    
    # Icons
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png": "/images/icons/online-service.png",
    
    # Architecture diagrams
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png": "/images/diagrams/middleware-arch.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png": "/images/diagrams/ai-agent-arch.png",
}

print("Downloading QR codes...")
for output_path, url in qrcodes.items():
    try:
        full_path = IMAGES_DIR / output_path
        full_path.parent.mkdir(parents=True, exist_ok=True)
        
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        img = Image.open(BytesIO(response.content))
        # Compress QR codes slightly
        if img.size[0] > 200:
            img.thumbnail((200, 200), Image.Resampling.LANCZOS)
        img = img.convert("RGB")
        img.save(str(full_path), "JPEG", quality=85, optimize=True)
        print(f"✓ Downloaded: {output_path}")
    except Exception as e:
        print(f"✗ Failed {output_path}: {e}")

# Save URL mapping
mapping_file = BASE_DIR / "public" / "image-mapping.json"
with open(mapping_file, "w") as f:
    json.dump(url_mapping, f, indent=2)
print(f"\n✓ URL mapping saved to {mapping_file}")
print("Complete!")
