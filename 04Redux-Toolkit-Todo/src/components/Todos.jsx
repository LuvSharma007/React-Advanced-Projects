import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggleComplete } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id, currentText) => {
    const newText = prompt("Update your todo:", currentText);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  const handleComplete = (id) => {
    dispatch(toggleComplete({ id }));
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-10 p-6 bg-zinc-900 rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-white text-2xl font-semibold text-center mb-6 tracking-wide">
        Todo List 🎯
      </h2>
      <ul className="mt-4 space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`bg-zinc-800 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${
              todo.completed
                ? "opacity-70 line-through text-gray-400"
                : "text-white hover:bg-zinc-700"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <label className="flex items-start space-x-3 cursor-pointer min-w-0 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleComplete(todo.id)}
                  className="w-5 h-5 mt-1 accent-green-500 rounded-md cursor-pointer transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-900 shrink-0"
                />
                <span className="text-lg select-none break-words w-full min-w-0">
                  {todo.text}
                </span>
              </label>
              <div className="flex space-x-2 shrink-0">
                <button
                  onClick={() => handleUpdate(todo.id, todo.text)}
                  className="text-white bg-blue-600 border-0 p-2 focus:outline-none hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Edit Todo"
                  disabled={todo.completed}
                >
                  ✏️
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-600 border-0 p-2 focus:outline-none hover:bg-red-700 rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  title="Delete Todo"
                >
                  🗑️
                </button>
              </div>
            </div>
            <span className="block text-gray-400 text-sm mt-2 text-right italic opacity-75 transition-opacity duration-200 hover:opacity-100">
              {todo.day}, {todo.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;