import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Service from "./pages/Service";
import Mycompany from "./Mycompany";
import Myjoining from "./pages/Myjoining";
import Homedata from "./pages/Homedata";
const App=()=>
{
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<About/>}/>
            <Route path="hoome" element={<Home/>}/>
            <Route path="homedata/:mydata" element={<Homedata/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="join" element={<Join/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="mycompany/:mycomp" element={<Mycompany/>}/>
            <Route path="myjoining/:id" element={<Myjoining/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;