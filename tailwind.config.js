module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'raleway':'Raleway, sans-serif'
    },
    screens: {
      'xs': '550px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '750px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
