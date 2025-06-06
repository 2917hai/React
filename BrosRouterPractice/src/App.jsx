import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>THis is Home page</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={}>

        </Route>
      </Routes>
      </BrowserRouter>
      <nav>
        <Link to="Home">Home</Link>
      </nav>
    </div>
  )
}

export default App
