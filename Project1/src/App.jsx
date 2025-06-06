import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import Cartdata from "./Component/Cartdata";
import OurProduct from "./Component/OurProduct";
import Mens from "./Component/Mens";
import Womens from "./Component/Womens";
import Kids from "./Component/Kids";
import Search from "./Component/Search";
import OrderPlace from "./Component/OrderPlace";
import Successfull from "./Component/Successfull";
const App=()=>
{
  return(
    <> 
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="cartdata" element={<Cartdata/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="ourproduct" element={<OurProduct/>}/>
    <Route path="product/:id" element={<OurProduct/>}/>
    <Route path="mens" element={<Mens/>}/>
    <Route path="womens" element={<Womens/>}/>
    <Route path="kids" element={<Kids/>}/>
    <Route path="cartdata" element={<Cartdata/>}/>
    <Route path="search/:search"element={<Search/>}/>
    <Route path="search"element={<Search/>}/>
    <Route path="orderplace"element={<OrderPlace/>}/>
    <Route path="successfull" element={<Successfull/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;