/** @type {import('./src/css/style.css').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      height:{
        '75': '28rem',
        '80': '30rem',
      },

      width:{
        '35': '18rem',
        '40': '20rem',
      }

    },
  },
  plugins: [],
}

