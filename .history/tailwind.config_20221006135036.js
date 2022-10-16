/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {

    extend: {
      colors: {
        york": {
          "50": "#ff4a69",
          "100": "#ff405f",
          "200": "#ff3655",
          "300": "#f72c4b",
          "400": "#ed2241",
          "500": "#e31837",
          "600": "#d90e2d",
          "700": "#cf0423",
          "800": "#c50019",
          "900": "#bb000f"
      },
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
