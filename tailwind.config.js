/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-color': '#a27738',
      'secondary-color': '#d4b483',
      'white-color': '#ffffff',
      'accent-1': '#ffa500',
      'accent-2': '#f8f3ed',
      'accent-3': '#f7f5f3',
      'background-color': '#fcfaf8',
      'text-color': '#312921',
      'text-lighter': '#4e4033',
    },
    fontFamily: {
      pimary: ['Poppins', 'sans-serif'],
      secondary: ['Cinzel', 'serif'],
    },
    lineHeight: {
      1: '125%',
      2: '160%',
      3: '200%',
      4: '400%',
      5: '500%',
    },
    fontSize: {
      base: '1rem',
      sm: '0.8125rem',
      md: '1.125rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem;',
      '3xl': '3.375rem',
    },
    fontWeight: {
      light: 300,
      medium: 500,
      semibold: 600,
      black: 900,
    },
    extend: {},
  },
  plugins: [],
};
