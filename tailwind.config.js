/** @type {DefaultColors} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "8rem",
      "10xl": "37rem",
    },
    fontFamily: {
      header: ["Playfair Display", "serif"],
      content: ["Source Sans 3", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    colors: {
      ...colors,
      primary: {
        700: "#4251D8",
        100: "rgba(66,81,216,0.34)",
        50: "rgba(66,81,216,0.15)",
        200: "#147AA6",
      },
      secondary: {
        700: "#FF9D2B",
        light: "#ffffff",
        default: "#414141",
        dark: "#1F1F1F",
        200: "#EFEFEF",
        100: "rgb(250,156,60)",
      },

      buttonColor: {
        500: "#147AA6",
      },
      borderColor: {
        500: "#C1C1C1",
      },
      courseCreateBg: {
        500: "#F7F7FC",
      },
      offwhite: {
        500: "#FCFCFC",
      },
      inputBackground: {
        500: "#EFF0F6",
      },
      GrayscaleB: {
        500: "#F7F7FC",
      },
      Grayscale: {
        100: "#FCFCFC",
        200: "#F7F7FC",
        300: "#EFF0F6",
        400: "#D9DBE9",
        500: "#A0A3BD",
        600: "#6E7191",
        700: "#4E4B66",
        800: "#14142B",
      },
    },
    spacing: {
      none: 0,
      xs: "8px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "48px",
      "2xl": "64px",
      "3xl": "72px",
      "4xl": "84px",
      "5xl": "96px",
      "6xl": "108px",
      "7xl": "124px",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",

      mobile: "320px",
      tablet: "768px",
      laptop: "1024px",

      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [],
};
