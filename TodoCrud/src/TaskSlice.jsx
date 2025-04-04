import { createSlice } from "@reduxjs/toolkit";
const TaskSlice=createSlice(
    {
        name:"task",
        initialState:
        {
            taskList:[]
        },
        reducers:
        {
            addTask:(state,action)=>
            {
                state.taskList.push(action.payload)
            },
            deleteTask:(state,action)=>
            {
               state.taskList=state.taskList.filter((item,index)=>
                {
                    return index!==action.payload
                })
            },
            deleteTask1:(state,action)=>
                {
                   state.taskList=state.taskList.filter((item,index)=>
                    {
                       if(item.id!=action.payload)
                       {
                        return true;
                       }
                       else
                       {
                        return false;
                       }
                    })
                },
            completeTask:(state,action)=>
            {
                 if(state.taskList[action.payload].status==="incomplete")
                 {
                    state.taskList[action.payload].status="complete"

                 }
                 else
                 {
                    state.taskList[action.payload].status="incomplete"
                 }
                 console.log(state.taskList[action.payload].status);
            },
            IncompleteTask:(state,action)=>
            {
               if(state.taskList[action.payload].status==="complete")
               {
                state.taskList[action.payload].status="incomplete"
               }
               else
               {
                state.taskList[action.payload].status="complete"
               }
            },
            editsave:(state,action)=>
            {
                
              for(let i=0;i<state.taskList.length;i++)
              {
               if(state.taskList[i].id==action.payload.id)
               {
                state.taskList[i].work=action.payload.work;
               
               }
              
              }                                                         
               
              
            }
            
        }
    }
)
export default TaskSlice.reducer;
export const {addTask,deleteTask,deleteTask1,completeTask,IncompleteTask,editsave}=TaskSlice.actions;