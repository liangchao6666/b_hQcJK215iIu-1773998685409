# 🚀 立即行动清单 - 10分钟完成离线部署

## 当前状态
- ✅ 70+张图片已下载到本地
- ✅ 映射工具已创建
- ✅ 自动脚本已准备
- ⏳ 需要运行脚本完成20个文件的URL替换

## 三步快速完成

### 📍 第1步: 运行自动替换脚本 (3分钟)

```bash
cd /vercel/share/v0-project
python3 scripts/batch-replace-urls.py
```

**预期输出:**
```
======================================================================
批量替换所有外网URL为本地路径，支持离线内网部署
======================================================================

项目根目录: /vercel/share/v0-project

📁 正在扫描 app/ 目录...
  ✓ app/cases/[slug]/page.tsx (5 个替换)
  ✓ app/news/page.tsx (3 个替换)
  ...

📁 正在扫描 components/ 目录...
  ✓ components/ws/hero-section.tsx (1 个替换)
  ...

======================================================================
✅ 替换完成!
   扫描文件总数: XX
   已更新文件数: XX
   总替换数: XX
======================================================================
```

### 🔍 第2步: 验证替换成功 (2分钟)

```bash
# 检查Vercel Blob Storage链接 (应返回0)
echo "=== 检查Vercel Blob 链接 ===" && \
grep -r "hebbkx1anhila5yf" . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null | wc -l

# 检查Unsplash链接 (应返回0)
echo "=== 检查Unsplash 链接 ===" && \
grep -r "images.unsplash.com" . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null | wc -l

# 两个结果都应该是 0 ✅
```

### 🧪 第3步: 本地测试 (5分钟)

```bash
# 开发环境测试
npm run dev

# 打开浏览器访问 http://localhost:3000
# 检查所有页面图片是否正常显示 ✅
# 打开DevTools -> Network 检查是否有失败的请求

# Ctrl+C 停止开发服务器

# 生产构建和预览
npm run build
npm run start

# 访问 http://localhost:3000 验证生产环境 ✅
# Ctrl+C 停止
```

## 📝 详细验证清单

### 脚本执行验证
- [ ] 脚本成功运行，没有Python错误
- [ ] 输出显示"✅ 替换完成!"
- [ ] 总替换数 > 0

### URL检查验证
```bash
# 运行这两个命令，都应该返回 0
grep -r "hebbkx1anhila5yf" . --include="*.tsx" --include="*.ts" --exclude-dir=node_modules 2>/dev/null | wc -l
grep -r "images.unsplash.com" . --include="*.tsx" --include="*.ts" --exclude-dir=node_modules 2>/dev/null | wc -l
```
- [ ] 两个命令都返回 0

### 开发环境验证
- [ ] `npm run dev` 启动成功
- [ ] 页面加载无错误
- [ ] 所有图片正常显示
- [ ] DevTools Network中没有404或失败的请求

### 生产环境验证
- [ ] `npm run build` 成功完成
- [ ] `npm run start` 启动成功
- [ ] 页面功能正常
- [ ] 所有图片正常显示

## 🐛 如果出现问题

### 脚本报错
```bash
# 检查Python版本
python3 --version  # 应该是 3.6 或以上

# 检查脚本是否存在
ls -la scripts/batch-replace-urls.py

# 手动检查第一个文件
python3 -c "
import sys
from pathlib import Path
project_root = Path('/vercel/share/v0-project')
print(f'项目目录存在: {project_root.exists()}')
print(f'app目录存在: {(project_root / \"app\").exists()}')
"
```

### 仍有外部链接未替换
```bash
# 找出还有哪些外部链接
grep -r "hebbkx1anhila5yf\|unsplash" . \
  --include="*.tsx" --include="*.ts" \
  --exclude-dir=node_modules --exclude-dir=.git

# 手动替换这些文件
# 参考: EXTERNAL_LINKS_QUICK_REFERENCE.md 中的映射表
```

### 图片加载失败 (404)
```bash
# 检查图片文件是否存在
ls -la public/images/

# 检查文件权限
find public/images -type f -exec ls -l {} \;

# 在浏览器DevTools中查看Network标签
# 找出哪个图片返回404
# 确认本地文件存在且路径正确
```

## 📊 完成后的状态

✅ **全部完成后:**
- 所有外部URL已替换为本地路径
- 应用可以完全离线运行
- 可以部署到内网环境
- 没有任何外部依赖

## 📚 参考文档

- 🔗 完整指南: `INTRANET_DEPLOYMENT.md`
- ⚡ 快速参考: `EXTERNAL_LINKS_QUICK_REFERENCE.md`
- 📋 工作总结: `OFFLINE_DEPLOYMENT_SUMMARY.md`

## ⏱️ 时间估计

| 步骤 | 时间 | 备注 |
|-----|------|------|
| 运行脚本 | 3分钟 | 自动替换所有文件 |
| 验证检查 | 2分钟 | 两个grep命令 |
| 本地测试 | 5分钟 | 开发+生产环境 |
| **总计** | **10分钟** | **完全完成** |

---

## 🎯 现在就开始!

```bash
# 复制粘贴这个命令即可开始
cd /vercel/share/v0-project && python3 scripts/batch-replace-urls.py
```

**完成此操作后，您的项目将完全支持离线内网部署! 🎉**
