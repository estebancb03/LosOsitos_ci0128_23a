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
      console.log("person");
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
      console.log("client");
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
      console.log("reservation");
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
      console.log("tickets");
      const { ID, Reservation_Date, Tickets } = reservationData;
      const url = "/reservationTicket";
      await Promise.all(
        Tickets.map(async (ticket) => {
          console.log('tickets map')
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
      console.log("reservation type");
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

  // Method that inserts a spot camping
  const insertSpotsCamping = async () => {
    try {
      console.log("spots");
      const { ID, Reservation_Date, Spots } = reservationData;
      const url = "/spots";
      await Promise.all(
        Spots.map(async (spot) => {
          console.log(Spots)
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Location_Spot: spot.Location_Spot,
            Price: spot.Price
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateReservationData = async (method) => {
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
      // insertPerson().then(
      //   insertClient()
      // ).then(
      //   insertReservation()
      // ).then(
      //   insertReservationTicket()    
      // ).then(
      //   insertReservationType()
      // ).then(
      //   insertSpotsCamping()
      // )
      await insertPerson();
      await insertClient();
      await insertReservation();
      insertReservationTicket();
      await insertReservationType();
      insertSpotsCamping();
      newWindows.Step5 = false;
      newWindows.Step7 = true;
    }
    newReservationData.QRData = {
      data: newReservationData.ID + newReservationData.Reservation_Date,
      mail: newReservationData.Email,
      text: reservationData
    };
    setWindows(newWindows);
    setReservationData(newReservationData);
    console.log('correo');
    sendQRData(newReservationData.QRData);
  };



  // Method to send data to be emailed
  const sendQRData = async (value) => {
    try {
      console.log(value);
      const data = value;
      const url = "/mail";
      await AxiosClient.post(url, {
        data,
      });
    } catch (exception) {
      console.log(exception);
    }
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
