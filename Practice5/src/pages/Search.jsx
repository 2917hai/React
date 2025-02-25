import { useEffect, useState } from "react";
import axios from "axios";
const Search=()=>
{
   const [roll, setRoll]=useState("");
   const [mydata, setMydata]=useState([]);

   const Submit=async()=>
   {
    let api=`http://localhost:3000/students/?rollno=${roll}`;
    const response=await axios.get(api);
    setMydata(response.data);
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

        return(
            <>
            <center>
            <h1>This is Search page</h1>
            Serch Students : <input type="text" value={roll} onChange={(e)=>{setRoll(e.target.value)}} />
            <button onClick={Submit}>Search</button>
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
    export default Search;