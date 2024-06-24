// postcss.config.mjs

import { defineConfig } from 'postcss';
import flexbugs from 'postcss-flexbugs-fixes';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    flexbugs,
    tailwindcss,
    // Add other PostCSS plugins here if needed
  ],
});