import { useEffect } from "react";
import Button from "../Buttons/Button";
import useReservations from "../../hooks/useReservations";

const ReservationStep0 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const { createOnlineReservation } = useReservations();

  // Method that updates the reservation data
  const updateReservationData = (Reservation_Type) => {
    const newReservationData = {...reservationData};
    const newWindows = {...windows};
    newReservationData.Reservation_Type = Reservation_Type;
    newWindows.Step0 = false;
    newWindows.Step1 = true;
    setReservationData(newReservationData);
    setWindows(newWindows);
  };

  useEffect(() => setReservationData(createOnlineReservation()), []);

  return (
    <>
      {windows.Step0 && (
        <div>
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Choose the type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-1">
            <div className="h-20">
              <div className="h-10 mr-5 my-5 sm:mr-0 sm:my-0 sm:mt-4">
                <Button
                  text="Camping"
                  onclickFunction={() => updateReservationData(1) }
                />
              </div>
            </div>
            <div className="h-20">
              <div className="h-10 ml-5 my-5 sm:ml-0 sm:my-0">
                <Button
                  text="Picnic"
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
