import Component3 from "./Component3";
const Component2=({user})=>
    {
        return(
            <>
            <h1>Components2</h1>
            <Component3 user={user} />
            </>
        )
    }
    export default Component2;