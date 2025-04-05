import React from 'react'
import { useReducer } from 'react'

const Five = () => {
   

    const NumberCount=(state,action)=>
    {
        if(action.no==="Inc")
        {
            return state+1;
        }
        else
        {
            if(state<=1)
            {
                alert("value not less than 1")
            }
            else
            {
                return state-1;
            }
        }
    }
    const [no,dispatch]=useReducer(NumberCount,1);
  return (
    <div>
        <br /><br /><br /><hr />
      <h1>THis is Fiveth useReducer paractice Component</h1>
      <br /><br /><hr />
      <h1>Your Name:</h1>
      <h1>YOur no:{no}</h1>
      <button onClick={()=>{dispatch({no:"Inc"})}}>Increase</button>
      <button onClick={()=>{dispatch({no:"dec"})}}>Decrease</button>
    </div>
  )
}

export default Five
