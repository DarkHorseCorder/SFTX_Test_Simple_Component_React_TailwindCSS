/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'full-background-black': '#000000',
        'main-background-grey': 'rgba(16, 19, 27, 1)',
        'second-grey': '#1B1F28',
        'custom-yellow': '#FFC700',
        'custom-grey': 'rgba(255, 255, 255, 0.3)',
        'custom-green': '#00CC6A',
        'custom-green-transparent': 'rgba(0, 204, 106, 0.15)'
      },
    },
    fontFamily: {
      'lexend': ['lexend']
    }
  },
  plugins: [],
}

