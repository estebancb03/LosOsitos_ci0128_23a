import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useUpdateReservation = (reservation) => {
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
            ID,
            Reservation_Date,
            Name_Service: NewServices[index].Name_Service,
            Price: NewServices[index].Price,
            Quantity: parseInt(NewServices[index].Quantity)
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the services
  const updateServices = async () => {
    try {
      const { ID, Reservation_Date, Services } = reservation;
      const url = `/getServicesByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      const url2 = "/updateService";
      await Promise.all(
        data.map(async (service, index) => {
          await AxiosClient.put(url2, {
            ID,
            Reservation_Date,
            Name_Service: service.Name_Service,
            Quantity: parseInt(Services[index].Quantity)
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the tickets
  const updateTickets = async () => {
    try {
      const { ID, Reservation_Date, Tickets } = reservation;
      const url = `/getTicketsByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      let parsedTickets = [];
      Tickets.map((ticket) => {
        ticket.Age_Range = parseInt(ticket.Age_Range);
        ticket.Demographic_Group = parseInt(ticket.Demographic_Group);
        ticket.Special = parseInt(ticket.Special);
        ticket.Price = parseInt(ticket.Price);
        ticket.Amount = parseInt(ticket.Amount);
        parsedTickets.push(ticket);
      });
      const url2 = "/updateTicket";
      await Promise.all(
        data.map(async (ticket, index) => {
          await AxiosClient.put(url2, {
            ID,
            Reservation_Date,
            Age_Range: ticket.Age_Range,
            Amount: ticket.Amount,
            Special: ticket.Special,
            Demographic_Group: ticket.Demographic_Group,
            Price: ticket.Price,
            newAge_Range: parsedTickets[index].Age_Range,
            newDemographic_Group: parsedTickets[index].Demographic_Group,
            newSpecial: parsedTickets[index].Special,
            newAmount: parsedTickets[index].Amount,
            newPrice: parsedTickets[index].Price
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the spots
  const updateSpots = async () => {
    try {
      const { ID, Reservation_Date, Spots } = reservation;
      const url = `/getSpotsByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      let oldSpots = [];
      let spotsToChange = [];
      data.map((spot, index) => oldSpots.push(spot.Location_Spot));
      Spots.map((spot, index) => {
        if (!oldSpots.includes(parseInt(spot.Location_Spot)))
          spotsToChange.push(index);
      });
      const url2 = "/updateSpot";
      await Promise.all(
        spotsToChange.map(async (spot) => {
          await AxiosClient.put(url2, {
            ID,
            Reservation_Date,
            oldLocation_Spot: oldSpots[spot],
            newLocation_Spot: parseInt(Spots[spot].Location_Spot),
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the vehicles
  const updateVehicles = async () => {
    try {
      const { ID, Reservation_Date, Vehicles } = reservation;
      const url = `/getVehiclesByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      let oldVehicles = [];
      let vehiclesToChange = [];
      data.map((vehicle, index) => oldVehicles.push(vehicle.ID_Vehicle));
      Vehicles.map((vehicle, index) => {
        if (!oldVehicles.includes(vehicle)) vehiclesToChange.push(index);
      });
      const url2 = "/updateVehicle";
      await Promise.all(
        vehiclesToChange.map(async (vehicle) => {
          await AxiosClient.put(url2, {
            ID,
            Reservation_Date,
            oldID_Vehicle: oldVehicles[vehicle],
            newID_Vehicle: Vehicles[vehicle],
          });
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the customer data
  const updatePersonData = async () => {
    try {
      const {
        ID,
        Reservation_Date,
        Name,
        LastName1,
        LastName2,
        Birth_Date,
        Email,
        Gender,
        Country_Name,
        State
      } = reservation;
      const url = "/updatePersonData";
      await AxiosClient.put(url, {
        ID,
        Reservation_Date,
        Name,
        LastName1,
        LastName2,
        Birth_Date,
        Email,
        Gender,
        Country_Name,
        State: Country_Name === "Costa Rica" ? State : "NULL"
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the data of a camping dates
  const updateStartEndDates = async () => {
    try {
      const { ID, Reservation_Date, Start_Date, End_Date } = reservation;
      const url = "/updateStartEndDates";
      await AxiosClient.put(url, {
        ID,
        Reservation_Date,
        Start_Date,
        End_Date,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that updates the state
  const updateState = async () => {
    try {
      const { ID, Reservation_Date, Status } = reservation;
      const url = "/updateState";
      await AxiosClient.put(url, {
        ID,
        Reservation_Date,
        Status,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that update all about the reservation
  const updateReservation = () => {
    updateVehicles();
    updatePersonData();
    updateServices();
    updateTickets();
    updateState();
    insertNewVehicle();
    insertNewService();
    updateSpots();
    if (reservation.Reservation_Type === 1) updateStartEndDates();
  };

  return { updateReservation };
};

export default useUpdateReservation;
