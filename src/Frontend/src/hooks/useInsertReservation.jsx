import React from "react";
import AxiosClient from "../config/AxiosClient";

const useInsertReservation = (reservation) => {

  const insertNewVehicle = async () => {
    try {
      const { ID, Reservation_Date, NewVehicles } = reservation;
      const url = "/insertVehicle";
      await Promise.all(
        NewVehicles.map(async (vehicle, index) => {
          await AxiosClient.post(url, {
            ID,
            Reservation_Date,
            ID_Vehicle: NewVehicles[index],
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };
  const insertNewService = async () => {
    try {
      const { ID, Reservation_Date, NewServices } = reservation;
      const url = "/insertServiceReservation";
      await Promise.all(
        NewServices.map(async (service, index) => {
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Name_Service: NewServices[index].Name_Service,
            Price: NewServices[index].Price,
            Quantity: parseFloat(NewServices[index].Quantity),
            Currency: NewServices[index].Currency
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertNewTicket = async () => {
    try {
      const { ID, Reservation_Date, Reservation_Type, NewTickets } = reservation;
      const url = "/reservationTicket";
      await Promise.all(
        NewTickets.map(async (ticket, index) => {
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Reservation_Type,
            Age_Range: ticket.Age_Range,
            Demographic_Group: ticket.Demographic_Group,
            Special: ticket.Special,
            Price: parseFloat(ticket.Price),
            Amount: parseInt(ticket.Amount)
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertNewSpot = async () => {
    try {
      const { ID, Reservation_Date, NewSpots } = reservation;
      const url = "/spots";
      await Promise.all(
        NewSpots.map(async (spot) => {
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Location_Spot: spot.Location_Spot,
            Price: spot.Price,
            Currency: spot.Currency
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };
  
  const insertPersonData = async () => {
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
      } = reservation;
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
        State: Country_Name === "Costa Rica" ? State : null
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertClient = async () => {
    try {
      const { ID } = reservation;
      const url = "/client";
      await AxiosClient.post(url, {
        ID_Person: ID,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertMainData = async () => {
    try {
      const {
        ID,
        Reservation_Date,
        Reservation_Method,
        Payment_Method,
        Status
      } = reservation;
      const url = "/reservation";
      await AxiosClient.post(url, {
        ID_Client: ID,
        Reservation_Date,
        Payment_Method,
        Payment_Proof: "NULL",
        Status,
        Reservation_Method,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertPicnic = async () => {
    try {
      const {
        ID,
        Reservation_Date,
        Picnic_Date
      } = reservation;
      const url = "/picnic";
      await AxiosClient.post(url, {
        ID_Client: ID,
        Reservation_Date,
        Picnic_Date
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertCamping = async () => {
    try {
      const {
        ID,
        Reservation_Date,
        Start_Date,
        End_Date
      } = reservation;
      const url = "/camping";
      await AxiosClient.post(url, {
        ID_Client: ID,
        Reservation_Date,
        Start_Date,
        End_Date
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertReservationType = async () => {
    if (reservation.Reservation_Type === 0) {
      await insertPicnic();
    } else {
      await insertCamping();
    }
  };

  const insertReservation = async () => {
    await insertPersonData();
    await insertClient();
    await insertMainData();
    await insertReservationType();
    await insertNewVehicle();
    await insertNewTicket();
    await insertNewSpot();
    await insertNewService();
  };
  
  return {
    insertReservation,
    insertNewTicket,
    insertNewSpot,
    insertNewService,
    insertNewVehicle,
  }
};

export default useInsertReservation;
