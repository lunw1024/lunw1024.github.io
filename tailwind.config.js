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
    themes: [
      {
        mytheme: {
          "primary": "#002fa7",
          "secondary": "#e9c46a",
          "accent": "#f4a261",
          "neutral": "#264653",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#f4a261",
          "error": "#e76f51",
        },
      },
    ],
  },
}
