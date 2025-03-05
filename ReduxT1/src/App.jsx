import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";
const App=()=>
{
  const count=useSelector((state)=>state.counter.count);
  const dispatch=useDispatch();
  return(
    <>
    <h1>this is home page </h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <h1>Count is :{count}</h1>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    <button onClick={()=>{dispatch(reset())}}>reset</button>

    </>
  )
}
export default App;