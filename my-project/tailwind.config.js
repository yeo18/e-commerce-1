/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FEA928",
        secondary:"#ED8900",
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
        }
      }
    },
  }, 
  plugins: [],
}