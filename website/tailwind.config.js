/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bs-primary': {
          50: "#372D6D",
          100: '#cb90f4',
        }
      }
    },
  },
  plugins: [],
}
