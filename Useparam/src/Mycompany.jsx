import { useParams } from "react-router-dom";
const Mycompany=()=>
{
  
        const {mycomp}=useParams();
    
    return(
        <>
        <h1>WEllcome to My company is :{mycomp}</h1></>
    )
}
export default Mycompany;