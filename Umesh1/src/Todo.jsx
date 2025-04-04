import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './TodoSlice';

const Todo = () => {
  const dispatch=useDispatch();
  const [txt,setTxt]=useState({});
const data=useSelector((state)=>state.Mytodoo.task);




let no=0;
const res=data.map((key)=>
{
  
  no++;
  return(
    <>
    <tr>
      <td>{no}</td>
      <td>{key.task}</td>
      <td>
        <button>dlt</button>
      </td>
      <td>
        <button>edit</button>
      </td>
    </tr>
    </>
  )
})

  return (
    <div>
      <h1>Wellcome to my TOdo App </h1>
      <br /><br />
      Enter your Choice : <input type="text"  onChange={(e)=>{setTxt(e.target.value)}} />
      <button onClick={()=>{dispatch(addTask({task:txt}))}}>Add..!</button>
      <br /><br /><hr /><hr />

      <table>
        <tr>
          <th>NO</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {res}
      </table>
     
    </div>
  )
}

export default Todo
