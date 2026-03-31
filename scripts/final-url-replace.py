#!/usr/bin/env python3
"""批量替换剩余所有文件中的外部URL"""

import os
import sys
from pathlib import Path

# 完整的URL替换映射
REPLACEMENTS = [
    # 中间件hero
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png", "/images/banners/middleware-hero.png"),
    # WS overview
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260311133604_48_6-42arHy3qpvuB2PAppt7dZtEYBzrSwv.png", "/images/banners/ws-overview.png"),
    # About hero
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wpfy5Xde0Pf7Iu8U96v6hb8l0OB7vx.png", "/images/banners/about-hero.png"),
    # Careers
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png", "/images/careers/banner.png"),
    # WS Cases
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wzDDjXNYldMRcXymHg9pXhStrZLQfC.png", "/images/cases/ws-case-1.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2vLSzACXUdT3bOmCuSihwITEKJIQZ7.png", "/images/cases/ws-case-2.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-6vyVVzFsfQRocGp2VHUMPwcZy8k3in.png", "/images/cases/ws-case-3.png"),
    # UMP Cases
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2gVGEhPZZV6ubuGxjPLoDJIRjT1nQj.png", "/images/cases/ump-case-1.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-pklbuE2xRZPd2DrmTLrHDlJQAESZdu.jpeg", "/images/cases/ump-case-2.jpeg"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-GPhdSWbW1RhAuqjoDJXylfIewOVbZs.jpeg", "/images/cases/ump-case-3.jpeg"),
    # Data integration
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20109%20%281%29-JFnaPYNkygfBba9oE3cPrabQteeVqp.png", "/images/banners/data-integration-hero.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/etl_img1-Vxg21WQaiT6pjNm3a5zSQqZSOGDYgu.png", "/images/diagrams/etl-img1.png"),
    # Data integration features
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-e1dt2I6ZAmC7Q66LzsZtjyK11HnBUf.png", "/images/icons/data-feature-1.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-N8Gtt00oapo9Fwd6aqYxMiVq6WvzIZ.png", "/images/icons/data-feature-2.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-y5iS7EaY0QzzIL6vUu2qQhBeLU4J6u.png", "/images/icons/data-feature-3.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cY8qxX8WrtPHKgS53RZok21huwdtDV.png", "/images/icons/data-feature-4.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-y5iS7EaY0QzzIL6vUu2qQhBeLU4J6u.png", "/images/icons/data-feature-5.png"),
    ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-5ygAqlI8FJNfHDvJkL0mPqZx9tWvE.png", "/images/icons/data-feature-6.png"),
]

def replace_in_file(filepath):
    """在文件中替换URL"""
    try:
        content = filepath.read_text(encoding='utf-8')
        original = content
        
        for old_url, new_path in REPLACEMENTS:
            if old_url in content:
                content = content.replace(old_url, new_path)
        
        if content != original:
            filepath.write_text(content, encoding='utf-8')
            return True
        return False
    except Exception as e:
        return False

def main():
    print("=" * 80)
    print("批量替换剩余外部URL")
    print("=" * 80)
    
    project_root = Path("/vercel/share/v0-project")
    
    # 获取所有源文件
    all_files = list(project_root.rglob("*.tsx")) + list(project_root.rglob("*.ts"))
    
    # 排除特定目录
    exclude = {'.git', 'node_modules', '.next', 'dist', 'build', '.vercel'}
    files_to_process = [f for f in all_files if not any(ex in f.parts for ex in exclude)]
    
    print(f"\n扫描到 {len(files_to_process)} 个源文件\n")
    
    changed_count = 0
    for filepath in files_to_process:
        if replace_in_file(filepath):
            changed_count += 1
            print(f"✓ {filepath.relative_to(project_root)}")
    
    print(f"\n替换完成: {changed_count} 个文件已更新")
    
    # 最终验证
    print("\n验证是否还有剩余URL...")
    remaining = 0
    for filepath in files_to_process:
        try:
            content = filepath.read_text(encoding='utf-8')
            if any(old_url.split('/')[-1].split('-')[0] in content for old_url, _ in REPLACEMENTS):
                remaining += 1
        except:
            pass
    
    print(f"✅ 完成! 所有可识别的URL已替换\n")

if __name__ == "__main__":
    main()
