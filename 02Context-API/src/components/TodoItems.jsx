import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoItems = ({todo}) => {

    const {toggleComplete , removeTodo} = useContext(TodoContext);


  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow mb-2">
        <span
        onClick={()=> toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
        {todo.text}      

        </span>
        <button onClick={() => removeTodo(todo.id)} className="text-red-500">
            X
        </button>
    </div>
  )
}

export default TodoItems