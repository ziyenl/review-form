import { useContext } from 'react'
import FeedbackContext from '../context/FeedBackContext'

export default function FeedbackStat() {
    const {feedBack} = useContext(FeedbackContext)
    let avg = feedBack.reduce((acc, curr) => { return acc + curr.rating}, 0) / feedBack.length
    avg = avg.toFixed(1).replace(/[.,]0$/,'')
    return (
    <div className='feedback-stat'>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg)? 0: avg}</h4>

    </div>
   
  )
}
