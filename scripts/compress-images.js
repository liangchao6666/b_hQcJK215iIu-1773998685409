#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function compressImages() {
  console.log('[v0] 开始压缩图片...');
  
  // 使用 glob 来找文件 - 这更加可靠
  const customerPatterns = [
    'public/images/customers/*.png',
    'public/images/customers/*.jpg',
    'public/images/customers/*.jpeg',
    'public/images/customers/*.webp',
  ];
  
  const honorPatterns = [
    'public/images/honors/*.jpg',
    'public/images/honors/*.jpeg',
  ];
  
  let totalStats = { original: 0, compressed: 0, files: 0 };
  
  async function processPattern(patterns, dirName) {
    console.log(`\n[v0] 处理${dirName}...`);
    
    for (const pattern of patterns) {
      try {
        // 使用 find 命令来找文件
        const cmd = `find . -path "${pattern.replace(/\*/g, '*')}" -type f 2>/dev/null || true`;
        const result = execSync(`cd /vercel/share/v0-project && ${cmd}`, { encoding: 'utf-8' });
        const files = result.trim().split('\n').filter(f => f);
        
        if (files.length === 0) continue;
        
        console.log(`[v0] 找到 ${files.length} 个文件 (${pattern})`);
        
        for (const file of files) {
          const fullPath = `/vercel/share/v0-project/${file}`;
          
          if (!fs.existsSync(fullPath)) continue;
          
          try {
            const ext = path.extname(file).toLowerCase();
            const statsBefore = fs.statSync(fullPath);
            const sizeBefore = statsBefore.size;
            
            const tempPath = fullPath + '.tmp';
            
            if (ext === '.png') {
              await sharp(fullPath)
                .png({ quality: 80, compressionLevel: 9 })
                .toFile(tempPath);
            } else if (['.jpg', '.jpeg'].includes(ext)) {
              await sharp(fullPath)
                .jpeg({ quality: 82, progressive: true })
                .toFile(tempPath);
            } else if (ext === '.webp') {
              await sharp(fullPath)
                .webp({ quality: 85 })
                .toFile(tempPath);
            } else {
              continue;
            }
            
            const statsAfter = fs.statSync(tempPath);
            const sizeAfter = statsAfter.size;
            const ratio = ((1 - sizeAfter / sizeBefore) * 100).toFixed(2);
            
            fs.renameSync(tempPath, fullPath);
            
            totalStats.original += sizeBefore;
            totalStats.compressed += sizeAfter;
            totalStats.files++;
            
            const fileName = path.basename(file);
            console.log(`[v0] ✓ ${fileName}: ${(sizeBefore / 1024).toFixed(2)}KB → ${(sizeAfter / 1024).toFixed(2)}KB (节省 ${ratio}%)`);
          } catch (error) {
            console.error(`[v0] ✗ 压缩失败: ${file}`, error.message);
          }
        }
      } catch (error) {
        // ignore errors in find command
      }
    }
  }
  
  await processPattern(customerPatterns, '客户部分');
  await processPattern(honorPatterns, '荣誉部分');
  
  if (totalStats.files > 0) {
    const totalRatio = ((1 - totalStats.compressed / totalStats.original) * 100).toFixed(2);
    console.log(`\n[v0] ✓ 压缩完成!`);
    console.log(`[v0] 处理文件数: ${totalStats.files}`);
    console.log(`[v0] 总大小: ${(totalStats.original / 1024 / 1024).toFixed(2)}MB → ${(totalStats.compressed / 1024 / 1024).toFixed(2)}MB`);
    console.log(`[v0] 总节省: ${totalRatio}%`);
  } else {
    console.log('[v0] 没有找到任何图片');
  }
}

compressImages().catch(error => {
  console.error('[v0] 出错:', error);
  process.exit(1);
});
