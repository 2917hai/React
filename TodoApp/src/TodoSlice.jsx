import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        todoList:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.todoList.push(actions.payload)
        }
    }
})
export const {addTask}=TodoSlice.actions;
export default TodoSlice.reducer;