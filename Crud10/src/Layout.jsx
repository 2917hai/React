import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <span style={{display:"flex",gap:"200px",margin:"20px"}}>
        <Link to="home">Home</Link>
      <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
        <Link to="search">Search</Link>
        <Link to="update">Update</Link>
        </span>
        <br /><br />
        <hr />
        <Outlet/>
        <hr />
    
    </div>
  )
}

export default Layout
