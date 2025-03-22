import { useRef } from "react";
const useRef1=()=>
{
    const myRef=useRef("");
    const type=()=>
    {
        myRef.current.innerHTML="Cybrome";
        myRef.current.style.padding="100px";
        myRef.current.style.fontSize="40px";
    }
    const gola=()=>
    {
        myRef.current.style.borderRadius="50%";
    }
    const bg=()=>
    {
        myRef.current.style.backgroundColor="green";
        myRef.current.style.border="2px solid red";

    }
    return(
       <>
       <button onClick={type}>1</button>
       <button onClick={gola}>2</button>
       <button onClick={bg}>3</button>
       <div ref={myRef}  style={{height:"200px", width:"300px", border:"2px solid black"}}>
         <h1 ref={myRef}> </h1>
       </div>
       </>
    )
}
export default useRef1;
