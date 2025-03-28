import { Link,Outlet } from "react-router-dom";
const Layout=()=>
{
    return(
        <>
        <center>
        <div style={{display:"flex", gap:"200px", fontSize:"25px", fontWeight:"bolder"}}>
        <Link style={{marginLeft:"100px"}} to="home">Home</Link>
        <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
        <Link to="search">Search</Link>
        <Link to="update">Update</Link>
        </div>
      
        <br /><br /><hr /><hr />
        <Outlet/>
        <br /><hr /><hr />
        wwww.company.com Bhopal
        </center>
      
        </>
    )
}
export default Layout;