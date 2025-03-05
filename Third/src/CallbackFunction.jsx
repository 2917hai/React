import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
const CallbackFunction =()=> {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState({blue:0, green:0,red:0,yellow:0}); 
    const [arr,setArr]=useState([]);

    const blue=()=>
    {
        setCount1((current)=>{
            return {...current,blue:current.blue+1};
        })
        setArr([""]);
        setArr([...arr,count1.blue]);
    }
    const green=()=>
        {
            setCount1((current)=>{
                return {...current,green:current.green+1};
            })
            setArr([""]);
            setArr([...arr,count1.green]);
        }
        const red=()=>
            {
                setCount1((current)=>{
                    return {...current,red:current.red+1};
                })
                setArr([""]);
                setArr([...arr,count1.red]);
            }
            const yellow=()=>
                {
                    setCount1((current)=>{
                        return {...current,yellow:current.yellow+1};
                    })
                    setArr([""]);
                    setArr([...arr,count1.yellow]);
                }
    const ins=()=>
    {
        setCount((current)=>{
            current=current+1;
            return current;
        })
        setCount((current)=>{
            current=current+1;
            return current;
        })
    }
    const dic=()=>
        {
            setCount((current)=>{
                current=current-1;
                return current;
            })
            setCount((current)=>{
                current=current-1;
                return current;
            })
        }
    return(
       <>
       <h1>{arr}</h1>
       <br /><hr /><hr />
        <button onClick={ins}>Increase</button>
        <h1>{count}</h1>
        <button onClick={dic}>Decrease</button>
        <br /><hr /><hr />
        <h1>Blue count={count1.blue}</h1>
        <button onClick={blue} style={{backgroundColor:"blue"}}>+1</button>
        <h1>green count={count1.green}</h1>
        <button  onClick={green} style={{backgroundColor:"green"}}>+1</button>
        <h1>red count={count1.red}</h1>
        <button  onClick={red} style={{backgroundColor:"red"}}>+1</button>
        <h1>yellow count={count1.yellow}</h1>
        <button  onClick={yellow} style={{backgroundColor:"yellow"}}>+1</button>
    
       </>
           
      
    )}
    export default CallbackFunction;
    