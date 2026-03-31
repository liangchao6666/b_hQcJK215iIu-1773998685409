#!/usr/bin/env python3
import os
import requests
from pathlib import Path
from PIL import Image
from io import BytesIO

# Create directories
os.makedirs("public/images/footer", exist_ok=True)
os.makedirs("public/images/icons", exist_ok=True)

# Download the middleware solution image
middleware_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png"

try:
    response = requests.get(middleware_url, timeout=10)
    if response.status_code == 200:
        img = Image.open(BytesIO(response.content))
        img.save("public/images/solution-middleware.png")
        print("✓ Downloaded solution-middleware.png")
    else:
        print(f"✗ Failed to download middleware image: {response.status_code}")
except Exception as e:
    print(f"✗ Error downloading middleware image: {e}")

print("Setup complete!")
