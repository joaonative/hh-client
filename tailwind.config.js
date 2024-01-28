/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8D6CCF",
        h_primary: "#9747FF",
        background: "#1E1E1E",
        darker: "#101010",
        off_white: "#FFFFF2",
        half_text: "rgba(255, 255, 242, 0.5)",
      },
      backgroundImage: {
        footer: "url('/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
