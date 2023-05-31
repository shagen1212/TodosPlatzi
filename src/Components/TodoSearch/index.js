import React from 'react';
import './style.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)
    return (
        <input 
            placeholder="Cortar cebollla" 
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
            />
            ) 
} 
            export default TodoSearch;