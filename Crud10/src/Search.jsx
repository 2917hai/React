import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
const Search = () => {
    const [searchData, setSearchData] = useState("");
    const [data, setData] = useState([]);



    const loaddata = async(key) => 
        {
           let api=`http://localhost:3000/student/?roll=${key}`;
           const response=await axios.get(api);
              setData(response.data);
             

        }


    let no=0;
    const result=data.map((key)=>
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

   
  return (
    <div>
        <center>
        <h1>this is dat search page</h1>
        <br /><br /><hr />
        Enter Roll: <input type="text" placeholder='Enter Roll Number' value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} />
        <button onClick={loaddata}>Search</button>

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

export default Search
