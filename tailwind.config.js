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
        pHover: "#FB923C"
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
        zM10: "-10"
      }
    },
  },
  plugins: [],
}

