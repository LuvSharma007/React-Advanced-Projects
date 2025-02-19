import React from 'react'
import {TodoProvider} from "./context/TodoContext"
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'


const App = () => {
  return (
    <ThemeProvider>
    <TodoProvider>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Todo App
      </h1>
      <TodoForm/>
      <TodoList/>
      <ThemeToggle/>
    </div>
    </TodoProvider>
    </ThemeProvider>
  )
}

export default App