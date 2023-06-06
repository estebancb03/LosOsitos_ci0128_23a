import React from "react";
import { useState, useEffect } from "react";
import useCountry from "./useCountry";

import AxiosClient from "../config/AxiosClient";

const useReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [spots, setSpots] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [services, setServices] = useState([]);
  const {countries} = useCountry();

  const createReservation = () => {
    return {
      ID: "",
      Name: "",
      LastName1: "",
      LastName2: "",
      Gender: 0,
      Email: "",
      Country_Name: "Argentina",
      Birth_Date: new Date().toISOString(),
      State: "",
      Reservation_Method: 1,
      Status: 1,
      Payment_Method: 2,
      Reservation_Type: 0,
      Reservation_Date: new Date().toISOString(),
      Picnic_Date: new Date().toISOString(),
      Start_Date: new Date().toISOString(),
      End_Date: new Date().toISOString(),
      NewSpots: [],
      NewTickets: [],
      NewServices: [],
      NewVehicles: []
    };
  };

  const createOnlineReservation = () => {
    return {
      ID: "",
      Name: "",
      LastName1: "",
      LastName2: "",
      Gender: 0,
      Email: "",
      Country_Name: "Argentina",
      Birth_Date: new Date().toISOString(),
      State: "",
      Reservation_Method: 0,
      Status: 0,
      Payment_Method: 0,
      Reservation_Type: 0,
      Reservation_Date: new Date().toISOString(),
      Picnic_Date: new Date().toISOString(),
      Start_Date: new Date().toISOString(),
      End_Date: new Date().toISOString(),
    };
  };

  const fetchReservations = async () => {
    try {
      const url = "/getAllRecords";
      const records = await AxiosClient.get(url);
      setReservations(records.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const fetchSpots = async () => {
    try {
      const url = "/getAllSpots";
      const result = await AxiosClient.get(url);
      setSpots(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const fetchVehicles = async () => {
    try {
      const url = "/getAllVehicles";
      const result = await AxiosClient.get(url);
      setVehicles(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const fetchTickets = async () => {
    try {
      const url = "/getAllTickets";
      const result = await AxiosClient.get(url);
      setTickets(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const fetchServices = async () => {
    try {
      const url = "/getAllServices";
      const result = await AxiosClient.get(url);
      setServices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const formatReservations = () => {
    let formattedReservations = [...reservations];
    formattedReservations.map((reservation) => {
      const reservationID = reservation.ID + reservation.Reservation_Date;
      const Spots = spots.filter(
        (spot) => spot.ID_Client + spot.Reservation_Date == reservationID
      );
      const Tickets = tickets.filter(
        (ticket) => ticket.ID_Client + ticket.Reservation_Date == reservationID
      );
      const Services = services.filter(
        (service) =>
          service.ID_Client + service.Reservation_Date == reservationID
      );
      const Vehicles = vehicles.filter(
        (vehicle) =>
          vehicle.ID_Client + vehicle.Reservation_Date == reservationID
      );
      reservation.Spots = Spots.length !== 0 ? Spots : null;
      reservation.Tickets = Tickets.length !== 0 ? Tickets : null;
      reservation.Services = Services.length !== 0 ? Services : null;
      reservation.Vehicles = Vehicles.length !== 0 ? Vehicles : null;
      reservation.NewVehicles = [];
      reservation.NewServices = [];
      reservation.NewTickets = [];
      reservation.NewSpots = [];
    });
    setReservations(formattedReservations);
  };

  const fetch = async () => {
    await fetchReservations();
    await fetchSpots();
    await fetchTickets();
    await fetchVehicles();
    await fetchServices();
  }

  useEffect(() => fetch, []);

  useEffect(() => {
    formatReservations();
  }, [spots, vehicles, tickets, services]);

  return { reservations, createReservation, createOnlineReservation, fetch, formatReservations };
};

export default useReservations;
