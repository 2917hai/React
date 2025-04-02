import { createSlice } from "@reduxjs/toolkit";
const CounterSlice=createSlice({
    name:"theme",
    initialState:{
        count:0
    },
    reducers:
    {
        Inc:(state)=>
        {
          state.count++;
        },
        Dec:(state)=>
        {
            if(state.count<=0)
            {
                alert("no")
            }
            else{
                state.count--;
            }
          
        }

        
    }
})
export default CounterSlice.reducer;
export const {Inc,Dec}=CounterSlice.actions;