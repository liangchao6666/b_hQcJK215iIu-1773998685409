# 本地图片部署准备步骤

## 快速开始

为了支持内网部署，项目已配置为使用本地图片路径。按照以下步骤准备图片文件即可。

## 所需图片文件

将以下图片文件放置到 `public/images/` 目录对应的子目录中：

### 1. 页脚二维码 (`public/images/footer/`)
```
qrcode-wechat.png     # 微信公众号二维码
qrcode-video.png      # 视频号二维码  
qrcode-public.png     # 公众号二维码（在线服务悬浮窗用）
```

### 2. 图标 (`public/images/icons/`)
```
online-service.png    # 在线服务图标（红色带耳机问号）
```

### 3. 架构图 (`public/images/diagrams/`)
```
middleware-arch.png   # 中间件管理平台架构图
ai-agent-arch.png     # AI智能体管理平台架构图
```

### 4. 首页素材 (`public/images/home/`)
```
customers.jpg         # 我们的客户
honors.jpg           # 公司荣誉
```

### 5. 职位页面 (`public/images/careers/`)
```
banner.png           # 加入我们页面banner
```

## 图片规格建议

| 用途 | 分辨率 | 格式 | 文件大小 | 质量 |
|------|--------|------|---------|------|
| Banner | 1920x600 | JPG | < 200KB | 80-85% |
| 二维码 | 200x200 | PNG | < 30KB | - |
| 图标 | 200x200 | PNG | < 20KB | - |
| 架构图 | 1400x800 | PNG/JPG | < 300KB | 80-85% |
| 缩略图 | 600x400 | JPG | < 50KB | 80% |

## 图片优化命令

### 使用 ImageMagick 压缩 JPG
```bash
# 压缩单个文件
convert input.jpg -quality 80 -resize 1920x600 output.jpg

# 批量压缩
for file in *.jpg; do
  convert "$file" -quality 80 "optimized_$file"
done
```

### 使用 sharp 工具
```bash
# 需要先安装：npm install -g sharp-cli

# 转换为 WebP（更小的文件）
sharp -i input.jpg -o output.webp --quality 80

# 批量处理
sharp -i '*.jpg' -o 'optimized/' -f webp --quality 80
```

### 使用 FFmpeg 处理视频缩略图
```bash
ffmpeg -i video.mp4 -ss 00:00:05 -vf "scale=600:400" -q:v 5 thumbnail.jpg
```

## 文件结构示例

```
public/
└── images/
    ├── footer/
    │   ├── qrcode-wechat.png      (150x150)
    │   ├── qrcode-video.png       (150x150)
    │   └── qrcode-public.png      (150x150)
    ├── icons/
    │   └── online-service.png     (200x200)
    ├── diagrams/
    │   ├── middleware-arch.png    (1400x800)
    │   └── ai-agent-arch.png      (1400x800)
    ├── home/
    │   ├── customers.jpg          (1920x600)
    │   └── honors.jpg             (1920x600)
    ├── careers/
    │   └── banner.png             (1920x600)
    └── cases/
        ├── case-1.jpg             (600x400)
        ├── case-2.jpg             (600x400)
        └── ...
```

## 验证步骤

1. **检查文件存在**
```bash
# 确认所有图片文件已创建
ls -la public/images/footer/
ls -la public/images/icons/
ls -la public/images/diagrams/
```

2. **本地开发测试**
```bash
npm run dev
# 打开 http://localhost:3000
# 检查所有图片是否正确加载
```

3. **生产构建测试**
```bash
npm run build
npm run start
# 打开 http://localhost:3000
# 使用开发者工具检查所有图片加载状态
```

4. **浏览器开发者工具检查**
- 打开 DevTools (F12)
- 切换到 Network 标签
- 刷新页面
- 查看所有 `/images/*` 的请求状态码是否为 200
- 确认没有 404 错误

## 常见问题排查

### 问题1：图片显示为404
**解决**：
- 检查文件路径是否与代码中的一致
- 文件名大小写要匹配
- 确认文件在 `public/` 目录中

### 问题2：构建后图片仍然加载外部URL
**解决**：
- 清除 `.next` 构建缓存：`rm -rf .next`
- 重新构建：`npm run build`

### 问题3：图片显示失真或模糊
**解决**：
- 提高原图质量（质量参数调整为85-90）
- 增加分辨率
- 使用 WebP 格式代替 JPG

### 问题4：页面加载速度慢
**解决**：
- 进一步压缩图片（质量降至75%）
- 使用 WebP 格式（通常减少30%文件大小）
- 添加 `loading="lazy"` 属性进行延迟加载

## 部署检查清单

- [ ] `public/images/` 目录存在
- [ ] 所有子目录已创建（footer, icons, diagrams 等）
- [ ] 所有必需的图片文件已放入对应目录
- [ ] 图片文件格式正确（JPG/PNG）
- [ ] 文件大小在建议范围内
- [ ] 本地开发环境测试通过
- [ ] 生产构建成功
- [ ] 所有图片在生产环境正确加载
- [ ] 浏览器控制台无错误信息

## 后续维护

- 定期检查页面加载性能
- 对新增图片按照规格进行优化
- 保持 `lib/image-url-mapping.ts` 中的URL映射最新
- 在 `INTRANET_DEPLOYMENT.md` 中更新新增的图片引用

## 支持脚本

项目提供了自动化脚本用于图片下载和处理：

```bash
# 下载关键图片
uv run scripts/download-images.py

# 下载二维码
uv run scripts/download-qrcodes.py

# 替换代码中的URL（需手动配置）
uv run scripts/replace-urls.py
```

这些脚本需要互联网连接才能从原URL下载图片。
