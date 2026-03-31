#!/usr/bin/env python3
"""
Download offline images for local deployment
"""
import os
import requests
from pathlib import Path

# Create directories
base_dir = Path(".")
images_dir = base_dir / "public" / "images"
icons_dir = images_dir / "icons"
footer_dir = images_dir / "footer"

icons_dir.mkdir(parents=True, exist_ok=True)
footer_dir.mkdir(parents=True, exist_ok=True)

# Image URLs and local paths
images_to_download = {
    # Online service icon
    str(icons_dir / "online-service.png"): "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-boX7IcpoSbQmmMSHWXnerZtT0BOJQF.png",
    # Public QR code (for online service widget)
    str(footer_dir / "qrcode-public.png"): "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-KVxcxQnl0SddIK3UxfLNp08OugQGre.png",
    # WeChat QR code (for footer)
    str(footer_dir / "qrcode-wechat.png"): "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-KVxcxQnl0SddIK3UxfLNp08OugQGre.png",
    # Video account QR code (for footer)
    str(footer_dir / "qrcode-video.png"): "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-4vbxh9MstfEro0CgtE1U1kJVv3CR6f.png",
}

# Download images
for local_path, url in images_to_download.items():
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(local_path, 'wb') as f:
            f.write(response.content)
        print(f"✓ Downloaded: {local_path}")
    except Exception as e:
        print(f"✗ Failed to download {local_path}: {e}")

print("\nDone! All images downloaded to public/images/")
