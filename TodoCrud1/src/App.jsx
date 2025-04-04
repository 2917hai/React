import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, CompleteStatus, deleteTask, EditTask, InCompleteStatus } from './CrudSlice'

const App = () => {
  const [txt, setTxt] =useState("")
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.Mytask.task);
  const [id, setId] = useState("");
  const [btn, setBtn] = useState(true);


  const Edit=(index,item)=>
  {
    setBtn(false);
    setTxt(item);
    setId(index);

  }

  const EditDispatch=()=>
  {
    setBtn(true);
    setTxt("");
    dispatch(EditTask({work:txt,index:id}))
  }
  

  const res=data.map((item,index)=>
  {
    return(
      <tr>
        <td>{index+1}</td>
        {item.status=="Complete" ? <span style={{color:"green"}}>{item.work}</span> : <span style={{color:"black"}}>{item.work}</span>}
      
        <td>
          <button onClick={()=>{dispatch(deleteTask(index))}}>Delete</button>
          </td>
        <td>
          <button onClick={()=>{Edit(index,item.work)}}>Edit</button>
          </td>
        <td>
          <button onClick={()=>{dispatch(CompleteStatus(index))}}>Complete</button>
          <button onClick={()=>{dispatch(InCompleteStatus(index))}}>InComplete</button>
          </td>
      </tr>
    )
  })
  return (
  <>
  <center>
  <h1>  Wellcome to my todo crud App</h1>
  Enter Your task : <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/>
  {btn ? <button onClick={()=>{dispatch(addTask({id:Date.now() ,work:txt,status:"Incomplete"}))}}> Add Task </button> :
   <button onClick={EditDispatch}>Edit Save..!</button>}

  

  <table border="1" width="500px">
    <tr>
      <th>NO</th>
      <th>Task</th>
      <th>Delete</th>
      <th>Edit</th>
      <th>status</th>
    </tr>
    {res}
  </table>
  </center>

  </>
  )
}

export default App
