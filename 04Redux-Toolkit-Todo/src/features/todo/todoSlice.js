import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}


const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state , action) => {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString();
            const dayOfWeek = currentDate.toLocaleDateString(undefined,{weekday:'long'});

            const todo = {
            id:nanoid(),
            text : action.payload,
            completed:false,
            date:formattedDate,
            day:dayOfWeek
        }
        state.todos.push(todo)
        },
        removeTodo: (state ,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state , action ) => {
            const {id , text} = action.payload;
            const todo = state.todos.find((todo)=> todo.id === id);
            if(todo){
                todo.text = text;
            }
        },
        toggleComplete:(state,action) =>{
            const {id} = action.payload;
            const todo = state.todos.find((todo)=> todo.id === id);
            if(todo){
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo , removeTodo , updateTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer;
