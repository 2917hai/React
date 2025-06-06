import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice(
    {
        name:"todo",
        initialState:{
            task:[]
           
        },
        reducers:{
              addtask:(state,action)=>
              {
                state.task.push(action.payload);
               
              },
              deletetask:(state,action)=>
              {
               state.task=state.task.filter((key)=>
            {
                return key.id!=action.payload;
               
            })
              },
             
        }
    }
)
export default TodoSlice.reducer;
export const {addtask,deletetask}=TodoSlice.actions;
