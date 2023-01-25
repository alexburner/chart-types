import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      overlay: false,
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  // For github pages
  // -> https://vitejs.dev/guide/static-deploy.html#github-pages
  base: '/chart-types/',
  build: { outDir: 'docs' },
})
