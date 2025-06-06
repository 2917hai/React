import React from 'react'
import { useParams } from 'react-router-dom'
const Homedata = () => {
    const {mydata}=useParams();
  return (
    <div>
      <h1>Home data of the emp :{mydata}</h1>
    </div>
  )
}

export default Homedata
