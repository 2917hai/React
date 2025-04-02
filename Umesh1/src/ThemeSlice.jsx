import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice=createSlice({
    name:"theme",
    initialState:{
        color:"red",
    },
    reducers:
    {
        changeColor:(state)=>
        {
          state.color="green"
        }
        
    }
})
export default ThemeSlice.reducer;
export const {changeColor}=ThemeSlice.actions;