import { useNavigate } from "react-router-dom";
const myid=12345;
const Join=()=>
{
    const navigate=useNavigate();
    const myjoin=()=>
    {
        navigate(`/myjoining/${myid}`);
    }
    return(
    <>
    <h1>Join page </h1>
    <button onClick={myjoin}>Join id</button>
    </>
    ) 
}
export default Join;