import { Link,Outlet } from "react-router-dom";
const Layout=()=>
(
    <>
        <center>
            <h1>THis is Layout Page</h1>
            <Link to="counter">Counter</Link>
            <Link to="theme">Theme</Link>
            <Link to="todo">Todo</Link>
            <br /><hr /><hr />
            <Outlet />
            <br /><hr /><hr />
        </center>

    </>
)
export default Layout;