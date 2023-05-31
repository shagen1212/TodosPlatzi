import React from "react"
import TodoIcon from './todoIcon'
const DeleteIcon = ({onDelete}) => {
    return (
        <TodoIcon 
            type='delete'
            color='gray'
            onClick={onDelete}
        />
    )
}

export default DeleteIcon