import { useParams } from "react-router-dom";
const Companyservice=()=>
    {
        const {comser}=useParams();
        return(
    
            <>
            <h1>WEllcome to Company Service page:{comser} </h1>
            </>
        )
    }
    export default Companyservice;