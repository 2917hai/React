import { useContext } from "react";
import { myContext } from "./App";
const Component5=()=>
    {
        const {user}=useContext(myContext);
        return(
            <>
            <h1>Components5</h1>
            <h1>Wellcome to :{user}</h1>
            </>
        )
    }
    export default Component5;