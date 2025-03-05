import { createSlice } from "@reduxjs/toolkit";
const ColorSlice=createSlice({
    name:"color",
    initialState:{
        value:"green",
    },
    reducers:{
        changeColor:(state)=>{
            state.value="red"
        }
    }
})
export const {changeColor}=ColorSlice.actions;
export default ColorSlice.reducer;