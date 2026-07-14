import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

// Check if we are running in GitHub Actions
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// Fallback to defaults if Replit variables are missing
const port = Number(process.env.PORT) || 5173;

// If on GitHub Pages, the base path must match your repository name: "/Group-1-Mapeh-presentation/"
const basePath = isGitHubActions 
  ? '/Group-1-Mapeh-presentation/' 
  : (process.env.BASE_PATH || '/');

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    // If on GitHub Actions, build directly to 'dist' so GitHub Pages can find it easily
    outDir: isGitHubActions 
      ? path.resolve(import.meta.dirname, 'dist') 
      : path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
