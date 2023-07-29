/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/src/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{ Montserrat : "Montserrat"}
    },
  },
  plugins: [],
});
