import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Counter from './Counter'
import Theme from './Theme'
import Todo from './Todo'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="theme" element={<Theme/>}/>
        <Route path="todo" element={<Todo/>}/>

</Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
