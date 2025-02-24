import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [myData, setMyData]= useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/student";
        const response=await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
    }
    useEffect(()=>
    {
    loadData();
    },[])
    const ans=myData.map((key)=>
    {
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1> this is a display page</h1>
        <table>
            <tr>
                <th>rollno</th>
                <th>Name</th>
                <th>city</th>
                <th>fees</th>
            </tr>
            {ans}
        </table>
        
        </>
    )
    
    }
    export default Display;