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
      spacing:{
        '128': '32rem',
      }
    }
  },
  plugins: []
};
