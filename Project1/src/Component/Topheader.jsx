import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import logo from "../Images/logo.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Topheader=()=>
{
const navigate=useNavigate();


    const product=useSelector(state=>state.mycart.cart);
    console.log(product);
    const prolength=product.length;
    return(
        <>
        <div  id="topheader">
          <img src={logo} alt="" width={150} height={40} style={{borderRadius:"20px", marginLeft:"20px" ,marginTop:"5px"}} />

          <span style={{display:"flex",gap:"20px",marginLeft:"70px"}}>
          <input placeholder="Search for Products, Brand and More " type="text" style={{borderRadius:"20px",height:"40px" ,marginTop:"5px",width:"400px",marginLeft:"50px",padding:"10px"}}/> 
          <FaSearch style={{color:"white",fontSize:"20px", fontWeight:"bolder",marginTop:"15px"}}/> 
          </span>
       
         <span style={{display:"flex",gap:"40px" ,marginLeft:"350px"}}>
            <a href="#">
            <p style={{color:"white", fontWeight:"bold", marginTop:"15px"}} >Your Oreder</p>
            </a>
          
      
        <FaCartArrowDown style={{color:"white",fontSize:"20px", fontWeight:"bolder",marginTop:"20px"}}  />
       
       
        <CgProfile style={{color:"white",fontSize:"20px", fontWeight:"bolder",marginTop:"20px"}} />
        <IoMdLogOut  style={{color:"white",fontSize:"20px", fontWeight:"bolder",marginTop:"20px"}}  />
         </span>
<a href="#" onClick={()=>{navigate("/Cartdata")}}>
<span style={{color:"white",fontSize:"10px", fontWeight:"bolder",marginTop:"15px",height:"20px", width:"20px",borderRadius:"50%", backgroundColor:"blue",padding:"4px",position:"absolute",right:"138px",paddingLeft:"8px"}} >
        {prolength}
        </span>
</a>
        
        

          

        </div>
        </>
    )
}
export default Topheader;