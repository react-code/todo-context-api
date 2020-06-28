import React, {useContext, useState, useEffect} from 'react';
import { TodoListContext } from "../context/TodoListContext";

const TodoForm = () => {
    const { addTodo, clearList, editItem, editTodo } = useContext(TodoListContext);

    const [title, setTitle] = useState('');
    
    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem){
            addTodo(title);
            setTitle('');
        }else{
            editTodo(title, editItem.id);
        }
    }

    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title);
        }else{
            setTitle('');
        }
    }, [editItem]);

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Add Todo..." required onChange={handleChange} value={title} />
            <div className="buttons">
                <button className="btn add-todo-btn" type="submit">
                    {editItem ? 'Edit Todo' : 'Add Todo'}
                </button>
                <button className="btn clear-btn" type="submit" onClick={clearList}>Clear List</button>
            </div>
        </form>
    )
}

export default TodoForm;