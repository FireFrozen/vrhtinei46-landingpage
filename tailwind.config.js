/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#08329a",
        secondary:"#449edd",
        darkgray:"#363636",
        
      }
    },

  },
  plugins: [],
}

