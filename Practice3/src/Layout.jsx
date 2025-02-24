import { Link,Outlet } from "react-router-dom";
const Layout=()=>
{
    return(
        <>
      <Link to="home">Home</Link>
      <Link to="insert">Insert</Link>
      <Link to="display">Display</Link>
      <Link to="update">Update</Link>
      <Link to="contact">Contact</Link>
      <Link to="search">Search</Link>
        <br /><hr />
        <Outlet/>
        <br /><hr />
        www.react.com
        </>
    )
}
export default Layout;