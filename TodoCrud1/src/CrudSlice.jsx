import { createSlice } from "@reduxjs/toolkit";
const CrudSlice=createSlice(
    {
        name:"crud",
        initialState:
        {
            task:[]
        },
        reducers:
        {
            addTask:(state,action)=>
            {
          
            state.task.push(action.payload);
           
            },
            deleteTask:(state,action)=>
            {
              state.task=state.task.filter((item,index)=>
            {
                if(index!=action.payload)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            })
            },
            CompleteStatus:(state,action)=>
            {
              if(state.task[action.payload].status=="Incomplete")
              {
                state.task[action.payload].status="Complete"
              }
              else
              {
                state.task[action.payload].status="Incomplete"
              }
            },
            InCompleteStatus:(state,action)=>
            {
              if(state.task[action.payload].status=="Complete")
                {
                state.task[action.payload].status="Incomplete"
                }
                else
                {
                    state.task[action.payload].status="Complete"
                }

            },
            EditTask:(state,action)=>
            {
               for(let i=0;i<state.task.length;i++)
               {
                if(i==action.payload.index)
                {
                    state.task[i].work=action.payload.work;
                }
               }
            },

        }
    }
)
export default CrudSlice.reducer;
export const {addTask,deleteTask,CompleteStatus,InCompleteStatus,EditTask}=CrudSlice.actions;