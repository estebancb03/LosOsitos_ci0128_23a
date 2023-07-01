import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import DatePickerButton from "../../Buttons/DatePickerButton";
import {
  formatDateDTDDMMYYYY,
  formatDateDTMMDDYYYY
} from "../../../helpers/formatDate";

const ShowMainData = (props) => {
  const {
    reservation,
    setReservation,
    disabledElements
  } = props;

  // Method that changes the reservation main data
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
    } else if (type === "status") {
      console.log(value);
      if (value === "Pending") {
        newReservation.Status = 0;
      } else if (value === "Approved") {
        newReservation.Status = 1;
      } else if (value === "In Park"){
        newReservation.Status = 2;
      } else if (value === "Finished"){
      newReservation.Status = 3;
    }
      console.log(newReservation.Status);
    } else if (type === "picnicdate") {
      newReservation.Picnic_Date = value;
    } else if (type === "startdate") {
      newReservation.Start_Date = value;
    } else if (type === "endDate") {
      newReservation.End_Date = value;
    }
    setReservation(newReservation);
  };

  return (
    <>
      {console.log(reservation.Status)}
      <div className="-mt-3 my-3 grid grid-cols-2">
        <div className="my-3 mr-3">
          <InputButton
            text="Reservation Date"
            placeholderText={formatDateDTDDMMYYYY(reservation.Reservation_Date)}
            disabled={true}
          />
        </div>
        <div className="my-3 ml-3">
          {disabledElements ? (
            <InputButton
              text="Status"
              placeholderText={reservation.Status === 0 ? "Pending" 
              : reservation.Status === 1 ? "Approved"
              : reservation.Status === 2 ?"In Park"
              : "Finished"}
              disabled={true}
            />
          ) : (
            <DropDownSelect
              text="Status"
              options={["Pending", "Approved", "In Park", "Finished"]}
              selectedOption={reservation.Status === 0 ? "Pending" 
              : reservation.Status === 1 ? "Approved" 
              : reservation.Status === 2 ?"In Park"
              : "Finished"}
              disabled={disabledElements}
              typeChange="status"
              onChangeFunction={changeMainData}
            />
          )}
        </div>
        <div className="my-3 mr-3">
          <InputButton
            text="Type"
            placeholderText={
              reservation.Reservation_Type == 0 ? "Picnic" : "Camping"
            }
            disabled={true}
          />
        </div>
        <div className="my-3 ml-3">
          <InputButton
            text="Method"
            placeholderText={
              reservation.Reservation_Type == 0 ? "Online" : "Insite"
            }
            disabled={true}
          />
        </div>
        {reservation.Reservation_Type === 0 ? (
          <div className="mr-3">
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
            <div className="mr-3">
              <DatePickerButton
                text="Start Date"
                typeClass="3"
                type="startdate"
                disabled={disabledElements}
                selectedDate={new Date(formatDateDTMMDDYYYY(reservation.Start_Date))}
                onChangeFunction={changeMainData}
              />
            </div>
            )}
        {reservation.Reservation_Type === 1 && (
          <div className="ml-3">
            <DatePickerButton
              text="End Date"
              typeClass="3"
              type="endDate"
              disabled={disabledElements}
              selectedDate={new Date(formatDateDTMMDDYYYY(reservation.End_Date))}
              onChangeFunction={changeMainData}
            />
          </div>
          )}
      </div>
    </>
  );
};

export default ShowMainData;