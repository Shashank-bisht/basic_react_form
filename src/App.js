
import './App.css';
import { useState } from 'react';
function App() {

const [fname, setfname] = useState("");
const [lname, setlname] = useState("");

function updatefname(event){
const firstname = event.target.value
setfname(firstname)
}
function updatelname(event){
const lastname = event.target.value
setlname(lastname)
}


// for button animation
const [ismouseover, setmouseover] = useState(false);

 
 


 // for button animation
 function handlemouseover(){
  setmouseover(true);
 }

 function handlemouseout(){
setmouseover(false);
 }
  return (
    <div className='container'>
      <h1>Hello {fname} {lname}</h1>
      <form >
      <input type="text" name='fname' onChange={updatefname} placeholder="first name" value={fname} />
      <input type="text" name="lname" onChange={updatelname}  placeholder='last name' value={lname} />
      <button style={{backgroundColor: ismouseover ? "black" : "white"}} onMouseOver={handlemouseover} onMouseOut={handlemouseout}>Submit</button>
      </form>
    </div>
  );
}

export default App;
