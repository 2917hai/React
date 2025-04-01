

import { dataRemove } from '../CartSlice';
import { quantInc } from '../CartSlice';
import { quantDec } from '../CartSlice';
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
const Cartdata=()=>
{
  const dispatch=useDispatch();
    const prodata=useSelector(state=>state.mycart.cart);
    let netamount=0;
    const ans=prodata.map((key)=>
    {
      netamount+=key.price*key.quant;
        return(
            <>
            <tr>
                <td><img src={key.image}  alt="" height="100" width="100" /></td>
                <td>{key.name}</td>
                <td>{key.category}</td>
                <td>{key.price}</td>
                <div style={{display:"flex"}}>
                  <button style={{borderRadius:"50%", backgroundColor:"green", padding:"5px", fontSize:"10px"}} onClick={()=>{dispatch(quantDec({id:key.id}))}}>-1</button>
                  <td>{key.quant}</td>
                  <button style={{borderRadius:"50%", backgroundColor:"blue", padding:"5px", fontSize:"10px"}} onClick={()=>{dispatch(quantInc({id:key.id}))}}>+1</button>
                </div>
              
                <td>{key.price*key.quant}</td>
                <td>
                  <button onClick={()=>{dispatch(dataRemove({id:key.id}))}}>Remove</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
       <h1>My Cart</h1>
       <h1>MY CART </h1>
       <h1>Total Amount :{netamount}</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
       </Table>
        </>
    )
}
export default Cartdata;