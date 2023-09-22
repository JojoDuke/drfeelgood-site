/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
      colors: {
        primary: '#7855FF',
        gold: '#FFCC4D',
        error: '#FFA500',
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
}