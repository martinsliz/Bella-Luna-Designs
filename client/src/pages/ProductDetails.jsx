// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({ allProducts }) => {
  let { id } = useParams()
  console.log(typeof id)
  const [details, setDetails] = useState()
  console.log(allProducts)
  const result = allProducts.filter((product) => product.id === parseInt(id))

  const reviews = result[0]?.reviews.map((review, index) => {
    return <div key={index}>{review.content}</div>
  })
  useEffect(() => {
    setDetails(result)
  }, [allProducts])

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
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
