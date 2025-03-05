// import College from "./College";
// import Students from "./Students";
// const stu={
//   "Name":"Umesh",
//   "Roll":180,
//   "city":"Bhopal",
//   "fee":4000

// }
// function App() {
//   return (
//     <>
//       <h1>Wellcome to third</h1>
//       <College nm={stu.Name} fs={stu.fee} ct={stu.city} rl={stu.Roll}/>
//     </>
//   )
// }
// export default App;























import EmpDesign from "./EmpDesign";
import EmpData from "./EmpData";
import CallbackFunction from "./CallbackFunction";
const App=()=>{
    const ans=EmpData.map((key)=>
       <EmpDesign name={key.name} city={key.city} salary={key.salary} rollno={key.rollno}  />);
    return(
        <>
 <table border="1">
    <tr>
        <th>name</th>
        <th>rollno</th>
        <th>city</th>
        <th>salary</th>
    </tr>
    {ans}
 </table>
 <CallbackFunction/>
        </>
    )
}
export default App;






