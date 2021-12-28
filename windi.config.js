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
  }
  // plugins: [transform('daisyui')]
})