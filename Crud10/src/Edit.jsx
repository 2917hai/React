import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Edit = () => {
    const { id } = useParams()

    const [data,setData]=useState([]);
    const [inputData,setInputData]=useState({});
    const loadData=async () => 
        {
         let api=`http://localhost:3000/student/${id}`;
            const response=await axios.get(api);
            setData(response.data);
            console.log(data);
        }

        useEffect(()=>
        {
            loadData();
        }
        ,[]);

        const SaveChange=async ()=>
        {
            let api=`http://localhost:3000/student/${id}`;
            const response=await axios.put(api,inputData);
            console.log(response.data);
            alert("Data Updated Successfully");
        }

        const handleData=(key)=>
        {
           let name=key.target.name;
              let value=key.target.value;
                setInputData((values=>({...values,[name]:value})));
                console.log(inputData);
        }

  return (
    <div>
       <center>
        <h1>this is edit page</h1>
        Enter Name : <input type="text" placeholder='Enter Name' name='name'  onChange={handleData}   /> <br /><br />
        Enter City: <input type="text" placeholder='Enter City' name='city' onChange={handleData}   /> <br /><br />
        Enter Course: <input type="text" placeholder='Enter Course' name='course' onChange={handleData}   /> <br /><br />
        Enter Roll: <input type="text" placeholder='Enter Roll' name='roll' onChange={handleData}   /> <br /><br />
        <button onClick={SaveChange}>Save Changes..!</button>
       </center>
    </div>
  )
}

export default Edit
