import { createSlice } from "@reduxjs/toolkit";
import { Button, message } from 'antd';
const CartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[],
        myOrder:[]
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
        },
        deleteOrder:(state)=>
        {
            state.myOrder=state.cart;
            state.cart=[]
        },
        cancleOrder:(state,actions)=>
        {
            state.myOrder=state.myOrder.filter((key)=>{
                if(key.id!=actions.payload)
                {
                    return true;
                }
                else
                {   
                   let a= confirm("are sure want to cancle this order ")
                   if(a)
                   {
                    return false;
                   }
                   else
                   {
                    return true;
                   }
                    
                }
            })
        },
        quantInc:(state,actions)=>
        {
            for(var i=0; i<state.cart.length; i++)
            {
                if(state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].quant++;
                }
            }
          console.log(actions.payload.id);
        },
        quantDec:(state,actions)=>
            {
                for(var i=0; i<state.cart.length; i++)
                    {
                        if(state.cart[i].id==actions.payload.id)
                        {
                            if(state.cart[i].quant<=1)
                            {
                                alert("Quantity not less than One !")
                            }
                            else
                            {
                                state.cart[i].quant--;
                            }
                           
                        }
                    }
            },
            dataRemove:(state,actions)=>
            {
                state.cart=state.cart.filter((key)=>
                {
                    if(key.id!=actions.payload.id)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                })
                console.log(actions.payload.id);
            }
    }
})
export const {addtcart,quantInc,quantDec,dataRemove,deleteOrder,cancleOrder}=CartSlice.actions;
export default CartSlice.reducer;