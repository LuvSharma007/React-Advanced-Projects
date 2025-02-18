import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {

    const [ text , setText ] = useState("");
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim()){
            addTodo(text);
            setText("");
        }
    };

  return (
    <>
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            className="border p-2 rounded"
            placeholder="Add a todo..." />

            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                Add
            </button>
        </form>
    </>
  );
};

export default TodoForm;