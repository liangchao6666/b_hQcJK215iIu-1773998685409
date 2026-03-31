import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function uploadBanner() {
  try {
    const imagePath = '/tmp/ump_banner_resized.png';
    const imageBuffer = fs.readFileSync(imagePath);
    
    console.log('[v0] Uploading processed banner image...');
    
    const blob = await put('ump_banner_resized.png', imageBuffer, {
      access: 'public',
      contentType: 'image/png',
    });
    
    console.log('[v0] Upload successful!');
    console.log('[v0] New image URL:', blob.url);
    console.log('[v0] Use this URL in hero-section.tsx');
    
  } catch (error) {
    console.error('[v0] Upload failed:', error.message);
    process.exit(1);
  }
}

uploadBanner();
