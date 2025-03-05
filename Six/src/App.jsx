
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
const App=()=> {

  return (
    <>
    <h1>Wellcome to my react App</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
     <Route path="contact" element={<Contact/>}/>
     <Route path="about" element={<About/>}/>
     <Route path="home" element={<Home/>}/>
     <Route path="*" element={<Nopage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
