module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif'],
    },
    extend: {
      backgroundImage: {
        'image': "url('/assets/bg-rhythm.png')",
        'pattern': "url('/assets/topography.svg')"
      },
      colors: {
        
      }
    },

  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
