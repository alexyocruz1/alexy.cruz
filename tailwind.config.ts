// tailwind.config.ts
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
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
});