import { useState,useMemo } from "react";
const App=()=>
{
  const [count,setCount]=useState(0);
  const [mysub,setMysub]=useState(100);
  const Multiplication=useMemo(()=>
  {
    console.log("Multiplication");
    return count*2;
  }
  ,[count]);
  return (
    <div>
      <h1>Multiplication is :{Multiplication}</h1>
      <button onClick={()=>{setCount(count+1)}}>Addition</button>
      <h1>Additon:{count}</h1>
      <button onClick={()=>{setMysub(mysub-1)}}>Substraction</button>
      <h1>Substraction:{mysub}</h1>
    </div>
  )
}
export default App;