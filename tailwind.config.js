/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      man: ["Manrope"],
    },
    extend: {
      colors: {
        "light-blue":"#ECF2F8",
        "dark-gray":"#48556A",
        "gray":"#87879D",
        "light-gray":"#9DAEC2",
      },
    },
  },
  plugins: [],
};
