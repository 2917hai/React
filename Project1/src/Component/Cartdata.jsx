




import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
const Cartdata=()=>
{
    const prodata=useSelector(state=>state.mycart.cart);
    const ans=prodata.map((key)=>
    {
        return(
            <>
            <tr>
                <td><img src={key.image}  alt="" height="100" width="100" /></td>
                <td>{key.name}</td>
                <td>{key.category}</td>
                <td>{key.price}</td>
            </tr>
            </>
        )
    })
    return(
        <>
       <h1>My Cart</h1>
       <h1>MY CART </h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
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