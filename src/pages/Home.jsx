import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  let navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [mainPhoto, setMainPhoto] = useState({})

  const getProducts = async () => {
    const response = await Client.get(`/api/products`)
    setProducts(response.data)
    let products = response.data
    let coverPhoto =
      response.data[Math.floor(Math.random() * response.data.length)]
    setMainPhoto(coverPhoto)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
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
              Bella Luna Designs
            </h1>
            <h3 className="mt-6 text-lg leading-8 text-gray-700 font-Castoro">
              Beautiful hand-crafted jewelry made in Massachusetts.
            </h3>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="-m-2 rounded-l bg-gray-700/5 p-2 ring-1 ring-inset ring-gray-700/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  onClick={() => navigate('/allProducts')}
                  width={500}
                  height={500}
                  className="cursor-pointer rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  alt={mainPhoto.name}
                  src={mainPhoto.image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="font-Castoro rounded-lg bg-indigo-700/75 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => navigate('/allProducts')}
          >
            SHOP ALL BELLA LUNA
          </button>
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
    </div>
  )
}

export default Home
