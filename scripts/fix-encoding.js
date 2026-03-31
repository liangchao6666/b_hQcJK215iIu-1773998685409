#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 使用绝对路径
const filePath = '/vercel/share/v0-project/lib/solutions-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// 替换所有可能的乱码 - 逐一替换每个有问题的字符
const replacements = [
  // 修复所有可能的编码问题
  ['编化', '封装'],
  ['定时', '动态'],
  ['掌把', '掌握'],
  ['统授支撑', '统一支撑'],
  ['统一治理，为精准营销', '统一治理，为精准营销'],
];

replacements.forEach(([from, to]) => {
  if (content.includes(from)) {
    console.log(`替换: "${from}" -> "${to}"`);
    content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
  }
});

// 写回文件
fs.writeFileSync(filePath, content, 'utf8');
console.log('编码修复完成！');

