import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const ReviewCard = (props) => {
  let navigate = useNavigate()
  const deleteReview = async (reviewId) => {
    await Client.delete(`/api/posts/${reviewId}`)
    navigate(`/productDetails/${productId}/`)
  }

  const updateReview = async (reviewId) => {
    await Client.update(`/api/posts/${reviewId}`)
    navigate(`/productDetails/${productId}/`)
  }

  return (
    <div className="review-card">
      <h4>Comments: {props.content}</h4>
      <button onClick={() => updateReview(props.id)}>Update</button>
      <button onClick={() => deleteReview(props.id)}>Delete</button>
    </div>
  )
}
export default ReviewCard
