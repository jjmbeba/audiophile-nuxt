/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'product-1-mobile':"url('./assets/home/mobile/image-speaker-zx7.jpg')"
      }
    },
  },
  plugins: [],
}

