#!/usr/bin/env python3
"""批量替换所有外网URL为本地路径，支持离线访问"""

import os
from pathlib import Path

# 完整的URL映射表 - 所有从Vercel Blob Storage和Unsplash的外部链接
ALL_MAPPING = {
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

    # 荣誉证书 - 26个
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E6%8A%80%E6%9C%AF%E6%B4%BB%E5%8A%A8%E5%8D%95%E4%BD%8D.png-YOte9NjBhrswpqcBFJBIhLNG1qlcbe.jpeg": "/images/honors/honor-01.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AA%E6%9D%A5%E4%BA%A7%E4%B8%9A%E4%B9%8B%E6%98%9F.png-9V5P6hbWhoo0Wo3NMA3ZLVRQ3PORhg.jpeg": "/images/honors/honor-02.jpeg",

    # 中间件图标
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-4aie3eI8J1elINiym6u4aKCBT8p0od.png": "/images/icons/middleware-value-1.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-H9ZjrZZ5eOYL7xnX1Q5yfbM62iU0W9.png": "/images/icons/middleware-value-2.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-MC8drmhWyLwME9cUIKwrNcEAVk9fQg.png": "/images/icons/middleware-value-3.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cWIB7g14XT5BOeq5Dv1uHfdfDr6x4w.png": "/images/icons/middleware-value-4.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-l6wOyXuZ6VOPLlfUXoVlP2s9rB4ZEE.png": "/images/icons/middleware-value-5.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ugG6R2Dgl0QXHu7J5GpeHV8pnd3NZ2.png": "/images/icons/middleware-value-6.png",

    # Hero横幅
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png": "/images/banners/middleware-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png": "/images/banners/ws-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png": "/images/banners/ump-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png": "/images/banners/paas-hero.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png": "/images/banners/news-hero.png",

    # Unsplash
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format": "/images/home/customers.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920": "/images/home/honors.jpg",
}

def replace_urls_in_file(file_path):
    """替换单个文件中的所有URL"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        replacements = 0
        
        # 替换所有URL
        for old_url, new_url in ALL_MAPPING.items():
            if old_url in content:
                content = content.replace(old_url, new_url)
                replacements += 1
        
        # 只有当内容改变时才写入
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return replacements
        return 0
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {str(e)}")
        return 0

def main():
    """主程序"""
    print("=" * 70)
    print("批量替换所有外网URL为本地路径，支持离线内网部署")
    print("=" * 70)
    
    project_root = Path("/vercel/share/v0-project")
    print(f"\n项目根目录: {project_root}")
    
    file_types = ['*.tsx', '*.ts', '*.jsx', '*.js']
    directories = ["app", "components", "lib"]
    
    total_files = 0
    updated_files = 0
    total_replacements = 0
    
    for directory in directories:
        dir_path = project_root / directory
        if not dir_path.exists():
            print(f"\n⚠️  目录不存在: {directory}/")
            continue
        
        print(f"\n📁 正在扫描 {directory}/ 目录...")
        
        for file_type in file_types:
            for file_path in dir_path.rglob(file_type):
                total_files += 1
                replacements = replace_urls_in_file(str(file_path))
                if replacements > 0:
                    updated_files += 1
                    total_replacements += replacements
                    rel_path = file_path.relative_to(project_root)
                    print(f"  ✓ {rel_path} ({replacements} 个替换)")
    
    print("\n" + "=" * 70)
    print(f"✅ 替换完成!")
    print(f"   扫描文件总数: {total_files}")
    print(f"   已更新文件数: {updated_files}")
    print(f"   总替换数: {total_replacements}")
    print("=" * 70)
    print("\n✨ 所有外部URL已替换为本地路径，可以离线内网部署")

if __name__ == "__main__":
    main()
