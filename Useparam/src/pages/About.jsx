import { useNavigate } from "react-router-dom";
const compname="CYBROM";
const About=()=>
    {
        const navigate=useNavigate();
        const myCompany=()=>
        {
            navigate(`/mycompany/${compname}`);
        }
        return(
        <>
        <h1>About page </h1>
        <button onClick={myCompany}>Company name:</button>
        </>
        )
    }
    export default About;