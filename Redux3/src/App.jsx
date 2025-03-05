import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./ColorSlice";
const App=()=>
{
  const data=useSelector((state)=>state.color.value);
  const dispatch=useDispatch();

  return(
    <>
    <h1>Wellcome to ṁy page</h1>
    <div style={{height:"300px",width:"300px",backgroundColor:`${data}`}}></div>
    <button onClick={()=>{dispatch(changeColor())}} >changeColor</button>
    </>
  )
}
export default App;