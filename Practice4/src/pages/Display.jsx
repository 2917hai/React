import { useEffect, useState } from "react";
import axios from "axios";
const Display=()=>
    {
        const [mydata, setMydata]=useState([]);
        const loadData=async()=>
        {
            let api="http://localhost:3000/sdudents";
            const response=await axios.get(api);
            setMydata(response.data);
            console.log(mydata);
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
                <table>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Contact</th>
                        <th>City</th>
                    </tr>
                    {ans}
                </table>
            </center>
            </>
        )
    }
    export default  Display;