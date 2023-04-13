import {v4 as uuid} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedBack, setFeedBack] = useState([
        {
            id: 1,
            text: 'Comment 1',
            rating: 10
        },
        {
            id: 2,
            text: 'Comment 2',
            rating: 8
        },
        {
            id: 3,
            text: 'Comment 3',
            rating: 7
        }
    ]);
    
    const [feedBackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedBack=(newFeedBack)=>{
        newFeedBack.id = uuid()
        setFeedBack([newFeedBack,...feedBack])
    }

    const editFeedBack=(item)=>{
        setFeedbackEdit({item, edit:true})

    }

    const updateFeedBack=(id, updateItem)=>{
        setFeedBack(
            feedBack.map((item) =>  (item.id === id? {...item, ...updateItem}: item))
        )
    }

    const deleteFeedBack=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedBack(feedBack.filter((item) => item.id !== id ))
        }
    }

    return (
        <FeedbackContext.Provider value={
            {
                feedBack,
                feedBackEdit,
                deleteFeedBack,
                addFeedBack,
                editFeedBack,
                updateFeedBack
            }
            }>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext