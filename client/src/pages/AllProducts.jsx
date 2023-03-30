import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
  let navigate = useNavigate()
  const [allProducts, setAllProducts] = useState([])
  const [reviews, setReviews] = useState([])

  const getAllProducts = async () => {
    const response = await Client.get(`/api/products`)
    console.log(response.data)
    setAllProducts(response.data)
    let reviews = response.data.reviews
    setReviews(reviews)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="container">
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          category={product.category}
          reviews={product.reviews}
        />
      ))}
    </div>
  )
}

export default AllProducts

{
  /* <Link to={`details${product.id}`}>
          <div className="all" key={product.id}>
            <img alt="" src={product.image} />
            <h3>name={product.name}</h3>
            <h4>price={product.price}</h4>
            <p>description={product.description}</p>
            category={product.category}
            reviews={product.reviews}
          </div>
        </Link> */
}
