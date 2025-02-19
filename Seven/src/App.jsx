// import { useEffect, useState } from "react";
// const App=()=>
// {
//   const [count, setCount]=useState(0);
//   const [mult, setMult]=useState(0);

//   useEffect(()=>{
//     setMult(count*2)
//   })
//   return(
//     <>
//     <h1>My Count is :{count} </h1>
//     <h1>My Multiplication is: {mult} </h1>
//     <button onClick={()=>{setCount(count+1)}}>Click me</button>
//     </>
//   )
// }
// export default App;


















// import { useState } from "react"
// const App=()=>
// {
//   const [city, setCity]=useState("");
//   const [salary, setSalary]=useState("");
//   const [emp, setEmp]=useState("");
//   const [name,setName]=useState("");

// const SubmitKaro=()=>
// {
//   console.log({Name:name, City:city, Salary:salary, Emp:emp})
// }

//   return(
//     <>
//     <center>
//      <h1>Application Form</h1>
//      Enter Your Name: <input type="text" value={name} onChange={(e)=>{(e.target.value)}} />
//      Enter your City: <input type="text" value={city} onChange={(e)=>{(e.target.value)}}/>
//      Enter your salary <input type="text" value={salary} onChange={(e)=>{(e.target.value)}}/>
//      Enter your emp <input type="text" value={emp} onChange={(e)=>{(e.target.value)}}/>
//      <button onClick={SubmitKaro}>Submit</button>
//     </center>
//     </>
//   )
// }
// export default App;
















//  import { useEffect, useState } from "react";
//  const App=()=>
//  {
//  const [count, setCount]=useState(0)
//  const [mult, setMult]=useState(0)
//  useEffect(()=>{
//   // setTimeout(()=>{
//   //   setCount(count+1)
//   setMult(count*2)
//  },[count])
//   return(
//     <>
//     <h1>My Count is : {count} </h1>
//     <h1>Multiplication is {mult}</h1>
//     <button onClick={()=>{setCount(count+1)}}>click me </button>
//     </>
//   )
// }
//  export default App;























// import { useState } from "react";
// const App=()=> {
//   const [data, setData]=useState("Bhopal");
//   const [color, setColor]=useState("red");
//   const [count, setCount]=useState(0);
//   const myval=()=>
//   {
//     setData("Indore")
//   }
//  const decr=()=>
//   {
//     if(count<=0)
//     {
//       alert("you can not decrese")
//     }
//     else
//     {
//       setCount(count-1);
//     }
//   }
//   return (
//     <>
//     <h1 style={{color:color}}> WEllcome to : {data} {color}</h1>
//     <button onClick={myval}>click me </button>
//     <button onClick={()=>{setData("Rewa")}}>click me again </button>
//     <button onClick={()=>{setColor("green")}}>green </button>
//     <button onClick={()=>{setColor("yellow")}}>yellow</button>
//     <button onClick={()=>{setColor("orange")}}>orange  </button>


//     <br /><br />

//     {/*            Counter program             */}
//     <center>

//     <button onClick={()=>{setCount(count+1)}}>Increment</button>
//     <h1>My count is : {count}</h1>
//     <button onClick={decr} > Decrement</button>

//     </center>
    

//     </>
//   )
// }
// export default App;
