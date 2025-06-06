import { createSlice } from "@reduxjs/toolkit";
const Todoslice=createSlice({
    name:"todo",
    initialState:{
        task:[],
    },
    reducers:
    {
        addTask:(state,action)=>
        {
          
        state.task.push(action.payload);
         
          
        },
 
        deleteTask:(state,action)=>
        {
            console.log(action.payload);
            state.task=state.task.filter((key)=>
            {
                return key.skill!==action.payload.skill;
            })
        }
    }
})
export default Todoslice.reducer;
export const {addTask,deleteTask}=Todoslice.actions;