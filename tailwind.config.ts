import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up-fade': 'slide-up-fade 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
