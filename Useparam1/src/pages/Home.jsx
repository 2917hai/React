import { useNavigate } from "react-router-dom";
const Home=()=>
{   const homedatahai="Umesh Kumar Yadav";
    const navigate=useNavigate();
    const hmdata=()=>
    {
        navigate(`/CompanyHome/${homedatahai}`);
    }
    return(
        <>
        <h1>Wellcome to Home page </h1>
        <button onClick={hmdata}>Home data</button>
        </>
    )
}
export default Home;