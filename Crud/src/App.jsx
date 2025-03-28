import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Search from "./Search";
import Update from "./Update";
const App=()=>
{
 
  return(
    <>
    <center>
    <h1>Wellcome to Mydata page </h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </center>
    </>
  )
}
export default App;