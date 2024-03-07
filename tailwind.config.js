/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      red: ["Red Hat Display"],
    },
    extend: {
      colors: {
        black: "#28283D",
        gray: "#87879D",
        green: "#4D96A9",
        purple: "#855FB1",
        "light-green": "#71C0D4",
        "light-blue": "#8FE3F9",
        "light-purple": "#D9B8FF",
        "light-pink": "#B18BDD",
      },
    },
  },
  plugins: [],
};
