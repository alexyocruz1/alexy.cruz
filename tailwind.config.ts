// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#85d7ff',
        'soft-green': '#8cffa8',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;