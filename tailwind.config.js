/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-header": ["Montserrat", "sans-serif"],
        "open-sans": ["Lato", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
