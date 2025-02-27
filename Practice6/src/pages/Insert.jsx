import { useState } from "react";
import axios from "axios";
const Insert=()=>
    {
        const [input, setInput]=useState({});
        const loadData=async()=>
        {
            let api="http://localhost:3000/students";
            const response=await axios.get(api);
            setInput(response.data);
            console.log(response.data);
        }
        return(
            <>
            <center>
                <h1>Insert Page</h1><br />
                Enter RollNo <input type="text" name="rollno" onChange={(e)=>{setInput(e.target.value)}} /><br /><br />
                Enter Name <input type="text"  name="name" onChange={(e)=>{setInput(e.target.value)}} /><br /><br />
                Enter Course <input type="text" name="course"onChange={(e)=>{setInput(e.target.value)}} /><br /><br />
                Enter Contact <input type="text" name="contact" onChange={(e)=>{setInput(e.target.value)}} /><br /><br />
                ENter City <input type="text" name="city"onChange={(e)=>{setInput(e.target.value)}} /><br /><br />
                <button>Submit</button>
            </center>
            </>
        )
    }
    export default Insert;