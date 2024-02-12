/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    
  ],
  theme: {
    fontWeight :{
      medium: '500',
    },
    extend: {
      colors:{
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "rgba(36, 42, 69, 1);",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily:{
      Rubik:["Rubik, sans-serif;"],
    },
    container:{
      center: true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}

