import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { changeColor, handleSubmit,Increase,Decrease } from "./ColorSlice";


const App=()=>
{
  const [input,setInput]=useState({});

//   const [count,setCount]=useState();
  const countdata=useSelector((state)=>state.color.count);
  console.log(countdata);


  const ans=useSelector((state)=>
  {
    return state.details;
  });
  
 
  



  const handleInput=(key)=>
  {
    let name=key.target.name;
    let value=key.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);
  }

 
  

    const data=useSelector((state)=>state.color.value);
    const dispatch=useDispatch();
   
  return (
  <>
  <center>
  <h1>Wellcome to my ColorSLice Practice page </h1><br /><br /><hr />
  <div style={{height:"200px", width:"200px", backgroundColor:`${data}`, border:"2px solid black"}}></div>
  <br /><br /><hr />

<button onClick={()=>{dispatch(changeColor())}}>Click me </button>




<h1>Students data Form </h1>
Enter Your Name: <input type="text" name="name" onChange={handleInput} />
<br /><br />
Enter Your Roll: <input type="text" name="roll" onChange={handleInput} />
<br /><br />
Enter Your City: <input type="text" name="city" onChange={handleInput} />
<br /><br />
Enter Your Course: <input type="text" name="course" onChange={handleInput}/>
<br /><br />
<button onClick={()=>{dispatch(handleSubmit(input))}}>Add data..!</button>
<br /><br />
<button >Display data</button>
<br /><br />
<hr /><hr />



<h1>Counter Program --</h1>
<br /><br />
<button style={{backgroundColor:"green"}} onClick={()=>{dispatch(Increase())}}>Increase</button> 
<br /><br />
<h1>Your Cunter value is :{countdata}</h1>
<br /><br />
<button style={{backgroundColor:"red"}} onClick={()=>{dispatch(Decrease())}}>Decrease</button>

 </center>
  
  </>
  )
}

export default App
