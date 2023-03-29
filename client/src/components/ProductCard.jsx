import { Link } from 'react-router-dom'
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img alt="" src={props.image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>Rating: {props.rating}</p>
      </div>
      {/* <button onClick={() => props.onClick=(props.gameId)}>More</button> */}
      <Link to="/product/details/:productId" className="details">
        More
      </Link>
      {/* <Route path="/games/details/:gameId" element={<GameDetails />} /> */}
    </div>
  )
}

export default ProductCard
