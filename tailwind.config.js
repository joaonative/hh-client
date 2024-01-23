/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8D6CCF",
        background: "#1E1E1E",
        darker: "#101010",
      },
    },
  },
  plugins: [],
};
