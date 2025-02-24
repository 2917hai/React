
import { useState } from "react"
import axios from "axios"
const Search = () => {
  const [empno, setEmpno]=useState("");
  const [mydata, setMydata]=useState([]);

  const handleSubmit=async()=>
  {
    let api=`http://localhost:3000/students/?empno=${empno}`;
    const response=await axios.get(api);
    setMydata(response.data);
  }

  const ans=mydata.map((key)=>
  {
    return(
    <>
    <tr>
      <td> {key.empno}</td>
      <td> {key.name}</td>
      <td> {key.designation}</td>
      <td> {key.salary}</td>
      <td> {key.fees}</td>
    </tr>
    </>
  )})
   
  return (
   <>
   <h1>Search Page</h1>
   Search : <input type="text" value={empno} onChange={(e)=>(setEmpno(e.target.value))}/>
   <button onClick={handleSubmit}>Search</button>
   <table>
    <tr>
        <th>Emp no</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>fees</th>
    </tr>
  {ans}
   </table>
   </>
  )
}

export default Search
