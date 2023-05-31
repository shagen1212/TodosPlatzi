import React from 'react'
import './style.css'
import { TodoContext} from '../TodoContext'
function TodoForm () {
    const { 
        setOpenModal,
        addTodo
        //setCloseMolda,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')


    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form 
        className='TodoForm-container'
        onSubmit={onSubmit}
        >
            <label className='TodoForm-label'>Escribe tu nuevo TODO</label>
            <textarea 
                className='TodoForm-textarea'
                placeholder='Cortar cebolla para el almuerzo'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className='TodoForm-btnContainer'>
                <button className='TodoForm-btn TodoForm-btn--cancel' type='button' onClick={onCancel}>Cancel</button>
                <button className='TodoForm-btn TodoForm-btn--add' type='submit'>Add</button>
            </div>
        </form>
    );
}

export default TodoForm