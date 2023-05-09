import Button from "../Buttons/Button";
import AxiosClient from "../../config/AxiosClient";

const ReservationStep5 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  // Method thah inserts a person
  const insertPerson = async () => {
    try {
      const {
        ID,
        Name,
        LastName1,
        LastName2,
        Gender,
        Birth_Date,
        Email,
        Country_Name,
      } = reservationData;
      const url = "/person";
      await AxiosClient.post(url, {
        ID,
        Name,
        LastName1,
        LastName2,
        Gender,
        Birth_Date,
        Email,
        Country_Name,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertClient = async () => {
    try {
      const { ID } = reservationData;
      const url2 = "/client";
      await AxiosClient.post(url2, {
        ID_Person: ID,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method tha inserts a reservation
  const insertReservation = async () => {
    try {
      const { ID, Reservation_Date } = reservationData;
      const url = "/reservation";
      await AxiosClient.post(url, {
        ID_Client: ID,
        Reservation_Date,
        Payment_Method: 2,
        Payment_Proof: null,
        State: 1,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that inserts a reservation ticket
  const insertReservationTicket = async () => {
    try {
      const { ID, Reservation_Date, Tickets } = reservationData;
      const url = "/reservationTicket";
      await Promise.all(
        Tickets.map(async (ticket) => {
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Age_Range: ticket.Age_Range,
            Demographic_Group: ticket.Demographic_Group,
            Reservation_Type: ticket.Reservation_Type,
            Price: ticket.Price,
            Amount: ticket.Amount,
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that inserts a camping or a picnic
  const insertReservationType = async () => {
    try {
      const { ID, Reservation_Date, Start_Date, End_Date, Reservation_Method } =
        reservationData;
      if (reservationData.Reservation_Type === 0) {
        const url = "/picnic";
        await AxiosClient.post(url, {
          ID_Client: ID,
          Reservation_Date,
        });
      } else {
        const url = "/camping";
        await AxiosClient.post(url, {
          ID_Client: ID,
          Reservation_Date,
          Start_Date,
          End_Date,
          Reservation_Method: 1
        });
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateReservationData = (method) => {
    const newReservationData = { ...reservationData };
    const newWindows = { ...windows };
    newReservationData.Payment_Method = method;
    if (
      newReservationData.Payment_Method !== 0 &&
      newReservationData.Payment_Method === 1
    ) {
      newWindows.Step5 = false;
      newWindows.Step6 = true;
    } else if (
      newReservationData.Payment_Method !== 0 &&
      newReservationData.Payment_Method === 2
    ) {
      insertPerson();
      insertClient();
      insertReservation();
      insertReservationTicket();
      insertReservationType();
      newWindows.Step5 = false;
      newWindows.Step7 = true;
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
            <div className="mt-1 sm:mt-0">
              <div className="">
                <Button
                  text="Cash"
                  onclickFunction={(e) => updateReservationData(2)}
                />
              </div>
            </div>
            <div className="mb-8 sm:mt-5">
              <Button
                text="Back"
                onclickFunction={(e) => {
                  const newWindows = { ...windows };
                  reservationData.Reservation_Type == 0
                    ? (newWindows.Step2 = true)
                    : (newWindows.Step3 = true);
                  newWindows.Step5 = false;
                  setWindows(newWindows);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep5;
