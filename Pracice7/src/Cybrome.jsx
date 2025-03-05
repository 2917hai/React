import { useContext } from "react";
import { myContext } from "./ColorContext";
const Cybrome=()=>
{
    const {color,setColor}=useContext(myContext);
    return(
        <>
        <h1>wellcome to Cybrome :{color}</h1>
        <button onClick={()=>{setColor("green")}}>Click me </button>
        </>
    )
}
export default Cybrome;