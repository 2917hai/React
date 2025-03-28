import { Link,Outlet} from "react-router-dom";

const Layout=()=>
    {
        return(
        <>
        <h1>Layout page </h1>
       <Link to="home">Home</Link>
       <Link to="about">About</Link>
       <Link to="service">Service</Link>
       <Link to="join">Join</Link>
       <hr/>
       <Outlet/>
       <hr/>
       www.mycompani.com
        </>
        )
    }
    export default Layout;