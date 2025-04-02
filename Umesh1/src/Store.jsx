import { configureStore } from "@reduxjs/toolkit";
import MyCount from "./CounterSlice"
import Mytheme from "./ThemeSlice"
import Mytodo from "./TodoSlice"
const Store=configureStore({
    reducer:
    {
     Mycountt:MyCount,
     Mythemme:Mytheme,
     Mytodoo:Mytodo
    }
})
export default Store;