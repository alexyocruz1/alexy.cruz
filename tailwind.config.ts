// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#85d7ff',
        'soft-green': '#8cffa8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;