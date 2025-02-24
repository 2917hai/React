
import { useState } from "react";
import axios from "axios";

function Insert() {
    const [input, setInput]=useState({})
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>
    {
      let api="http://localhost:3000/students";
      axios.post(api,input).then((res)=>{
        alert("data recieved")
        console.log(input); 
      })

    } 
  return (
   <>
   <center>
   <h1>Insert Page</h1>
   <h1>Application Form</h1>
   Enter Your Name: <input type="text" name="name"  onChange={handleInput} /><br /><br/>
   Enter Your Empno: <input type="text" name="empno"  onChange={handleInput} /><br /><br  />
   Enter Your salary: <input type="text" name="salary"  onChange={handleInput} /><br /><br/>
   Enter Your Designation: <input type="text" name="designation"  onChange={handleInput} /><br /><br/>
   Enter Your Fees: <input type="text" name="fees"  onChange={handleInput} /> <br /><br/>
   <button onClick={handleSubmit}>Submit</button>

   </center>
  
   </>
  )
}

export default Insert;
