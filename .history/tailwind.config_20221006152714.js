/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
    '.rotate-y-180': {
      transform: 'rotateX(180deg)',
    },
  })
})
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
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
        }
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
      }
    }
  },
  plugins: [rotateY]
};
