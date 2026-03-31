import os
import urllib.request
from pathlib import Path

# 创建目录
project_root = Path('/vercel/share/v0-project')
images_dir = project_root / 'public' / 'images'
images_dir.mkdir(parents=True, exist_ok=True)

print(f'[v0] 创建目录: {images_dir}')
print(f'[v0] 目录存在: {images_dir.exists()}\n')

images = [
    {
        'url': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207132-HJpuPiROV0R54MEiuyndeK4CqVAKqh.png',
        'filename': 'solution-middleware.png',
        'name': '信创中间件双活容灾'
    },
    {
        'url': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subtract%20%281%29-vsE5hWqJd0UpujSCdARKbC223ITKh2.png',
        'filename': 'solution-xinchuang.png',
        'name': '信创全栈自主可控'
    },
    {
        'url': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207131%20%281%29-BPlmefIpxt6it2acm5teAnn8OjfBKf.png',
        'filename': 'solution-ai-agent.png',
        'name': 'AI智能体管理平台'
    }
]

print('[v0] 开始下载解决方案图片...\n')

for image in images:
    filepath = images_dir / image['filename']
    try:
        print(f"[v0] 下载: {image['name']}")
        urllib.request.urlretrieve(image['url'], filepath)
        file_size = filepath.stat().st_size
        print(f"[v0] ✓ 已保存: {image['filename']} ({file_size / 1024 / 1024:.2f} MB)")
        print(f"[v0] ✓ 完整路径: {filepath}\n")
    except Exception as e:
        print(f"[v0] ✗ 下载失败 {image['filename']}: {str(e)}\n")

print('[v0] 下载完成！')
print('[v0] 验证文件...')
for image in images:
    filepath = images_dir / image['filename']
    exists = filepath.exists()
    print(f"[v0] {image['filename']}: {'✓ 存在' if exists else '✗ 不存在'}")
