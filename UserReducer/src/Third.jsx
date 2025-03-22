import { useReducer } from "react";
const Third=()=>
{
    const setcolor=(state,action)=>
    {
        switch(action.type)
        {
            case "green":
                return "green";
            case "black":
                return "black";
            case "blue":
                return "blue";
            default:
                return state;
        }
    }
    const [color,dispatch]=useReducer(setcolor,"red");
    return(
        <>
        <h1>third component of UseREducer hook</h1>
        <div style={{height:"300px", width:"300px", backgroundColor:`${color}`}}></div>
        <button onClick={()=>{dispatch({type:"green"})}}>green</button>
        <button onClick={()=>{dispatch({type:"black"})}}>black</button>
        <button onClick={()=>{dispatch({type:"blue"})}}>blue</button>

        </>
    )
}
export default Third;