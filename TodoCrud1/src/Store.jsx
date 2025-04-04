import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./CrudSlice";
const Store=configureStore(
    {
        reducer:
        {
            Mytask:MyReducer
        }
    }
)
export default Store;