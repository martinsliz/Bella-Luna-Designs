import AllProducts from './src/pages/AllProducts'
import Order from './src/pages/Order'
import Navbar from './src/components/NavBar'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/NavBar.jsx',
    './src/components/ReviewCard.jsx',
    './src/components/NavBar.jsx',
    './src/components/Search.jsx',
    './src/pages/About.jsx',
    './src/pages/AllProducts.jsx',
    './src/pages/Home.jsx',
    './src/pages/ProductDetails.jsx',
    './src/pages/Product.jsx',
    './src/pages/SignIn.jsx',
    './src/pages/Register.jsx',
    './src/pages/Order.jsx'
  ],
  theme: {
    fontFamily: {
      Castoro: ['Castoro', 'serif']
    },
    extend: {}
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require('@tailwindcss/aspect-ratio', '@tailwindcss/forms')]
}
