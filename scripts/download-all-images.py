#!/usr/bin/env python3
"""
Download all external images from the project and save them locally
This script extracts all image URLs from the codebase and downloads them
"""

import os
import sys
import json
import re
import subprocess
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import urlopen
import mimetypes

# Project setup (removed __file__ reference for compatibility)

# Image URL mappings
IMAGE_URLS = {
    # News images
    "news/1.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg",
    "news/2.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-x8G1mh2OxXDdwEitQOHHoP2GavA2hP.jpg",
    "news/3.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-18D7gfxEskJpMo4YWTGmkldXcoaOtl.jpg",
    "news/4.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jfX1cEjcNfA0NuxPdLFbqJFg0wBgJ4.jpg",
    "news/5.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-69ExBIbxUUz6IZyIcRIa6b0hmmMWlS.jpg",
    "news/6.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg",
    "news/7.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg",
    "news/8.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg",
    "news/9.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg",
    "news/10.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg",
    "news/news-default.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png",
    "news/news-alternate.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png",
    "news/news-tech.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png",

    # Honors images
    "honors/honor-01.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E6%8A%80%E6%9C%AF%E6%B4%BB%E5%8A%A8%E5%8D%95%E4%BD%8D.png-YOte9NjBhrswpqcBFJBIhLNG1qlcbe.jpeg",
    "honors/honor-02.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AA%E6%9D%A5%E4%BA%A7%E4%B8%9A%E4%B9%8B%E6%98%9F.png-9V5P6hbWhoo0Wo3NMA3ZLVRQ3PORhg.jpeg",
    "honors/honor-03.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E5%8D%93%E8%B6%8A%E8%B4%A1%E7%8C%AE%E6%88%90%E5%91%98%E5%8D%95%E4%BD%8D.png-EeHvKMcsV0P4vaiVdD7flGCUUUC713.jpeg",
    "honors/honor-04.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-2025%E5%B9%B4%E5%BA%A6%E8%80%83%E6%A0%B8%E7%AD%89%E7%BA%A7%E4%BC%98%E7%A7%80.png-kMWlUOGfECF81211hn0z05mVaPp3B6.jpeg",
    "honors/honor-05.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B_01.png-ZOgrSdyWaNs7qV4i6B1GnYfc6n0CZy.jpeg",
    "honors/honor-06.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%B0%E5%9E%8B%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E4%BC%98%E7%A7%80%E8%A7%A3%E5%86%B3%E6%96%B9.png-crXz5qpwvH40cgBNWiV0COnx1vN8Dk.jpeg",
    "honors/honor-07.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E7%9C%81%E6%95%B0%E6%8D%AE%E6%B2%BB%E7%90%86%E4%BC%98%E7%A7%80%E4%BA%A7%E5%93%81-dDIDElUIZeoIZmzprr9byWfcm3IsQt.jpg",
    "honors/honor-08.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AC%AC%E5%85%AD%E5%B1%8A%E6%B5%8E%E5%8D%97%E5%B8%82%E7%BD%91%E7%BB%9C%E5%92%8C%E6%95%B0%E6%8D%AE%E5%AE%89%E5%85%A8%E6%8A%80%E6%9C%AF%E6%94%AF%E6%92%91%E5%8D%95%E4%BD%8D.png-oCJJKqM4nLFkKvaAncSJDtYWaACGfI.jpeg",
    "honors/honor-09.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E8%BD%AF%E4%BB%B6%E5%92%8C%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%90%8D%E7%89%8C%E4%BC%81%E4%B8%9A.png-85qwN4qnq7P14bL4Bfs3i1vXYRbw0A.jpeg",
    "honors/honor-10.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E5%B9%B4%E5%88%9B%E6%96%B0%E8%BD%AF%E4%BB%B6%E4%BA%A7%E5%93%81-YfzgOKjRRA4c3y816B9qXnHZL2Ogpe.jpg",
    "honors/honor-11.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E5%B9%B4%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%85%B8%E5%9E%8B%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-H72dzePW6mWmgguBzd7QUtetnVOpvG.jpg",
    "honors/honor-12.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E6%95%B0%E5%AD%97%E7%94%9F%E6%80%81%E4%B8%AD%E9%97%B4%E4%BB%B6%E9%A2%86%E5%86%9B%E4%BC%81%E4%B8%9A-HiW4HNevrahTz497FPRlV8XAtWVhL5.jpg",
    "honors/honor-13.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ITSS%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%88%86%E4%BC%9A%E4%BC%9A%E5%91%98%E5%8D%95%E4%BD%8D-0J9MXHjw2fmClKWVzV8aeA32MCm0x7.jpg",
    "honors/honor-14.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%87%91%E9%BC%8E%E7%AD%91%E5%9F%BA%E5%A5%96.png-eu4Mfhr14fUD0LYcyFHvzt8ZPfpKr2.jpeg",
    "honors/honor-15.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E8%BD%AF%E4%BB%B6%E5%92%8C%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E7%AB%9E%E4%BA%89%E5%8A%9B%E7%99%BE%E5%BC%BA%E4%BC%81%E4%B8%9A.png-LxJB64BMHGsvFh178ef902PtGf7eOk.jpeg",
    "honors/honor-16.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E4%BF%A1%E5%88%9B%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%96%BD%E8%83%BD%E5%8A%9B_01.png-fw5hiO3eAY4xlBx0IzKAkA4Gwv0Ihm.jpeg",
    "honors/honor-17.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4AI%20Cloud%E5%88%9B%E6%96%B0%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5AI%20Cloud%E4%B8%AD%E9%97%B4%E4%BB%B6.png-9V5P6hbWhoo0Wo3NMA3ZLVRQ3PORhg.jpeg",
    "honors/honor-18.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E7%BD%91%E7%BB%9C%E4%BA%A7%E5%93%81%E5%AE%89%E5%85%A8%E8%83%BD%E5%8A%9B%E6%8F%90%E5%8D%87%E8%AE%A1%E5%88%92%E4%BC%98%E7%A7%80%E5%8F%82%E4%B8%8E%E5%8D%95%E4%BD%8D.png-mqjdrgv5v1PNNB1obtYLTkQ1U4Uacw.jpeg",
    "honors/honor-19.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E4%BF%A1%E5%88%9B%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%96%BD%E8%83%BD%E5%8A%9B_01.png-fw5hiO3eAY4xlBx0IzKAkA4Gwv0Ihm.jpeg",
    "honors/honor-20.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E5%B9%B4%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%85%B8%E5%9E%8B%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-H72dzePW6mWmgguBzd7QUtetnVOpvG.jpg",
    "honors/honor-21.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E7%9C%81%E6%95%B0%E6%8D%AE%E6%B2%BB%E7%90%86%E4%BC%98%E7%A7%80%E4%BA%A7%E5%93%81-dDIDElUIZeoIZmzprr9byWfcm3IsQt.jpg",
    "honors/honor-22.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B_01.png-ZOgrSdyWaNs7qV4i6B1GnYfc6n0CZy.jpeg",
    "honors/honor-23.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%88%9B%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%AD%E9%97%B4%E4%BB%B6_01.png-TfMwx0z5j485cQfQ8MHPW57tjHie4g.jpeg",
    "honors/honor-24.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%B0%E5%9E%8B%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E4%BC%98%E7%A7%80%E8%A7%A3%E5%86%B3%E6%96%B9.png-crXz5qpwvH40cgBNWiV0COnx1vN8Dk.jpeg",
    "honors/honor-25.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ITSS%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%88%86%E4%BC%9A%E4%BC%9A%E5%91%98%E5%8D%95%E4%BD%8D-0J9MXHjw2fmClKWVzV8aeA32MCm0x7.jpg",
    "honors/honor-26.jpg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E6%95%B0%E5%AD%97%E7%94%9F%E6%80%81%E4%B8%AD%E9%97%B4%E4%BB%B6%E9%A2%86%E5%86%9B%E4%BC%81%E4%B8%9A-HiW4HNevrahTz497FPRlV8XAtWVhL5.jpg",

    # Middleware images
    "icons/middleware-value-1.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-4aie3eI8J1elINiym6u4aKCBT8p0od.png",
    "icons/middleware-value-2.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-H9ZjrZZ5eOYL7xnX1Q5yfbM62iU0W9.png",
    "icons/middleware-value-3.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-MC8drmhWyLwME9cUIKwrNcEAVk9fQg.png",
    "icons/middleware-value-4.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cWIB7g14XT5BOeq5Dv1uHfdfDr6x4w.png",
    "icons/middleware-value-5.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-l6wOyXuZ6VOPLlfUXoVlP2s9rB4ZEE.png",
    "icons/middleware-value-6.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ugG6R2Dgl0QXHu7J5GpeHV8pnd3NZ2.png",

    # Hero section banners
    "banners/middleware-hero.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png",
    "banners/ws-hero.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png",
    "banners/ws-overview.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260311133604_48_6-42arHy3qpvuB2PAppt7dZtEYBzrSwv.png",
    "banners/ump-hero.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png",
    "banners/paas-hero.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png",
    "banners/news-hero.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png",
    "banners/contact-form.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpRN1ck3SjU81tEMFe9TTmXF2u0ZU5.png",

    # Case study images
    "cases/ws-case-1.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wzDDjXNYldMRcXymHg9pXhStrZLQfC.png",
    "cases/ws-case-2.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2vLSzACXUdT3bOmCuSihwITEKJIQZ7.png",
    "cases/ws-case-3.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-6vyVVzFsfQRocGp2VHUMPwcZy8k3in.png",
    "cases/ump-case-1.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2gVGEhPZZV6ubuGxjPLoDJIRjT1nQj.png",
    "cases/ump-case-2.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-pklbuE2xRZPd2DrmTLrHDlJQAESZdu.jpeg",
    "cases/ump-case-3.jpeg": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-GPhdSWbW1RhAuqjoDJXylfIewOVbZs.jpeg",

    # Home page images
    "home/customers.jpg": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format",
    "home/honors.jpg": "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    "careers/banner.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png",

    # Footer QR codes
    "footer/qrcode-wechat.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode-2DUnWMBfNJhVmKGN6YqnvC8K5Wbp8B.png",
    "footer/qrcode-public.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode2-pqA5Ln8hJvK2mN9oP3rS4tUvWx.png",

    # Icons
    "icons/online-service.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png",

    # Diagrams
    "diagrams/middleware-arch.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png",
    "diagrams/ai-agent-arch.png": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png",
}

def ensure_dir(path: Path) -> None:
    """Ensure directory exists"""
    path.mkdir(parents=True, exist_ok=True)

def download_image(url: str, destination: Path) -> bool:
    """Download image from URL to destination"""
    try:
        print(f"下载: {url}")
        with urlopen(url, timeout=10) as response:
            with open(destination, 'wb') as out_file:
                out_file.write(response.read())
        print(f"  ✓ 保存到: {destination}")
        return True
    except Exception as e:
        print(f"  ✗ 错误: {e}")
        return False

def main():
    """Download all images"""
    project_root = Path.cwd()
    images_dir = project_root / "public" / "images"
    
    print("=" * 60)
    print("开始下载所有外部图片...")
    print("=" * 60)
    
    total = len(IMAGE_URLS)
    success = 0
    failed = 0
    
    for local_path, url in IMAGE_URLS.items():
        destination = images_dir / local_path
        ensure_dir(destination.parent)
        
        if download_image(url, destination):
            success += 1
        else:
            failed += 1
    
    print("\n" + "=" * 60)
    print(f"下载完成!")
    print(f"成功: {success}/{total}")
    print(f"失���: {failed}/{total}")
    print("=" * 60)
    
    if failed == 0:
        print("\n✓ 所有图片已成功下载!")
    else:
        print(f"\n⚠ 有 {failed} 个图片下载失败，请稍后重试")
    
    return 0 if failed == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
