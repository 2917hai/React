import { useNavigate } from "react-router-dom";
const Service=()=>
{
    const Navigate=useNavigate();
    const serdata="This is provided web based services";
    const servis=()=>
    {
        Navigate(`/Companyservice/${serdata}`);
    }

    return(
        <>
        <h1>Wellcome to Service page </h1>
        <button onClick={servis}>Show Services provided By Company</button>
        </>
    )
}
export default Service;