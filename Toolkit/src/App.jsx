import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";
 const App=()=>
{
  const myval=useSelector((state)=>state.mycounter.count);
  const dispatch=useDispatch();
  return(
    <>
    <h1>wellcome to my App</h1>
    <button onClick={()=>{dispatch(increment())}}>Increament</button>
   
  <h1>{myval}</h1>

  <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
} 

export default App;