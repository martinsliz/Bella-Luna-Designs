import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
  let navigate = useNavigate()

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img alt="" src={props.image} />
        <div className="product-info">
          <h3>{props.name}</h3>
          <h3>${props.price}</h3>
          <h3>{props.description}</h3>
        </div>
      </div>
      <div></div>
      <button onClick={() => navigate('/details')}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
