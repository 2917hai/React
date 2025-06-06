import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Topmenu=()=>
{
    return(
        <>
        <div id="topmenu">
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="womens">Womens</Nav.Link>
            <Nav.Link as={Link} to="mens">Men</Nav.Link>
            <Nav.Link as={Link} to="kids">Kids</Nav.Link>
            <Nav.Link as={Link} to="cartdata">Cart</Nav.Link>
            <Nav.Link as={Link} to="ourproduct">Our Product</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>

        </div>
        </>
    )
}
export default Topmenu;