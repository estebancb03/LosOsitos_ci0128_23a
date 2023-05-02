import { useState } from "react"
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect"

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
            <input className="bg-blue-200 my-2"
                type = "number"
                id="ID number"
                value={idNumber}
                onChange={(e) => setIDNumber(e.target.value)}
            />
        </div>
      <div>
        <label htmlFor="name">First name:</label>
        <input className="bg-blue-200 my-2"
          type="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Last name:</label>
        <input className="bg-blue-200 my-2"
          type="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
        <div>
            <label htmlFor="age">Age:</label>
            <input className="bg-blue-200 my-2"
              type="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="nationality">Nationality:</label>
          <input className="bg-blue-200 my-2"
            type="nationality"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input className="bg-blue-200 my-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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

