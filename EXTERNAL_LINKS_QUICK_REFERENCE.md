# 外部链接替换 - 快速参考

## 当前状态概览

### ✅ 已完成
- **图片下载**: 70+张图片已下载到 `public/images/`
- **核心文件更新**: 3个关键文件已更新
  - `components/home/honors-section.tsx` ✅
  - `components/news/company-news-list.tsx` ✅ 
  - `components/middleware/value-section.tsx` ✅
- **映射工具**: `lib/local-image-map.ts` 已创建
- **脚本**: `scripts/batch-replace-urls.py` 已创建

### ⏳ 需要完成
- 其他20+个文件中的外部URL需要替换

## 快速完成步骤

### 步骤1: 运行自动替换脚本（最快方式）

```bash
cd /vercel/share/v0-project
python3 scripts/batch-replace-urls.py
```

### 步骤2: 验证没有剩余外部URL

```bash
# 检查Vercel Blob Storage链接
grep -r "hebbkx1anhila5yf.public.blob.vercel-storage.com" \
  --include="*.tsx" --include="*.ts" && echo "❌ 还有外部链接" || echo "✅ 全部替换完成"

# 检查Unsplash链接
grep -r "images.unsplash.com" \
  --include="*.tsx" --include="*.ts" && echo "❌ 还有外部链接" || echo "✅ 全部替换完成"
```

### 步骤3: 测试应用

```bash
npm run dev          # 开发环境测试
npm run build        # 生产构建
npm run start        # 预览生产环境
```

## 需要替换的所有文件列表

### 必须更新的文件 (20个)

#### Hero Section组件 (8个)
1. `components/ws/hero-section.tsx`
2. `components/ump/hero-section.tsx`
3. `components/paas/hero-section.tsx`
4. `components/middleware/hero-section.tsx`
5. `components/news/news-hero-section.tsx`
6. `components/about/hero-section.tsx`
7. `components/shared/contact-form.tsx`
8. `components/careers/careers-content.tsx`

#### 数据文件 (4个)
9. `lib/ws-cases-data.ts`
10. `lib/ump-cases-data.ts`
11. `lib/paas-cases-data.ts`
12. `lib/image-url-mapping.ts`

#### 首页和列表页 (4个)
13. `components/home/customers-section.tsx`
14. `components/home/hero-section.tsx`
15. `app/cases/[slug]/page.tsx`
16. `app/news/page.tsx`

#### 其他页面 (4个)
17. `components/digital-platform/data-integration/overview-section.tsx`
18. `components/digital-platform/data-integration/hero-section.tsx`
19. `components/digital-platform/data-integration/features-section.tsx`
20. `components/online-service-widget.tsx`

## 本地路径速查表

### 最常用的替换

| 来源类型 | 示例外部URL | 替换为 |
|--------|----------|------|
| 新闻图片 | `.../1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg` | `/images/news/1.jpg` |
| 荣誉 | `.../...honor-01.jpeg` | `/images/honors/honor-01.jpeg` |
| 图标 | `.../1-4aie3eI8J1elINiym6u4aKCBT8p0od.png` | `/images/icons/middleware-value-1.png` |
| Banner | `.../ws_baneer-...` | `/images/banners/ws-hero.png` |
| 案例 | `.../1-wzDDjXNYldMRcXymHg9pXhStrZLQfC.png` | `/images/cases/ws-case-1.png` |
| Unsplash | `photo-1552664730-d307ca884978?...` | `/images/home/customers.jpg` |

## 完整的URL映射 (复制粘贴)

```typescript
// 如果脚本不起作用，使用这个映射进行手动替换
const urlMappings = {
  // 新闻 (13个)
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
  
  // 中间件图标 (6个)
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-4aie3eI8J1elINiym6u4aKCBT8p0od.png": "/images/icons/middleware-value-1.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-H9ZjrZZ5eOYL7xnX1Q5yfbM62iU0W9.png": "/images/icons/middleware-value-2.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-MC8drmhWyLwME9cUIKwrNcEAVk9fQg.png": "/images/icons/middleware-value-3.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cWIB7g14XT5BOeq5Dv1uHfdfDr6x4w.png": "/images/icons/middleware-value-4.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-l6wOyXuZ6VOPLlfUXoVlP2s9rB4ZEE.png": "/images/icons/middleware-value-5.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ugG6R2Dgl0QXHu7J5GpeHV8pnd3NZ2.png": "/images/icons/middleware-value-6.png",
  
  // Banner (8个)
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png": "/images/banners/middleware-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png": "/images/banners/ws-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png": "/images/banners/ump-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png": "/images/banners/paas-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png": "/images/banners/news-hero.png",
  
  // Unsplash (2个)
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format": "/images/home/customers.jpg",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920": "/images/home/honors.jpg",
}
```

## 故障排查

### 脚本不工作？
如果 `batch-replace-urls.py` 失败，请检查：
1. Python版本是否为3.6以上: `python3 --version`
2. 当前目录是否正确: `pwd` 应显示 `/vercel/share/v0-project`
3. 尝试逐个文件手动替换

### 某个文件无法替换？
查看文件内容并找到完整的URL：
```bash
grep "blob.vercel-storage\|unsplash" components/specific/file.tsx | head -5
```

### 验证成功？
运行完整检查：
```bash
# 同时检查所有外部链接是否都替换了
echo "=== 检查Vercel Blob Storage ===" && \
grep -r "hebbkx1anhila5yf" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" 2>/dev/null | wc -l && \
echo "=== 检查Unsplash ===" && \
grep -r "unsplash" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" 2>/dev/null | wc -l

# 两个命令的结果都应该是 0
```

## 相关文件

- 📄 完整文档: `INTRANET_DEPLOYMENT.md`
- 🛠 自动脚本: `scripts/batch-replace-urls.py`
- 🔧 映射工具: `lib/local-image-map.ts`
- 📁 本地图片: `public/images/`
