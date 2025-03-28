import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import CompanyContact from "./pages/CompanyContact";
import CompanyAbout from "./pages/CompanyAbout";
import Companyservice from "./pages/Companyservice";
import CompanyHome from "./pages/CompanyHome";

const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="CompanyContact/:cont" element={<CompanyContact/>}/>
      <Route path="CompanyAbout/:data" element={<CompanyAbout/>}/>
      <Route path="Companyservice/:comser" element={<Companyservice/>}/>
      <Route path="CompanyHome/:homedatahai" element={<CompanyHome/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;