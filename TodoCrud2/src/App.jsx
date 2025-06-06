import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addData, CompleteStatus, deleteData, editData, InCompleteStatus } from './TodoSlice';
const App = () => {

  const [inputvalue,setInputvalue]=useState({});
  const [btn,setBtn]=useState(true);
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.Mydata.data);
  


  const handleInput=(key)=>
  {
    let name=key.target.name;
    let value=key.target.value;
    setInputvalue(values=>({...values,[name]:value}))
    console.log(inputvalue);
  }

  const edit=(index,item)=>
  {
    setBtn(false);
  
    
  }

  const addmyData=()=>
  {
    dispatch(addData({inputvalue,status:"Incomplete"}));
    setBtn(true);
  }

  const Mydata=data.map((item,index)=>
  {
    
    return(
      <>
      <tr>
        <td>{index+1}</td>
        {item.status=="Complete" ? <span style={{color:"red", fontWeight:"bold"}}>{item.inputvalue.name}</span> : <span style={{color:"black"}}>{item.inputvalue.name}</span>}
        <td>{item.inputvalue.marks}</td>
        <td>{item.inputvalue.roll}</td>
        <td>
          <button onClick={()=>{dispatch(deleteData(index))}}>Delete</button>
        </td>
 
        <td>
          <button onClick={edit(index,index.inputvalue)}>Edit</button>
        </td>

        <td>
          <button onClick={()=>{dispatch(CompleteStatus(index))}}>Complete</button>
          <button onClick={()=>{dispatch(InCompleteStatus(index))}}>Incomplete</button>
        </td>
      </tr>
      </>
    )
  })
  return (
    <div>
      <center>

      <h1>This is our todo practice component</h1>
      <br /><br /><br /><hr />
      Enter Students Name: <input type="text" name='name' onChange={handleInput} />
      <br /><br />
      Enter Students Marks: <input type="text"  name='marks' onChange={handleInput}/>
      <br /><br />
      Ennter Students Roll No: <input type="text"  name='roll' onChange={handleInput}/>
      <br /><br /><br />
      {btn ? <button onClick={addmyData}>Add..!</button>:
      <button >Save changes...!</button>}
      
      
      <br /><br /><hr />

      <table border="1" width="500px">
        <tr>
          <th>NO</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Roll No</th>
          <th>Delete</th>
          <th>Edit</th>
          <th>Status</th>
        </tr>
        {Mydata}
      </table>
      </center>
     
      
    </div>
  )
}

export default App
