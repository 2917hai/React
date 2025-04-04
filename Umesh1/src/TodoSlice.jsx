import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:
    {
        addTask:(state,action)=>
        {
          //state.task.push(action.payload);
          state.task=[...state.task,action.payload];
        },
     
        
    }
})
export default TodoSlice.reducer;
export const {addTask}=TodoSlice.actions;