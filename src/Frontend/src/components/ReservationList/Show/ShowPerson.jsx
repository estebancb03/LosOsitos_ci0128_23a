import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import DatePickerButton from "../../Buttons/DatePickerButton";
import usePerson from "../../../hooks/usePerson";
import useCountry from "../../../hooks/useCountry";
import {
  formatDateDTDDMMYYYY,
  formatDateDTMMDDYYYY
} from "../../../helpers/formatDate";

const  ShowPerson = (props) => {
  const {
    reservation,
    setReservation,
    disabledElements
  } = props;
  const {getPersonData, setPersonData, modifyPersonData} = usePerson(reservation, setReservation);
  const {countries} = useCountry();
  
  const changePersonData = (type, value) => {
    const newReservation = modifyPersonData(type, value, reservation);
    setReservation(newReservation)
  };
  
  return (
    <>
    <div className="my-3 grid grid-cols-2">
      <div className="my-3 mr-3">
        <InputButton
          text="Customer ID"
          type="id"
          placeholderText={reservation.ID}
          disabled={true}
          onChangeFunction={changePersonData}
        />
      </div>
      <div className="my-3 ml-3">
        <InputButton
          text="Name"
          type="name"
          placeholderText={reservation.Name}
          disabled={disabledElements}
          onChangeFunction={changePersonData}
        />
      </div>
      <div className="my-3 mr-3">
        <InputButton
          text="Lastname 1"
          type="lastname1"
          placeholderText={reservation.LastName1}
          disabled={disabledElements}
          onChangeFunction={changePersonData}
        />
      </div>
      <div className="my-3 ml-3">
        <InputButton
          text="Lastname 2"
          type="lastname2"
          placeholderText={reservation.LastName2}
          disabled={disabledElements}
          onChangeFunction={changePersonData}
        />
      </div>
      <div className="-mt-0.5 mr-3">
        <DatePickerButton
          text="Date of birth"
          typeClass="3"
          type="birthdate"
          disabled={disabledElements}
          selectedDate={new Date(formatDateDTMMDDYYYY(reservation.Birth_Date))}
          onChangeFunction={changePersonData}
        />
      </div>
      <div className="my-3 ml-3">
        <InputButton
          text="Email"
          type="email"
          placeholderText={reservation.Email}
          disabled={disabledElements}
          onChangeFunction={changePersonData}
        />
      </div>
      <div>
        { disabledElements ? (
          <div className="my-3 mr-3">
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
          </div>
          ) : (
            <div className="my-3 mr-3">
              <DropDownSelect
                text="Gender"
                options={["Male", "Female", "Non-Binary", "Other"]}
                disabled={false}
                typeChange="gender"
                selectedOption={
                  reservation.Gender === 0 ? "Male" :
                  reservation.Gender === 1 ? "Female" :
                  reservation.Gender === 2 ? "Non-Binary" :
                  "Other"}
                onChangeFunction={changePersonData}
              />
            </div>
            )}
      </div>
      <div className="my-3 ml-3">
        { disabledElements ? (
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
        <div className="my-3 mr-3">
          { disabledElements ? (
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

export default ShowPerson;