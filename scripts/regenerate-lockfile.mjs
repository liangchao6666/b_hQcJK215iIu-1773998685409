import { execSync } from 'child_process';
import { cwd } from 'process';

console.log('[v0] Current directory:', cwd());
console.log('[v0] Regenerating pnpm lockfile...');

try {
  execSync('pnpm install --lockfile-only', { 
    stdio: 'inherit',
    cwd: '/vercel/share/v0-project'
  });
  console.log('[v0] Lockfile regenerated successfully');
} catch (error) {
  console.error('[v0] Error regenerating lockfile:', error.message);
  process.exit(1);
}
