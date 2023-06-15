/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-font": ["Montserrat", "sans-serif"],
        "open-sans-font": ["Lato", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
