import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home=()=>
    {  
        const mydata="0191AL211180";
        const navigate=useNavigate();
        const data1=()=>
        {
            navigate(`/Homedata/${mydata}`)
        }
        return(
        <>
        <h1>Home page </h1>
        <Link to="/About">Chalo</Link>
        <button onClick={()=>{data1()}}>Home page data of emp</button>

        </>
        ) 
    }
    export default Home;