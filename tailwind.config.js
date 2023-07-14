/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#a27738',
      secondary: '#d4b483',
      white: '#ffffff',
      'accent-1': '#ffa500',
      'accent-2': '#f8f3ed',
      'accent-3': '#f7f5f3',
      'accent-4': '#fc5d37',
      'background-color': '#fcfaf8',
      color: '#312921',
      lighter: '#4e4033',
      transparent: 'transparent',
      black: '#000000',
    },
    fontFamily: {
      pimary: ['Poppins', 'sans-serif'],
      secondary: ['Cinzel', 'serif'],
    },
    lineHeight: {
      0.5: '100%',
      1: '120%',
      1.5: '125%',
      2: '160%',
      3: '200%',
    },
    fontSize: {
      sm: '0.8125rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem;',
      '3xl': '3.375rem',
    },
    fontWeight: {
      lighter: 300,
      light: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    extend: {
      backgroundImage: {
        // 'hero-image': 'url(./src/assets/img/auxure-bg.png)',
        // 'icon-diamond': 'url(./src/assets/svg/ion_diamond.svg)',
        // 'auxure-diagonal': 'url(./src/assets/svg/auxure-diagonal.svg)',
        // 'timeless-image': 'url(./src/assets/img/img1.png)',
        // 'glamour-image': 'url(./src/assets/img/img2.png)',
      },
    },
  },
  plugins: [],
};
