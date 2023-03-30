// import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import ProductCard from '../components/ProductCard'

const AllProducts = ({ allProducts, setAllProducts, reviews, setReviews }) => {
  // let navigate = useNavigate()
  // const [allProducts, setAllProducts] = useState([])
  // const [reviews, setReviews] = useState([])
  const [order, setOrder] = useState([])
  const [status, toggleStatus] = useState(true)

  const addToCart = () => {}

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
