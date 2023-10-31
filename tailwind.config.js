/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        "my-pri-color": "rgb(231, 202, 125)",

        // Secondary Color
        "my-sec-color": "rgb(39, 64, 96)",

        // Other Colors
        "my-light-color" : "white",
        "my-dark-color" : "black",
        "my-dark-text-color" : "rgba(0, 0, 0, 0.65)"
      },
      backgroundImage: {
        'home-hero-bg-img' : 'url("/defaults/pgs/orbrift_web_developer.jpg")',
        'home-hero-user-img' : 'url("/defaults/pgs/dev.jpg")',
        'home-tiles-bg-img' : 'url("/defaults/pgs/orbrift_web_developer2.jpg")'
      },
    },
  },
  plugins: [],
});
