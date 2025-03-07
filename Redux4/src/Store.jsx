import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./ColorSlice";
const store=configureStore({
    reducer:{
        color:ColorSlice,

    }
})
export default store;