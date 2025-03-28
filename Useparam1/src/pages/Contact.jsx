import { useNavigate } from "react-router-dom";
const Contact=()=>
    {
        const cont=7803869841;
        const navigate=useNavigate();
        const contactdetails=()=>
        {
            navigate(`/CompanyContact/${cont}`)
        }
        return(
            <>
            <h1>Wellcome to Contact page </h1>
            <button onClick={contactdetails}>Show Company Contact details</button>
            </>
        )
    }
    export default Contact;