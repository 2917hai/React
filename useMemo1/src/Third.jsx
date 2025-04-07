import { useState } from "react"
const ExpensiceComponent=()=>
    //const ExpensiceComponent=memo(()=>
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
    return <p>Sum:{total} <br /> Data:
    </p>;
    
}
// });
const Third=()=>
{
 // const Mydata={name:"Umesh",age:24};
    const [count,setCount]=useState(0);
    return(
        <>
        <ExpensiceComponent />   
        {/* <ExpensiceComponent data="umesh"/>                                                                                           */}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>
            count is:{count}
        </h1>
        </>
    )
}
export default Third;

//but when we use useMemo in place of memo then it will be work in both cases
