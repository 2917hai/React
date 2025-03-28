import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[],
    },
    reducers:{
        addtcart:(state,actions)=>{
            const mydata=state.cart.filter(key=>key.id==actions.payload.id);
            if(mydata.length>=1)
            {
                alert("product allready added !")
            }
            else
            {
                state.cart.push(actions.payload);
            }
        }
    }
})
export const {addtcart}=CartSlice.actions;
export default CartSlice.reducer;