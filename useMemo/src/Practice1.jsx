import { memo, useMemo, useReducer } from "react";
const Practice1 = () => {



    const Multi=useMemo(()=>
    {
      for(var i=1; i<=1000000000; i++)
      {

      }
      return i;
    },[]);

   const Reducer=(state,action)=>
    {
      if(action.value=="inc")
      {
        return state+1;
      }
      else
      {
        return state-1;
              
      }
    }

    const [count,dispatch]=useReducer(Reducer,0)
  return (
    <div>
      

      <h1>This is practice of usememo part</h1>
     <Multi/>
      <h1>Here your countr value is :{count}</h1>
      <button onClick={()=>{dispatch({value:"inc"})}}>Increase</button>
      <button onClick={()=>{dispatch({value:"dec"})}}>Decrease</button>
    </div>
  )
}

export default Practice1
