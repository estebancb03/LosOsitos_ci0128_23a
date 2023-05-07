import Button from "../Buttons/Button";

const ReservationStep5 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const updateReservationData = (method) => {
    const newReservationData = { ...reservationData };
    const newWindows = { ...windows };
    newReservationData.Payment_Method = method;
    if (newReservationData.Payment_Method !== 0) {
      newWindows.Step5 = false;
      newWindows.Step6 = true;
    }
    setWindows(newWindows);
    setReservationData(newReservationData);
  };

  return (
    <>
      {windows.Step5 && (
        <div>
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
            Choose your payment method
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-1">
            <div className="mb-8 mt-1 sm:mb-0">
              <div className="">
                <Button
                  text="Credit Card"
                  onclickFunction={(e) => updateReservationData(0)}
                />
              </div>
            </div>
            <div className="mb-8 mt-1 sm:my-5">
              <div className="mx-5 sm:mx-0">
                <Button
                  text="Sinpe"
                  onclickFunction={(e) => updateReservationData(1)}
                />
              </div>
            </div>
            <div className="mb-8 mt-1 sm:mt-0">
              <div className="">
                <Button
                  text="Cash"
                  onclickFunction={(e) => updateReservationData(2)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep5;
