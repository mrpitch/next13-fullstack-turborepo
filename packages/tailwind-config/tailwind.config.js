const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    "src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hurdi: colors.blue[500],
        gurdi: colors.red[500],
      },
    },
  },
  plugins: [],
};
