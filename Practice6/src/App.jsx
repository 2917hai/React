// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Insert from "./pages/Insert";
// import Display from "./pages/Display";
// import Search from "./pages/Search";
// import Update from "./pages/Update";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Component1 from "./Component1";
// import { useState } from "react";
// const App=()=>
// {
//   const [name, setName]=useState("Umesh");
//   return(
//     <>
//     <center>
//       <h1>My react App page</h1>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="home" element={<Home/>}/>
//         <Route path="insert"element={<Insert/>}/>
//         <Route path="display"element={<Display/>}/>
//         <Route path="search"element={<Search/>}/>
//         <Route path="update"element={<Update/>}/>
//         <Route path="contact"element={<Contact/>}/>
//         <Route path="about"element={<About/>}/>
//         </Route>
//       </Routes>
//       </BrowserRouter>



//       <h1>New Topic</h1>
//       <h1>My react App </h1>
//       <h1>Wellcome to :{name}</h1>
//       <Component1 name={name}/>
//     </center>
//     </>
//   )
// }
// export default  App;
import { useState } from "react";
import Component1 from "./Component1";
const App=()=>
{
  const [user,setUser]=useState("Umesh");
  return(
    <>
    <h1>Wellcome to:{user}</h1>
    <Component1 user={user}/>
    </>
  )
}
export default App;