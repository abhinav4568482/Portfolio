/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'aurora-1': 'aurora-1 20s infinite ease-in-out',
        'aurora-2': 'aurora-2 25s infinite ease-in-out reverse',
        'aurora-3': 'aurora-3 18s infinite ease-in-out',
        'aurora-4': 'aurora-4 22s infinite ease-in-out reverse',
      },
    },
  },
  plugins: [],
};


