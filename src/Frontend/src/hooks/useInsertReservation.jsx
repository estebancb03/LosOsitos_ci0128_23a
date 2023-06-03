import React from "react";
import AxiosClient from "../config/AxiosClient";

const useInsertReservation = (reservation) => {
  // Method that inserts a new vehicle
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

  // Method that inserts a new service
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

  // Method that inserts a new ticket
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

  // Method that inserts a new spot
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
  
  // Method that inserts a new person
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

  // Method that inserts a client
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

  // Method that inserts a reservation
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

  // Method that inserts all the data
  const insertReservation = async () => {
    await insertPersonData();
    await insertClient();
    await insertMainData();
    await insertNewTicket();
    await insertNewSpot();
    await insertNewService();
    await insertNewVehicle();
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
