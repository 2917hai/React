import { useState,useMemo } from "react";
import Second from "./Second";
import Third from "./Third";
import UseCallback from "./UseCallback";
import UseRef from "./UseRef";
import UseRef1 from "./UseRef1";
import UseRef2 from "./UseRef2";
import UseReducer from "./UseReducer";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";

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


      <br /><br /><br /><hr />
      <center>
      <UseRef2/>
      </center>


      <br /><br /><br /><hr />
      <center>
      <UseReducer/>
      </center>



      <br /><br /><br /><hr />
      <center>
      <Practice1/>
      </center>



      <br /><br /><br /><hr />
      <center>
      <Practice2/>
      </center>

    
     
    </div>
  )
}
export default App;




