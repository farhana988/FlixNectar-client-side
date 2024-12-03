/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        primary: "#536493",
        tab: "#ffffff",
      },
        fontFamily: {
          exo: ["Exo 2"]
        }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

