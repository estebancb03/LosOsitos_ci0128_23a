import { QRCode } from "antd";
import DatePickerButton from "../Buttons/DatePickerButton";
import ShowTickets from "../ReservationList/Show/ShowTickets";
import { formatDateDTMMDDYYYY } from "../../helpers/formatDate";

const ReservationStep6 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const value = reservationData.ID + reservationData.Reservation_Date;
  return (
    <>
    {windows.Step6 && (
      <div className="">
        <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
          Thanks for your purchase, enjoy your stay!
        </h2>
        <div className="flex justify-center items-center">
          <QRCode errorLevel="H" value={value} size={300} />
        </div>
        <div className="my-2 grid grid-cols-2">
          { reservationData.Reservation_Type === 0 ? (
            <div className="-mt-3 mb-3">
              <div className="mx-6 mr-3">
                <DatePickerButton
                  text="Picnic Date"
                  typeClass="3"
                  type="picnicdate"
                  disabled={true}
                  selectedDate={new Date(formatDateDTMMDDYYYY(reservationData.Picnic_Date))}
                  onChangeFunction={() => {}}
                />
              </div>
            </div>
            ) : (
              <div className="">
                <div className="mx-6 mr-3">
                  <DatePickerButton
                    text="Start date"
                    typeClass="3"
                    type="startdate"
                    disabled={true}
                    selectedDate={new Date(formatDateDTMMDDYYYY(reservationData.Start_Date))}
                    onChangeFunction={() => {}}
                  />
                </div>
              </div>
              )}
          {reservationData.Reservation_Type === 1 && (
            <div className="ml-3 mr-6 mb-3">
              <DatePickerButton
                text="End date"
                typeClass="3"
                type="enddate"
                disabled={true}
                selectedDate={new Date(formatDateDTMMDDYYYY(reservationData.End_Date))}
                onChangeFunction={() => {}}
              />
            </div>
            )}
        </div>
        <div className="my-2 mx-6">
          <ShowTickets
            disabledElements={true}
            reservation={reservationData}
            setReservation={setReservationData}
          />
        </div>
        <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl"></h2>
      </div>
      )}
    </>
    );
};

export default ReservationStep6;