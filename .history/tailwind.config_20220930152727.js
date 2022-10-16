/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
      }
      fontFamily: {
        Exo : "'Exo', sans-serif",
        Nexa : "'Nexa', sans-serif",
      },
      variants: {
        width: ["responsive", "hover", "focus"]
      },
      minWidth: {
        '1/2': '50%',
      }
    }
  },
  plugins: []
};
