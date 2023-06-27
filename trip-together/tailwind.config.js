/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px 1px 2px 3px rgb(165 172 158)",
        "4xl": "0px 2px 6px 0px #d6e3d3",
      },
      colors: {
        "point-color": "#09847F",
      },
    },
  },
  plugins: [],
};
