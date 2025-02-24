const Header=(props)=>
{
    return(
        <>
        <center>
         <h2>this is Header Section</h2>
         <h1>heading name is :{props.headingName}</h1>
         <h1>heading City is :{props.headingCity}</h1>
         <h1>heading price is:{props.headingPrice}</h1>
        </center>
        </>
    )
}
export default Header;