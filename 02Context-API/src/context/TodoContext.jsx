import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({children}) =>{

    const [todos , setTodos] = useState([]);

    const addTodo = (text) =>{
        setTodos([...todos,{id:Date.now(),text,completed:false}]);
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo , completed: !todo.completed} : todo
            )
        )
    };

    const removeTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }


    return (
        <TodoContext.Provider value={{todos,addTodo, toggleComplete , removeTodo}}>
            {children}
        </TodoContext.Provider>
    )




}

