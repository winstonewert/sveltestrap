import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@sveltestrap/sveltestrap': path.resolve('../../src'),
    }
  },
  server: {
    port: 3000
  }
});
