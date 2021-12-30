import { defineConfig } from 'vite-plugin-windicss'
import { transform } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg-img': 'url(\'/assets/bg-rhythm.png\')',
      }),
      colors: {

      },
      fontFamily: {
        title: ['Raleway', 'sans-serif']
      }
    }
  },
  shortcuts: {
    'textbox': "flex flex-col p-8 mx-auto w-180 <sm:w-auto <sm:mx-2 border-2 border-black backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 text-black rounded-2xl",
    'textlink': "underline decoration-2 decoration-gray-400 hover:decoration-dark-900"
  }
  // plugins: [transform('daisyui')]
})