import "./Example.css"
import { useState } from "react";

function Example() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
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
    </div>
  );
}
export default Example;