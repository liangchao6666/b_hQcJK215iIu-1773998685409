#!/usr/bin/env python3
"""下载home hero section的4张banner图"""

import os
import requests
from pathlib import Path

urls = {
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20112-SC1qR1vAL0OwGnVH2yeeOMf8RDUmOf.png": "banner-api-gateway.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20161-2VLUlMRLz8orxkx43ijVBm4XLxa4jb.png": "banner-ai-middleware.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20164-Nnh9FiEWdDzrH9KRjWVjsSNjKd0Kvm.png": "banner-global-ai.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111-cmhCV96BtK4rU3j6jmokxHxyokstHP.png": "banner-data-security.png",
}

banners_dir = Path("/vercel/share/v0-project/public/images/banners")
banners_dir.mkdir(parents=True, exist_ok=True)

print("开始下载home hero section的banner图片...")
print(f"目标目录: {banners_dir}\n")

for url, filename in urls.items():
    try:
        filepath = banners_dir / filename
        if filepath.exists():
            print(f"✓ 文件已存在: {filename}")
            continue
            
        print(f"正在下载: {filename}...", end=" ")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        size_mb = filepath.stat().st_size / (1024 * 1024)
        print(f"✓ 完成 ({size_mb:.2f} MB)")
    except Exception as e:
        print(f"✗ 失败: {str(e)}")

print("\n下载完成！")
