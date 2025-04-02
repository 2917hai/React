import { configureStore } from "@reduxjs/toolkit";
import Mytask from "./TodoSlice"
const TodoStore=configureStore(
    {
        reducer:
        {
            Mytodo:Mytask
        }
    }
)
export default TodoStore;