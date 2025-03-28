import { Outlet } from "react-router-dom";
import Topheader from "./Component/Topheader";
import Topmenu from "./Component/Topmenu";
import Footer from "./Component/Footer";
const Layout=()=>
{
    return(
        <>
        <Topheader/>
        <Topmenu/>
        <Outlet/>
        {/* <Footer/> */}
        
        </>
    )
}
export default Layout;