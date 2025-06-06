import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtcart } from '../CartSlice';
import axios from "axios";
const OurProduct = () => {
    const { id } = useParams();
    const [prodata,setProdata]=useState({});
    const dispatch=useDispatch();
    const loaddata = async () => 
    {
        let api = `http://localhost:3000/product/${id}`;
        const response = await axios.get(api);
        setProdata(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        loaddata();
    }, []);

  return (
  <>

  <h1 style={{marginTop:"100px"}}>Our Premium product..!</h1>
  <div className="mainbox">
    <div className="img">
        <img src={prodata.image} alt="Product" height="300px" width={300} />
    </div>
    <div className="details" style={{margin:"10px", }}>
        <h1 style={{fontSize:"18px", lineHeight:"50px"}}>Product Name:{prodata.name}</h1>
        <h3 style={{fontSize:"16px",lineHeight:"20px",marginLeft:"20px"}}>This Product for : {prodata.category}</h3>
        <h3 style={{fontSize:"20px",lineHeight:"50px", fontWeight:"bolder",marginLeft:"20px", color:"blue"}}>Price : {prodata.price}</h3>
        <Button style={{marginLeft:"20px"}} variant="primary" onClick={()=>{dispatch(addtcart({id:prodata.id,name:prodata.name,category:prodata.category, price:prodata.price, image:prodata.image,quant:1}))}}>Add to cart</Button>

    </div>
  </div>
    

 
  </>
  )
}
export default OurProduct;
