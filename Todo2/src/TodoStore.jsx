import { configureStore } from "@reduxjs/toolkit";
import Myreducer from "./TodoSlice"
const TodoStore=configureStore({
    reducer:
    {
      Mytask:Myreducer,
    }
})
export default TodoStore;