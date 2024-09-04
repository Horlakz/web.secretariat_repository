/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#373737",
        secondary: "#052452",
        brand: "#0049A8",
        info: "#3498db",
        danger: "#e74c3c",
        success: "#2ecc71",
        warning: "#f39c12",
      },
    },
  },
  plugins: [],
};
