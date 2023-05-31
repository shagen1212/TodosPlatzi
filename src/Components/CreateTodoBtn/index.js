import './style.css'
function CreateTodoBtn({setOpenModal}) {
    return (
        <button className='CreateTodoBtn' onClick={() => {
            setOpenModal(state => !state)
        }}>+</button>
    )
}

export default CreateTodoBtn