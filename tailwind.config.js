module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#F1F1F1",
          light: "#F5F5F5",
        },
        brand: {
          DEFAULT: "#0097d7",
          light: "#17a3df88",
          dark: "#4267AE",
        },
        gold: {
          DEFAULT: "#EDBE38",
        },
        footerbg: "#F1F4F7",
        textLight: "#C7D2FE",
        navy: "#3A67B1",
        aqua: "#0097D7",
        seafoam: "#56BDA3",
        offBlack: "#0A0F29",
        black90: "#414042",
      },
      fontFamily: {
        signika: ["Signika Negative", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
