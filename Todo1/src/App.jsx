import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTask } from './TodoSlice';

const App = () => {
  const [txtval,setTxtval]=useState("");

  const dispatch=useDispatch();


  const data=useSelector((state)=>state.Mytodo.task);
  let srno=0;
  const ans=data.map((key)=>{
    srno++;
    return(
      <>
      <tr>
        <td>{srno}</td>
        <td>{key.work}</td>
      </tr>
      </>
    )
  })
  

    return (
   <>
   <center>
   <h1>Our todo App  ...!</h1>
   Enter Your Task : <input type="text " placeholder='Enter Your task' value={txtval} onChange={(e)=>{setTxtval(e.target.value)}} />
   <button onClick={()=>{dispatch(addTask({work:txtval}))}}>Add..!</button>


   <br /><br />
   <h1>Our premium Task....!</h1>
   <table>
    <tr>
      <th>SrNo</th>
      <th>Task</th>
    </tr>
    {ans}
   </table>


   
   
   </center>
 
   </>
  )
}

export default App
