/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'gray' : ' 0px 1px 10px 0px rgba(0, 0, 0, 0.10)',
        'icon-shadow' : '1px 7px 10px 0px rgba(255, 83, 0, 0.50)'
      },
      fontFamily:{
        'work' : ['Work Sans' , 'sans-serif']
      },
      
    },
  },
  plugins: [],
}



