import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50:  '#edf5f0',
            100: '#cce4d7',
            200: '#9dcaaf',
            300: '#6aad87',
            400: '#3d9067',
            500: '#1f7a52',
            600: '#1B6645',
            700: '#1B4D3E',
            800: '#153d31',
            900: '#0f2d24',
          },
          navy: {
            50:  '#eef1f7',
            100: '#d0d8eb',
            200: '#a3b3d6',
            300: '#7490c1',
            400: '#4d71ad',
            500: '#2d5598',
            600: '#1e4080',
            700: '#1C2B4A',
            800: '#152038',
            900: '#0e1526',
          },
          teal: '#2E7D67',
          beige: '#F7F4EE',
          cream: '#FAFAF8',
          sand: '#F0EBE3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hex-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L30 8.66L45 0L60 8.66V26L45 34.64L30 26L15 34.64L0 26V8.66L15 0z' fill='none' stroke='%231B4D3E' stroke-width='0.5' opacity='0.07'/%3E%3C/svg%3E\")",
        'dot-pattern': "radial-gradient(circle, #1B4D3E22 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-md': '24px 24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
