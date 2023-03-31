import Client from '../services/api'
import ProductCard from '../components/ProductCard'

const AllProducts = ({ allProducts, setAllProducts, reviews, setReviews }) => {
  return (
    <div className="product-container">
      <div className="allProducts">
        {allProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts
