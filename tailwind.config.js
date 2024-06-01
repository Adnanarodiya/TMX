/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        // screens: {
        //   DEFAULT: "1720px",
        // },
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          lg: "20px",
          xl: "30px",
          "2xl": "0px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1720px",
        },
      },
      
      colors: {
        purple: "#68328A",
        background: "#F6F6F6",
        orange: "#D64729"
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
