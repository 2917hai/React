import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTask } from './TodoSlice'

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
        <td>{key.experience}Years</td>
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
      <h1>Our Second TOdo App </h1>
      Please mention Your Skills and Experience
      <br /><br />
      Enter your Skills: <input type="text" placeholder='Enter your Skills' name='skill' onChange={handleInput} />
      <br /><br />
      Enter your Experience: <input type="text"  placeholder='Enter your Exp in yrs'  name='experience' onChange={handleInput} />
      <br /><br />
      <button onClick={()=>{dispatch(addTask(txt))}}>Add..!</button>
      <br /><br />
      <hr /><hr />
      <h1>Here your Skills with Experience </h1>
      <table bgcolor='red' border={2} style={{fontSize:"25px", padding:"5px"}} >
        <tr>
          <th>NO</th>
          <th>Skills</th>
          <th>Experience</th>
        </tr>
        {res}
      </table>
    </center>
    </>
  )
}

export default App
