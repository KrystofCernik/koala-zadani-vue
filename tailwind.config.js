/** @type {import('tailwindcss').Config} */
import theme from './theme'
module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...theme
    },
  },
  plugins: [],
}

