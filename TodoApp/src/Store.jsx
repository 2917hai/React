import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
const Store=configureStore({
    reducer:{
      mytodo:TodoSlice
    }
})
export default Store;