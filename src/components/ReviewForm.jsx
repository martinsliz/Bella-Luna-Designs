import Client from '../services/api'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ReviewForm = ({ user }) => {
  let navigate = useNavigate()
  const { userId, productId } = useParams()
  const initialState = {
    content: ''
  }
  const [review, setReview] = useState(initialState)

  const handleChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/api/reviews/${userId}/${productId}`, review)
    setReview(initialState)
    navigate(`/products/${productId}/`)
  }

  return user ? (
    <div className="h-screen">
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
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold font-Castoro tracking-tight text-gray-800 sm:text-6xl">
              {' '}
            </h1>
            <h3 className="mt-6 text-lg leading-8 text-gray-700 font-Castoro">
              Leave your review below!
            </h3>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="-m-2 rounded-l bg-gray-700/5 p-2 ring-1 ring-inset ring-gray-700/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="content"></label>
                  <textarea
                    className="font-Castoro"
                    cols="40"
                    rows="5"
                    placeholder="Leave review here"
                    id="content"
                    onChange={handleChange}
                    value={review.content}
                  ></textarea>
                  <div>
                    <button
                      className="font-Castoro formSubmit-btn rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center"></div>
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
    </div>
  ) : (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="relative isolate pt-14" />
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
      <div className="py-24 sm:py-32 lg:pb-40" />
      <div className="mx-auto max-w-2xl text-center"></div>
      <div className="protected">
        <h3>Please sign in to update your review</h3>
        <button
          className="font-Castoro formSubmit-btn rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => navigate('/signIn')}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default ReviewForm
