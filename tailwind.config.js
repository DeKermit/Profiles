module.exports = {
  purge: {
    enabled: true,
    content: ['./docs/epic.html',
              './docs/index.html',
              './docs/ubi.html',
              './docs/Steam.html',
              './docs/scripts.js',],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steam: '#1b2838',
      },
      fontFamily: {
        poppins:"'Poppins', sans-serif",
      },
      animation: {
        'gradient-x':'gradient-x 9s ease infinite',
        'gradient-y':'gradient-y 9s ease infinite',
        'gradient-xy':'gradient-xy 9s ease infinite',
       },
       'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        }
      },
    },
  },
  variants: {
    extend: {
      height: ['hover', 'focus'],
    },
  },
  plugins: [],
}
