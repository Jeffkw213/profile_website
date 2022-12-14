/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    // '.rotate-y-20': {
    //   transform: 'rotateX(20deg)',
    // },
    // '.rotate-y-40': {
    //   transform: 'rotateX(40deg)',
    // },
    // '.rotate-y-60': {
    //   transform: 'rotateX(60deg)',
    // },
    '.rotate-y-360': {
      transform: 'rotateY(360deg)'
    }
  });
});

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    // '.rotate-y-20': {
    //   transform: 'rotateX(20deg)',
    // },
    // '.rotate-y-40': {
    //   transform: 'rotateX(40deg)',
    // },
    // '.rotate-y-60': {
    //   transform: 'rotateX(60deg)',
    // },
    '.rotate-x-360': {
      transform: 'rotateX(360deg)'
    }
  });
});

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        132: '38rem'
      },
      colors: {
        york: {
          50: '#ff4a69',
          100: '#ff405f',
          200: '#ff3655',
          300: '#f72c4b',
          400: '#ed2241',
          500: '#e31837',
          600: '#d90e2d',
          700: '#cf0423',
          800: '#c50019',
          900: '#bb000f'
        },
        dark: '#06283D',
        something: '#1363DF',
        idk: '#47B5FF',
        nani: '#DFF6FF'
      },
      fontFamily: {
        Exo: "'Exo', sans-serif",
        Nexa: "'Nexa', sans-serif"
      },
      variants: {
        width: ['responsive', 'hover', 'focus']
      },
      minWidth: {
        '1/2': '50%'
      },
      inset: {
        '3px': '3px'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        37: 'repeat(41, 1fr)',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px'
      }
    }
  },
  plugins: [rotateY, rotateX]
};
