import { useState, useEffect, forceUpdate, useReducer } from "react";
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect";
import InputButton from "../Buttons/InputButton";
import DatePickerButton from "../Buttons/DatePickerButton";
import axiosClient from "../../config/AxiosClient";
import {
  formatDateDTDDMMYYYY,
  changeDateInISOFormat,
  isDateAfterISO8601,
} from "../../helpers/formatDate";

function ReservationStep1({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [idNumber, setIDNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dummy, setDummy] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const validation = () => {
    const result = false;
    if (reservationData.Reservation_Type == 1) {
      if (
        name != "" &&
        regexName.test(name) &&
        lastName != "" &&
        age != "" &&
        idNumber != "" &&
        regexId.test(idNumber) &&
        nationality != "" &&
        regexName.test(nationality) &&
        email != "" &&
        regexEmail.test(email) &&
        startDate != "" &&
        endDate != "" &&
        isDateAfterISO8601(startDate, endDate)
      ) result = true;
    } else {
      if (
        name != "" &&
        regexName.test(name) &&
        lastName != "" &&
        age != "" &&
        idNumber != "" &&
        regexId.test(idNumber) &&
        nationality != "" &&
        regexName.test(nationality) &&
        email != "" &&
        regexEmail.test(email) &&
        isDateAfterISO8601(startDate, endDate)
      ) result = true;
    }
    return result;
  };

  const matchGender = (gender) => {
    switch (gender) {
      case 0:
        return "Male";
      case 1:
        return "Female";
      case 2:
        return "Non-Binary";
      case 3:
        return "Other";
    }
  };

  useEffect(() => {}, [dummy]);

  const getUserData = async () => {
    try {
      const { data } = await axiosClient.get(`/person/${idNumber}`);
      const result = data[0];
      if (data.length > 0) {
        setName(result.Name);
        setLastName(result.LastName1 + " " + result.LastName2);
        setGender(matchGender(result.Gender));
        setAge(result.Birth_Date);
        setEmail(result.Email);
        setNationality(result.Country_Name);
        setDummy(dummy == 2 ? 3 : 2);
      } else {
        setDummy(1);
      }
    } catch (exception) {
      console.error(exception);
    }
  };

  //regex to verify if email is valid
  const regexEmail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  const regexName = /^[\w ]+$/;
  const regexId = /^\d+$/;
  const regexLastName = /^[a-zA-Z\s]+$/;

  const setValue = (type, value) => {
    const date = new Date();
    date.toISOString();
    if (type == "idNumber" && regexId.test(value)) {
      setIDNumber(value);
    } else if (type == "firstName" && regexName.test(value)) {
      setName(value);
    } else if (type == "lastName" && regexLastName.test(value)) {
      setLastName(value);
    } else if (type == "age") {
      setAge(value);
    } else if (type == "nationality") {
      setNationality(value);
    } else if (type == "email" && regexEmail.test(value)) {
      setEmail(value);
    } else if (type == "gender") {
      if (value === "Male") {
        setGender(0);
      } else if (value == "Female") {
        setGender(1);
      } else if (value == "Non-Binary") {
        setGender(2);
      } else {
        setGender(3);
      }
    } else if (type === "startDate") {
      setStartDate(changeDateInISOFormat(value, date));
    } else if (type === "endDate") {
      setEndDate(changeDateInISOFormat(value, date));
    }
  };

  const updateReservationData = () => {
    console.log(validation());
    if (validation()) {
      const newReservationData = { ...reservationData };
      const newWindows = { ...windows };
      newWindows.Step1 = false;
      newWindows.Step2 = true;
      const [lastName1, lastName2] = lastName.split(" ");
      newReservationData.Name = name;
      newReservationData.ID = idNumber;
      newReservationData.LastName1 = lastName1;
      newReservationData.LastName2 = lastName2;
      newReservationData.Country_Name = nationality;
      newReservationData.Email = email;
      newReservationData.Gender =
        gender === "Male"
          ? 0
          : gender === "Female"
          ? 1
          : gender === "Non-Binary"
          ? 2
          : 3;
      newReservationData.Birth_Date = age;
      newReservationData.Start_Date = startDate;
      newReservationData.End_Date = endDate;
      newReservationData.Reservation_Date = new Date().toISOString();
      setName("");
      setLastName("");
      setAge(undefined);
      setIDNumber("");
      setNationality("");
      setEmail("");
      setGender("");
      setStartDate("");
      setEndDate("");
      setReservationData(newReservationData);
      setWindows(newWindows);
    } else {
      alert("Incorrect data, check the information entered");
    }
  };

  return (
    <>
      {windows.Step1 && (
        <div className="mb-10">
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
            Personal information
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2s">
            <div className="mt-4 mb-8">
              <InputButton
                text="ID Number"
                placeholderText=""
                disabled={false}
                type="idNumber"
                onChangeFunction={setValue}
              />
            </div>
            <div className="mt-12 sm:mt-[77px]">
              <Button text="Search" onclickFunction={getUserData} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
            {dummy == 2 && (
              <>
                <div className="">
                  <InputButton
                    text="First name"
                    placeholderText={name}
                    disabled={true}
                    type="firstName"
                  />
                </div>
                <div className="">
                  <InputButton
                    text="Last name"
                    placeholderText={lastName}
                    disabled={true}
                    type="lastName"
                  />
                </div>
                <div>
                  <InputButton
                    text="Date of birth"
                    placeholderText={formatDateDTDDMMYYYY(age)}
                    disabled={true}
                    type="age"
                  />
                </div>
                <div className="sm:mt-6">
                  <InputButton
                    text="Nationality"
                    placeholderText={nationality}
                    disabled={true}
                    type="nationality"
                  />
                </div>
                <div>
                  <InputButton
                    text="Email"
                    placeholderText={email}
                    disabled={true}
                    type="email"
                  />
                </div>
                <div className="mt-[4px] sm:mt-[17px] sm:mr-1">
                  <DropDownSelect
                    text="Gender"
                    disabled={true}
                    options={[gender]}
                    typeChange="gender"
                    onChangeFunction={setValue}
                  />
                </div>
                {reservationData.Reservation_Type === 1 && (
                  <div className="sm:-ml-2 -mt-4">
                    <DatePickerButton
                      text="Date of arrival"
                      typeClass="1"
                      type="startDate"
                      disabled={false}
                      onChangeFunction={setValue}
                    />
                  </div>
                )}
                {reservationData.Reservation_Type === 1 && (
                  <div className="sm:-ml-2 sm:mr-1 -mt-4">
                    <DatePickerButton
                      text="Date of departure"
                      typeClass="1"
                      type="endDate"
                      disabled={false}
                      onChangeFunction={setValue}
                    />
                  </div>
                )}
                <div className="mb-8">
                  <Button
                    text="Back"
                    onclickFunction={(e) => {
                      const newWindows = { ...windows };
                      newWindows.Step0 = true;
                      newWindows.Step1 = false;
                      setWindows(newWindows);
                    }}
                  />
                </div>
                <div className="mb-8">
                  <Button
                    text="Next"
                    disabled={disabled}
                    onclickFunction={() => {
                      updateReservationData();
                    }}
                  />
                </div>
              </>
            )}

            {dummy == 3 && (
              <>
                <div className="">
                  <InputButton
                    text="First name"
                    placeholderText={name}
                    disabled={true}
                    type="firstName"
                  />
                </div>
                <div className="">
                  <InputButton
                    text="Last name"
                    placeholderText={lastName}
                    disabled={true}
                    type="lastName"
                  />
                </div>
                <div>
                  <InputButton
                    text="Date of birth"
                    placeholderText={formatDateDTDDMMYYYY(age)}
                    disabled={true}
                    type="age"
                  />
                </div>
                <div className="sm:mt-6">
                  <InputButton
                    text="Nationality"
                    placeholderText={nationality}
                    disabled={true}
                    type="nationality"
                  />
                </div>
                <div>
                  <InputButton
                    text="Email"
                    placeholderText={email}
                    disabled={true}
                    type="email"
                  />
                </div>
                <div className="mt-[4px] sm:mt-[17px] sm:mr-1">
                  <DropDownSelect
                    text="Gender"
                    disabled={true}
                    options={[gender]}
                    typeChange="gender"
                    onChangeFunction={setValue}
                  />
                </div>
                {reservationData.Reservation_Type === 1 && (
                  <div className="sm:-ml-2 -mt-4">
                    <DatePickerButton
                      text="Date of arrival"
                      typeClass="1"
                      type="startDate"
                      disabled={false}
                      onChangeFunction={setValue}
                    />
                  </div>
                )}
                {reservationData.Reservation_Type === 1 && (
                  <div className="sm:-ml-2 sm:mr-1 -mt-4">
                    <DatePickerButton
                      text="Date of departure"
                      typeClass="1"
                      type="endDate"
                      disabled={false}
                      onChangeFunction={setValue}
                    />
                  </div>
                )}
                <div className="mb-8">
                  <Button
                    text="Back"
                    onclickFunction={(e) => {
                      const newWindows = { ...windows };
                      newWindows.Step0 = true;
                      newWindows.Step1 = false;
                      setWindows(newWindows);
                    }}
                  />
                </div>
                <div className="mb-8">
                  <Button
                    text="Next"
                    disabled={disabled}
                    onclickFunction={() => {
                      updateReservationData();
                    }}
                  />
                </div>
              </>
            )}

            {dummy == 1 && (
              <>
                <div className="">
                  <InputButton
                    text="First name"
                    placeholderText=""
                    disabled={false}
                    type="firstName"
                    onChangeFunction={setValue}
                  />
                </div>
                <div className="">
                  <InputButton
                    text="Last name"
                    placeholderText=""
                    disabled={false}
                    type="lastName"
                    onChangeFunction={setValue}
                  />
                </div>
                <div>
                  <DatePickerButton
                    text="Date of birth"
                    placeholderText=""
                    disabled={false}
                    type="age"
                    onChangeFunction={setValue}
                  />
                </div>
                <div className="sm:mt-2">
                  <InputButton
                    text="Nationality"
                    placeholderText=""
                    disabled={false}
                    type="nationality"
                    onChangeFunction={setValue}
                  />
                </div>
                <div>
                  <InputButton
                    text="Email"
                    placeholderText=""
                    disabled={false}
                    type="email"
                    onChangeFunction={setValue}
                  />
                </div>
                <div className="mt-[4px] sm:mt-[17px] sm:mr-1">
                  <DropDownSelect
                    text="Gender"
                    disabled={false}
                    options={["Male", "Female", "Non-Binary", "Other"]}
                    typeChange="gender"
                    onChangeFunction={setValue}
                  />
                </div>
                {reservationData.Reservation_Type === 1 && (
                  <div className="sm:-ml-2 -mt-4">
                    <DatePickerButton
                      text="Date of arrival"
                      typeClass="1"
                      type="startDate"
                      disabled={false}
                      onChangeFunction={setValue}
                    />
                  </div>
                )}
                {reservationData.Reservation_Type === 1 && (
                  <div className="sm:-ml-2 sm:mr-1 -mt-4">
                    <DatePickerButton
                      text="Date of departure"
                      typeClass="1"
                      type="endDate"
                      disabled={false}
                      onChangeFunction={setValue}
                    />
                  </div>
                )}
                <div className="mb-8">
                  <Button
                    text="Back"
                    onclickFunction={(e) => {
                      const newWindows = { ...windows };
                      newWindows.Step0 = true;
                      newWindows.Step1 = false;
                      setWindows(newWindows);
                    }}
                  />
                </div>
                <div className="mb-8">
                  <Button
                    text="Next"
                    disabled={disabled}
                    onclickFunction={() => {
                      updateReservationData();
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ReservationStep1;
