import { Link,Outlet } from "react-router-dom";
const Layout=()=>
(
    <>
        <center>
            <h1>THis is Layout Page</h1>
            <Link to="home">Home</Link>
            <Link to="About">About</Link>
            <Link to="insert">Insert</Link>
            <Link to="display">Display</Link>
            <Link to="search">Search</Link>
            <Link to="update">Update</Link>
            <Link to="contact">Contact</Link>
            <Link to="editData">EditData</Link>
            <br /><hr /><hr />
            <Outlet />
            <br /><hr /><hr />
            <h1>WWW.COMPANY.COM</h1>
        </center>

    </>
)
export default Layout;