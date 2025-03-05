import { useState } from "react";
import { createContext } from "react";
const myContext=createContext();
const ColorContext=({children})=>
{
    const [color, setColor]=useState("red");
    return(
        <>
        <myContext.Provider value={{color,setColor}}>
          {children}
        </myContext.Provider>
      
        </>
    )
}
export default ColorContext;
export {myContext};