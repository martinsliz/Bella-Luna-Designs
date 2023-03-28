import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const PostReview = ({ user }) => {
  let navigate = useNavigate()
  const { userId } = useParams()
  const { productId } = useParams()

  const initialState = {
    content: ''
  }
  const [createReview, setCreateReview] = useState(initialState)

  const handleChange = (event) => {
    setCreateReview({
      ...createReview,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/api/reviews/${userId}/${productId}`, createReview)
    setCreateReview(initialState)
    navigate(`/productDetails/${productId}/`)
  }

  return user ? (
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
            value={createReview.content}
          ></textarea>
          <div>
            <button className="formSubmit-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signIn')}>Sign In</button>
    </div>
  )
}

export default PostReview
