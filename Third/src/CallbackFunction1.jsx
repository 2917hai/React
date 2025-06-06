import React from 'react'
import { useState } from 'react'
const CallbackFunction1 = () => {


    const [count,setCount]=useState({red:0,blue:0,green:0,yellow:0});


    
    const red=()=>
        {
       setCount((current)=>
    {
        return{...current,red:current.red+1}
    })
        }


  return (
    <div>
      <h1>This is callback funtion </h1>
      <br /><br />
      <h1>here your red Count value is :{count.red}</h1>
      <button onClick={red}>red+1</button>
      <br /><br />

      <h1>here your blue Count value is :{count.blue}</h1>
      <button>blue+1</button>
<br /><b></b>
      <h1>here your green Count value is :{count.green}</h1>
      <button>green+1</button>
<b></b><br />
      <h1>here your yellow Count value is :{count.yellow}</h1>
      <button>yellow+1</button>
    </div>
  )
}

export default CallbackFunction1
