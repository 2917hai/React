import { createSlice } from "@reduxjs/toolkit";
const ColorSlice=createSlice(
    {
        name:"color",
        initialState:{
        value:"red",
        },
        reducers:{
            changeColor:(state,action)=>{
                console.log("Payload is: ",action.payload);
                state.value=action.payload;
            }
        }
    }
)
export const {changeColor}=ColorSlice.actions;
export default ColorSlice.reducer;