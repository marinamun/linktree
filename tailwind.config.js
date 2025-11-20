/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#8A2822",
        second: "#E9E4D4",
        third: "#CBD5E0",
      },
    },
  },
  plugins: [],
};
