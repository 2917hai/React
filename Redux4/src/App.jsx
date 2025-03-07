import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { changeColor } from "./ColorSlice";
const App=()=>
{
  const data=useSelector((state)=>state.color.value);
  const dispatch=useDispatch();
  const [val,setVal]=useState("");
  return(
    <>
    <h1>Wellcome to my app</h1>
    Enter Color: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
    <button onClick={()=>{dispatch(changeColor(val))}}>Change color</button>
    <div style={{height:"300px", width:"300px",backgroundColor:data}}></div>
    
    </>
  )
}
export default App;