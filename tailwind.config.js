/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // "primary-color":"#01594c",
        "primary-color":"#0694bf",
        "secondary-color":"#EAF0F1"
      }
    },
  },
  plugins: [],
}

