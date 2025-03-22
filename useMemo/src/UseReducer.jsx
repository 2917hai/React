import {  memo, useMemo, useReducer } from "react";


const Usememo=()=>
{
   
   const sum=()=>{
    let i=0;
    for(let i=0;i<1000000000;i++){};
    return i;

   }
 const total= useMemo(()=>
{
    return sum();
},[]);
    
};



const UseReducer=()=>
   {
    const Myreducerr=(state,action)=>
    {
        if(action.type==="INCREMENT")
        {
            return state+1;
        }
        else if(action.type==="DECREMENT")
        {
            return state-1;
        }
 }
 const [count,dispatch]=useReducer(Myreducerr,0);
    return(
        <>
        <h1>UseREducer component for practice </h1>
        <Usememo />
        <h1>Count is:{count}</h1>
        <button onClick={()=>{dispatch({type:"INCREMENT"})}}style={{color:"red"}}>INcrement</button>
        <button onClick={()=>{dispatch({type:"DECREMENT"})}} style={{color:"green"}}>Decrement</button>
        </>
    )
}
export default UseReducer;