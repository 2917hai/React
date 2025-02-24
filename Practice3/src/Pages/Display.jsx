
import { useState,useEffect } from "react"
import axios from "axios"
const Display=()=>{
    const [myData, setMyData]=useState([]);

    const loadData=async()=>
    {
        let api="http://localhost:3000/students";
        const response= await axios.get(api);
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
                    <td>{key.empno}</td>
                    <td>{key.name}</td>
                    <td>{key.salary}</td>
                    <td>{key.designation}</td>
                    <td>{key.fees}</td>
                </tr>
                </>
            )
        })
  return (
 <>
 <table>
    <tr>
        <th>Emp no</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Designation</th>
        <th>Fees</th>
    </tr>
    {ans }
 </table>
 </>
  )
}

export default Display
