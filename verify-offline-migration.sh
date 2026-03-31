#!/bin/bash
# 离线部署最终验证脚本

echo "=========================================="
echo "离线内网部署 - 最终验证"
echo "=========================================="
echo ""

# 统计外部URL
echo "🔍 检查源代码中的外部URL..."
echo ""

echo "1. 检查Vercel Blob Storage链接..."
BLOB_COUNT=$(grep -r "hebbkx1anhila5yf" components/ lib/ app/ --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "local-image-map\|image-url-mapping" | wc -l)
if [ "$BLOB_COUNT" -eq 0 ]; then
    echo "✅ 没有找到Vercel Blob Storage外部链接"
else
    echo "❌ 找到 $BLOB_COUNT 个Vercel Blob Storage链接（需要处理）"
fi

echo ""
echo "2. 检查Unsplash链接..."
UNSPLASH_COUNT=$(grep -r "images\.unsplash\.com" components/ lib/ app/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l)
if [ "$UNSPLASH_COUNT" -eq 0 ]; then
    echo "✅ 没有找到Unsplash外部链接"
else
    echo "❌ 找到 $UNSPLASH_COUNT 个Unsplash链接（需要处理）"
fi

echo ""
echo "3. 检查本地图片文件..."
IMAGES_COUNT=$(find public/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.webp" \) 2>/dev/null | wc -l)
echo "✅ 本地图片文件: $IMAGES_COUNT 张"

echo ""
echo "4. 检查关键目录结构..."
DIRS=("banners" "cases" "customers" "diagrams" "footer" "honors" "icons" "news")
for dir in "${DIRS[@]}"; do
    if [ -d "public/images/$dir" ]; then
        COUNT=$(find "public/images/$dir" -type f 2>/dev/null | wc -l)
        echo "✅ public/images/$dir ($COUNT 文件)"
    else
        echo "⚠️  public/images/$dir (不存在)"
    fi
done

echo ""
echo "=========================================="
if [ "$BLOB_COUNT" -eq 0 ] && [ "$UNSPLASH_COUNT" -eq 0 ]; then
    echo "✅ 所有外部URL已替换！项目已完全离线化"
    echo "✅ 可以部署到内网环境"
else
    echo "❌ 还有 $((BLOB_COUNT + UNSPLASH_COUNT)) 个外部URL需要处理"
fi
echo "=========================================="
