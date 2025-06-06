import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate=useNavigate();
    const Goto=()=>{
        navigate('/home')
    }
    const Goto1=()=>{
        navigate('/contact')
    }
  return (
    <div>
      <h1>About page</h1>
      <button onClick={()=>{Goto()}}>GO to Home </button>
      <button onClick={()=>{Goto1()}}> GO to Contact</button>
    </div>
  )
}

export default About
