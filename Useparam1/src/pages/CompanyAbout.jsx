import { useParams } from "react-router-dom";
const CompanyAbout=()=>
    {
        const {data}=useParams();
        return(
    
            <>
            <h1>WEllcome to Company About page: {data} </h1>
            </>
        )
    }
    export default CompanyAbout;