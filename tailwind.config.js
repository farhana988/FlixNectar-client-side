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
        black:"#212121",
        white:"#F5F5F5",
        ivory: "#F5F5F5",
        darkSlate: "#2C3E50",
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

