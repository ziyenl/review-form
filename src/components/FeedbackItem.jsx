
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedBackContext'

function FeedbackItem({item}) {
    
/**let handleClick = () => {
    setRating(
        (prev)=> {
            return prev + 1
        }
    )
}**/
    const {deleteFeedBack, editFeedBack} = useContext(FeedbackContext)

  return (
    <Card>
         <div className="num-display">{item.rating}</div>
         <button className='close' onClick={() => deleteFeedBack(item.id)}>
            <FaTimes color="purple"/>
        </button>
        <button className='edit' onClick={() => editFeedBack(item)}>
            <FaEdit color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
       
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem