import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
const Insert = () => {
    const [input,setInput] = useState({});
    
    const handleSubmit=async()=>
    {
        let api="http://localhost:3000/student";
        const response= await axios.post(api,input);
        console.log(response.data);
        alert("Data Inserted Successfully");
       
      

    }


    const handleInput=(key)=>
    {
      let name=key.target.name;
      let value=key.target.value;
      setInput((values=>({...values,[name]:value})));
      console.log(input);
    }

   

   
  return (
    <div>
        <center>
        <h1>this is data insert page</h1>
        <br /><br />
        <h1>Fill data </h1>
        Enter Name : <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} /> <br /><br />
        Enter City: <input type="text" placeholder='Enter City' name='city' onChange={handleInput} /> <br /><br />
        Enter Course: <input type="text" placeholder='Enter Course' name='course' onChange={handleInput} /> <br /><br />
        Enter Roll: <input type="text" placeholder='Enter Roll' name='roll' onChange={handleInput} /> <br /><br />
        <button onClick={handleSubmit}>Submit</button>


        <br /><br /><hr />
     
        </center>
    
    </div>
  )
}

export default Insert
