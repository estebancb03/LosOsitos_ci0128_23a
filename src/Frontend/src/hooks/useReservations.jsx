import React from "react";
import { useState, useEffect } from "react";

import AxiosClient from "../config/AxiosClient";

const useReservations = () => {
  // State that controls the reservations
  const [reservations, setReservations] = useState([]);
  // State that constrols the spots
  const [spots, setSpots] = useState([]);
  // State that constrols the vehicles
  const [vehicles, setVehicles] = useState([]);
  // State that constrols the tickets
  const [tickets, setTickets] = useState([]);
  // State that constrols the services
  const [services, setServices] = useState([]);

  // Method that gets the records
  const fetchReservations = async () => {
    try {
      const url = "/reservation-list/getAllRecords";
      const records = await AxiosClient.get(url);
      setReservations(records.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the spots of all records
  const fetchSpots = async () => {
    try {
      const url = "/reservation-list/getAllSpots";
      const result = await AxiosClient.get(url);
      setSpots(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the vehicles of all records
  const fetchVehicles = async () => {
    try {
      const url = "/reservation-list/getAllVehicles";
      const result = await AxiosClient.get(url);
      setVehicles(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the tickets of all records
  const fetchTickets = async () => {
    try {
      const url = "/reservation-list/getAllTickets";
      const result = await AxiosClient.get(url);
      setTickets(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the services of all records
  const fetchServices = async () => {
    try {
      const url = "/reservation-list/getAllServices";
      const result = await AxiosClient.get(url);
      setServices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that adds the spots, tickets, services and vehicles to the reservations
  const formatReservations = () => {
    let formattedReservations = [...reservations];
    formattedReservations.map((reservation) => {
      const reservationID = reservation.ID + reservation.Reservation_Date;
      const Spots = spots.filter((spot) => spot.ID_Client + spot.Reservation_Date == reservationID);
      const Tickets = tickets.filter((ticket) => ticket.ID_Client + ticket.Reservation_Date == reservationID);
      const Services = services.filter((service) => service.ID_Client + service.Reservation_Date == reservationID);
      const Vehicles = vehicles.filter((vehicle) => vehicle.ID_Client + vehicle.Reservation_Date == reservationID);
      reservation.Spots = Spots.length !== 0 ? Spots : null;
      reservation.Tickets = Tickets.length !== 0 ? Tickets : null;
      reservation.Services = Services.length !== 0 ? Services : null;
      reservation.Vehicles = Vehicles.length !== 0 ? Vehicles : null;
      reservation.NewVehicles = [];
    });
    setReservations(formattedReservations);
  };

  useEffect(() => {
    fetchSpots();
    fetchTickets();
    fetchVehicles();
    fetchServices();
    fetchReservations();
  }, []);

  useEffect(() => {
    formatReservations();
  }, [spots, vehicles, tickets, services]);

  return { reservations };
};

export default useReservations;