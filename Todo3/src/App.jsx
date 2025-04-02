import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTask } from './TodoSlice'
import { changeColor } from './TodoSlice'
import { colorChange } from './TodoSlice'

const App = () => {



  const [color,setColor]=useState("");
  const clr=useSelector((state)=>state.Mytask.color);


const dispatch=useDispatch();
const [input,setInput]=useState({});


const data=useSelector((state)=>state.Mytask.task);

let srno=0;
const res=data.map((key)=>
{
  srno++;
  return(
    <>
    <tr>
      <td>{srno}</td>
      <td>{key.subject}..</td>
      <td>{key.skills} ..</td>
      <td>{key.experience} Years</td>
      <td>{key.marks} Marks</td>
    </tr>
    </>
  )
})

const handleInput=(key)=>
{
 let name=key.target.name;
 let value=key.target.value;
 setInput(values=>({...values,[name]:value}));

}

  return (
   <>
   <center>
    <h1>Our Third TOdo App .....!</h1>
    <h2>Wellcome to my Webpage ....!</h2>
    <br /><br /><hr />
    <h1>Please Enter your Subject,Skills, Experience and Marks</h1>
    <br />
    Enter Your Subject : <input type="text" name='subject' onChange={handleInput} />
    <br />
    <br />
    Enter Your Marks : <input type="text" name='marks' onChange={handleInput} />
    <br /><br />
    Enter Your Skills : <input type="text" name='skills' onChange={handleInput}/>
    <br />
    <br />
    Enter Your Experience: <input type="text"name='experience' onChange={handleInput} />
    <br /><br />
    <button onClick={()=>{dispatch(addTask(input))}}>Add..!</button>
    <br /><br /><hr />
    <table border={3} bgcolor='blue' style={{fontSize:"20px"}}>
      <tr>
        <th>NO</th>
        <th>Subject</th>
        <th>Skills</th>
        <th>Experience</th>
        <th>Marks</th>
      </tr>
      {res}
    </table>



    <br /><br /><hr /><hr />
    <h1>Our Color change TOdo App .....</h1>
    <div style={
    {
      height:"300px",
      width:"300px",
      backgroundColor:clr
    }
    }></div>
    <br /><br />
    <button onClick={()=>{dispatch(changeColor())}}>Change-Color</button>
    <br /><br />
    Enter Your choice color: <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}} />
    <button onClick={()=>{dispatch(changeColor(color))}}>Change..!</button>
   </center>
   </>
  )
}

export default App
