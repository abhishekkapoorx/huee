import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['Founders-Grotesk'],
        montreal: ['Neue-Montreal'],
        ico: ['icomoons'],
      }
    },
  },
  plugins: [],
}

