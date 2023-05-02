import { useState } from "react"
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect"
import InputButton from "../Buttons/InputButton";

function Validation() {
  
}


function ReservationStep0() {
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [idNumber, setIDNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ID number">ID Number:</label>
          <InputButton>
            text="ID Number"
            placeholderText="Enter your ID number"
            disabled={false}
            type="idNumber"
          </InputButton>
        </div>
      <div>
        <label htmlFor="name">First name:</label>
        <InputButton>
          text="First name"
          placeholderText="Enter your first name"
          disabled={false}
          type="firstName"
        </InputButton>
      </div>
      <div>
        <label htmlFor="email">Last name:</label>
        <InputButton>
          text="Last name"
          placeholderText="Enter your last name"
          disabled={false}
          type="lastName"
        </InputButton>
      </div>
        <div>
            <label htmlFor="age">Age:</label>
            <InputButton>
              text="Age"
              placeholderText="Enter your age"
              disabled={false}
              type="age"
            </InputButton>
        </div>
        <div>
          <label htmlFor="nationality">Nationality:</label>
          <InputButton>
            text="Nationality"
            placeholderText="Enter your nationality"
            disabled={false}
            type="nationality"
          </InputButton>
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <InputButton>
            text="Email"
            placeholderText="Email"
            disabled={false}
            type="email"
          </InputButton>
        </div>
        <div>
          <DropDownSelect
            text="Gender"
            disabled={false}
            type="gender"
            options={["Male","Female","Non-Binary","Other"]}
            typeChange={gender}
            //onChangeFunction={setGender}

          />
        </div>
        <div className="my-10">
          <Button text="Submit" type="add" onclickFunction={() => {}}/>
        </div>
    </form>
  );
}

export default ReservationStep0;

