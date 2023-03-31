import Client from '../services/api'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ReviewForm = () => {
  let { productId } = useParams()
  const initialState = {
    content: ''
  }
  const [review, setReview] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/api/reviews/${productId}`, review)
    setReview(initialState)
    navigate(`/products/${productId}/`)
  }

  return (
    <div className="reviewContainer">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>Post a review!</h2>
          <label htmlFor="content"></label>
          <textarea
            cols="40"
            rows="5"
            placeholder="Leave review here"
            id="content"
            onChange={handleChange}
            value={review.content}
          ></textarea>
          <div>
            <button className="formSubmit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm
