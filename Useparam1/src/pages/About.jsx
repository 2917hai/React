import { useNavigate } from "react-router-dom";
const About=()=>
    {
        const data="This is web designer webpage ";
        const Navigate=useNavigate();
        const ComAbout=()=>
        {
            Navigate(`/CompanyAbout/${data}`)
        }

        return(
            <>
            <h1>Wellcome toAbout page </h1>
            <button onClick={ComAbout}>Show Company About</button>
            </>
        )
    }
    export default About;