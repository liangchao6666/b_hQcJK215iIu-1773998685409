#!/bin/bash

echo "开始复制 page.html 到 index.html..."

# 复制根目录
if [ -f ".next/server/app/page.html" ]; then
  cp ".next/server/app/page.html" ".next/server/app/index.html"
  echo "已复制: .next/server/app/page.html -> .next/server/app/index.html"
fi

# 复制 about 目录下的各个页面
if [ -f ".next/server/app/about/careers.html" ]; then
  cp ".next/server/app/about/careers.html" ".next/server/app/about/careers/index.html"
  echo "已复制: .next/server/app/about/careers.html -> .next/server/app/about/careers/index.html"
fi

if [ -f ".next/server/app/about/history.html" ]; then
  cp ".next/server/app/about/history.html" ".next/server/app/about/history/index.html"
  echo "已复制: .next/server/app/about/history.html -> .next/server/app/about/history/index.html"
fi

if [ -f ".next/server/app/about/honors.html" ]; then
  cp ".next/server/app/about/honors.html" ".next/server/app/about/honors/index.html"
  echo "已复制: .next/server/app/about/honors.html -> .next/server/app/about/honors/index.html"
fi

if [ -f ".next/server/app/about/introduction.html" ]; then
  cp ".next/server/app/about/introduction.html" ".next/server/app/about/introduction/index.html"
  echo "已复制: .next/server/app/about/introduction.html -> .next/server/app/about/introduction/index.html"
fi

if [ -f ".next/server/app/about/investor.html" ]; then
  cp ".next/server/app/about/investor.html" ".next/server/app/about/investor/index.html"
  echo "已复制: .next/server/app/about/investor.html -> .next/server/app/about/investor/index.html"
fi

# 复制 about 目录本身
if [ -f ".next/server/app/about.html" ]; then
  cp ".next/server/app/about.html" ".next/server/app/about/index.html"
  echo "已复制: .next/server/app/about.html -> .next/server/app/about/index.html"
fi

# 复制 cases 目录下的各个页面
if [ -f ".next/server/app/cases/enterprise.html" ]; then
  cp ".next/server/app/cases/enterprise.html" ".next/server/app/cases/enterprise/index.html"
  echo "已复制: .next/server/app/cases/enterprise.html -> .next/server/app/cases/enterprise/index.html"
fi

if [ -f ".next/server/app/cases/financial.html" ]; then
  cp ".next/server/app/cases/financial.html" ".next/server/app/cases/financial/index.html"
  echo "已复制: .next/server/app/cases/financial.html -> .next/server/app/cases/financial/index.html"
fi

if [ -f ".next/server/app/cases/government.html" ]; then
  cp ".next/server/app/cases/government.html" ".next/server/app/cases/government/index.html"
  echo "已复制: .next/server/app/cases/government.html -> .next/server/app/cases/government/index.html"
fi

# 复制 cases 目录本身
if [ -f ".next/server/app/cases.html" ]; then
  cp ".next/server/app/cases.html" ".next/server/app/cases/index.html"
  echo "已复制: .next/server/app/cases.html -> .next/server/app/cases/index.html"
fi

# 复制 digital-platform/data-integration
if [ -f ".next/server/app/digital-platform/data-integration.html" ]; then
  cp ".next/server/app/digital-platform/data-integration.html" ".next/server/app/digital-platform/data-integration/index.html"
  echo "已复制: .next/server/app/digital-platform/data-integration.html -> .next/server/app/digital-platform/data-integration/index.html"
fi

# 复制 iot/supervision
if [ -f ".next/server/app/iot/supervision.html" ]; then
  cp ".next/server/app/iot/supervision.html" ".next/server/app/iot/supervision/index.html"
  echo "已复制: .next/server/app/iot/supervision.html -> .next/server/app/iot/supervision/index.html"
fi

# 复制 middleware
if [ -f ".next/server/app/middleware.html" ]; then
  cp ".next/server/app/middleware.html" ".next/server/app/middleware/index.html"
  echo "已复制: .next/server/app/middleware.html -> .next/server/app/middleware/index.html"
fi

# 复制 news 目录
if [ -f ".next/server/app/news/company.html" ]; then
  cp ".next/server/app/news/company.html" ".next/server/app/news/company/index.html"
  echo "已复制: .next/server/app/news/company.html -> .next/server/app/news/company/index.html"
fi

if [ -f ".next/server/app/news/company/1.html" ]; then
  cp ".next/server/app/news/company/1.html" ".next/server/app/news/company/1/index.html"
  echo "已复制: .next/server/app/news/company/1.html -> .next/server/app/news/company/1/index.html"
fi

# 复制 news 目录本身
if [ -f ".next/server/app/news.html" ]; then
  cp ".next/server/app/news.html" ".next/server/app/news/index.html"
  echo "已复制: .next/server/app/news.html -> .next/server/app/news/index.html"
fi

# 复制 paas/platform
if [ -f ".next/server/app/paas/platform.html" ]; then
  cp ".next/server/app/paas/platform.html" ".next/server/app/paas/platform/index.html"
  echo "已复制: .next/server/app/paas/platform.html -> .next/server/app/paas/platform/index.html"
fi

# 复制 products
if [ -f ".next/server/app/products.html" ]; then
  cp ".next/server/app/products.html" ".next/server/app/products/index.html"
  echo "已复制: .next/server/app/products.html -> .next/server/app/products/index.html"
fi

# 复制 security/anti-tamper
if [ -f ".next/server/app/security/anti-tamper.html" ]; then
  cp ".next/server/app/security/anti-tamper.html" ".next/server/app/security/anti-tamper/index.html"
  echo "已复制: .next/server/app/security/anti-tamper.html -> .next/server/app/security/anti-tamper/index.html"
fi

# 复制 support/online
if [ -f ".next/server/app/support/online.html" ]; then
  cp ".next/server/app/support/online.html" ".next/server/app/support/online/index.html"
  echo "已复制: .next/server/app/support/online.html -> .next/server/app/support/online/index.html"
fi

echo "复制完成！"
