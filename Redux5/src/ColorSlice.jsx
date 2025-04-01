import { createSlice } from "@reduxjs/toolkit";
const ColorSlice=createSlice({
        name:"color",
        initialState:{
            value:"red",
            details:[],
            count:0,
        },
        reducers:{
             changeColor:(state)=>{
                state.value="green";
            },
            handleSubmit:(state,action)=>
            {
               state.details=action.payload;
            //    console.log(state.details);
            },
            Increase:(state)=>{
                state.count++;

            },
            Decrease:(state)=>{
                if(state.count<=0)
                {
                    alert("not less than 1 ...!")
                }
                else
                {
                    state.count--;
                }

                
            }
           
        }
    }
)
export const {changeColor,handleSubmit,Increase,Decrease}=ColorSlice.actions;
export default ColorSlice.reducer;
