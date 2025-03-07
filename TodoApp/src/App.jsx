import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "./TodoSlice";
const App=()=>
{
  const mytask=useSelector((state)=>state.mytodo.todoList);
  const dispatch=useDispatch();
  const [textvalue,settextvalue]=useState("");
  let sno=0;
  const ans=mytask.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
      </tr>
      </>
    )
    
  })
  return(
    <>
      <h1>Wellcomt to home page </h1>
      Enter Task : <input type="text" value={textvalue} onChange={(e)=>{settextvalue(e.target.value)}} />
      <button onClick={()=>{dispatch(addTask({work:textvalue}))}}>add</button>
      <hr />
      <table>
        <tr>
          <th>Sno</th>
          <th>My task </th>
        </tr>
        {ans}
      </table>
    </>
  
  )
}
export default App;