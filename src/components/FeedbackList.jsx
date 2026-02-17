import FeedbackItem from "./FeedBackItem"


export default function FeedbackList ({ feedbacks, onDelete }) {

  if (feedbacks.length === 0) {
    return <p className="text-gray-500">No Feedback Submitted Yet.</p>
  }

  const feedback = feedbacks.map(
    (f, i) => (
      <FeedbackItem
        key={i}
        index={i}
        feedback={f}
        onDelete={onDelete}
      />
    )
  )

  
  return (
    <div className="space-y-4">
      { feedback }
    </div>
  )

}