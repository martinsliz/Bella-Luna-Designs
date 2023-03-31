import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ProductDetails = ({ allProducts }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  let itemCount = 0
  let totalAmount = 0
  let view = document.getElementById('viewCart')
  const [cart, setCart] = useState([])
  const [details, setDetails] = useState()
  const [order, setOrder] = useState([])
  const [open, setOpen] = useState(true)
  // console.log(allProducts)
  const result = allProducts.filter((product) => product.id === parseInt(id))

  const reviews = result[0]?.reviews.map((review, index) => {
    return <div key={index}>{review.content}</div>
  })
  useEffect(() => {
    setDetails(result)
  }, [allProducts])

  const addToCart = (result[0]) => {
    let newCart = cart
    newCart.push(result[0])
    console.log(newCart)
    setCart(newCart)
    itemCount += 1
    console.log(cartCount)
    if (itemCount >= 1) {
      view.innerHTML = <Link to="/orders">View Cart</Link>
    }
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
            Reviews: {reviews}
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
      <div>
        <h4 id="viewCart"></h4>
      </div>
    </div>
  )
}

export default ProductDetails
