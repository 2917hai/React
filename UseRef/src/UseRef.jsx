import { useRef } from "react";
const UseRef=()=>
{
    const myRef=useRef("");
    const changeColor=()=>
    {
        myRef.current.style.backgroundColor="red";
     
    }
    return(
        <>
        <h1>Useref hook component </h1>
        <button onClick={changeColor}> Change color</button>
        <div ref={myRef} style={{height:"300px", width:"300px", border:"1px solid black"}}></div>
        </>
    )
}
export default UseRef;