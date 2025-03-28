import { useParams } from "react-router-dom";
const Myjoining=()=>
{
   
        const{id}=useParams();
   
    return(
        <>
        <h1>My company Joining no īs :{id}</h1>
        </>
    )
}
export default Myjoining;