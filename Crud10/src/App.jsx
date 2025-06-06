import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Insert from './Insert'
import Update from './Update'
import Search from './Search'
import Display from './Display'
import Edit from './Edit'
const App = () => {
  return (
    <div>
      <h1>this is crud practice component</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='home' element={<Home/>}/>
         <Route path='insert' element={<Insert/>}/>
          <Route path='update' element={<Update/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='display' element={<Display/>}/>
          <Route path='Edit/:id' element={<Edit/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
