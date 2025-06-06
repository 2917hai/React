import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Update = () => {

    const navigate=useNavigate();
    const [data, setData] = useState([]);

    const loadData=async () => 
        {
         let api="http://localhost:3000/student";
            const response=await axios.get(api);
            setData(response.data);
        }

       const deltedata=async (id)=>
       {
        let api=`http://localhost:3000/student/${id}`;
        const response=await axios.delete(api);
        loadData();
       }


       const edit=async (id)=>
       {
          navigate("/Edit/"+id);
       }


        let no=0;
const res=data.map((key)=>
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
            <td>
                <button onClick={()=>{deltedata(key.id)}}>Delete</button>
            </td>
            <td>
                <button onClick={()=>{edit(key.id)}}>Edit</button>
            </td>
          
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
      <h1>THis is data update page </h1>
        <br /><br /><hr />
        <h1>Here your data display</h1>
        <table border="1" cellPadding="10px" cellSpacing="0px" width="500px">
            <tr>
                <th>NO</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>
                <th>Roll</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {res}
          
        </table>
        </center>

    </div>
  )
}

export default Update
