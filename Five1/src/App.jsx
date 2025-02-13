import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/back1.jpg";
import img2 from "./images/back2.jpg";
import img3 from "./images/back4.jpg";
import img4 from "./images/back5.jpg";
import img5 from "./images/back6.jpg";
import img6 from "./images/back7.jpg";
import img7 from "./images/back8.jpg";
import img8 from "./images/back9.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { CDBFooter } from 'cdbreact';
function App() {
  return (
    <>
       <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
        <img src={img1} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img6} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img7} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img8} style={{height:"400px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 style={{display:"flex", gap:"50px"}}>
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width:"300px" }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width:"300px" }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </h1>
   

   
    </>
  )
}

export default App
