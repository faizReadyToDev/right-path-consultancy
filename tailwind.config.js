/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'xs': { 'max': '639px' }
        },
      },
    },
    colors: {
      customBlue: 'rgb(2, 46, 80)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    plugins: [],
  }
  
  