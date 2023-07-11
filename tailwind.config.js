/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        selectBg: "#152938",
        white: "#FCFCFC",
        buttonBG: "#304859;",
        buttonLight: "#BCCED9",
        Light: "#7191A5",
        orange: " #FDA214",
      },
      fontFamily: {
        sans: ["Atkinson Hyperlegible", "sans-serif"],
        // memoryFont: ["Atkinson Hyperlegible", "sans-serif"],
      },
      width: {
        31: "134px",
        15: "62px",
        big: "279px",
        lgNumb: "119px",
      },

      borderRadius: {
        xxl: "26px",
      },
      fontSize: {
        base: "15px",
        medium: "26px",
      },
    },
  },
  plugins: [],
};
