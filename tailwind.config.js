/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "1720px",
        },
      },
      colors: {
        purple: "#68328A",
      },
    },
  },
  plugins: [],
};
