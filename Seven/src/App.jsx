
import { useState } from "react";
const App=()=> {
  const [data, setData]=useState("Bhopal");
  const [color, setColor]=useState("red");
  const [count, setCount]=useState(0);
  const myval=()=>
  {
    setData("Indore")
  }
 const decr=()=>
  {
    if(count<=0)
    {
      alert("you can not decrese")
    }
    else
    {
      setCount(count-1);
    }
  }
  return (
    <>
    <h1 style={{color:color}}> WEllcome to : {data} {color}</h1>
    <button onClick={myval}>click me </button>
    <button onClick={()=>{setData("Rewa")}}>click me again </button>
    <button onClick={()=>{setColor("green")}}>green </button>
    <button onClick={()=>{setColor("yellow")}}>yellow</button>
    <button onClick={()=>{setColor("orange")}}>orange  </button>


    <br /><br />

    {/*            Counter program             */}
    <center>

    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <h1>My count is : {count}</h1>
    <button onClick={decr}> Decrement</button>
    
    </center>
    

    </>
  )
}
export default App;
