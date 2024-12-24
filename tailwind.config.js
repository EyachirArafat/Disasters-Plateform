/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F26922",
        secondary: "#E4E4E7",
        accent: "#71717A",
        pHover: "#FB923C",
        color1: "#F4F4F5"
      },
      fontFamily: {
        onest: ['Onest', 'serif']
      },
      fontSize: {
        t12: "12px",
        t14: "14px",
      },
      zIndex:{
        z999: "999",
        z9999: "9999",
        zM15: "-15",
        zM5: "-5"
      },
      screens: {
        xsm: "410px"
      }
    },
  },
  plugins: [],
}

