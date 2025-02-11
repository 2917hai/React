import Students from "./Studends";
import Data from "./Data";

const App=()=>
{
  const option=[<li>"Bhopal"</li>,
    <li>"Sidhi"</li>,
    <li>"Sidhi"</li>,
    <li>"Sidhi"</li>
  ];
  const option1=[<ul>
    <li>"bhopal"</li>
    <li>"Sidhi"</li>
    <li>"Rewa"</li>
    <li>"Indore"</li>
  </ul>]

  const list=option1.map((e)=><ol>
    <li>{option}</li>
  </ol>)
  const result=Data.map((key)=>
  <Students nm={key.name} ct={key.city} rl={key.roll} opt={list} />);
  return(
    <>
    <h1>Hello! My Details</h1>
     <tr>
      <th>Name</th>
      <th>City</th>
      <th>Roll</th>
      <th>City Option</th>
     </tr>
     {result}
 
    </>
  )
}
export default App;