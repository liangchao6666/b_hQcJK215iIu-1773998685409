#!/usr/bin/env python3
"""Download public WeChat QR code for offline deployment"""

import os
from pathlib import Path
import urllib.request

# Create directories
images_dir = Path("public/images/footer")
images_dir.mkdir(parents=True, exist_ok=True)

# Download public WeChat QR code
qr_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-E5GuTtKdhXDCzFLIy5RdbIxTjYqf6k.png"
output_path = images_dir / "qrcode-public.png"

try:
    print("[v0] Downloading public QR code...")
    urllib.request.urlretrieve(qr_url, output_path)
    print(f"[v0] Successfully saved {output_path}")
except Exception as e:
    print(f"[v0] Error downloading: {e}")
