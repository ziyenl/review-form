import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedBackContext'
 
function FeedbackList({}) {
    const {feedBack} = useContext(FeedbackContext)
  if(!feedBack || feedBack.length == 0){
    return (<p>No Feedback found.</p>)
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
     {feedBack.map(
        (item) => (
          <motion.div 
            key = {item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >
        <FeedbackItem key={item.id} item = {item}></FeedbackItem>
        </motion.div>
        )
     )}
     </AnimatePresence>
    </div>
    /**
     *  <div className="feedback-list">
     {feedBack.map(
        (item) => (<FeedbackItem key={item.id} item = {item} handleClose={handleClose}></FeedbackItem>)
     )}
    </div>
     */
  )
}

/**FeedbackList.propTypes = {
    feedBack: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.text.isRequired
        })
    )
}**/

export default FeedbackList


 





