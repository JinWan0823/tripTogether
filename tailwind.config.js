/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px 1px 7px 2px rgb(28 28 28)",
        "4xl": "0px 1px 3px 2px rgb(172 172 172)",
      },
      colors: {
        "point-color": "#09847F",
      },
    },
  },
  plugins: [],
};
