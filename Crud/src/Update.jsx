import axios from "axios";
import { use, useEffect, useState } from "react";
const Update=()=>
{
    const [mydata,setMydata]=useState([]);
    const loaddata=async()=>
    {
        let api="http://localhost:3000/students";
        const response=await axios.get(api);
        setMydata(response.data);
    }
    const dlt=async(id)=>
    {
        let api=`http://localhost:3000/students/${id}`;
        const response=await axios.delete(api);
        loaddata();
        
    }
  
    const ans=mydata.map((e)=>
    {
        return(
            <>
              <tr>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>{e.course}</td>
                <td>{e.roll}</td>
                <td>
                    <button onClick={()=>{dlt(e.id)}}>dlt@</button>
                </td>
                <td>
                    <button onClick={()=>{editData(e.id)}}>edit</button>
                </td>
            </tr>
            
            </>
        )
    })

    useEffect(()=>
        {
            loaddata();
        },[]);
    return(
        <>
        <h1>This is Update page </h1>
        <table border={1}>
            <tr>
              <th>Name</th>
               <th>City</th>
                <th>Course</th>
                 <th>Roll</th>
                 <th>Delete</th>
                 <th>Edit</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Update;