import { BrowserRouter,Routes,Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Update from "./Pages/Update";
import Contact from "./Pages/Contact";
import Search from "../../Practice2/src/Pages/Search";
const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="contact"element={<Contact/>}/>
      <Route path="search"element={<Search/> }/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;