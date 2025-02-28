import Cybrome from "./Cybrome";
import { useContext } from "react";
import { colorContext } from "../App";
const Bhopal=()=>
    {
        const {color,setColor}=useContext(colorContext);
        return(
            <>
            <h1>hello Bhopal {color}</h1>
            <button onClick={()=>(setColor("pink"))}>click me</button>
            <Cybrome/>
            </>
        )
    }
    export default Bhopal;