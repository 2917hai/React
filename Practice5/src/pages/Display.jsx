import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>
    {
        const [mydata, setMydata]=useState([]);
        const loadData=async()=>
        {
            let api="http://localhost:3000/students";
            const response=await axios.get(api);
            setMydata(response.data);
            alert("data REcieved")
        }
        const ans=mydata.map((e)=>
            {
                return(
                    <>
                    <tr>
                        <td>{e.rollno}</td>
                        <td>{e.name}</td>
                        <td>{e.course}</td>
                        <td>{e.contact}</td>
                        <td>{e.city}</td>
                    </tr>
                    </>
                )
            })

        useEffect(()=>
        {
          loadData();
        },[])
        
        return(
            <>
            <center>
            <h1>This is Display page</h1>
            <table color="red" border="2" bgcolor="green">
                <tr>
                    <th>Roll No</th>
                    <th> Name </th>
                    <th> Course </th>
                    <th> Contact No </th>
                    <th> City</th>
                </tr>
                {ans}
            </table>
            </center>
         
            </>
        )
    }
    export default Display;