import { Link,Outlet } from "react-router-dom";
const Layout=()=>
    {
        return(
            <>
            <center>
                <h1>Layout Page</h1>
                <Link to="home">Home</Link>
                <Link to="insert">Insert</Link>
                <Link to="display">Display</Link>
                <Link to="search">Search</Link>
                <Link to="update">Upadate</Link>
                <Link to="contact">Contact</Link>
                <Link to="about">About</Link>
                <br /><hr /><hr />
                <Outlet/>
                <br /><hr /><hr />
                <h1>WWW.company.com</h1>
            </center>
            </>
        )
    }
    export default Layout;