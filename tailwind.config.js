/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        secondary: "#001F3F",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        PtSansCaption: ["PT Sans Caption", "sans-serif"],
      },
    },
  },
  plugins: [],
};
