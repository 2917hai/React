
import { Link,Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <nav  style={{display:"flex",gap:"200px"}}>
      <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <br /><br />
      <hr />
      <h1>This is Usenavigate practice component</h1>
      <h1>Layout page</h1>
      <Outlet/>
      <hr />
        <br /><br />

    </div>
  )
}

export default Layout
