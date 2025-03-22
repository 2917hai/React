import { useReducer } from "react";
const Second=()=>
{
    const yourans=(state,action)=>
    {
      switch(action.type)
      {
        case "CORRECT":
          return "Correct Answer";
        case "NAHIPATA":
          return "pata nahi";
        case "SEARCH":
          return "Search karo";
        default:
            return state;
      }
}
    const [ans,dispatch]=useReducer(yourans,0);
    return(
        <>
        <h1>This is Second reducer component</h1>
        <p>
            Q.1 What is the use of useReducer in react js?
            <button onClick={()=>{dispatch({type:"CORRECT"})}}>UseReducer is Hooks of React js</button>
            <button onClick={()=>{dispatch({type:"NAHIPATA"})}}>pata nahi </button>
            <button onClick={()=>{dispatch({type:"SEARCH"})}}>Search karo</button>
            <h1>Answer:{ans}</h1>
        </p>
        </>
    )
}
export default Second;