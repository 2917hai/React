// import { useState } from "react"
// const ExpensiceComponent=()=>
//     //const ExpensiceComponent=memo(()=>
// {
//     const sum=()=>{
//         console.log("calculating sum");
//         let i=0;
//         for( i=0;i<1000000000;i++)
//         {
//             i=i+1;
//         }
//         return i;
//     }
//     const total=sum();
//     return <p>Sum:{total}</p>;
// }
// // });
// const Third=()=>
// {
//     const [count,setCount]=useState(0);
//     return(
//         <>
//         <ExpensiceComponent/>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         <h1>
//             count is:{count}
//         </h1>
//         </>
//     )
// }
// export default Third;









import { use } from "react";
import { useState,useMemo } from "react"
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
    // const total=useMemo(sum,[]);
    const total=useMemo(()=>
    {
        return sum();
    },[]);
    return <p>Sum:{total}</p>;
}
// });
const Third=()=>
{
    const [count,setCount]=useState(0);
    return(
        <>
        <ExpensiceComponent/>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>
            count is:{count}
        </h1>
        </>
    )
}
export default Third;



/*
Difference between memo and useMemo
when we passed props as a object in this case memo will be failed while when we passed a single value as a props in this case memo will be work
but useMemo will be work in both cases
*/





// import { useState } from "react"
// const ExpensiceComponent=()=>
//     //const ExpensiceComponent=memo(()=>
// {
//     const sum=()=>{
//         console.log("calculating sum");
//         let i=0;
//         for( i=0;i<1000000000;i++)
//         {
//             i=i+1;
//         }
//         return i;
//     }
//     const total=sum();
//     return <p>Sum:{total}</p>;
// }
// // });
// const Third=()=>
// {
    // mydata={name:"Umesh",age:24};
//     const [count,setCount]=useState(0);
//     return(
//         <>
//         <ExpensiceComponent data="Umesh"/>                                                will be work
  //       <ExpensiceComponent data=mydata/>                                                 will not be work
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         <h1>
//             count is:{count}
//         </h1>
//         </>
//     )
// }
// export default Third;

// but when we use useMemo in place of memo then it will be work in both cases
