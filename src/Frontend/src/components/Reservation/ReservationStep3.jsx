import Button from "../Buttons/Button";
import DatePickerButton from "../Buttons/DatePickerButton";
import ShowTickets from "../ReservationList/Show/ShowTickets";
import { formatDateDTMMDDYYYY } from "../../helpers/formatDate";

const ReservationStep3 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const backToStep2 = () => {
    const newWindows = { ...windows };
    newWindows.Step2 = true;
    newWindows.Step3 = false;
    setWindows(newWindows);
  };

  const goToStep4 = () => {
    const newWindows = { ...windows };
    newWindows.Step4 = true;
    newWindows.Step3 = false;
    setWindows(newWindows);
  };

  return (
    <>
      {windows.Step3 && (
        <div className="">
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Summary</h2>
          <div className="my-2 grid grid-cols-2">
            {reservationData.Reservation_Type === 0 ? (
              <div className="-mt-3 mb-3">
                <div className="mx-2 mr-3">
                  <DatePickerButton
                    text="Picnic Date"
                    typeClass="3"
                    type="picnicdate"
                    disabled={true}
                    selectedDate={
                      new Date(
                        formatDateDTMMDDYYYY(reservationData.Picnic_Date)
                      )
                    }
                    onChangeFunction={() => {}}
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
                    disabled={true}
                    selectedDate={
                      new Date(formatDateDTMMDDYYYY(reservationData.Start_Date))
                    }
                    onChangeFunction={() => {}}
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
                  disabled={true}
                  selectedDate={
                    new Date(formatDateDTMMDDYYYY(reservationData.End_Date))
                  }
                  onChangeFunction={() => {}}
                />
              </div>
            )}
          </div>
          <div className="my-2 mx-2">
            <ShowTickets
              disabledElements={true}
              reservation={reservationData}
              setReservation={setReservationData}
            />
          </div>
          <h2 className="pt-5 font-semibold text-2xl"></h2>
          <div className="mx-2 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div className="mb-8">
              <Button text="Back" onclickFunction={backToStep2} />
            </div>
            <div className="mb-8">
              <Button text="Next" onclickFunction={goToStep4} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep3;
