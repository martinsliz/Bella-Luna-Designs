import { Link } from 'react-router-dom'

const AllProducts = (props) => {
  return (
    <div className="container">
      {props.products?.map((product) => (
        <Link to={`details${product.id}`}>
          <div className="all" key={product.id}>
            <img alt="" src={product.image} />
            <h3>name={product.name}</h3>
            <h4>price={product.price}</h4>
            <p>description={product.description}</p>
            category={product.category}
            reviews={product.reviews}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllProducts
