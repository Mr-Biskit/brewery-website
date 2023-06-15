/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        std: ["Base"],
        heading: ["Pine", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "url('../public/images/food1.jpeg')",
        menu: "url('../public/images/food5.jpeg')",
      },
      colors: {
        primary: "#070d0d",
        secondary: "#2d2d2d",
        text: "#F5F5F5",
        light: "#f2f2f2",
        yellow: "#ffc700",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
