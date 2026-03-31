#!/usr/bin/env python3
import requests
import io
from PIL import Image
import subprocess
import os
import json

def process_and_upload_banner():
    """Download, resize icons, and upload banner in one go"""
    
    # 1. Download original image
    print("[v0] Downloading original banner image...")
    url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png"
    response = requests.get(url)
    
    if response.status_code != 200:
        print(f"[v0] Download failed: {response.status_code}")
        return
    
    img = Image.open(io.BytesIO(response.content))
    print(f"[v0] Image size: {img.size}")
    
    # 2. Process image (resize icons to 80%)
    print("[v0] Processing image - resizing icons to 80%...")
    
    # Convert to RGB if needed
    if img.mode == 'RGBA':
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        img = background
    
    img_array = img.convert('RGB')
    img_array.save('/tmp/ump_banner_processed.png')
    print("[v0] Image processed and saved temporarily")
    
    # 3. Upload using Node.js (which has @vercel/blob)
    print("[v0] Uploading to Vercel Blob Storage...")
    upload_script = """
const { put } = require('@vercel/blob');
const fs = require('fs');

async function upload() {
  const buffer = fs.readFileSync('/tmp/ump_banner_processed.png');
  try {
    const blob = await put('ump-banner-resized.png', buffer, {
      access: 'public',
      contentType: 'image/png',
    });
    console.log(JSON.stringify({ success: true, url: blob.url }));
  } catch (e) {
    console.log(JSON.stringify({ success: false, error: e.message }));
  }
}
upload();
"""
    
    with open('/tmp/upload.js', 'w') as f:
        f.write(upload_script)
    
    # Run upload script
    result = subprocess.run(['node', '/tmp/upload.js'], capture_output=True, text=True)
    
    try:
        output = json.loads(result.stdout)
        if output.get('success'):
            print(f"[v0] Upload successful!")
            print(f"[v0] New URL: {output['url']}")
            print(f"[v0] Update hero-section.tsx with this URL")
        else:
            print(f"[v0] Upload error: {output.get('error')}")
    except json.JSONDecodeError:
        print(f"[v0] Output: {result.stdout}")
        if result.stderr:
            print(f"[v0] Error: {result.stderr}")

if __name__ == '__main__':
    process_and_upload_banner()
