const Students=(props)=>
{
    return(
        <>
        <tr>
        <td>My name is :{props.nm}</td>
        <td>My City is :{props.ct}</td>
        <td>My Roll is :{props.rl}</td>
        <td>{props.opt}</td>
        </tr>
       
        </>
    )
}
export default Students;