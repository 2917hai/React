import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Inc } from './CounterSlice'
import { Dec } from './CounterSlice'

const Counter = () => {

  const dispatch=useDispatch();
  const data=useSelector((state)=>state.Mycountt.count);
  return (
   <>
   <h1>Counter</h1>
   <br /><br />
   <button onClick={()=>{dispatch(Inc())}}>Increament</button>
   <br /><br />
   <h1>Your counter is :{data} </h1>
   <br /><br />
   <button onClick={()=>{dispatch(Dec())}}>Decreament</button>

   </>
  )
}

export default Counter;
