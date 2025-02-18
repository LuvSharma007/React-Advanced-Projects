import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';

const TodoList = () => {

    const {todos} = useContext(TodoContext);

  return (
    <div>
        {todos.length === 0 ? <p className='text-center'>No Todos Yet !</p> : null }
        {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default TodoList