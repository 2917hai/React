import React, { useEffect, useState } from 'react'
import { Button, message } from 'antd';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cancleOrder } from '../CartSlice';
const Successfull = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
          type: 'loading',
          content: 'Action in progress..',
          style: {
            marginTop: '40vh',
           fontSize:'35px',
           color:"green",
           fontWeight:"bold",
           width:"800px",
           height:"100px",
           marginLeft:"380px"
          },
          duration: 5,
        });
        setTimeout(messageApi.destroy, 2500);
      };


      const success1 = () => {
        messageApi.open({
          type: 'success',
          content: 'Your Order Successfully Placed ......!',
          className: 'custom-class',
          style: {
            marginTop: '10vh',
            fontSize:'35px',
            color:"green",
            fontWeight:"bold",
          },
        });
        setTimeout(messageApi.destroy,5000);
      };
      useEffect(()=>
    {
        success()
    },[]);
    useEffect(()=>
    {
        success1();
    },[])



    const [status,setStatus]=useState(true);
    const Myorder=()=>
    {
        setStatus(false);
    }


    const loaddata=useSelector(state=>state.mycart.myOrder);
    const dispatch=useDispatch();
    let no=0;
    const ans=loaddata.map((key)=>
    {
        no++;
        return(
            <>
            <tr>
                    <td>{no}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><img src={key.image}  alt="" height="50" width="50" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>{key.name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>{key.category}&nbsp;&nbsp;&nbsp;</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{key.price}</td>
                    <td>
                       <a onClick={()=>{dispatch(cancleOrder(key.id))}} href="#">Cancle</a>
                    </td>
                  
                </tr>
            </>
        )
    })



   

  return (
    <div >
        {status?   <span>
        {contextHolder}
       {contextHolder}
       <h1 style={{marginTop:"400px", color:"red", fontWeight:"bold"}}>Thank You So Much  ..!</h1>
       <Button onClick={Myorder} style={{marginLeft:"720px", color:"black", fontWeight:"bold",backgroundColor:"blue"}}>Viw Order</Button>
        </span>:<span>
        <h1 style={{marginTop:"120px", color:"blue", fontWeight:"bold"}}>My Order</h1>
        <br /><br /><hr />
        <Table   width={950} >
                <tr>
                    <th>NO</th>
                    <th>&nbsp;&nbsp;&nbsp;Image</th>
                    <th>Product Name</th>
                    <th>Category&nbsp;&nbsp;&nbsp;</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price</th>
                    <th>Cancle</th>
                </tr>
                {ans}
               </Table>
            
            </span>}
     
   
    
    </div>
  )
}

export default Successfull
