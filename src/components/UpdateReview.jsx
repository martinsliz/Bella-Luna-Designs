import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const UpdateReview = () => {
  const user = localStorage.getItem('userId')
  let navigate = useNavigate()
  const { id } = useParams()
  const { productId } = useParams()

  const initialState = {
    content: ''
  }
  const [updateReview, setUpdateReview] = useState(initialState)

  const handleChange = (event) => {
    setUpdateReview({
      ...updateReview,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.put(`/api/reviews/${id}`, updateReview)
    setUpdateReview(initialState)
    navigate(`/products/${productId}/`)
  }

  return user ? (
    <div className="reviewContainer">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>Update</h2>
          <label htmlFor="content"></label>
          <textarea
            cols="40"
            rows="5"
            placeholder="Leave review here"
            id="content"
            onChange={handleChange}
            value={updateReview.content}
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
      <h3>Please sign in to update your review</h3>
      <button onClick={() => navigate('/sigIn')}>Sign In</button>
    </div>
  )
}

export default UpdateReview
