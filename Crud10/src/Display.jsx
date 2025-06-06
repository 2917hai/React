import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
const Display = () => {
const [mydata,setMydata] = useState([]);

const loadData=async () => 
{
    let api="http://localhost:3000/student";
    const response=await axios.get(api);
    setMydata(response.data);
    console.log(mydata);
}

let no=0;
const result=mydata.map((key)=>
{
  no++;
    return(
        <>
        <tr>
            <td>{no}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.course}</td>
            <td>{key.roll}</td>
        </tr>
        </>
    )
})

useEffect(()=>
    {
        loadData();
    },[])

  
  return (
    <div>
        <center>
        <h1>This ia data display page </h1>
        <br /><br /><hr />
        <h1>Here your data display</h1>
        <table border="1" cellPadding="10px" cellSpacing="0px" width="500px">
            <tr>
                <th>NO</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>
                <th>Roll</th>
            </tr>
            {result}
          
        </table>
        </center>
    
    </div>
  )
}

export default Display
