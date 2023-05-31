import React from "react"
import TodoIcon from './todoIcon'
const CompleteIcon = ({completed, onComplete}) => {
    return (
        <TodoIcon 
            type='check'
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export default CompleteIcon