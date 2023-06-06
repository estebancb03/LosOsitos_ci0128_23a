import {useEffect, useState} from "react";
import Button from "../../Buttons/Button";
import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import DatePickerButton from "../../Buttons/DatePickerButton";
import usePerson from "../../../hooks/usePerson";
import useCountry from "../../../hooks/useCountry";
import { formatDateDTMMDDYYYY } from "../../../helpers/formatDate";

const AddPerson = (props) => {
  const {reservation, setReservation} = props;
  const {getPersonData, setPersonData, modifyPersonData} = usePerson(reservation, setReservation);
  const {countries} = useCountry();
  const [disabledElements, setDisabledElements] = useState(false);
  const [found, setFound] = useState(false);

  const changePersonData = (type, value) => {
    const newReservation = modifyPersonData(type, value, reservation);
    setReservation(newReservation)
  };

  const checkPersonalData = async () => {
    const wasFound = await getPersonData(reservation, setReservation);
    if (wasFound) {
      setDisabledElements(true);
    } else {
      setDisabledElements(false);
    }
    setFound(wasFound);
  };

  return (
    <>
      <div className="my-3 grid grid-cols-2">
        <div className="mr-3">
          <InputButton
            text="Customer ID"
            type="id"
            placeholderText=""
            disabled={false}
            onChangeFunction={changePersonData}
          />
        </div>
        <div className="mt-[34px] ml-3">
          <Button text="Search" type="" onclickFunction={checkPersonalData}/>
        </div>
        <div className="my-3 mr-3">
          <InputButton
            text="Name"
            type="name"
            placeholderText={reservation.Name}
            disabled={disabledElements}
            onChangeFunction={changePersonData}
          />
        </div>
        <div className="my-3 ml-3">
          <InputButton
            text="Lastname 1"
            type="lastname1"
            placeholderText={reservation.LastName1}
            disabled={disabledElements}
            onChangeFunction={changePersonData}
          />
        </div>
        <div className="my-3 mr-3">
          <InputButton
            text="Lastname 2"
            type="lastname2"
            placeholderText={reservation.LastName2}
            disabled={disabledElements}
            onChangeFunction={changePersonData}
          />
        </div>
        <div className="-mt-0.5 ml-3">
          <DatePickerButton
            text="Date of birth"
            typeClass="3"
            type="birthdate"
            disabled={disabledElements}
            selectedDate={reservation.Birth_Date !== "" ? new Date(formatDateDTMMDDYYYY(reservation.Birth_Date)) : new Date()}
            onChangeFunction={changePersonData}
          />
        </div>
        <div className="my-3 mr-3">
          <InputButton
            text="Email"
            type="email"
            placeholderText={reservation.Email}
            disabled={disabledElements}
            onChangeFunction={changePersonData}
          />
        </div>
        <div className="my-3 ml-3">
          { found ? (
            <InputButton
              text="Gender"
              typeChange="gender"
              placeholderText={
                reservation.Gender === 0 ? "Male" :
                reservation.Gender === 1 ? "Female" :
                reservation.Gender === 2 ? "Non-Binary" :
                "Other"
              }
              disabled={disabledElements}
              onChangeFunction={changePersonData}
            />
          ) : (
            <DropDownSelect
              text="Gender"
              options={["Male", "Female", "Non-Binary", "Other"]}
              disabled={false}
              typeChange="gender"
              onChangeFunction={changePersonData}
            />
          )}
        </div>
        <div className="my-3 mr-3">
          { found ? (
            <InputButton
              text="Nationality"
              typeChange="country"
              placeholderText={reservation.Country_Name}
              disabled={disabledElements}
              onChangeFunction={changePersonData}
            />
          ) : (
            <DropDownSelect
              text="Nationality"
              options={countries}
              selectedOption={reservation.Country_Name}
              disabled={false}
              typeChange="country"
              onChangeFunction={changePersonData}
            />
          ) }
        </div>
        {reservation.Country_Name === "Costa Rica" && (
          <div className="my-3 ml-3">
            { found ? (
              <InputButton
                text="State"
                typeChange="state"
                placeholderText={reservation.State}
                disabled={disabledElements}
                onChangeFunction={changePersonData}
              />
              ) : (
                <DropDownSelect
                  text="State"
                  options={["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]}
                  selectedOption={reservation.State}
                  disabled={false}
                  typeChange="state"
                  onChangeFunction={changePersonData}
                />
                )}
          </div>
        )}
      </div>
    </>
  );
};

export default AddPerson;