/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        story: 'linear-gradient(to left bottom, #C91315, #F9373F, #FECD00)',
      },
    },

    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },

  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
