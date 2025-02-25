import { useState } from "react";
import axios from "axios";
const Insert=()=>
    {
        const [input, setInput]=useState({});
        const handleInput=(e)=>
        {
            let name=e.target.name;
            let value=e.target.value;
            setInput((values)=>({...values, [name]:value}));
            console.log(input);
        }
        const handleSubmit=async()=>
        {
            let api="http://localhost:3000/students";
            const response=await axios.post(api,input);
            console.log(response.data);
            alert("data recieved ..!!")
        }
        return(
            <>
            <center>
            <h1>This is Insert page</h1>
            Enter Your roll No: <input type="text" name="rollno" onChange={handleInput}/> <br /><br />
            Enter Your Name: <input type="text" name="name" onChange={handleInput}/><br></br><br />
            Enter Your Course: <input type="text" name="course" onChange={handleInput}/><br /><br />
            Enter Your Contact No: <input type="text" name="contact" onChange={handleInput}/><br /><br />
            Enter Your City: <input type="text" name="city" onChange={handleInput}/><br /><br />
            <button onClick={handleSubmit}>Save Data</button>
            </center>
          
            </>
        )
    }
    export default Insert;