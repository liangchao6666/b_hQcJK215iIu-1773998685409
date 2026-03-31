import fs from 'fs';
import path from 'path';
import https from 'https';

// 使用绝对路径
const imagesDir = '/vercel/share/v0-project/public/images';

console.log('[v0] 图片目录:', imagesDir);

// 确保目录存在
try {
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
} catch (error) {
  console.log('[v0] 目录已存在或权限受限，继续下载...');
}

const images = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207132-HJpuPiROV0R54MEiuyndeK4CqVAKqh.png',
    filename: 'solution-middleware.png',
    name: '信创中间件双活容灾'
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subtract%20%281%29-vsE5hWqJd0UpujSCdARKbC223ITKh2.png',
    filename: 'solution-xinchuang.png',
    name: '信创全栈自主可控'
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207131%20%281%29-BPlmefIpxt6it2acm5teAnn8OjfBKf.png',
    filename: 'solution-ai-agent.png',
    name: 'AI智能体管理平台'
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  console.log('[v0] 开始下载解决方案图片...\n');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.filename);
    try {
      console.log(`[v0] 下载: ${image.name}`);
      await downloadImage(image.url, filepath);
      const stats = fs.statSync(filepath);
      console.log(`[v0] ✓ 已保存: ${image.filename} (${(stats.size / 1024 / 1024).toFixed(2)} MB)\n`);
    } catch (error) {
      console.error(`[v0] ✗ 下载失败 ${image.filename}: ${error.message}\n`);
    }
  }
  
  console.log('[v0] 下载完成！');
  console.log('[v0] 这些图片现在已保存到项目中，可以离线查看。\n');
}

downloadAllImages().catch(console.error);
