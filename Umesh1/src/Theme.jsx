import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeColor } from './ThemeSlice';

const Theme = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.Mythemme.color)
  console.log(data)
  return (
    <>
    <h1>THeme</h1>
    <div style={{height:"300px", width:"300px", backgroundColor:`${data}`}}></div>
    <button onClick={()=>{dispatch(changeColor())}}>change</button>
    </>
  )
}

export default Theme
