import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const App = () => {
  const [count,setCount]=useState(0);

  const handlebutton=useCallback(()=>
  {
    setCount(count+1);
  },[count]);//  that means function rerender hoga jab count ki value change hogi
  //  },[count]);     that means function freez hoga 
  return (
    <div>
      <center>
      <h1>THis is UseCallback Hook COmponent </h1>
      <h1>here your counter value:{count}</h1>
      <button onClick={handlebutton}>Increase</button>
      <ChildComponent buttonName="click me"
      handlebutton={handlebutton}
      />
      </center>
    
    </div>
  )
}

export default App
