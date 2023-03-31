import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  // let navigate = useNavigate()
  // const { id } = useParams()

  return (
    <div className="product-card">
      <Link to={`/products/${props.id}`}>
        <div className="info-wrapper">
          <img alt="" src={props.image} />
          <div className="product-info">
            <h3>{props.name}</h3>
            <h3>Price: ${props.price}</h3>
            {/* <p>{props.reviews}</p> */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
