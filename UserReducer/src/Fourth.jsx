import React from 'react'
import { useReducer } from 'react'


const Fourth = () => {

    const Reducer=(state,action)=>
        {
         if(action.no===1)
         {
            return state+1;
         }
         if(action.type==="dic")
         {
            if(state<=0)
            {
                alert("value not less than 1")
            }
            else{
                return state-1;
            }
         }
        }

    const [count,dispatch]=useReducer(Reducer,0);
  return (
   <>
   <h1>Fourth Component</h1>
   <br /><br />
   <h1>
    <h1>Here Your Couunt:{count}</h1>
    <button onClick={()=>{dispatch({no:1})}}>Increase</button>
    <button onClick={()=>{dispatch({no:0})}}>Decrease</button>
   </h1>
   </>
  )
}

export default Fourth
