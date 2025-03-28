import axios from "axios";
import { useState } from "react";
const Search=()=>
{
    const [roll,setRoll]=useState("");
    const [mydata,setMydata]=useState([]);
    const loaddata=async()=>
    {
        let api=`http://localhost:3000/students/?roll=${roll}`;
        const response=await axios.get(api);
        setMydata(response.data);
    }

    const ans=mydata.map((e)=>
    {
        return(
            <tr>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>{e.course}</td>
                <td>{e.roll}</td>
            </tr>
        )
    })

    return(
        <>
        <center>
            <h1>Wellcome to data search page</h1>
            Enter your Roll no: <input type="text" value={roll} onChange={(e)=>{setRoll(e.target.value)}} />
            <button onClick={loaddata}> Search</button>
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
export default Search;