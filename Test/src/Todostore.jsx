import { configureStore } from "@reduxjs/toolkit";
import Myreducer from "./Todoslice"
const TodoStore=configureStore({
    reducer:
    {
      Mytask:Myreducer,
    }
})
export default TodoStore;