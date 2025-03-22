import { useState,useMemo } from "react";
import Second from "./Second";
import Third from "./Third";
import UseCallback from "./UseCallback";
import UseRef from "./UseRef";
import UseRef1 from "./UseRef1";
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
      <br /><hr />
      <Second/>
      <br /><br /><br /><hr />
      <center>
      <Third/>
      </center>
      <br /><br /><br /><hr />
      <center>
      <UseCallback/>
      </center>

      <br /><br /><br /><hr />
      <center>
      <UseRef/>
      </center>

      <br /><br /><br /><hr />
      <center>
      <UseRef1/>
      </center>
     
    </div>
  )
}
export default App;




