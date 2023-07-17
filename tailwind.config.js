/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        selectBg: "#152938",
        white: "#FCFCFC",
        buttonBG: "#304859",
        buttonLight: "#BCCED9",
        Light: "#7191A5",
        orange: " #FDA214",
        lightGray: "#DFE7EC",
        modalwhite: "#F2F2F2",
        modalWrapper: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        sans: ["Atkinson Hyperlegible", "sans-serif"],
        // memoryFont: ["Atkinson Hyperlegible", "sans-serif"],
      },
      width: {
        31: "134px",
        15: "62px",
        notMobile: "127px",
        big: "279px",
        lgNumb: "119px",
        container: "327px",
      },
      height: {
        13: "52px",
        box: "70px",
      },

      borderRadius: {
        xxl: "26px",
      },
      fontSize: {
        thirteen: "13px",
        base: "15px",
        medium: "26px",
        forty: "40px",
      },
    },
  },
  plugins: [],
};
