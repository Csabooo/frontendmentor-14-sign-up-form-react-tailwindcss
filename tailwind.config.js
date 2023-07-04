/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        dark_slate_grey: "hsl(234, 29%, 20%)",
        charcoal_grey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },

  plugins: [],
};
