import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"todo",
    initialState:
    {
        task:[],
        color:"black"
    },
    reducers:
    {
        addTask:(state,action)=>
        {
        state.task.push(action.payload);
        },
        changeColor:(state,action)=>
        {
         state.color=action.payload;
        },
        colorChange:(state)=>
        {
           state.color="yellow";
        }
    }
})
export default TodoSlice.reducer;
export const {addTask,changeColor,colorChange}=TodoSlice.actions;