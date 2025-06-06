
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../CartSlice';
import { useNavigate } from 'react-router-dom';


const OrderPlace = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const loadData=useSelector(state=>state.mycart.cart);
    let no=0;
    let netamount=0;
      const ans=loadData.map((key)=>
        {
            no++;
          netamount+=key.price*key.quant;
            return(
                <>
                <tr>
                    <td>{no}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><img src={key.image}  alt="" height="50" width="50" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>{key.name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>{key.category}&nbsp;&nbsp;&nbsp;</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{key.price}</td>
                  
                </tr>
                </>
            )
        })


   



    const [addata,setAddata]=useState({});
    const [btn,setBtn]=useState(true);
    

    const handledata=(e)=>
    {
      let name=e.target.name;
      let value=e.target.value;
      setAddata(values=>({...values,[name]:value}))
      console.log(addata);

    }


    const Saveadd=()=>
    {
     setBtn(false);
     console.log(btn)
      alert("Your Delivery address Save Successfully....!");
    
    }



    const Done=()=>
    {
      dispatch(deleteOrder());
      navigate("/Successfull");
      
      
    }


  return (
   
    <div>
      <center>
      {btn==1? <div className="data">
        <h1 style={{marginTop:"10px"}}>
            Fill Product delivery Address
        </h1>
        Enter Name: <input type="text" placeholder='Enter Your name' name='name' onChange={handledata} />  Enter Contact: <input type="text"  placeholder='Enter Your Contact'name='contact' onChange={handledata} />
        <br /><br />
        Enter Email: <input type="text" placeholder='Enter Your Email'name='email' onChange={handledata} /> Enter Pin code: <input type="text" placeholder='Enter Your Pin'name='pin' onChange={handledata} />
        <br /><br />
        Enter City : <input type="text"  placeholder='Enter Your City'name='city' onChange={handledata} /> Enter State : <input type="text"  placeholder='Enter Your state'name='state' onChange={handledata}/>
        <br /><br />
        Enter house no <input type="text"  placeholder='Enter building no'name='house' onChange={handledata}/> Enter Road Name: <input type="text"  placeholder='Enter road name'name='road' onChange={handledata}/>
        <br /><br />
        Enter Nearest famouse place name: <input type="text"  placeholder='Enter nearest famous place'name='place' onChange={handledata}/>
        <br /><br /><br /><hr />
        <Button onClick={Saveadd}>Save and place order</Button>
        </div>: 
        <div className="youradd">
             <h1>Your Order Details..</h1>
            
             Name : {addata.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Contact : {addata.contact}    <br /><br />    
             City : {addata.city} &nbsp;&nbsp;     Email : {addata.email}     <br /><br />
              Pin :{addata.pin} &nbsp;&nbsp;   State :{addata.state}  <br /><br />
               House NO : {addata.house}&nbsp;&nbsp;   Road Name : {addata.road} <br /><br />
                Famous Place :{addata.place}
                <br /><br />
               <Table   width={950} >
                <tr>
                    <th>NO</th>
                    <th>&nbsp;&nbsp;&nbsp;Image</th>
                    <th>Product Name</th>
                    <th>Category&nbsp;&nbsp;&nbsp;</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price</th>
                    <th></th>
                </tr>
                {ans}
               </Table>
               <h1>Total Amount :{netamount}</h1>
          
           <Button onClick={Done}>Confirm Order</Button>

        </div>
        }
       
      
      </center>
    </div>
  )
}

export default OrderPlace
