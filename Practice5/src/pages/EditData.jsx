import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const EditData=()=>
{
    const {id}=useParams();
    const [empData, setEmpData]=useState({});

    const loadData=async()=>
    {
        let api="http://localhost:3000/students";
        const response=await axios.get(api);
        setEmpData(response.data);
        console.log(empData);
    }
    useEffect(()=>
    {
        loadData(); 
    },[])

    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setEmpData(values=>({...values,[name]:value}));
        console.log(empData);
    }

    const handleSubmit=async()=>
    {
     let api=`http://localhost:3000/students/${id}`
     const response=await axios.put(api,empData);
     alert("Record Updated");
    }
    return(
        <>
        <center>
            <h1>EditData page</h1><br /><br />
            Edit rollno <input type="text" name="rollno" value={empData.rollno} onChange={handleInput}/><br /><br />
            Edit Name <input type="text" name="name" value={empData.name} onChange={handleInput} /><br /><br />
            Edit Course <input type="text" name="course" value={empData.course} onChange={handleInput} /><br /><br />
            Edit Contact <input type="text" name="contact" value={empData.contact} onChange={handleInput}/><br /><br />
            Edit City <input type="text" name="city" value={empData.city} onChange={handleInput} /><br /><br />
            <button onClick={handleSubmit}>Save Update..!!</button>
        </center>
        </>
    )
}
export default EditData;