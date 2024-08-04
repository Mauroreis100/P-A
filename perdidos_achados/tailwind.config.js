/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#073F82",
        secondary: {
          DEFAULT: "#2166B9",
          100: "#FF9001",
          200: "#FF8E01",
        },
        alerta:"#EEB903",
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
    },
  },
  plugins: [],
}

