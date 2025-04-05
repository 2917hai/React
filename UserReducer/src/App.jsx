import { useReducer } from "react";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fiveth from "./Five";
const App=()=>
{
  const Reducer=(state,action)=>
  {
    if(action.type==="INCREMENT")
    {
      return state+1;
    }
    if(action.type==="DECREMENT")
    {
      return state-1;
    }

  }
    const Reducer1=(state,action)=>
    {
      if(action.type==="MULTIPLICATION")
      {
        return state*2;
  }
}
  const [count,dispatch]=useReducer(Reducer,0);
  const [mult,dispatch1]=useReducer(Reducer1,1);
    return (
       <>
       <h1>UseReducer Hook in react js</h1>
       <h1>Here your count :{count}</h1>
       <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
       <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>

       <h1>here your multiplication value:{mult}</h1>
        <button onClick={()=>{dispatch1({type:"MULTIPLICATION"})}}>multiplication</button>
        <br /><hr />
        <Second/>
        <Third/>
        <Fourth/>
        <Fiveth/>
       </>
    )
}
  

export default App;
