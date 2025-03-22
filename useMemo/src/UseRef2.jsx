import { useRef } from "react";
const UseRef2=()=>
{
    const myRef=useRef("");
    const One=()=>
    {
        myRef.current.style.backgroundColor="red";
    }
    const Two=()=>
    {
        myRef.current.style.backgroundColor="green";
    }
    const Three=()=>
    {
        myRef.current.style.backgroundColor="blue";
    }
    const Four=()=>
    {
        myRef.current.style.backgroundColor="yellow";
    }

    const Five=()=>
    {
        myRef.current.style.backgroundColor="black";
    }
    const Six=()=>
    {
        myRef.current.style.backgroundColor="pink";
    }
    const Seven=()=>
    {
        myRef.current.style.backgroundColor="orange";
    }
    const Eight=()=>
    {
        myRef.current.style.backgroundColor="purple";
    }
    const Nine=()=>
    {
        myRef.current.style.backgroundColor="white";
    }
    const Ten=()=>
    {
        myRef.current.style.backgroundColor="grey";
    }
    const Eleven=()=>
    {
        myRef.current.style.backgroundColor="skyblue";
    }
    const Twelve=()=>
    {
        myRef.current.style.backgroundColor="lightgreen";
    }
    const Thirteen=()=>
    {
        myRef.current.style.backgroundColor="lightyellow";
    }
    const Fourteen=()=>
    {
        myRef.current.style.backgroundColor="lightblack";
    }
    const Fifteen=()=>
    {
        myRef.current.style.backgroundColor="lightpink";
    }
    const Sixteen=()=>
    {
        myRef.current.style.backgroundColor="lightorange";
    }

    return(
        <> 
        <h1>Useref component </h1>
        <div ref={myRef} style={{height:"200px", width:"300px", border:"2px solid black"}}>
        </div>
            <button onClick={One}>red</button>
            <button onClick={Two}>green</button>
            <button  onClick={Three}>blue</button>
            <button  onClick={Four}>yellow</button>
            <button  onClick={Five}>black</button>
            <button  onClick={Six}>pink</button>
            <button onClick={Seven}>orange</button>
            <button onClick={Eight}>purple</button>
            <button onClick={Nine}>white</button>
            <button onClick={Ten}>grey</button>
            <button onClick={Eleven}>skyblue</button>
            <button onClick={Twelve}>lightgreen</button>
            <button onClick={Thirteen}>lightyellow</button>
            <button onClick={Fourteen}>lightblack</button>
            <button onClick={Fifteen}>lightpink</button>
            <button onClick={Sixteen}>lightorange</button>
        </>
    )
}
export default UseRef2;