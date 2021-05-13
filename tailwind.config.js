module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Poppins", "sans-serif"],
      },
      colors: {
        "gray": "#f0f0f0",
        "gray-50": '#333',
        "gray-100": "#acacac",
        "gray-200": "#444",
        "white": '#fff',
      },
      maxWidth: {
        "380": "380px",
      },
      height: {
        '55': '55px'
      },
      gridTemplateColumns: {
        'input': '10% 90%',
      },
      lineHeight: {
        '55': '55px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
