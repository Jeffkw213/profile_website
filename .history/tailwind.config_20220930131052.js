/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Exo : "'Exo', sans-serif",
        Nexa : "'Nexa', sans-serif",
      },
      variants: {
        width: ["responsive", "hover", "focus"]
      },
      minWidth: {
        '1/2': '50%',
      },
      keyframes: {
        twinkle: {
          '0%': {
            transform: 'scale(1, 1)',
            background: 'rgba(255, 255, 255, 0)',
            animation-timing-function: 'linear'
          },
          '40%': {
            transform: 'scale(0.8, 0.8)';
            background: rgba(255, 255, 255, 1);
            animation-timing-function: ease-out;
          },
          '80%': {
            background: rgba(255, 255, 255, 0);
            transform: scale(1, 1);
          },
          '100%': {
            background: rgba(255, 255, 255, 0);
            transform: scale(1, 1);
          }
        }
      }
    }
  },
  plugins: []
};
