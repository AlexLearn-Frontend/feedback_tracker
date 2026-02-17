import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { toast } from "sonner"

export default function FeedbackForm ({ onAdd }) {
  const [ name, setName ] = useState('')
  const [ comment, setComment ] = useState('')
  const [ rating, setRating ] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( !name.trim() || !comment.trim()|| rating === 0 ) {
      toast.error("Please fill all the fields!", {
        position: "top-center",
        style: {
          color: 'red'
        }
      })
      return;
    }

    onAdd({ name, comment, rating })

    setName("")
    setComment("")
    setRating(0)

    toast.success("Feedback submitted successfully!", {
      position: "top-right",
      style: {
        color: 'green'
      }
    })
  }

  return (
    <form className="space-y-4 " onSubmit={handleSubmit}>

      <Input
        placeholder="Student name..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Textarea
        placeholder="Feedback..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Input
        placeholder="Rating (1-5)"
        type="number"
        min="0" max="5"
        value={rating}
        onChange={e => setRating(e.target.value)}
      />

      <Button type="submit" className="cursor-pointer">
        Submit Feedback
      </Button>

    </form>
  )

}