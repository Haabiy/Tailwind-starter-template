/** @type {import('./src/css/style.css').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      left: {
        'leftx': '120rem',
      },
      height:{
        '75': '28rem',
        '80': '30rem',
        '11/12': '85%',
        '100':'35rem',
        'x' : '43rem',
        'yheight' : '43rem',
        'new_height' : '120rem',
      },

      width:{
        '35': '18rem',
        '40': '20rem',
        '11/12': '91.67%',
        '100':'50rem',
        'y':'30rem',
        'new_width' : '50rem',
        'test' : '40rem',
      }

    },
  },
  plugins: [],
}

