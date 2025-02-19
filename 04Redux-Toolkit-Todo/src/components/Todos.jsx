import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id, currentText) => {
    const newText = prompt("Update your todo:", currentText);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-zinc-900 rounded-lg shadow-md">
      <h2 className="text-white text-2xl font-semibold text-center">Todo List</h2>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            className="mt-3 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg shadow-sm"
            key={todo.id}
          >
            <span className="text-white text-lg">{todo.text}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleUpdate(todo.id, todo.text)}
                className="text-white bg-blue-500 border-0 p-2 focus:outline-none hover:bg-blue-600 rounded-lg transition-all"
                title="Edit Todo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182l-9.82 9.82a4.5 4.5 0 01-2.121 1.178l-3.048.762a.75.75 0 01-.91-.91l.761-3.048a4.5 4.5 0 011.178-2.121l9.82-9.82z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 4.5L16.862 3.487a2.25 2.25 0 10-3.182 3.182l2.637 2.637M10.5 15.75L7.5 18.75"
                  />
                </svg>
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 p-2 focus:outline-none hover:bg-red-600 rounded-lg transition-all"
                title="Delete Todo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
