/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d5d5',
          300: '#f4b5b5',
          400: '#ec8888',
          500: '#e05d5d',
          600: '#cd3f3f',
          700: '#ab2f2f',
          800: '#800000',
          900: '#5c1a1a',
        },
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};