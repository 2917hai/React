import { useState,useMemo } from "react";
const Second=()=>
{
    const [num,setNum]=useState(0);
    const [subject,setSubject]=useState("");
    const myVal=useMemo(()=>
    {
       for(var i=0;i<1000000000;i++)
       {}
       return num*2;
},[num]);
    
    return(
        <>
        <h1>Second Component</h1>
       Select number:<input type="number" value={num} onChange={(e)=>{setNum(parseInt(e.target.value))}}/>
       Enter subject:<input type="text" value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
       <br />
       My count :{myVal}
        </>
    )
}
export default Second;