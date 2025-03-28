import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Display=()=>
    {
        const [mydata,setMydata]=useState([]);
        const data=async()=>
        {
            let api="http://localhost:3000/students";
            const response=await axios.get(api);
            setMydata(response.data);
            console.log(mydata);

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
            </tr>
            </>
        )
    })
    useEffect(()=>
    {
        data();
    },[])
        
        return(
            <>
            <center>
            <h1>Wellcome to Display page </h1>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Course</th>
                    <th>Roll</th>
                </tr>
             
                 {ans}
                
            </table>
            </center>
          
            </>
        )
    }
    export default Display;