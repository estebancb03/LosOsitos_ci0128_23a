import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useTicket = () => {
  // Ticket options
  const ticketOptions = [
    "National-Children",
    "National-Adult",
    "Foreign-Children",
    "Foreign-Adult"
  ];
  // State that constrols the prices
  const [ticketPrices, setTicketPrices] = useState([]);

  // Method that formats the ticket information
  const formatTicket = (ticket) => {
    const {Age_Range, Demographic_Group} = ticket;
    const resultAgeRange = Age_Range == 0 ? "Children" : "Adult";
    const resultDemographicGroup =
      Demographic_Group == 0 ? "National" : "Foreign";
    return resultDemographicGroup + "-" + resultAgeRange;
  };

  // Method that formats the ticket prices
  const formatTicketPrices = async () => {
    const usdTicketPrices = await getUSDTickets();
    const crcTicketPrices = await getCRCTickets();
    const formatedTicketPrices = [...usdTicketPrices, ...crcTicketPrices];
    setTicketPrices(formatedTicketPrices);
  };

  // Method that gets the usd tickets
  const getUSDTickets = async () => {
    try {
      const url = '/ticket-prices-usd';
      const { data } = await AxiosClient.get(url);
      return data;
    } catch (exception) {
      console.error(exception);
    }
  };

  // Method that gets the crc tickets
  const getCRCTickets = async () => {
    try {
      const url = '/ticket-prices-crc';
      const { data } = await AxiosClient.get(url);
      return data;
    } catch (exception) {
      console.error(exception);
    }
  };

  // Method that changes the data of a ticket
  const modifyTicket = (type, value, reservation) => {
    const newReservation = {...reservation};
    const newTickets = [...reservation.Tickets];
    if (type[0] === "name") {
      if (value === "Foreign-Adult") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 1;
      } else if (value === "Foreign-Children") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 0;
      } else if (value === "National-Adult") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 1;
      } else if (value === "National-Children") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 0;
      }
    } else if (type[0] === "amount") {
      newTickets[type[1]].Amount = value;
    } else if (type[0] === "special") {
      newTickets[type[1]].Special = value;
    } else if (type[0] === "price") {
      newTickets[type[1]].Price = value;
    }

    if (newTickets[type[1]].Special === 0 || type[0] === "name") {
      getPriceByARDGCurrency(
        newTickets[type[1]].Age_Range,
        newTickets[type[1]].Demographic_Group,
        newReservation.Reservation_Type,
        newTickets[type[1]]
        );
    }
    newReservation.Tickets = newTickets;
    return newReservation;
  };

  // Method that get the price by age range, demographic group, reservation type and currency
  const getPriceByARDGCurrency = async (Age_Range, Demographic_Group, Reservation_Type, Ticket) => {
    const filteredPrices = ticketPrices.filter((ticket) =>
      ticket.Age_Range === Age_Range &&
      ticket.Demographic_Group === Demographic_Group &&
      ticket.Reservation_Type === Reservation_Type
    );
    Ticket.Price = filteredPrices[0].Price;
  }

  useEffect(() => formatTicketPrices, []);

  return { ticketOptions, ticketPrices, formatTicket, modifyTicket };
};

export default useTicket;
