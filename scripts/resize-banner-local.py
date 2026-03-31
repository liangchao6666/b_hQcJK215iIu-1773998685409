#!/usr/bin/env python3
"""
处理 UMP banner 图像：缩小图标至80%并保存到 public 目录
"""
import requests
from PIL import Image, ImageDraw
from io import BytesIO
import numpy as np
import os

print("[v0] 开始处理 banner 图像...")

# 下载原始图像
url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png"
print(f"[v0] 从 {url} 下载图像...")

try:
    response = requests.get(url, timeout=30)
    response.raise_for_status()
    img = Image.open(BytesIO(response.content))
    print(f"[v0] 图像尺寸: {img.size}")
except Exception as e:
    print(f"[v0] 下载失败: {e}")
    exit(1)

# 转换为 RGBA 处理
if img.mode != 'RGBA':
    img = img.convert('RGBA')

width, height = img.size
pixels = np.array(img)

# 检测非背景像素（图标）- 使用颜色饱和度和亮度
# 检测背景为浅色（高亮度、低饱和度）的情况
def is_background(pixel):
    r, g, b, a = pixel
    if a < 200:  # 透明像素
        return True
    
    # 计算亮度
    brightness = (r + g + b) / 3
    # 计算饱和度
    max_c = max(r, g, b)
    min_c = min(r, g, b)
    saturation = (max_c - min_c) / max(max_c, 1)
    
    # 背景通常是浅灰色（高亮度，低饱和度）
    if brightness > 200 and saturation < 0.2:
        return True
    
    return False

# 找到图标区域的边界
icon_pixels = np.where(~np.apply_along_axis(is_background, 1, pixels.reshape(-1, 4)), True, False)
icon_pixels = icon_pixels.reshape(height, width)

# 找到包含图标的矩形区域
rows = np.any(icon_pixels, axis=1)
cols = np.any(icon_pixels, axis=0)
if rows.any() and cols.any():
    y_min, y_max = np.where(rows)[0][[0, -1]]
    x_min, x_max = np.where(cols)[0][[0, -1]]
    print(f"[v0] 检测到图标区域: ({x_min}, {y_min}) 到 ({x_max}, {y_max})")
else:
    print("[v0] 未能检测到图标区域，使用全图中心")
    x_min, y_min = 0, 0
    x_max, y_max = width, height

# 计算中心点和缩放参数
center_x = (x_min + x_max) // 2
center_y = (y_min + y_max) // 2
scale_factor = 0.8

# 创建处理后的图像 - 使用高质量缩放
print("[v0] 应用 80% 缩放到图标元素...")
img_array = np.array(img)

# 创建新的图像副本
new_img = img.copy()

# 提取图标区域进行缩放
icon_region = img.crop((x_min, y_min, x_max, y_max))

# 计算新的尺寸
new_width = int((x_max - x_min) * scale_factor)
new_height = int((y_max - y_min) * scale_factor)

# 高质量缩放
icon_region_scaled = icon_region.resize((new_width, new_height), Image.Resampling.LANCZOS)

# 计算粘贴位置（保持中心不动）
paste_x = center_x - new_width // 2
paste_y = center_y - new_height // 2

# 创建临时图像用于合成
temp_img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
temp_img.paste(icon_region_scaled, (paste_x, paste_y), icon_region_scaled)

# 使用透明背景合成
for y in range(height):
    for x in range(width):
        if temp_img.getpixel((x, y))[3] > 0:  # 如果新图像有内容
            new_img.putpixel((x, y), temp_img.getpixel((x, y)))

# 确保 public 目录存在
os.makedirs("public", exist_ok=True)

# 保存到 public 目录
output_path = "public/ump_banner_resized.png"
new_img.save(output_path, 'PNG')
print(f"[v0] 图像已保存到: {output_path}")
print("[v0] 处理完成！")
