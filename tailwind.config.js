/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brandDark: "#0A2540",
        brandBlue: "#0056D2",
        brandBlueHover: "#0047B3",
      },
    },
  },
  plugins: [],
}
