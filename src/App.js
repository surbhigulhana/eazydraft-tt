import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Button from '@mui/material/Button';

function TextItem(props){

  return (
    <div>
      <p>
        Name: {props.names[props.index]}
      </p>
      <p>
        Age: {props.ages[props.index]}
      </p>
      <Button onClick={()=>props.updateDetails(props.names[props.index], props.age, props.index)}>Reset Details</Button>
    </div>
  )
}


function App() {
  const [names, setNames] = useState(["Hello"])
  const [ages, setAges] = useState([23])



  function addItem(){
    names.push(Math.random().toString(36).substring(2,7))
    setNames(names)
    ages.push(Math.floor(Math.random() * 100))
    setAges(ages)
  }

  function updateDetails(name, age, index){
    //Remove current name and replace with blank
    let currentName = names[index]
    let currentAge = ages[index]
    let namearray = names.filter(item=>item!=name)
    let agearray = ages.filter(item=>item!==age)
    namearray.push("")
    agearray.push("")
    setNames(namearray)
    setAges(agearray)
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
        <div onClick={addItem}>Click to add a field</div>
        {
          names.map((name, index)=><TextItem names={names} ages={ages} index={index} updateDetails={updateDetails}/>)
        }
      </header>
    </div>
  );
}

export default App;
