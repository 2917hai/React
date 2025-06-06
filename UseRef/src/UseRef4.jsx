import React from 'react'
import { useRef } from 'react'

const UseRef4 = () => {
    const username=useRef(null);
    const password=useRef(null);


    const DataSubmit=(event)=>
    {
        event.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
    }
  return (
    <div>
      <h1>THis is USeRef practice component</h1>
      <form onSubmit={DataSubmit}>
        <input type="text" placeholder='Enter username' ref={username} />
        <input type="text " placeholder='Enter Password' ref={password} />
        <br /><br />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default UseRef4
