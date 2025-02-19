import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"

const ThemeToggle = () =>{
    const {darkMode , toggleTheme } = useContext(ThemeContext);

    return (
        <button 
        onClick={toggleTheme}
        className="p-2 mb-4 bg-gray-200 dark:bg-gray-700 rounded"
        >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
    )
};

export default ThemeToggle;