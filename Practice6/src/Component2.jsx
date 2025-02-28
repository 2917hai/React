import Component3 from "./Component3";
import { useContext } from "react";
import { myContext } from "./App";
const Component2=()=>
    {
        const {user}=useContext(myContext);
        return(
            <>
            <h1>Components2 {user}</h1>
            <Component3  />
            </>
        )
    }
    export default Component2;