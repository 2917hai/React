
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTask,deleteTask } from './Todoslice'

const App = () => {
  const dispatch=useDispatch();
  const [txt,setTxt]=useState({});

  const data=useSelector((state)=>state.Mytask.task);
  console.log(data);
let srno=0;
  const res=data.map((key)=>{
    srno++;
    return(
      <>
      <tr>
        <td>{srno}</td>
        <td>{key.skill}</td>
        <td><button onClick={()=>{dispatch(deleteTask(key))}}>Delete</button></td>
      </tr>
      </>
    )
  })

  const handleInput=(key)=>
  {
    let name=key.target.name;
    let value=key.target.value;
    setTxt(values=>({...values,[name]:value}))
  }
  return (
    <>
    <center>
      <h1>Our TOdo App </h1>

      <br /><br />
      Enter your Data: <input type="text" placeholder='Enter your Skills' name='skill' onChange={handleInput} /> 
      <button onClick={()=>{dispatch(addTask(txt))}}>Add..!</button>
      <br /><br />
      <h1>Here Our List </h1>
      <table border={2} style={{fontSize:"25px", padding:"5px"}} >
        <tr>
          <th>NO</th>
          <th>Data</th>
          <th>delete</th>
      
        </tr>
        {res}
      </table>
    </center>
    </>
  )
}

export default App
