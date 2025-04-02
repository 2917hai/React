import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./TodoSlice"
const TodoStore=configureStore({
    reducer:
    {
       Mytask:MyReducer,
    }
})
export default TodoStore;