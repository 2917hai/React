import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import Cartdata from "./Component/Cartdata";
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

    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;