import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./TaskSlice";
const Store=configureStore(
    {
        reducer:
        {
            task:MyReducer
        }
    }
)
export default Store;