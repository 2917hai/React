import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        todoList:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.todoList.push(actions.payload)
        },
        deleteTask:(state,actions)=>{
            state.todoList=state.todoList.filter(key=>key.id!=actions.payload)
        },
        taskComplete:(state,actions)=>{
           for( var i=0;i<state.todoList.length;i++)
           {
               if(state.todoList[i].id==actions.payload.id)
               {
                   state.todoList[i].status="completed";
               }
           }
        },
        taskIncomplete:(state,actions)=>{
            for( var i=0;i<state.todoList.length;i++)
            {
                if(state.todoList[i].id==actions.payload.id)
                {
                    state.todoList[i].status="incomplete";
                }
            }
        }
    }
})
export const {addTask,deleteTask,taskComplete,taskIncomplete}=TodoSlice.actions;
export default TodoSlice.reducer;