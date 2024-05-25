/** @type {import('./src/css/style.css').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily : {
        sans: ['Josefin Sans', 'sans-serif'],
        alata : ['Alata', 'sans-serif'],
      }
    },
    width:{
      'imagex': '80rem',
    },
    height:{
      'hero': '25rem',
    },
  },
  plugins: [],
}

