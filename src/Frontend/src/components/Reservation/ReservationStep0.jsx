import { useState } from "react";
import Button from "../Buttons/Button";

const ReservationStep0 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  // Method that updates the reservation data
  const updateReservationData = (Reservation_Type) => {
    const newReservationData = {...reservationData};
    const newWindows = {...windows};
    newReservationData.Reservation_Type = Reservation_Type;
    newWindows.Step0 = false;
    newWindows.Step2 = true;
    setReservationData(newReservationData);
    setWindows(newWindows);
  };

  return (
    <>
      {windows.Step0 && (
        <div>
          <div className="grid grid-cols-2">
            <div className="h-20">
              <div className="h-10 mr-5 my-5">
                <Button
                  className="mx-5 mr-5"
                  text="Camping"
                  type="add"
                  onclickFunction={() => updateReservationData(1) }
                />
              </div>
            </div>
            <div className="h-20">
              <div className="h-10 ml-5 my-5">
                <Button
                  className="mx-5 mr-5"
                  text="Picnic"
                  type="add"
                  onclickFunction={() => updateReservationData(0)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep0;
