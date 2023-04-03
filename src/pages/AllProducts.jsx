// import ProductCard from '../components/ProductCard'

import { useParams, useNavigate } from 'react-router-dom'

const AllProducts = ({ allProducts, setAllProducts, reviews, setReviews }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="font-Castoro grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="font-Castoro aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  onClick={() => navigate(`/products/${product.id}`)}
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
