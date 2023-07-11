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
        'purple' : 'rgba(102, 88, 221, 0.25)',
        'green' : 'rgba(26, 188, 156, 0.25)',
        'blue' : 'rgba(79, 198, 225, 0.25)',
        'orange' : 'rgba(247, 184, 75, 0.25)',
      }, 
      colors : {
        'purple' : 'rgb(102, 88, 221)',
        'green' : 'rgb(26, 188, 156)',
        'blue' : 'rgb(79, 198, 225)',
        'orange' : 'rgb(247, 184, 75)',
        'gray' : {
          1 : 'rgba(255, 255, 255, 0.6)',
          2 : '#98a6ad',
          3 : '#6e768e',
          4 : '#6c757d',
          5 : '#343a40',
          6 : '#323a46',
        }
      },
    },
  },
  plugins: [],
}