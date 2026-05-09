import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ahmaadkurniawaan.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
