import { QRCode } from "antd";

const ReservationStep7 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const value = reservationData.ID + reservationData.Reservation_Date;
  return (
    <>
      {windows.Step7 && (
        <div className="">
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
          Thanks for your purchase, enjoy your stay!
          </h2>
          <div className="flex justify-center items-center">
            <QRCode errorLevel="H" value={value} size={300} />
          </div>
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl"></h2>
        </div>
      )}
    </>
  );
};

export default ReservationStep7;
