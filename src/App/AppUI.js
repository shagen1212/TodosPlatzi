import React from 'react';
import TodoCounter from '../Components/TodoCounter';
import TodoSearch from '../Components/TodoSearch';
import TodoList from '../Components/TodoList';
import TodoItem from '../Components/TodoItem';
import CreateTodoBtn from '../Components/CreateTodoBtn';
import TodosLoading from '../Components/TodosLoading';
import TodosError from '../Components/TodosError';
import TodosEmpty from '../Components/TodosEmpty';
import Modal from '../Components/Modal';
import { TodoContext } from '../Components/TodoContext';
import TodoForm from '../Components/TodoForm';

function AppUi() {
    const {
        loading,
        error,
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);    
    
    return (
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
        {loading && (
            <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
        </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

        {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
        <CreateTodoBtn 
            setOpenModal={setOpenModal}
        />
        
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
        </>
    );
}

export default AppUi