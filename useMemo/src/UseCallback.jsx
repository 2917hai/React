import { useState } from "react";
const UseCallback=()=>
{
    const [count,setCount]=useState(0);
    const Increment=()=>{

        setCount(count+1);
    }
    const Decrement=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>UseCallback</h1>
            <h1>Count is :{count}</h1>
            <button style={{color:"red"}} onClick={Increment}>Increament</button>
            <button style={{color:"green"}} onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default UseCallback;