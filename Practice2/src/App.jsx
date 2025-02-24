import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";

import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Home from "./Pages/Home";

const App=()=>{



  return( 
    <>

<BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="Home" element={<Home/>} />
      <Route path="Display" element={<Display/>} />
      <Route path="Insert" element={<Insert/>} />

       
    </Route>
    </Routes>
    
    </BrowserRouter>
   
    </>
  )
}
export default App;