import UnauthApp from "./UnauthApp";
import AuthApp from "./AuthApp";
import { useContext } from "react";
import { myContext } from "./LoginContext";
 const App=()=>
 {
  const {user}=useContext(myContext);
  return(
    <>
    <h1>WEllcome to my App</h1>
    {user.auth?<AuthApp/>:<UnauthApp/>}
    </>
  )
 }
 export default App;