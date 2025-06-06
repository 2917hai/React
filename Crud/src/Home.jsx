
import Display from "./Display";
import { Navigate, useNavigate } from "react-router-dom";
const Home=()=>
    {
        const navigate=useNavigate();
        const Goto=()=>
        {
            navigate('/Display')
        }
        return(
            <>
            <h1>Wellcome to Home page </h1>
            <button onClick={Goto}>Goto Display</button>
            </>
        )
    }
    export default Home;