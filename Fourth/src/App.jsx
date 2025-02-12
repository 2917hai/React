import Cybrome from "./Cybrome"
import Students from "./Students"
import Data from "./Data"
import img1 from "./images/grp1.webp";
import img2 from "./images/grp2.webp";
import img3 from "./images/grp3.webp";
function App() {
  return (
    <>
    {/* <h1 style={{color:"red", fontSize:"30px", textAlign:"center"}}>Wellcome to <span  style={{color:"blue", fontSize:"30px", textAlign:"center"}}>My React App</span> </h1>
    <div style={{backgroundColor:"orange", borderRadius:"20px", margin:"20px", border:"2px solid red"}}>
      <div style={{backgroundColor:"green", borderRadius:"20px", margin:"20px", border:"2px solid yellow"}}>
        <div style={{backgroundColor:"blue", borderRadius:"20px", margin:"20px", border:"2px solid black"}}>
          <p style={{color:"red",textAlign:"center",fontWeight:"bolder"}}>Cybrome Technology</p>
        </div>
      </div>
    </div> */}








   {/* <Students/>
   <Data/>
   <Cybrome/> */}





   <h1  style={{color:"red", fontSize:"50px"}}>My Images</h1>
   <img src={img1}/>
   <img src={img2}/>
   <img src={img3}/>
<br/>
   <img src="public/img/nationfootball.webp"/>
   <img src="public/img/NoidaFootball.webp"/>
   <img src="public/img/yongfootball.webp"/>
 

    </>
  )
}

export default App
