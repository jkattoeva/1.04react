import "./Example.css"
import { useState } from "react";

function Example() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [lastnNumber, setLastNumber] = useState("");
  const [res, setRes] = useState("");




  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const onFirstNumberChange = (event) =>{
    setFirstNumber(event.target.value);
  }
  
  const onLastNumberChange = (event) =>{
    setLastNumber(event.target.value);
  }
  const result = () => {
   const setRes =  firstNumber + lastnNumber
  }

  return (
    <div className="Example">
      {firstName} {lastName} <br/>
      <label>
        First name:
        <input className="firstInput" type="text" onChange={onFirstNameChange}/>
      </label>
      <label>
        last name:
        <input className="lastInput" type="text" onChange={onLastNameChange}/>
      </label>
      <div className="Example2">
      {firstNumber} {lastnNumber}
      <label>
        a:
        <input className="firstInput" type="text" onChange={onFirstNumberChange}/>
      </label>
      <label>
        b:
        <input className="lastInput" type="text" onChange={onLastNumberChange}/>
      </label>
      {res}
      </div>
    </div>
  );
}
export default Example;