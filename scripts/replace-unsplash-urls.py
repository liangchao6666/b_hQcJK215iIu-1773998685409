#!/usr/bin/env python3
"""
Replace all unsplash URLs with local paths
"""

import os
import re
from pathlib import Path

# Map each unsplash URL to a local path
URL_REPLACEMENTS = {
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format": "/images/cases/case-tech-1.jpg",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format": "/images/cases/case-tech-2.jpg",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format": "/images/cases/case-tech-3.jpg",
    "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80&auto=format": "/images/cases/case-tech-4.jpg",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format": "/images/cases/case-tech-5.jpg",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format": "/images/cases/case-tech-6.jpg",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80&auto=format": "/images/cases/case-tech-7.jpg",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format": "/images/cases/case-tech-8.jpg",
}

def replace_urls_in_file(file_path):
    """Replace external URLs with local paths in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Replace each URL
        for old_url, new_url in URL_REPLACEMENTS.items():
            content = content.replace(old_url, new_url)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path}")
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    return False

# Process the cases page
cases_file = Path("app/cases/[slug]/page.tsx")
if cases_file.exists():
    replace_urls_in_file(cases_file)
    print("Cases page updated successfully!")
else:
    print(f"File not found: {cases_file}")
