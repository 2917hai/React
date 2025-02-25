import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../image/dlt.png";
import img2 from "../image/edt.png"
const Update=()=>
    {
        const [mydata, setMydata] = useState([]);
        const loadData=async()=>
        {
            let api="http://localhost:3000/sdudents";
            const response=await axios.get(api);
            setMydata(response.data);
            console.log(response.data);
        }
        useEffect(()=>
            {
                loadData();
            },[]);


    
        const myDelete=async(id)=>{
              let api=`http://localhost:3000/sdudents/${id}`;
              const response=await axios.delete(api);
              loadData();
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
                        <td>
                        <img src={img2} alt="" height="30px" width="30px" />
                        </td>
                        <td>
                        <img src={img1} alt="" height="30px" width="30px" onClick={()=>{myDelete(e.id)}} />
                        </td>
                    </tr>
                    </>
                )
            })
        


        return(
            <>
            <h1>This is update page</h1>
            <table>
                <tr>
                    <th>rollno</th>
                    <th>name</th>
                    <th>course</th>
                    <th>contact</th>
                    <th>city</th>
                    <th>edit</th>
                    <th>delet</th>
                </tr>
                {ans}
            </table>
            </>
        )
    }
    export default  Update;