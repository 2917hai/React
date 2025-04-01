import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../Images/img1.webp"
import img2 from "../Images/img2.webp"
import img3 from "../Images/img3.webp"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtcart } from '../CartSlice';


const Home=()=>
{

  const dispatch=useDispatch();


  const [mydata,setMydata]=useState([]);

const loaddata=async()=>
{
  let api="http://localhost:3000/product";
  const response=await axios.get(api);
  setMydata(response.data);
}


useEffect(()=>
{
  loaddata();
},[]);

const ans=mydata.map((key)=>
{
  return(
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} height={250} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
         Product for :{key.category}
         <h3> Price : {key.price}</h3>
        
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addtcart({id:key.id,name:key.name,category:key.category, price:key.price, image:key.image,quant:1}))}}>Add to cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )

})

    return(
        <>
        <div style={{marginTop:"100px"}}>
        <Carousel>
      <Carousel.Item>
       <img src={img1} alt="" />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <img src={img2} alt="" />
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        </div>

        <h1>Our premium Products</h1>
        <div id="prodata">
        {ans}
        </div>
        

       
        
        </>
    )
}
export default Home;