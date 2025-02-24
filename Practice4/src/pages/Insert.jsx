import { useState } from "react";
import axios from "axios";
const Insert=()=>
{
    const [input, setInput]=useState({});
    const handleInput=(e)=>
    {
      let name=e.target.name;
      let value=e.target.value;
      setInput((values)=>({...values,[name]:value}));
      console.log(input);
    }
    const handleSubmit=async()=>
    {
        let api="http://localhost:3000/sdudents";
        const response=await axios.post(api,input);
        console.log(response.data);
        alert("data Recieved ...")
    }

    return(
        <>
        <center>
        <h1>Application form</h1>
            Enter Roll no <input type="text" name="rollno" onChange={handleInput}/><br /><hr />
            Enter Name <input type="text" name="name" onChange={handleInput}/> <br /><hr />
            Enter Course <input type="text"  name="course" onChange={handleInput}/><br /> <hr />
            Enter Contact <input type="text" name="contact" onChange={handleInput} /><br /><hr />
            Enter City <input type="text" name="city" onChange={handleInput} /><br /><hr />
                        <button onClick={handleSubmit}>Submit</button>
        </center>
        </>
    )
}
export default Insert;








































// import { useState } from "react";
// import axios from "axios";
// const Insert=()=>
//     {
//         const [input, setInput]=useState({});
//         const handleInput=(e)=>
//         {
//             let name=e.target.name;
//             let value=e.target.value;
//             setInput(values=>({...values, [name]:value}));
//             console.log(input);
//         }

//         const handleSubmit=async()=>
//         {
//             let api="http://localhost:3000/sdudents";
//             const response=await axios.post(api,input);
//             console.log(response);
//             alert("data save !!!")
//         }
//         return(
//             <>
//            <center>
//             <h1>Application form</h1>
//             Enter Roll no <input type="text" name="rollno" onChange={handleInput}/><br /><hr />
//             Enter Name <input type="text" name="name" onChange={handleInput}/> <br /><hr />
//             Enter Course <input type="text"  name="course" onChange={handleInput}/><br /> <hr />
//             Enter Contact <input type="text" name="contact" onChange={handleInput} /><br /><hr />
//             Enter City <input type="text" name="city" onChange={handleInput} /><br /><hr />
//             <button onClick={handleSubmit}>Submit</button>
//            </center>
//             </>
//         )
//     }
//     export default  Insert;