import { useContext } from "react";
import { myContext } from "./ColorContext";

const Cybrome=()=>
{
    const {color,setColor}=useContext(myContext);
    return(
        <>
        <h1>Hello Cybrome {color} </h1>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        </>
    )
}
export default Cybrome;