import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon
} from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductDetails = ({ allProducts, cart, setCart }) => {
  let { id } = useParams()
  const [productId, setProductId] = useState(id)
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
    <>
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
                    ${result[0].price}
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
                className="object-contain object-center rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      <div>Reviews: {reviews}</div>
                    </div>

                    <Link to={`/form/${user}/${productId}`}>
                      Leave a Review!
                    </Link>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
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
    </>
  )
}

export default ProductDetails
