/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        supernova: '#fac900' /* yellow / warning */,
        orangeRed: '#ff4600' /* red / error */,
        silverTree: '#70bd91' /* light green */,
        spanishGreen: '#008a52' /* medium green */,
        cruseo: '#0a5d2c' /* dark green */,
        countyGreen: '#003d19' /* darkest green */,
        acadia: '#392f2d' /* brown */,
        scotchMist: '#efe9cb' /* light brown */,
        nileBlue: '#243853' /* blue */,
        blackPearl: '#071126' /* navy blue */,
        pastelMagenta: '#ff9dbf' /* pink */,
        vistaBlue: '#94d1b4' /* light green around the avatar */,
        fireEngineRed: '#C52424' /* darker red */,
      },
      width: {
        21: '84px',
      },
      height: {
        21: '84px',
      },
      borderWidth: {
        6: '6px',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        avatar: '32px',
      },
      backgroundImage: {
        'auth-pattern': "url('/img/bg__auth.svg')",
      },
    },
    fontFamily: {
      condensed: ['Bebas Neue', 'sans-serif'],
      handwriting: ['Kalam', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      script: ['Agbalumo', 'cursive'],
    },
  },
  plugins: [],
}
