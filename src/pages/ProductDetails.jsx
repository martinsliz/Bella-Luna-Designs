// import { useEffect, useState } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'

// const ProductDetails = ({ allProducts, cart, setCart }) => {
//   let { id } = useParams()
//   const [productId, setProductId] = useState(id)
//   const [bananaId, setId] = useState('')
//   const user = localStorage.getItem('userId')
//   let navigate = useNavigate()
//   const [details, setDetails] = useState()
//   const result = allProducts.filter((product) => product.id === parseInt(id))
//   console.log(user)
//   const reviews = result[0]?.reviews.map((review, index) => {
//     return <div key={index}>{review.content}</div>
//   })
//   useEffect(() => {
//     setDetails(result)
//   }, [allProducts])

//   const addToCart = (result) => {
//     let newCart = [...cart]
//     console.log('cart below')
//     console.log(cart)
//     newCart.push(result)
//     setCart(newCart)
//   }

//   return (
//     <div className="product-card">
//       {result.length > 0 && (
//         <div className="img-wrapper">
//           <img
//             alt={result[0]?.name}
//             src={result[0].image}
//             className="h-full w-full object-cover object-center"
//           />
//           <div className="product-info">
//             <h3>Name: {result[0].name}</h3>
//             <h3>Price: ${result[0].price}</h3>
//             <h3>Details: {result[0].description}</h3>
//             <h4>
//               Reviews: {reviews}
//               <Link to={`/form/${user}/${productId}`}>Leave a Review!</Link>
//             </h4>
//           </div>
//         </div>
//       )}
//       <div>
//         <button onClick={() => navigate('/allProducts')}>
//           Continue Shopping
//         </button>
//         <button type="submit" onClick={() => addToCart(result)}>
//           Add to Cart
//         </button>
//       </div>
//       <div>{cart.length ? <Link to="/order">View Cart</Link> : <h4></h4>}</div>
//     </div>
//   )
// }

// export default ProductDetails

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon
} from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt:
    'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' }
  ]
}
const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductDetails = ({ allProducts, cart, setCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  let { id } = useParams()
  const [productId, setProductId] = useState(id)
  const [bananaId, setId] = useState('')
  const user = localStorage.getItem('userId')
  let navigate = useNavigate()
  const [details, setDetails] = useState()
  const result = allProducts.filter((product) => product.id === parseInt(id))
  console.log(user)
  const reviews = result[0]?.reviews.map((review, index) => {
    return <div key={index}>{review.content}</div>
  })
  useEffect(() => {
    setDetails(result)
  }, [allProducts])

  const addToCart = (result) => {
    let newCart = [...cart]
    console.log('cart below')
    console.log(cart)
    newCart.push(result)
    setCart(newCart)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        Product details
        {result.length > 0 && (
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <li>
                  <div className="flex items-center text-sm">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      {' '}
                      {/* <h5>{result[0].category}</h5> */}
                    </a>
                    {/* {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  ) : null} */}
                  </div>
                </li>
              </ol>
            </nav>

            <div className="mt-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {result[0].name}
                </h1>
              </div>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {result[0].price}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">
                  {result[0].description}
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
      // Product image
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        {result.length > 0 && (
          <div className="-m-2 rounded-l bg-gray-700/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              width={800}
              height={100}
              alt={result[0]?.name}
              src={result[0].image}
              className="object-cover object-center rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        )}
      </div>
      Product form
      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <div className="mt-10">
            <button
              type="submit"
              onClick={() => addToCart(result)}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-500 hover:text-gray-700">
              {cart.length ? <Link to="/order">View Cart</Link> : <h4></h4>}
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails
