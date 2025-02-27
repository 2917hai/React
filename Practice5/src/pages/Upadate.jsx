import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../images/dlt.png";
import img2 from "../images/edt.png";
import { Navigate, useNavigate } from "react-router-dom";
const Update=()=>
    {
        const [mydata, setMydata]=useState([]);
        const navigate=useNavigate();
        const loadData=async()=>
        {
            let api="http://localhost:3000/students";
            const response=await axios.get(api);
            setMydata(response.data);
            console.log(response.data);
        }

        useEffect(()=>
            {
                loadData();
            },[])

        const myDelete=async(id)=>
        {
          let api=`http://localhost:3000/students/${id}`
          const response=await axios.delete(api);
          console.log(response.data);
          alert("data removed Succesfully...!!")
          loadData();
        }

       const myEdit=(id)=>
        {
            Navigate(`/editData/${id}`);
            
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
                <a href="#">
                <td>
                    <img src={img1} alt="" height="30px" width="40px" onClick={()=>{myDelete(e.id)}}  />
                </td> 
                </a>
            
             <td>
                <a href="#" onClick={()=>{myEdit(e.id)}}>
                <img src={img2} alt="" height="30px" width="40px"  />
                </a>
                   
             </td>
            
               
            </tr>
            </>
           )
        })

  
        return(
            <>
            <center>
            <h1>This is Update page</h1>
            <table border="2" color="red" bgcolor="green">
                <tr>
                    <th>Roll No</th>
                    <th> Name</th>
                    <th> Course </th>
                    <th> Contact </th>
                    <th> City </th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
               {ans}
            </table>
            </center>
           
            </>
        )
    }
    export default Update;