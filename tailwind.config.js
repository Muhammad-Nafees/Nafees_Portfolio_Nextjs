/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nafeesOne: "#265565",
        nafeesTwo: "#288FB1",
        greyMain:'#555555',
        blackMain:'#000000',
        borderProjectsColor:'rgb(163, 163, 163)',
        backgroundProjectsColor:"rgb(250, 250, 250)"
      }
    },
  },
  plugins: [],
};