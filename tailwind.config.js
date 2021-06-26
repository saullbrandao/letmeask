module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 2px 12px 0 rgba(0,0,0,0.04)',
    },
    colors: {
      transparent: 'transparent',
      black: '#29292e',
      purple: '#835afd',
      red: '#ea4335',
      pink: '#e559f9',
      danger: '#e73f5d',
      shadow: '#050206',
      gray: {
        dark: '#737380',
        DEFAULT: '#a8a8b3',
        light: '#dbdcdd',
      },
      white: {
        background: '#f8f8f8',
        details: '#fefefe',
        DEFAULT: '#fff',
        border: '#e2e2e2'
      },
      hover: {
        purple: '#6f4bd8',
        red: '#d73754',
        gray: '#7e7e86',
        lightGray: '#cecece',
      }
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif',
      'poppins': 'Poppins, sans-serif',
    },
    minHeight: {
      'textarea': '133px'
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
