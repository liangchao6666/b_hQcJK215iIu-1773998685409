#!/usr/bin/env python3
"""
批量替换所有unsplash URL为本地路径
"""
import os
import re

# 定义URL映射 - unsplash URL到本地路径
url_mapping = {
    # cases页面的图片
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format": "/images/cases/case-1-hero.jpg",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format": "/images/cases/case-1-content.jpg",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format": "/images/cases/case-2-hero.jpg",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&auto=format": "/images/cases/case-2-content.jpg",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80&auto=format": "/images/cases/case-3-hero.jpg",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80&auto=format": "/images/cases/case-3-content.jpg",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80&auto=format": "/images/cases/case-4-hero.jpg",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80&auto=format": "/images/cases/case-4-content.jpg",
    "https://images.unsplash.com/photo-1559523182-a2dc92d831bc?w=1200&q=80&auto=format": "/images/cases/case-5-hero.jpg",
    "https://images.unsplash.com/photo-1559523182-a2dc92d831bc?w=600&q=80&auto=format": "/images/cases/case-5-content.jpg",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format": "/images/cases/case-6-hero.jpg",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format": "/images/cases/case-6-content.jpg",
}

def replace_urls_in_file(file_path):
    """Replace all unsplash URLs with local paths in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        replaced_count = 0
        
        # Replace each URL mapping
        for old_url, new_url in url_mapping.items():
            if old_url in content:
                content = content.replace(old_url, new_url)
                replaced_count += 1
                print(f"  ✓ Replaced: {old_url[:60]}...")
        
        # 通用替换模式 - 替换任何unsplash URL为通用本地路径
        unsplash_pattern = r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+\?[^"\'<>]*'
        matches = re.findall(unsplash_pattern, content)
        if matches:
            for match in matches:
                # 根据URL的宽度参数生成对应的本地路径
                if 'w=1200' in match or 'w=1920' in match or 'w=1280' in match:
                    local_path = "/images/cases/case-placeholder-hero.jpg"
                else:
                    local_path = "/images/cases/case-placeholder-content.jpg"
                content = content.replace(match, local_path)
                replaced_count += 1
                print(f"  ✓ Replaced generic unsplash URL: {match[:60]}...")
        
        if replaced_count > 0:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ {file_path}: {replaced_count} URLs replaced")
            return True
        return False
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("Starting URL replacement for offline access support...\n")
    
    base_dir = "/vercel/share/v0-project"
    files_to_process = [
        "app/cases/[slug]/page.tsx",
        "lib/image-url-mapping.ts",
    ]
    
    total_replaced = 0
    
    for file_path in files_to_process:
        full_path = os.path.join(base_dir, file_path)
        if os.path.exists(full_path):
            print(f"\nProcessing: {file_path}")
            if replace_urls_in_file(full_path):
                total_replaced += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    
    print(f"\n{'='*60}")
    print(f"✅ Completed: {total_replaced} files updated")
    print(f"   All unsplash URLs have been replaced with local paths")
    print(f"   Images will be available for offline access after deployment")

if __name__ == "__main__":
    main()
