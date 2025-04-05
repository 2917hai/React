import React from 'react'
import { useState } from 'react'
const Practice2 = () => {
    const [count ,setCount]=useState(0);

  return (
    <div>
      <h1>this is practice2 component</h1>
      <h1>here your count value is :{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}

export default Practice2
