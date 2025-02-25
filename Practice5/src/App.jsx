import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Update from "./pages/Upadate";
import Search from "./pages/Search";
import Inserrt from "./pages/Insert";
import Display from "./pages/Display";
import Contact from "./pages/Contact";
import About from "./pages/About";
const App=()=>
{
  return(
    <>
    <center>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="insert" element={<Inserrt/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="update" element={<Update/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </center>
    </>
  )
}
export default App;