import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function TextItem(props){

  return (
    <div>
      <p>
        Name: {props.names[props.index]}
      </p>
      <p>
        Age: {props.ages[props.index]}
      </p>
    
      <button onClick={() => props.updateDetails(props.names[props.index], props.ages[props.index], props.index)}>Reset Details</button>

    </div>
  )
}


function App() {
  const [names, setNames] = useState(["Hello"])
  const [ages, setAges] = useState([23])




    function addItem() {
      const newName = Math.random().toString(36).substring(2, 7);
      const newAge = Math.floor(Math.random() * 100);
      setNames([...names, newName]);
      setAges([...ages, newAge]);
    
  }

  function updateDetails(name, age, index) {
    // Remove current name and replace with blank
    let nameArray = [...names];
    let ageArray = [...ages];
  
    nameArray[index] = "";
    ageArray[index] = "";
  
    setNames(nameArray);
    setAges(ageArray);
  }
  

  //Whenever name is updated, print it
  console.log(names)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to the EazyDraft test application.
        </p>
        <button onClick={addItem}>Click to add a field</button>
        {
          names.map((name, index)=><TextItem names={names} ages={ages} index={index} updateDetails={updateDetails}/>)
        }
      </header>
    </div>
  );
}

export default App;
