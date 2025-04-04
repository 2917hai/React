import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTask,deleteTask,deleteTask1 ,completeTask, IncompleteTask,editsave} from './TaskSlice';

const App = () => {

  const dispatch=useDispatch();
  const data=useSelector((state)=>state.task.taskList);
  const [txt,setTxt]=useState("");
  const [id,setId]=useState("");
  const [btnstatus,setButtonStatus]=useState(true);



  const Editdata=(id,work)=>
  {
    setTxt(work);
    setButtonStatus(false);
    setId(id);
   
  }


  const editdataDispatch=()=>
  {
    setButtonStatus(true);
    setTxt("")
    dispatch(editsave({id:id,work:txt}))
  }
  

 

  const res=data.map((item,index)=>
    
  <tr >
    <td>{index+1}</td>
    <td>
    {item.status=="complete" ? <span style={{color:"red"}}>{item.work}</span> :  <span style={{color:"black"}}>{item.work}</span>}
   
   
      </td>
    <td>
      <button onClick={()=>{dispatch(deleteTask(index))}}>Delete</button>
      <button onClick={()=>{dispatch(deleteTask1(item.id))}}>Delete</button>
    </td>
    <td>
      <button onClick={()=>{dispatch(completeTask(index))}}>Complete</button>
      <button onClick={()=>{dispatch(IncompleteTask(index))}}>Incomplete</button>
    </td>
   
    <td>
      <button onClick={()=>{Editdata(item.id,item.work)}}>Edit</button>
    </td>
  </tr>

  )
   
  
  return (
   <>
   <center>
   <h1>Wellcome to my TOdo crud app </h1>
   Enter Your Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}} />
   {btnstatus?<> <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txt,status:"incomplete"}))}}>Add...!</button>
    </>:<> <button onClick={editdataDispatch}>Save data</button> </>}
  
  

   <br /><br /><hr />
   <h1>Here your task lIst </h1>
   <table border={2}>
    <tr>
      <th>NO</th>
      <th>Task</th>
      <th>Delete</th>
      <th>Status</th>
      <th>Edit</th>
       
    </tr>
  {res}
   </table>
   </center>
  
   </>
  )
}

export default App
