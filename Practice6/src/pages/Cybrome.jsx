import { useContext } from "react";
import { colorContext } from "../App";
const Cybrome=()=>
{
    const {color,setColor}=useContext(colorContext);
    return(
        <>
        <h1>hello Cybrome {color}</h1>
        <button onClick={()=>(setColor("Black"))}>click again</button>
        </>
    )
}
export default Cybrome;