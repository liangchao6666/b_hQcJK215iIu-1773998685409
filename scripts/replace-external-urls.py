#!/usr/bin/env python3
"""
自动替换所有源代码中的外部URL为本地路径
"""

import os
import re
from pathlib import Path
from typing import Dict, Tuple

# URL映射
URL_MAPPING: Dict[str, str] = {
    # 新闻图片
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg": "/images/news/1.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-x8G1mh2OxXDdwEitQOHHoP2GavA2hP.jpg": "/images/news/2.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-18D7gfxEskJpMo4YWTGmkldXcoaOtl.jpg": "/images/news/3.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jfX1cEjcNfA0NuxPdLFbqJFg0wBgJ4.jpg": "/images/news/4.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-69ExBIbxUUz6IZyIcRIa6b0hmmMWlS.jpg": "/images/news/5.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg": "/images/news/6.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg": "/images/news/7.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg": "/images/news/8.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg": "/images/news/9.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg": "/images/news/10.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png": "/images/news/news-default.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png": "/images/news/news-alternate.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png": "/images/news/news-tech.png",

    # 荣誉证书
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E6%8A%80%E6%9C%AF%E6%B4%BB%E5%8A%A8%E5%8D%95%E4%BD%8D.png-YOte9NjBhrswpqcBFJBIhLNG1qlcbe.jpeg": "/images/honors/honor-01.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AA%E6%9D%A5%E4%BA%A7%E4%B8%9A%E4%B9%8B%E6%98%9F.png-9V5P6hbWhoo0Wo3NMA3ZLVRQ3PORhg.jpeg": "/images/honors/honor-02.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E5%8D%93%E8%B6%8A%E8%B4%A1%E7%8C%AE%E6%88%90%E5%91%98%E5%8D%95%E4%BD%8D.png-EeHvKMcsV0P4vaiVdD7flGCUUUC713.jpeg": "/images/honors/honor-03.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-2025%E5%B9%B4%E5%BA%A6%E8%80%83%E6%A0%B8%E7%AD%89%E7%BA%A7%E4%BC%98%E7%A7%80.png-kMWlUOGfECF81211hn0z05mVaPp3B6.jpeg": "/images/honors/honor-04.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B_01.png-ZOgrSdyWaNs7qV4i6B1GnYfc6n0CZy.jpeg": "/images/honors/honor-05.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%B0%E5%9E%8B%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E4%BC%98%E7%A7%80%E8%A7%A3%E5%86%B3%E6%96%B9.png-crXz5qpwvH40cgBNWiV0COnx1vN8Dk.jpeg": "/images/honors/honor-06.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%B5%B7%E4%BC%AB%E6%96%B0%E5%8E%9F%E4%B8%AD%E6%96%87_07-dDIDElUIZeoIZmzprr9byWfcm3IsQt.jpg": "/images/honors/honor-07.jpg",

    # 中间件
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-4aie3eI8J1elINiym6u4aKCBT8p0od.png": "/images/icons/middleware-value-1.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-H9ZjrZZ5eOYL7xnX1Q5yfbM62iU0W9.png": "/images/icons/middleware-value-2.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-MC8drmhWyLwME9cUIKwrNcEAVk9fQg.png": "/images/icons/middleware-value-3.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cWIB7g14XT5BOeq5Dv1uHfdfDr6x4w.png": "/images/icons/middleware-value-4.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-l6wOyXuZ6VOPLlfUXoVlP2s9rB4ZEE.png": "/images/icons/middleware-value-5.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ugG6R2Dgl0QXHu7J5GpeHV8pnd3NZ2.png": "/images/icons/middleware-value-6.png",

    # Hero横幅
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png": "/images/banners/middleware-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png": "/images/banners/ws-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260311133604_48_6-42arHy3qpvuB2PAppt7dZtEYBzrSwv.png": "/images/banners/ws-overview.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png": "/images/banners/ump-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png": "/images/banners/paas-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png": "/images/banners/news-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpRN1ck3SjU81tEMFe9TTmXF2u0ZU5.png": "/images/banners/contact-form.png",

    # 案例研究
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wzDDjXNYldMRcXymHg9pXhStrZLQfC.png": "/images/cases/ws-case-1.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2vLSzACXUdT3bOmCuSihwITEKJIQZ7.png": "/images/cases/ws-case-2.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-6vyVVzFsfQRocGp2VHUMPwcZy8k3in.png": "/images/cases/ws-case-3.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2gVGEhPZZV6ubuGxjPLoDJIRjT1nQj.png": "/images/cases/ump-case-1.png",

    # Unsplash
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format": "/images/home/customers.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920": "/images/home/honors.jpg",
}

def process_file(file_path: Path) -> Tuple[int, int]:
    """处理单个文件，替换所有URL"""
    try:
        content = file_path.read_text(encoding='utf-8')
        original_content = content
        
        for external_url, local_path in URL_MAPPING.items():
            if external_url in content:
                content = content.replace(external_url, local_path)
                print(f"  ✓ 替换: {external_url[:60]}...")
        
        if content != original_content:
            file_path.write_text(content, encoding='utf-8')
            return (1, len([url for url in URL_MAPPING if url in original_content]))
        return (0, 0)
    except Exception as e:
        print(f"  ✗ 错误: {e}")
        return (0, 0)

def main():
    """主程序"""
    project_root = Path.cwd()
    
    # 需要扫描的文件夹
    source_dirs = ["components", "app", "lib"]
    
    print("=" * 60)
    print("开始替换所有源代码中的外部URL...")
    print("=" * 60)
    
    total_files = 0
    updated_files = 0
    total_replacements = 0
    
    for source_dir in source_dirs:
        dir_path = project_root / source_dir
        if not dir_path.exists():
            continue
            
        print(f"\n扫描 {source_dir}/ 目录...")
        
        for file_path in dir_path.rglob("*.{tsx,ts,jsx,js}"):
            total_files += 1
            files_updated, replacements = process_file(file_path)
            if files_updated:
                updated_files += 1
                total_replacements += replacements
                print(f"  已更新: {file_path.relative_to(project_root)}")
    
    print("\n" + "=" * 60)
    print(f"替换完成!")
    print(f"扫描文件数: {total_files}")
    print(f"更新文件数: {updated_files}")
    print(f"总替换数: {total_replacements}")
    print("=" * 60)
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
