import {useEffect} from "react";
import DropDownSelect from "../../Buttons/DropDownSelect";
import DatePickerButton from "../../Buttons/DatePickerButton";
import { formatDateDTMMDDYYYY } from "../../../helpers/formatDate";

const AddMainData = (props) => {
  const {reservation, setReservation} = props;

  const changeMainData = (type, value) => {
    const newReservation = {...reservation};
    if (type === "type") {
      if (value === "Picnic") {
        newReservation.Reservation_Type = 0;
      } else if (value === "Camping") {
        newReservation.Reservation_Type = 1;
      }
    } else if (type === "paymentmethod") {
      if (value === "Credit card") {
        newReservation.Payment_Method = 0;
      } else if (value === "Cash") {
        newReservation.Payment_Method = 2;
      }
    } else if (type === "picnicdate") {
      newReservation.Picnic_Date = value;
    } else if (type === "startdate") {
      newReservation.Start_Date = value;
    } else if (type === "enddate") {
      newReservation.End_Date = value;
    }
    setReservation(newReservation);
  };

  return (
    <>
      <div className="my-3 grid grid-cols-2">
        <div className="mr-3">
          <DropDownSelect
            text="Type"
            options={["Picnic", "Camping"]}
            disabled={false}
            typeChange="type"
            onChangeFunction={changeMainData}
          />
        </div>
        <div className="ml-3">
          <DropDownSelect
            text="Payment"
            options={["Cash", "Credit card"]}
            disabled={false}
            typeChange="paymentmethod"
            onChangeFunction={changeMainData}
          />
        </div>
        {reservation.Reservation_Type === 0 ? (
          <div className="my-3 mr-3">
            <DatePickerButton
              text="Picnic Date"
              typeClass="3"
              type="picnicdate"
              disabled={false}
              selectedDate={new Date(formatDateDTMMDDYYYY(reservation.Picnic_Date))}
              onChangeFunction={changeMainData}
            />
          </div>
        ) : (
          <div className="my-3 mr-3">
            <DatePickerButton
              text="Start Date"
              typeClass="3"
              type="startdate"
              disabled={false}
              selectedDate={new Date(formatDateDTMMDDYYYY(reservation.Start_Date))}
              onChangeFunction={changeMainData}
            />
          </div>
        )}
        {reservation.Reservation_Type === 1 && (
          <div className="my-3 ml-3">
            <DatePickerButton
              text="End Date"
              typeClass="3"
              type="enddate"
              disabled={false}
              selectedDate={new Date(formatDateDTMMDDYYYY(reservation.End_Date))}
              onChangeFunction={changeMainData}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AddMainData;
