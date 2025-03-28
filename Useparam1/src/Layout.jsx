import { Link,Outlet } from "react-router-dom";
const Layout=()=>
{
    return(
        <>
        <center>
        WEllcome to My React app page 
        <br /><hr />
        <div style={{display:"flex", gap:"250px", fontSize:"30px", fontWeight:"bold"}}>
        <Link style={{marginLeft:"50px"}} to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="service">Service</Link>
        </div>
      
        <br /><br /><hr /><hr />
        <Outlet/>
        <br /><br />
        <hr /><hr />
        www.myreactwebpage.company.com
        </center>
        </>
        
    )
}
export default Layout;