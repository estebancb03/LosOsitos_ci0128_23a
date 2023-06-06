import Button from "../Buttons/Button";
import DatePickerButton from "../Buttons/DatePickerButton";
import useValidations from "../../hooks/useValidations";
import AddPerson from "../ReservationList/Add/AddPerson";
import { formatDateDTMMDDYYYY } from "../../helpers/formatDate";

const ReservationStep1 = (props) => {
  const { windows, setWindows, reservationData, setReservationData } = props;
  const { validatePersonalData, validateDates } =
    useValidations(reservationData);

  const backToStep0 = () => {
    const newWindows = { ...windows };
    newWindows.Step0 = true;
    newWindows.Step1 = false;
    setWindows(newWindows);
  };

  const goToStep2 = () => {
    const newWindows = { ...windows };
    if (validatePersonalData() && validateDates()) {
      newWindows.Step2 = true;
      newWindows.Step1 = false;
    } else {
      alert("Incorrect data, check the information entered");
    }
    setWindows(newWindows);
  };

  const changeDates = (type, value) => {
    const newReservationData = { ...reservationData };
    if (type === "picnicdate") {
      newReservationData.Picnic_Date = value;
    } else if (type === "startdate") {
      newReservationData.Start_Date = value;
    } else if (type === "enddate") {
      newReservationData.End_Date = value;
    }
    setReservationData(newReservationData);
  };

  return (
    <>
      {windows.Step1 && (
        <div className="mb-10">
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
            Personal information
          </h2>
          <div className="mx-2">
            <AddPerson
              reservation={reservationData}
              setReservation={setReservationData}
            />
          </div>
          {reservationData.Reservation_Type === 0 ? (
            <h2 className="pl-2 font-semibold text-2xl">Picnic Date</h2>
          ) : (
            <h2 className="pl-2 font-semibold text-2xl">Camping Dates</h2>
          )}
          <div className="my-2 grid grid-cols-2">
            {reservationData.Reservation_Type === 0 ? (
              <div className="-mt-3 mb-3">
                <div className="mx-2 mr-3">
                  <DatePickerButton
                    text=" "
                    typeClass="3"
                    type="picnicdate"
                    disabled={false}
                    selectedDate={
                      new Date(
                        formatDateDTMMDDYYYY(reservationData.Picnic_Date)
                      )
                    }
                    onChangeFunction={changeDates}
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <div className="mx-2 mr-3">
                  <DatePickerButton
                    text="Start date"
                    typeClass="3"
                    type="startdate"
                    disabled={false}
                    selectedDate={
                      new Date(formatDateDTMMDDYYYY(reservationData.Start_Date))
                    }
                    onChangeFunction={changeDates}
                  />
                </div>
              </div>
            )}
            {reservationData.Reservation_Type === 1 && (
              <div className="ml-3 mr-2 mb-3">
                <DatePickerButton
                  text="End date"
                  typeClass="3"
                  type="enddate"
                  disabled={false}
                  selectedDate={
                    new Date(formatDateDTMMDDYYYY(reservationData.End_Date))
                  }
                  onChangeFunction={changeDates}
                />
              </div>
            )}
          </div>
          <div className="mx-2 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div className="mb-8">
              <Button text="Back" onclickFunction={backToStep0} />
            </div>
            <div className="mb-8">
              <Button text="Next" onclickFunction={goToStep2} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep1;
