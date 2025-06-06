import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./TodoSlice";
const Store=configureStore({
    reducer:
    {
        Mydata:MyReducer
    }
})
export default Store;