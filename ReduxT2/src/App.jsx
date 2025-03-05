import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";
const App=()=>
{
    const mydata=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    return(
        <>
        <center>
        <h1>This is home page </h1>
        <button onClick={()=>{dispatch(increment())}} style={{backgroundColor:"green"}}>Increament</button>
        <h1>Count is : {mydata}</h1>
        <button onClick={()=>{dispatch(decrement())}} style={{backgroundColor:"red"}}>Decreament</button>
        <br /><br />
        <button onClick={()=>{dispatch(reset())}} style={{backgroundColor:"yellow"}}>reset</button>
        </center>
      

        </>
    )
}
export default App;