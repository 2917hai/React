
import Component2 from "./Component2";
const Component1=({user})=>
{
  
    return(
        <>
        <h1>Components1</h1>
        <h1>Wellcome to </h1>
        <Component2 user={user}/>
        </>
    )
}
export default Component1;