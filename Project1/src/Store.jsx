import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
const Store=configureStore({
    reducer:{
        mycart:CartReducer
    }
})
export default Store;