import { defineConfig } from 'vite';

export default defineConfig({
  root: 'site',
  publicDir: false,
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
