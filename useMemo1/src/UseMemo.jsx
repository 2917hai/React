
import { useState } from 'react'

const CheckMemo=()=>
    {
        const sum=()=>{
            console.log("calculating sum");
            let i=0;
            for( i=0;i<1000000000;i++)
            {
                i=i+1;
            }
            return i;
        }
        const total=sum();
        return <p>Sum:{total}</p>;
       
        
    }

   
const UseMemo = () => {
    const [count,setCount]=useState(0);

  return (
    <div>
        <CheckMemo/>
      <h1>THis is UseMemo practice Component</h1>
      <h1>Here Your Counter value :{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment </button>
      <button onClick={()=>{setCount(count-1)}}>Decreament</button>
    </div>
  )
}

export default UseMemo
