import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useUpdateReservation = (reservation) => {
  // Method that inserts a new vehicle
  const insertNewVehicle = async () => {
    try {
      const { ID, Reservation_Date, NewVehicles } = reservation;
      const url = '/reservation-list/insertVehicle';
      await Promise.all(
        NewVehicles.map(async (vehicle, index) => {
          await AxiosClient.post(url, {
            ID,
            Reservation_Date,
            ID_Vehicle: reservation.NewVehicles[index],
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
      const url = `/reservation-list/getServicesByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      const url2 = "/reservation-list/updateService";
      await Promise.all(
        data.map(async (service, index) => {
          await AxiosClient.put(url2, {
            ID,
            Reservation_Date,
            Name_Service: service.Name_Service,
            Schedule: Services[index].Schedule,
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
      const url = `/reservation-list/getTicketsByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      let parsedTickets = [];
      Tickets.map((ticket) => {
        ticket.Age_Range = parseInt(ticket.Age_Range);
        ticket.Demographic_Group = parseInt(ticket.Demographic_Group);
        ticket.Amount = parseInt(ticket.Amount);
        parsedTickets.push(ticket);
      });
      const url2 = "/reservation-list/updateTicket";
      await Promise.all(
        data.map(async (ticket, index) => {
          await AxiosClient.put(url2, {
            ID,
            Reservation_Date,
            Age_Range: ticket.Age_Range,
            Amount: ticket.Amount,
            Demographic_Group: ticket.Demographic_Group,
            newAmount: parsedTickets[index].Amount,
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
      const url = `/reservation-list/getSpotsByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      let oldSpots = [];
      let spotsToChange = [];
      data.map((spot, index) => oldSpots.push(spot.Location_Spot));
      Spots.map((spot, index) => {
        if (!oldSpots.includes(parseInt(spot.Location_Spot)))
          spotsToChange.push(index);
      });
      const url2 = "/reservation-list/updateSpot";
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
      const url = `/reservation-list/getVehiclesByReservationID/${ID}/${Reservation_Date}`;
      const { data } = await AxiosClient.get(url);
      let oldVehicles = [];
      let vehiclesToChange = [];
      data.map((vehicle, index) => oldVehicles.push(vehicle.ID_Vehicle));
      Vehicles.map((vehicle, index) => {
        if (!oldVehicles.includes(vehicle)) vehiclesToChange.push(index);
      });
      const url2 = "/reservation-list/updateVehicle";
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
        Email,
        Country_Name,
      } = reservation;
      const url = "/reservation-list/updatePersonData";
      await AxiosClient.put(url, {
        ID,
        Reservation_Date,
        Name,
        LastName1,
        LastName2,
        Email,
        Country_Name,
      });
    } catch (exception) {
      console.log(exception);
    }
  };
  
  // Method that updates the data of a camping dates
  const updateStartEndDates = async () => {
    try {
      const { ID, Reservation_Date, Start_Date, End_Date } = reservation;
      const url = "/reservation-list/updateStartEndDates";
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
      const { ID, Reservation_Date, State } = reservation;
      const url = "/reservation-list/updateState";
      await AxiosClient.put(url, {
        ID,
        Reservation_Date,
        State,
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
    updateSpots();
    if (reservation.Reservation_Type === 1) updateStartEndDates();
  };
  
  return { updateReservation };
};

export default  useUpdateReservation;