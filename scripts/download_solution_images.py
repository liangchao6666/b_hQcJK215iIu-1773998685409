#!/usr/bin/env python3

import os
import urllib.request
from pathlib import Path

images = [
    {
        'url': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207132-HJpuPiROV0R54MEiuyndeK4CqVAKqh.png',
        'filename': 'middleware-solution.png'
    },
    {
        'url': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subtract%20%281%29-vsE5hWqJd0UpujSCdARKbC223ITKh2.png',
        'filename': 'xinchuang-middleware-solution.png'
    },
    {
        'url': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207131%20%281%29-BPlmefIpxt6it2acm5teAnn8OjfBKf.png',
        'filename': 'ai-agent-solution.png'
    }
]

# 创建目录
solutions_dir = Path('public/images/solutions')
solutions_dir.mkdir(parents=True, exist_ok=True)
print(f'[v0] 创建目录: {solutions_dir}')

# 下载图片
for image in images:
    filepath = solutions_dir / image['filename']
    try:
        print(f'[v0] 正在下载: {image["filename"]}...')
        urllib.request.urlretrieve(image['url'], filepath)
        file_size = filepath.stat().st_size
        print(f'[v0] 下载完成: {image["filename"]} ({file_size} 字节)')
    except Exception as e:
        print(f'[v0] 下载失败 {image["filename"]}: {e}')

print('[v0] 所有图片下载完成!')
