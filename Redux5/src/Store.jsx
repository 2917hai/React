import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./ColorSlice";
const Store=configureStore(
    {
        reducer:{
            color:ColorSlice,
        }
    }
)
export default Store;
