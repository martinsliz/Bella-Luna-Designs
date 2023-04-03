import { useNavigate, useParams } from 'react-router-dom'

const ReviewDisplay = ({ content }) => {
  let navigate = useNavigate()
  let { reviewId } = useParams()
  const { userId } = useParams()
  let { productId } = useParams()
  return (
    <>
      <div>
        <h3>{content}</h3>
      </div>
      <div></div>
    </>
  )
}

export default ReviewDisplay
