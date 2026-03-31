import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207132-HJpuPiROV0R54MEiuyndeK4CqVAKqh.png',
    filename: 'middleware-solution.png'
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subtract%20%281%29-vsE5hWqJd0UpujSCdARKbC223ITKh2.png',
    filename: 'xinchuang-middleware-solution.png'
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207131%20%281%29-BPlmefIpxt6it2acm5teAnn8OjfBKf.png',
    filename: 'ai-agent-solution.png'
  }
];

const solutionsDir = path.join(process.cwd(), 'public', 'images', 'solutions');

// 创建目录
if (!fs.existsSync(solutionsDir)) {
  fs.mkdirSync(solutionsDir, { recursive: true });
  console.log(`[v0] 创建目录: ${solutionsDir}`);
}

// 下载图片
async function downloadImage(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(solutionsDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(imageUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`[v0] 已下载: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`[v0] 下载失败 ${filename}:`, err);
      reject(err);
    });
  });
}

// 执行下载
(async () => {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('[v0] 所有图片下载完成!');
  } catch (error) {
    console.error('[v0] 下载过程中出错:', error);
    process.exit(1);
  }
})();
