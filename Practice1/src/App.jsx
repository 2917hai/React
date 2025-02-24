import Body from "./Body"
import Data from "./Data";
import Footer from "./Footer";
import Header from "./Header"
import StudentsData from "./StudentsData";

function App() {
  const name="Umesh";
  const city="bhopal";
  const contact=7803869841;
  const price=3200;

  
  
  const mydata=StudentsData.map((key)=>
     <Data no={key.No} name={key.name} city={key.city} contact={key.contact} roll={key.roll} />)



  
  return (
    <>
        <center>

          <h1>Wellcome to My First React Page</h1>
          <br /><hr />
          <h1>Header</h1>
          <Header headingName={name} headingCity={city} headingPrice={price} />
          <br />
          <hr />
          <h1>Body</h1>
          <Body  headingName={name} headingCity={city} headingPrice={price}/>
          <br /><hr />
          <h1>Footer</h1>
          <Footer  headingName={name} headingCity={city} headingPrice={price}/>
          <br /><hr />

          <h2>Some my details</h2>
          <h1>My name is:{name} </h1>
          <h1>My  city is:{city}</h1>
          <h1>My contact no is:{contact} </h1>
          






          <h1>students Data</h1>
          <table border={1}>
            <caption>Students Data</caption>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>City</th>
              <th>Roll</th>
              <th>Contact</th>
            </tr>
           
            {mydata}
          

          </table>
        </center>
    </>
  )
}

export default App
