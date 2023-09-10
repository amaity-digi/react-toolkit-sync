import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodos: (state, action) => {
            const newTodo = {
                 id: nanoid(),
                 text: action.payload,
            }
            state.todos.push(newTodo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        }
    }

})


export const {addTodos, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;

