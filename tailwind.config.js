module.exports = {
  content: [
    './src/**/*.{html,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'violet': {
          100: '#e1b4d6',
          200: '#cd82bb',
          300: '#b94fa0',
          400: '#aa2a8b',
          500: '#9b0477',
          600: '#93036f',
          700: '#890364',
          800: '#7f025a',
          900: '#6d0147',
        },
        'yellow': {
          100: '#fce1b7',
          200: '#facd88',
          300: '#f7b958',
          400: '#f6aa34',
          500: '#f49b10',
          600: '#f3930e',
          700: '#f1890c',
          800: '#ef7f09',
          900: '#ec6d05',
        },
      },
    },
    fontFamily: {
      'serif': ['"Alegreya Sans"'],
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
