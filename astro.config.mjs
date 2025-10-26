import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    optimizeDeps: {
      include: [
        '@material/web/button/filled-button.js',
        '@material/web/button/outlined-button.js',
        '@material/web/icon/icon.js',
        '@material/web/divider/divider.js',
        '@material/web/typography/md-typescale-styles.js',
        '@material/web/iconbutton/filled-tonal-icon-button.js'
      ]
    }
  }
});
