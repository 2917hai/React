import { useState } from "react";
import axios from "axios";
const Search=()=>
    {
        const [empno,setEmpno]=useState("");
        const [mydata, setMydata]=useState([]);

        const Submit=async()=>
        {
            let api=`http://localhost:3000/sdudents/?rollno=${empno}`;
            const response=await axios.get(api);
            setMydata(response.data);

        }

        const res=mydata.map((e)=>
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
            <h1>This is search page</h1>
            Search Students <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
            <button onClick={Submit}>Search</button>

            <table>
                <tr>
                    <th>Roll no </th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Contact</th>
                    <th>City</th>
                </tr>
                {res}
            </table>
            </center>
          
            </>
        )
    }
    export default  Search;