import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Layout from './Layout'
const App = () => {
  return (
    <div>
      <nav>

      </nav>
    
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       </Route>
       
      </Routes>
      </BrowserRouter>



      <br /><br />
    
    </div>
  )
}

export default App
