module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,

      '10': 10,

      '20': 20,

      '30': 30,

      '40': 40,

      '50': 50,

      '25': 25,

      '50': 50,

      '75': 75,

      '100': 100,

  
      '999': 999,
      '9999': 9999,
      
      'auto': 'auto',
    },
    fontSize: {
      'title': '31px',
      'subTitle': '57px',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'RobotoM': ['Roboto Mono', 'monospace'],
      'Roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        blue: {
          450: '#31C6F5',
          950: '#1C2D6C',
          960: '#12225B'

        },

      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
