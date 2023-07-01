import { useState, useEffect } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget.jsx";
import Button from "../Buttons/Button";
import AxiosClient from "../../config/AxiosClient";
import useCalculateFees from "../../hooks/useCalculateFees";
import { Checkbox } from "antd";

const ReservationStep5 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const {calculateTotalFee} = useCalculateFees(reservationData);
  const [image, setImage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

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
        State
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
        State
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

  const insertReservation = async () => {
    try {
      const { ID, Reservation_Date } = reservationData;
      const url = "/reservation";
      await AxiosClient.post(url, {
        ID_Client: ID,
        Reservation_Date,
        Payment_Method: 2,
        Payment_Proof: image,
        Status: 0,
        Reservation_Method: 0,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

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
            Special: 0,
            Price: ticket.Price,
            Amount: ticket.Amount,
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertReservationType = async () => {
    try {
      const { ID, Reservation_Date, Start_Date, End_Date, Picnic_Date } =
        reservationData;
      if (reservationData.Reservation_Type === 0) {
        const url = "/picnic";
        await AxiosClient.post(url, {
          ID_Client: ID,
          Reservation_Date,
          Picnic_Date,
        });
      } else {
        const url = "/camping";
        await AxiosClient.post(url, {
          ID_Client: ID,
          Reservation_Date,
          Start_Date,
          End_Date,
        });
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateReservationData = async (method) => {
    if (checkbox) { //condition to continue
      await insertPerson();
      await insertClient();
      await insertReservation();
      await insertReservationTicket();
      await insertReservationType();
      const newReservationData = { ...reservationData };
      const newWindows = { ...windows };
      const bill = calculateTotalFee();
      newWindows.Step5 = false;
      newWindows.Step6 = true;
      newReservationData.Payment_Proof = image;
      newReservationData.QRData = {
        data: newReservationData.ID + newReservationData.Reservation_Date,
        mail: newReservationData.Email,
        text: reservationData,
        crcBill: parseInt(bill[0]),
        usdBill: bill[1].toFixed(2)
      };
      setReservationData(newReservationData);
      setWindows(newWindows);
      sendQRData(newReservationData.QRData);
    } else {
      alert(
        "Check if you uploaded the payment proof or if you have already accepter the terms and conditions"
      );
    }
  };

  const sendQRData = async (value) => {
    try {
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
            Upload payment proof picture
          </h2>
          <CloudinaryUploadWidget 
          setImage={(imageProp) => setImage(imageProp)} /> 
          <br></br>
          <Checkbox
            onChange={() => {
              setCheckbox(!checkbox);
            }}
          >
            Agree with{" "}
            <a href="./termsconditions.jpeg" target="_blank">
              terms and conditions
            </a>
          </Checkbox>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
            <Button
              text="Back"
              onclickFunction={(e) => {
                const newWindows = { ...windows };
                newWindows.Step4 = true;
                newWindows.Step5 = false;
                setWindows(newWindows);
              }}
            />
            <Button
              text="Next"
              onclickFunction={() => {
                updateReservationData();
              }}
            />
            <div className="mb-1"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep5;
