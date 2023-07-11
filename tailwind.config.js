/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'dark' : '#38414a',
        'light' : '#f5f6f8',
      }, 
      colors : {
        'gray' : {
          1 : 'rgba(255, 255, 255, 0.6)',
          2 : '#98a6ad',
          3 : '#6e768e',
          4 : '#6c757d',
          5 : '#343a40',
        }
      },
    },
  },
  plugins: [],
}