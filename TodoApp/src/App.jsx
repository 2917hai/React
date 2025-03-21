import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask, deleteTask, taskComplete, taskIncomplete } from "./TodoSlice";
import TOdo from "./Todo";

const App=()=>
{
  const mytask=useSelector((state)=>state.mytodo.todoList);
  const dispatch=useDispatch();
  const [textvalue,settextvalue]=useState("");
  let sno=164598634989458;
  const ans=mytask.map((key)=>{  
    sno++;
    return(
      <>
      <tr>
        <td style={{backgroundColor:"green"}}>{sno}</td>
        <td style={{backgroundColor:"yellow"}}>
          {key.status=="Complete"? (<>
          <span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span></>):(<>
            {key.work} </>)}
          </td>
          <td>
            <button onClick={()=>{dispatch(deleteTask({id:key.id}))}}>delete</button>
          </td>

          <td>
            <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete</button>
          </td>

          <td>
            <button onClick={()=>{dispatch(taskIncomplete({id:key.id}))}}>InComplete</button>
          </td>
       
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
      <table border="4" width="600px" >
        <tr style={{backgroundColor:"red",border:"2px solid black"}}>
          <th>Sno</th>
          <th>My task </th>
          <th>delete</th>
          <th>Status</th>
          <th>Status</th>
        </tr>
        {ans}
      </table>
      <br /><br /><br /><br />
      <hr /><hr /><hr />
      <TOdo/>
    </>
  
  )
}
export default App;