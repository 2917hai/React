import { useState } from "react";
import axios from "axios";
const Insert=()=>
{
    const [input,setInput]=useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=async()=>
    {
        let api="http://localhost:3000/students";
        const response=await axios.post(api,input);
        console.log(response.data);
        alert("data recieved")
    }
    return(
        <>
        <center>
        <h1>Wellcome to Insert page </h1>
        Enter your Name <input type="text" name="name" onChange={handleInput} /><br /><br />
        Enter your City <input type="text" name="city"  onChange={handleInput} /><br /><br />
        Enter your Course <input type="text" name="course"  onChange={handleInput} /><br /><br />
        Enter your Roll <input type="text"  name="roll"  onChange={handleInput} /><br /><br />
        <button onClick={handleSubmit}>Submit</button>
        </center>
      
        </>
    )
}
export default Insert;