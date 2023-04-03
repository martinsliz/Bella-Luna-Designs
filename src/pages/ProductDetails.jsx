import React from 'react'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import ReviewDisplay from '../components/ReviewDisplay'

const ProductDetails = ({ allProducts, cart, setCart }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  let { reviewId } = useParams()
  const [productId, setProductId] = useState(id)
  const user = localStorage.getItem('userId')
  const [productDetails, setProductDetails] = useState([])
  const [reviews, setReviews] = useState([])
  const result = allProducts.filter((product) => product.id === parseInt(id))

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await Client.get(`/api/products/${id}`)
      setProductDetails(response.data)
      console.log(response.data)
      let reviews = response.data.reviews
      setReviews(reviews)
    }
    getProductDetails()
  }, [])

  const addToCart = (result) => {
    let newCart = [...cart]
    newCart.push(result)
    setCart(newCart)
  }

  const deleteReview = async () => {
    if (user) {
      await Client.delete(`/api/reviews/${reviews[0].id}`)
      console.log(reviewId + 'Delete Review')
      window.location.reload(false)
    }
  }

  return (
    <>
      <div className="bg-white">
        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {productDetails.name}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {productDetails.description}
                </p>
                <p>${productDetails.price}</p>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-l bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    width={900}
                    height={100}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    alt={productDetails.name}
                    src={productDetails.image}
                  />
                </div>
                {/* REVIEWS */}
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-medium text-gray-900">
                      Reviews:
                    </h2>
                    <div className="mt-6 space-y-10 divide-y border-b border-t border-black pb-10">
                      <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                        <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                          <div className="mt-3 space-y-6 text-sm text-gray-500" />
                          {reviews &&
                            reviews.map((review) => (
                              <ReviewDisplay
                                productId={productId}
                                review={review}
                                key={review.id}
                                deleteReview={deleteReview}
                              />
                            ))}
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate(`/form/${user}/${productId}`)}
                      type="button"
                      className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Write a Review
                    </button>
                  </div>
                </div>
              </div>

              {/* END OF REVIEWS */}
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="mt-6 text-lg leading-8 text-gray-600"></h3>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => addToCart(result)}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => navigate('/allProducts')}
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Continue Shopping
                </button>
              </div>
              <div className="mt-6 text-center">
                <span className="text-gray-500 hover:text-gray-700">
                  {cart.length ? (
                    <button
                      onClick={() => navigate('/order')}
                      type="button"
                      className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      View Cart
                    </button>
                  ) : (
                    <h4></h4>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ProductDetails
