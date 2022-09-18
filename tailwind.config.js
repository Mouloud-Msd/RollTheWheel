/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "28rem",
      },
      height: {
        128: "28rem",
      },
      fontSize: {
        xxs: "0.7rem",
      },
      fontFamily: {
        title: ["Lobster", "cursive"],
        notes: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
