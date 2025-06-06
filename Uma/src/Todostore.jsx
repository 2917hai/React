import { configureStore } from "@reduxjs/toolkit";
import Myreducer from "./Todoslice";
const TodoStore=configureStore(
    {
        reducer:{
           Todo:Myreducer
        }
    }
)
export default TodoStore;