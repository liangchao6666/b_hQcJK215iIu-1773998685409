#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 文件列表需要检查的目录
const filesToCheck = [
  'lib/solutions-data.ts',
  'lib/products-data.ts',
  'components',
  'app'
];

function normalizeEncoding(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 检查并替换常见的编码问题
    let normalized = content
      .replace(/[\ufffd]/g, '') // 移除替换字符
      .replace(/([^\x00-\x7F])/g, (match) => {
        // 确保所有非ASCII字符都正确编码
        return match;
      });
    
    // 特定的中文乱码修复
    const fixes = [
      ['编化为', '封装为'],
      ['定时背景', '动态背景'],
      ['掌把', '掌握'],
      ['统授支撑', '统一支撑'],
    ];
    
    fixes.forEach(([from, to]) => {
      normalized = normalized.replace(new RegExp(from, 'g'), to);
    });
    
    // 如果内容改变了，写回文件
    if (normalized !== content) {
      fs.writeFileSync(filePath, normalized, 'utf8');
      console.log(`✓ Fixed encoding in: ${filePath}`);
      return true;
    }
  } catch (error) {
    if (error.code !== 'EISDIR') {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  return false;
}

function processDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // 跳过node_modules和.next
        if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
          processDirectory(filePath);
        }
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
        normalizeEncoding(filePath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
}

// 从项目根目录开始
const projectRoot = process.cwd();
console.log(`Normalizing encoding in: ${projectRoot}`);

filesToCheck.forEach(dir => {
  const fullPath = path.join(projectRoot, dir);
  if (fs.existsSync(fullPath)) {
    processDirectory(fullPath);
  }
});

console.log('Encoding normalization complete!');
