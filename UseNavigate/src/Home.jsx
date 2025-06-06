import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const Goto = () => {
        navigate('/about')
    }
    const Goto1 = () => {
        navigate('/contact')
    }
  const GoBack=()=>
  {
    navigate(-1)
  }
  return (
    <div>
        
      
      <h1>HOme page</h1>
      <button onClick={()=>{Goto()}}>GO-To-About Page</button>
      <button onClick={()=>{Goto1()}}>GO-To-Contact Page</button>
      <button onClick={()=>{GoBack()}}>Go back..!</button>
    </div>
  )
}

export default Home
