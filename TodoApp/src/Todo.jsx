import { useState } from "react";
const TOdo=()=>{
    const [data,setData]=useState(["first"]);
    const [todo,setTodo]=useState("");
    const addData=()=>
    {
       setData([...data,todo]);
    }; 
    return(
        <>
        <h1>This is todo App page</h1>
        <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button onClick={addData}>Add</button>
        <h1>here your data</h1>
        <ol>
            {
              data.map((e)=>(
                <li>{e}</li>
              ))
            }
          
        </ol>
        </>
    )
}
export default TOdo;