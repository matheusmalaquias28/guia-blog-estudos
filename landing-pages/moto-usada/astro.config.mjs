// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { lpUiHmr } from '@lp/ui/vite-hmr.mjs';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    // CSS embutido no HTML: zero requests bloqueantes de renderização.
    inlineStylesheets: 'always',
    format: 'file',
  },
  fonts: [
    {
      name: 'Manrope',
      cssVariable: '--font-manrope',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2'],
            weight: '400 800',
            style: 'normal',
          },
        ],
      },
      fallbacks: ['Arial', 'sans-serif'],
      optimizedFallbacks: true,
      display: 'swap',
    },
  ],
  image: {
    responsiveStyles: false,
  },
  vite: {
    // Dev: mudanças em packages/ui sempre aparecem na hora (ver packages/ui/src/vite-hmr.mjs).
    plugins: [lpUiHmr()],
  },
});
