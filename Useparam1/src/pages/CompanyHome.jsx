import { useParams } from "react-router-dom";
const CompanyHome=()=>
{
    const {homedatahai}=useParams();
    return(
        <>
        <h1>Company home data is :{homedatahai}</h1>
        </>
    )
}
export default CompanyHome;