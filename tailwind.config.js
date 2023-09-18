/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        RobotoCondensed: ['Roboto Condensed']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

