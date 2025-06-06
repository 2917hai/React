import React from 'react'
import { useRef } from 'react'

const UseRef3 = () => {
    const myRef=useRef("");
    const Uma=()=>
    {
        myRef.current.style.backgroundColor="red";
        myRef.current.style.borderRadius="50%";
        myRef.current.style.border="2px solid black"
       // myRef.current.style.backgroundColor="red";
    }
  return (
    <div>
      <h1>Here your color chage box </h1>
      <div ref={myRef} className="uma" style={{height:"300px", width:"300px"}}>
        <button onClick={Uma}>click me </button>

      </div>
    </div>
  )
}

export default UseRef3
