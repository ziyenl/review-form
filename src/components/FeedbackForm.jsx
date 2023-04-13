import {v4 as uuidv4} from 'uuid'
import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
 import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedBackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const {addFeedBack, feedBackEdit, updateFeedBack} = useContext(FeedbackContext)

  useEffect(() => {
      if(feedBackEdit.edit === true){
        console.log('sdfsfs')
        setBtnDisabled(false)
        setText(feedBackEdit.item.text)
        setRating(feedBackEdit.item.rating)
      }
  }, [feedBackEdit])
  const handleTextChange = (e) => {
    if(text===''){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }
    else{
      setMessage(null)
      setBtnDisabled(false)
    }
    console.log(e.target.value)
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        rating, text
      }

      if(feedBackEdit.edit == true){
        updateFeedBack(feedBackEdit.item.id, newFeedback)
      }
      else{
        addFeedBack(newFeedback)
      }
      
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
      <RatingSelect select={(rating)=>setRating(rating)}/>
      <h2> How would you rate your service with us today? </h2>
      <div className='input-group'>
        <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}/>
        <Button type='submit' isDisabled={btnDisabled}>
          Submit
          </Button>
          {message&&<div className='message'>{message}</div>}
      </div>
      </form>
    </Card>
  )
}

export default FeedbackForm