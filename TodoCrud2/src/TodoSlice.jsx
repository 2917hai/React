import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"todo",
    initialState:{
       data:[],
    },
    reducers:{
        addData:(state,action)=>
        {
         state.data.push(action.payload);
         
        },



        deleteData:(state,action)=>
        {
          state.data=state.data.filter((item,index)=>
        {
            if(index!=action.payload)
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        },
        editData:(state,action)=>
        {

        },
        CompleteStatus:(state,action)=>
        {
          if(state.data[action.payload].status=="Incomplete")
          {
            state.data[action.payload].status="Complete";
          }
          else
          {
            state.data[action.payload].status="Incomplete";
          }
        },
        InCompleteStatus:(state,action)=>
        {
            if(state.data[action.payload].status=="Complete")
            {
                state.data[action.payload].status="Incomplete";
            }
            else
            {
                state.data[action.payload].status="Complete";
            }
        }
    }
})
export default TodoSlice.reducer;
export const {addData,deleteData,editData,CompleteStatus,InCompleteStatus}=TodoSlice.actions;