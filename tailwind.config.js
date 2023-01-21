/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.js'],
  theme: {
    extend: {
      colors: {
        maincolor: {
          200: '#ffffff',
          300: '#F5F7FB',
          700: '#293264',
          900: '#141b42',
        }
      }
    },
  },
  plugins: [],
}
