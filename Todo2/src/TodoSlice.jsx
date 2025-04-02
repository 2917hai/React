import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[],
    },
    reducers:
    {
        addTask:(state,action)=>
        {
            console.log(action.payload);
          state.task.push(action.payload);
        }
    }
})
export default TodoSlice.reducer;
export const {addTask}=TodoSlice.actions;