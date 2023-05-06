import { useState, useEffect } from "react"
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect"
import InputButton from "../Buttons/InputButton";
import DatePickerButton from "../Buttons/DatePickerButton";
import axiosClient from "../../config/AxiosClient"
import { personRoute } from "../../config/Routes";

// useEffect(() => {}, [])

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
  const [dummy, setDummy] = useState(0)

  const getUserData = async () => {
    if (idNumber == "11802") {
      const result = ['Daniel', 'Lizano', 20, 'Costa Rica', 'daniel@ucr.ac.cr']
      // try {
      //   const {data} = await axiosClient.get(personRoute)
      //   result = data
      // } catch (exception) {
      //   console.error(exception)
      // }
      setName(result[0])
      setLastName(result[1])
      setAge(result[2])
      setNationality(result[3])
      setEmail(result[4])
      setDummy(1)
    } else {
      setDummy(2)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  const setValue = (type, value) => {
    if (type == "idNumber") {
      setIDNumber(value)
    } else if (type == "firstName") {
      setName(value)
    } else if (type == "lastName") {
      setLastName(value)
    } else if (type == "age") {
      setAge(value)
    } else if (type == "nationality") {
      setNationality(value)
    } else if (type == "email") {
      setEmail(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <InputButton text="ID Number" placeholderText="Enter your ID number" disabled={false} type="idNumber" onChangeFunction={setValue}/>

        <Button text="Search" onclickFunction={getUserData}>
          {/* se hace la query a la base */}
          {/* los botones de abajo se les hace disable y se les pasa como values lo retornado por la query */}
        </Button>
      </div>
      {dummy == 1 &&
      <>
        <div>
          <InputButton text="First name" placeholderText="Enter your first name" disabled={true} type="firstName" initValue={firstName}/>
        </div>
        <div>
          <InputButton text="Last name" placeholderText="Enter your last name" disabled={true} type="lastName" initValue={lastName}/>
        </div>
        <div>
            <InputButton text="Age" placeholderText="Enter your age" disabled={true} type="age" initValue={age}/>
        </div>
        <div>
          <InputButton text="Nationality" placeholderText="Enter your nationality" disabled={true} type="nationality" initValue={nationality}/>
        </div>
        <div>
          <InputButton text="Email" placeholderText="Email" disabled={true} type="email" initValue={email}/>
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
          <DatePickerButton text="Date of arrival" typeClass="1" type="startDate" disabled={false}/>
        <div>
        <div>
          <DatePickerButton text="Date of departure" typeClass="1" type="endDate" disabled={false}/>
        </div>
          
        </div>
        <div className="my-10">
          <Button text="Submit" type="add" onclickFunction={() => {}}/>
        </div>
      </>
      }
      
      {dummy == 2 &&
        <>
        <div>
          <InputButton text="First name" placeholderText="Enter your first name" disabled={false} type="firstName" onChangeFunction={setValue}/>
        </div>
        <div>
          <InputButton text="Last name" placeholderText="Enter your last name" disabled={false} type="lastName" onChangeFunction={setValue}/>
        </div>
        <div>
            <InputButton text="Age" placeholderText="Enter your age" disabled={false} type="age" onChangeFunction={setValue}/>
        </div>
        <div>
          <InputButton text="Nationality" placeholderText="Enter your nationality" disabled={false} type="nationality" onChangeFunction={setValue}/>
        </div>
        <div>
          <InputButton text="Email" placeholderText="Email" disabled={false} type="email" onChangeFunction={setValue}/>
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
          <DatePickerButton text="Date of arrival" typeClass="1" type="startDate" disabled={false}/>
        <div>
        <div>
          <DatePickerButton text="Date of departure" typeClass="1" type="endDate" disabled={false}/>
        </div>
          
        </div>
        <div className="my-10">
          <Button text="Submit" type="add" onclickFunction={() => {}}/>
        </div>
        </>
        }
    </form>
  );
}

export default ReservationStep0;

