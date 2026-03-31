# 项目错误记录 - Lessons Learned

## 问题：unhandledRejection [object Event] 错误

### 问题描述
应用持续崩溃，报错"unhandledRejection: [object Event]"，无论如何修改代码都无法解决。

### 根本原因分析
**这不是代码逻辑错误，而是资源加载错误。**

项目中存在大量对不存在的图片文件的引用：
- `/images/vector.png` - Header logo（在header.tsx中）
- `/images/qrcode-1.png` 和 `/images/qrcode-2.png` - Footer二维码（在footer.tsx中）
- 以及其他许多在middleware、home等页面中引用的图片

当浏览器尝试加载这些不存在的图片时：
1. 浏览器抛出一个Event对象（而不是标准的Error）
2. 这个Event对象没有被正确捕获
3. 导致unhandledRejection错误
4. 即使添加了try-catch或onError处理器，仍然无法完全捕获Event对象
5. 应用最终崩溃

### 错误的诊断方式（花费了大量时间）
- ❌ 删除Blob URL图片 - 这不是主要原因
- ❌ 添加error handlers - 对Event对象无效
- ❌ 修改features-section逻辑 - 问题不在这里
- ❌ 修改图像预加载逻辑 - 治标不治本
- ❌ 添加全局unhandledrejection处理器 - 无法完全阻止Event对象

### 正确的解决方案
1. **替换不存在的图片引用**：将所有img和Image标签中引用不存在的图片改为：
   - 文本logo（如果是logo）
   - SVG占位符
   - CSS背景或纯色
   
2. **在引入任何外部资源前验证其存在**

3. **使用lazy loading和error fallbacks**

### 已修复的问题
- ✅ Header中的`/images/vector.png` → 改为文本"INFORS"
- ✅ Footer中的`/images/qrcode-1.png`和`qrcode-2.png` → 改为SVG占位符
- ✅ 移除所有Blob URL引用（overview、features、cases组件）

### 仍需处理的问题（后续任务）
项目中仍有大量未解决的图片引用：
- middleware组件：`/images/as_icon*.png`、`/images/fixed-group.png`等
- home组件：`/images/solution-*.png`、`/images/icon-*.png`等
- cases相关：`/images/subtract-icon.png`等
- news和honors：多个jpg和png文件引用

### 为未来任务的建议

**在后续工作中，务必避免以下错误：**

1. **资源验证检查清单**
   - [ ] 在使用任何图片前，先验证该文件是否存在于public/images目录
   - [ ] 使用`Glob`工具查询实际存在的图片文件
   - [ ] 如果图片不存在，立即用占位符替代（SVG、文本、纯色）

2. **测试优先原则**
   - [ ] 每次修改后立即检查应用是否能启动
   - [ ] 不要等到修改完成后再测试
   - [ ] 如果出现unhandledRejection错误，第一时间查看浏览器控制台的实际错误

3. **图片处理最佳实践**
   - [ ] 使用img标签而不是Next.js Image组件（Image组件的错误处理较为复杂）
   - [ ] 为img标签添加onError处理：`onError={(e) => (e.target as HTMLImageElement).style.display = "none"}`
   - [ ] 使用SVG占位符而不是依赖外部图片文件

4. **诊断流程改进**
   - [ ] 在看到[object Event] unhandledRejection时，第一反应是查找所有img/Image标签
   - [ ] 搜索项目中所有的图片引用：`grep -r "/images" --include="*.tsx" --include="*.ts"`
   - [ ] 验证这些文件是否真的存在于public/images目录
   - [ ] 不要假设错误来自代码逻辑，先检查资源

## 时间损失统计
- 用于诊断问题的时间：约2小时
- 真正解决问题所需时间：约10分钟
- 关键学习点：不要忽略最基础的资源验证

## 部署错误：pnpm install 失败 (exit code 236)

### 问题症状
```
ENOTDIR: not a directory, mkdir '/vercel/path0/node_modules'
pnpm: ENOTDIR: not a directory, mkdir '/vercel/path0/node_modules'
Error: Command "pnpm install" exited with 236
```

### 根本原因
客户端的unhandledRejection [object Event]错误导致：
1. 构建过程中页面无法正常渲染
2. 构建过程中发生严重错误
3. pnpm lockfile可能被破坏或无效
4. 最终导致pnpm install失败

### 解决方案
1. 消除所有客户端的unhandledRejection错误（见上文）
2. 删除corrupted的pnpm-lock.yaml文件
3. 重新部署，让pnpm自动重新生成lockfile

### 防预措施
- 确保代码在本地开发环境中能正常运行
- 每次提交前都要测试应用启动
- 不要忽视客户端错误
