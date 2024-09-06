import {sveltekit} from '@sveltejs/kit/vite';
import {join} from 'node:path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
  },
  test: {
    watch: false,
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  build: {
    rollupOptions: {
      input: {
        index: join(__dirname, 'src/lib/index.ts'),
        core: join(__dirname, 'src/lib/core/index.ts'),
      },
    },
  },
});
