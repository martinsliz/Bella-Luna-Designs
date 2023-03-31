import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ProductDetails = ({ allProducts, cart, setCart }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [details, setDetails] = useState()
  const result = allProducts.filter((product) => product.id === parseInt(id))

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
    <div className="product-card">
      {result.length > 0 && (
        <div className="img-wrapper">
          <img alt={result[0]?.name} src={result[0].image} />
          <div className="product-info">
            <h3>Name: {result[0].name}</h3>
            <h3>Price: ${result[0].price}</h3>
            <h3>Details: {result[0].description}</h3>
            <h4>
              Reviews: {reviews}
              <Link to="/form/:userId/:productId">Leave a Review!</Link>
            </h4>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => navigate('/allProducts')}>
          Continue Shopping
        </button>
        <button type="submit" onClick={() => addToCart(result)}>
          Add to Cart
        </button>
      </div>
      <div>{cart.length ? <Link to="/order">View Cart</Link> : <h4></h4>}</div>
    </div>
  )
}

export default ProductDetails
