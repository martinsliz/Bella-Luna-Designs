// import { Link } from 'react-router-dom'

const ProductDetails = (props) => {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img alt="" src={props.image} />
        <div className="product-info">
          <h3>Name: {props.name}</h3>
          <h3>Price: ${props.price}</h3>
          <h3>Details: {props.description}</h3>
          {/* <p>Reviews: {props.reviews.content}</p> */}
        </div>
      </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
