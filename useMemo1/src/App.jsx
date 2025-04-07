import React from 'react'
import { useReducer } from 'react'
import Second from './Second';
import UseMemo from './UseMemo';
import Third from './Third';



const App = () => {
  const Myreducer=(state,action)=>
    {
      if(action.value=="Increase")
      {
        return state=state+1;
      }
      else{
        if(state<=1)
        {
          alert("counter value can not be less than 1")
        }
        else
        {
          return state=state-1;
        }
      }
    }

  const [count,dispatch]=useReducer(Myreducer,0);
  return (
    <div>
      <center>
      <h1>This is useReducer and useMemo paractice component </h1>
      <h2>Wellcome to my Count app page </h2>
      <h3> Your conter value is :{count}</h3>
      <button onClick={()=>dispatch({value:"Increase"})}>Increase</button>
      <button onClick={()=>dispatch({value:"Decrease"})}>Decrease</button>

      <br /><br /><br /><hr />
      <Second/>


      <br /><br /><br /><hr />
      <UseMemo/>


      <br /><br /><br /><hr />
      <Third/>
      </center>

      
    
    </div>
  )
}

export default App
