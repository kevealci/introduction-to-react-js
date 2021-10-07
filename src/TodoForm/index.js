import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>

            <label>Write your new ToDo</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Practice a lot with React'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type='button'
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>

        </form>
    );

}

export { TodoForm };