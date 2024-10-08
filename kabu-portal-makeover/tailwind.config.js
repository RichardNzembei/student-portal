/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}", 
  ],
  theme: {
    extend: {
      colors: {
        'placeholder-blue': '#yourColorHexCode',
      },
    },

  },
  plugins: [],
};
