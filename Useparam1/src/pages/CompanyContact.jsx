import { use } from "react";
import { useParams } from "react-router-dom";
const CompanyContact=()=>
{
    const {cont}=useParams();
    return(

        <>
        <h1>WEllcome to Company Contact page :{cont} </h1>
        </>
    )
}
export default CompanyContact;