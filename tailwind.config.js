/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          brown: '#5c4033', // Based on logo
          lightbrown: '#805a46',
          gold: '#cda434',  // Based on logo
          lightgold: '#dfbd5c'
        }
      }
    },
  },
  plugins: [],
}