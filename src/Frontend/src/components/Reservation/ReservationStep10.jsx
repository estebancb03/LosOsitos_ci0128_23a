import { useState, useEffect, forceUpdate, useReducer } from "react"
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect"
import InputButton from "../Buttons/InputButton";
import DatePickerButton from "../Buttons/DatePickerButton";
import axiosClient from "../../config/AxiosClient"
import {formatDateFromDataTime} from "../../helpers/formatDate";


function Validation() {
  
}

const matchGender = (gender) => {
  switch (gender) {
    case 0:
      return "Male"
    case 1:
      return "Female"
    case 2:
      return "Non-Binary"
    case 3:
      return "Other"
  }
}


function ReservationStep10() {
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [idNumber, setIDNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dummy, setDummy] = useState(0)

  useEffect(() => {

  }, [dummy])

  const getUserData = async () => {
    try {
      const {data} = await axiosClient.get(`/person/${idNumber}`)
      const result = data[0]
      if (data.length > 0) {
        setName(result.Name)
        setLastName(result.LastName1 + " " + result.LastName2)
        setGender(matchGender(result.Gender))
        setAge(result.Birth_Date)
        setEmail(result.Email)
        setNationality(result.Country_Name)
        setDummy(dummy == 2 ? 3 : 2)
        console.log(result.Birth_Date);
      } else {
        setDummy(1)
      }
    } catch (exception) {
      console.error(exception)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }
  //regex to verify if email is valid
  const regexEmail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
  const regexNombre = /^[\w ]+$/;

  // const setValue = (type, value) => {
  //   if(type == "idNumber") {
  //     setIDNumber(value);
  //   } else {
  //     let testReturnValue = regexNombre.test(value)
  //     console.log("**** Test return value is: " + testReturnValue)
  //     if(testReturnValue) {
  //       type == "firstName" ? 
  //       setName(value) : type == "lastName" ? 
  //       setLastName(value) : type == "age" ? 
  //       setAge(value) : type == "nationality" ? 
  //       setNationality(value) : type == "email" && regexEmail.test(value) ? 
  //       setEmail(value) : alert("Entered an invalid email. Please correct it.")
  //     }
  //     alert("Entered a name with invalid characters. Please correct it.")
  //   }
  // }
  const setValue = (type, value) => {
    if (type == "idNumber") {
      setIDNumber(value)
    } else if (type == "firstName" && regexNombre.test(value)) {
      setName(value)
    } else if (type == "lastName" && regexNombre.test(value)) {
      setLastName(value)
    } else if (type == "age") {
      setAge(value)
    } else if (type == "nationality") {
      setNationality(value)
    } else if (type == "email" && regexEmail.test(value)) {
      setEmail(value)
    }
    else {
      console.log("Error")
    }
  }

  return (
    <form onSubmit={handleSubmit}>        
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
        <InputButton text="ID Number" placeholderText="Enter your ID number" disabled={false} type="idNumber" onChangeFunction={setValue}/>
        <div className="mt-[46px]">
          <Button text="Search" onclickFunction={getUserData}/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
        {dummy == 2 &&
        <>
          <div>
            <InputButton text="First name" placeholderText="Enter your first name" disabled={true} type="firstName" initValue={firstName}/>
          </div>
          <div>
            <InputButton text="Last name" placeholderText="Enter your last name" disabled={true} type="lastName" initValue={lastName}/>
          </div>
          <div>
            <InputButton text="Date of birth" placeholderText="Email" disabled={true} type="age" initValue={formatDateFromDataTime(age)}/>
          </div>
          <div>
            <InputButton text="Nationality" placeholderText="Enter your nationality" disabled={true} type="nationality" initValue={nationality}/>
          </div>
          <div>
            <InputButton text="Email" placeholderText="Email" disabled={true} type="email" initValue={email}/>
          </div>
          <div className="mt-[17px]">
            <DropDownSelect
              text="Gender"
              disabled={true}
              type="gender"
              options={[gender]}
              typeChange={gender}
              //onChangeFunction={setGender}
            />
          </div>
            <DatePickerButton text="Date of arrival" typeClass="1" type="startDate" disabled={false}/>
          <div>
          <div className="sm:-mt-6">
            <DatePickerButton text="Date of departure" typeClass="1" type="endDate" disabled={false}/>
          </div>
            
          </div>
          <div className="my-10">
            <Button text="Submit" type="add" onclickFunction={() => {}}/>
          </div>
        </>
        }

        {dummy == 3 &&
        <>
          <div>
            <InputButton text="First name" placeholderText="Enter your first name" disabled={true} type="firstName" initValue={firstName}/>
          </div>
          <div>
            <InputButton text="Last name" placeholderText="Enter your last name" disabled={true} type="lastName" initValue={lastName}/>
          </div>
          <div>
            <InputButton text="Date of birth" placeholderText="Email" disabled={true} type="age" initValue={formatDateFromDataTime(age)}/>
          </div>
          <div>
            <InputButton text="Nationality" placeholderText="Enter your nationality" disabled={true} type="nationality" initValue={nationality}/>
          </div>
          <div>
            <InputButton text="Email" placeholderText="Email" disabled={true} type="email" initValue={email}/>
          </div>
          <div className="mt-[17px]">
            <DropDownSelect
              text="Gender"
              disabled={true}
              type="gender"
              options={[gender]}
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
        
        {dummy == 1 &&
        <>
        <div>
          <InputButton text="First name" placeholderText="Enter your first name" disabled={false} type="firstName" onChangeFunction={setValue}/>
        </div>
        <div>
          <InputButton text="Last name" placeholderText="Enter your last name" disabled={false} type="lastName" onChangeFunction={setValue}/>
        </div>
        <div>
          <DatePickerButton text="Date of birth" placeholderText="Email" disabled={false} type="age"/>
        </div>
        <div>
          <InputButton text="Nationality" placeholderText="Enter your nationality" disabled={false} type="nationality" onChangeFunction={setValue}/>
        </div>
        <div>
          <InputButton text="Email" placeholderText="Email" disabled={false} type="email" onChangeFunction={setValue}/>
        </div>
        <div className="mt-[17px]">
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
      </div>
    </form>
  );
}

export default ReservationStep10;

