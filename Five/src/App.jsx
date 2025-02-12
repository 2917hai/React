import AmazoneCard from "./AmazonCard";
import MsgBox from "./MsgBox";
function clickKaro()
{
 console.log("mai click ho gya");
}
const App=()=>
{
  return(
    <>
    <button onClick={clickKaro()}>click me</button>
      <h1>Wellcome <span  style={{color:"blue"}}>to my React</span>  page</h1>
      <MsgBox Name="Umesh"/>

      <h1>Here <span style={{color:"blue"}}>My Amazome</span> Product</h1>
      <AmazoneCard/>
    </>
  
  )
}
export default App;
