import { useState } from "react";
const App=()=>
{
  const [input, setInput]=useState({});
  const handeInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }
  
  const handleSubmit=()=>
  {
    console.log(input);
  }

  const [myData, setMydata]=useState([]);
  const Mydata=()=>
  {
    
  }
  return(
    <>
    <center>
      <h1 style={{color:"red",fontWeight:"bold"}}>Application Form</h1>
      <br /><br />
       Enter Name : <input type="text" name="name" onChange={handeInput}/>
       <br /><br />
       Enter city : <input type="text"  name="city" onChange={handeInput} />
       <br /><br />
       Enter Fees : <input type="text"  name="fees" onChange={handeInput}/>
       <br /><br />
       Enter roll: <input type="text" name="roll" onChange={handeInput}/>
       <button onClick={handleSubmit}>Submit</button>
    </center>
    </>
  )
}
export default App;












































// import { useEffect } from 'react';
// import { useState } from 'react'
// function App() {
//   const [count, setCount]=useState(0);
//   useEffect(()=>
//   {
//     setTimeout(()=>{
//       setCount(count+1)
//     },2000)
   
//   },)
//   return (
//     <>
//     <center>
//     <h1 style={{color:"red", fontWeight:"bold"}}>Wellcome to my React App</h1>
//     <h1>My count is {count}</h1>
//     </center>
    
//     </>
//   )
// }

// export default App;
