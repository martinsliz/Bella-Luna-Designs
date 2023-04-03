import { useNavigate, useParams } from 'react-router-dom'

const ReviewDisplay = ({ productId, review, deleteReview }) => {
  let navigate = useNavigate()
  return (
    <>
      <div>
        <h3>{review.content}</h3>
      </div>
      <div>
        <button
          onClick={() => navigate(`/form/${productId}/${review.id}`)}
          type="button"
          className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Update
        </button>
        <button
          onClick={() => deleteReview()}
          type="button"
          className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default ReviewDisplay
