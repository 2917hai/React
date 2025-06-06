import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addtask ,deletetask} from "./Todoslice";
const App=()=>
{
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.Todo.task);
  const [inputdata,setInputdata]=useState({});

  const editdata=(id,work)=>
  {
    console.log(id);
    console.log(work);
    setInputdata({name:work.name,age:work.age,address:work.address,phone:work.phone,roll:work.roll});
  }

 let srno=0;
  const res=data.map((key)=>
  {
    srno++;
   return(
    <>
    <tr>
      <td>{srno}</td>
     <td>{key.work.name}</td>
     <td>{key.work.age}</td>
      <td>{key.work.address}</td>
      <td>{key.work.phone}</td>
      <td>{key.work.roll}</td>
      <td>{key.status}</td>
      <td><button onClick={()=>{dispatch(deletetask(key.id))}}>Delete</button></td>
      <td><button onClick={()=>{editdata(key.id,key.work)}}>Update</button></td>
    </tr>
    </>
   
   )
  })

  const handleinput=(key)=>
  {
    let name=key.target.name;
    let value=key.target.value;
   setInputdata(values=>({...values,[name]:value}))
  }
 

  return(
    <>
    <center>
      
      <h1>Wellcome to my Todo crud app</h1>
      <br /><br /><hr />
      Enter Students Name <input type="text" name="name" onChange={handleinput}/><br /><br />
      Enter Students Age <input type="text" name="age"  onChange={handleinput}/><br /><br />
      Enter Students Address <input type="text" name="address" onChange={handleinput} /><br /><br />
      Enter Students Phone Number <input type="text" name="phone"  onChange={handleinput}/><br /><br />
      Enter Students Roll Number <input type="text" name="roll"  onChange={handleinput} /><br /><br />
      <button onClick={()=>{dispatch(addtask({work:inputdata, id:Date.now(),status:"incomplete"}))}}>Add..!</button>
      <br /><br /><br /><hr /><hr />
     



   <table border="1" cellPadding="10" cellSpacing="0">
    <caption>Students data</caption>
    <tr>
      <th>NO</th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Roll Number</th>
      <th>Status</th>
      <th>Delete</th>
      <th>update</th>
    </tr>
  
      {res}
    
   </table>
    
    </center>
    </>
  )
}
export default App;