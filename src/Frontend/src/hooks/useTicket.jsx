import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useTicket = () => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;

  const ticketOptions = [
    "National Children (0-6 years)",
    "National Children (7-12 years)",
    "National Adult",
    "National Senior Citysen",
    "Foreign Children (0-6 years)",
    "Foreign Children (7-12 years)",
    "Foreign Adult",
    "Foreign Senior Citysen"
  ];
  const [ticketPrices, setTicketPrices] = useState([]);

  const formatTicket = (ticket) => {
    let resultAgeRange;
    let resultDemographicGroup;
    const { Age_Range, Demographic_Group } = ticket;
    if (Age_Range === 0) {
      resultAgeRange = "Children (7-12 years)";
    } else if (Age_Range === 1) {
      resultAgeRange = "Adult";
    } else if (Age_Range === 2) {
      resultAgeRange = "Children (0-6 years)";
    } else if (Age_Range === 3) {
      resultAgeRange = "Senior Citysen";
    }
    if (Demographic_Group === 0) {
      resultDemographicGroup = "National";
    } else if (Demographic_Group === 1) {
      resultDemographicGroup = "Foreign";
    }

    return resultDemographicGroup + " " + resultAgeRange;
  };

  const formatTicketPrices = async () => {
    const usdTicketPrices = await getUSDTickets();
    const crcTicketPrices = await getCRCTickets();
    const formatedTicketPrices = [...usdTicketPrices, ...crcTicketPrices];
    setTicketPrices(formatedTicketPrices);
  };

  const getUSDTickets = async () => {
    try {
      const url = '/ticket-prices-usd';
      await AuthToken(token);
      const { data } = await AxiosClient.get(url);
      return data;
    } catch (exception) {
      console.error(exception);
    }
  };

  const getCRCTickets = async () => {
    try {
      const url = '/ticket-prices-crc';
      await AuthToken(token);
      const { data } = await AxiosClient.get(url);
      return data;
    } catch (exception) {
      console.error(exception);
    }
  };

  const modifyTicket = (type, value, reservation) => {
    const newReservation = {...reservation};
    const newTickets = [...reservation.Tickets];
    if (type[0] === "name") {
      if (value === "Foreign Adult") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 1;
      } else if (value === "Foreign Children (7-12 years)") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 0;
      } else if (value === "National Adult") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 1;
      } else if (value === "National Children (7-12 years)") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 0;
      } else if (value === "Foreign Children (0-6 years)") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 2;
      } else if (value === "National Children (0-6 years)") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 2;
      } else if (value === "Foreign Senior Citysen") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 3;
      } else if (value === "National Senior Citysen") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 3;
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

  const getPriceByARDGCurrency = async (Age_Range, Demographic_Group, Reservation_Type, Ticket) => {
    const filteredPrices = ticketPrices.filter((ticket) =>
      ticket.Age_Range === Age_Range &&
      ticket.Demographic_Group === Demographic_Group &&
      ticket.Reservation_Type === Reservation_Type
    );
    Ticket.Price = filteredPrices[0].Price;
  }

  const extractTicketData = (ticketName, Reservation_Type) => {
    const data = {
      Age_Range: 0,
      Demographic_Group: 0,
      Reservation_Type,
      Special: 0,
      Price: 0
    };
    if (ticketName === "Foreign Adult") {
      data.Demographic_Group = 1;
      data.Age_Range = 1;
    } else if (ticketName === "Foreign Children (7-12 years)") {
      data.Demographic_Group = 1;
      data.Age_Range = 0;
    } else if (ticketName === "National Adult") {
      data.Demographic_Group = 0;
      data.Age_Range = 1;
    } else if (ticketName === "National Children (7-12 years)") {
      data.Demographic_Group = 0;
      data.Age_Range = 0;
    } else if (ticketName === "Foreign Children (0-6 years)") {
      data.Demographic_Group = 1;
      data.Age_Range = 2;
    } else if (ticketName === "National Children (0-6 years)") {
      data.Demographic_Group = 0;
      data.Age_Range = 2;
    } else if (ticketName === "Foreign Senior Citysen") {
      data.Demographic_Group = 1;
      data.Age_Range = 3;
    } else if (ticketName === "National Senior Citysen") {
      data.Demographic_Group = 0;
      data.Age_Range = 3;
    }
    ticketPrices.map((ticket) => {
      if (ticket.Age_Range === data.Age_Range &&
          ticket.Demographic_Group === data.Demographic_Group &&
          ticket.Reservation_Type === data.Reservation_Type &&
          ticket.Special === data.Special
      ) {
        data.Price = ticket.Price;
      }
    });
    return data;
  };

  const modifyNewTicket = (type, value, reservation) => {
    const newReservation = {...reservation};
    const newTickets = [...reservation.NewTickets];
    if (type[0] === "name") {
      if (value === "Foreign Adult") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 1;
      } else if (value === "Foreign Children (7-12 years)") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 0;
      } else if (value === "National Adult") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 1;
      } else if (value === "National Children (7-12 years)") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 0;
      } else if (value === "Foreign Children (0-6 years)") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 2;
      } else if (value === "National Children (0-6 years)") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 2;
      } else if (value === "Foreign Senior Citysen") {
        newTickets[type[1]].Demographic_Group = 1;
        newTickets[type[1]].Age_Range = 3;
      } else if (value === "National Senior Citysen") {
        newTickets[type[1]].Demographic_Group = 0;
        newTickets[type[1]].Age_Range = 3;
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
    newReservation.NewTickets = newTickets;
    return newReservation;
  };

  const addTicket = (ticketOption, tickets) => {
    const newTickets = { ...tickets };
    if (ticketOption === 'National Children (0-6 years)') {
      ++newTickets.NC06; 
    } else if (ticketOption === 'National Children (7-12 years)') {
      ++newTickets.NC712;
    } else if (ticketOption === 'National Adult') {
      ++newTickets.NA;
    } else if (ticketOption === 'National Senior Citysen') {
      ++newTickets.NSC;
    } else if (ticketOption === 'Foreign Children (0-6 years)') {
      ++newTickets.FC06;
    } else if (ticketOption === 'Foreign Children (7-12 years)') {
      ++newTickets.FC712;
    } else if (ticketOption === 'Foreign Adult') {
      ++newTickets.FA;
    } else if (ticketOption === 'Foreign Senior Citysen') {
      ++newTickets.FSC;
    }
    return newTickets;
  };

  const deleteTicket = (ticketOption, tickets) => {
    const newTickets = { ...tickets };
    if (ticketOption === 'National Children (0-6 years)' &&
        newTickets.NC06 !== 0) {
      --newTickets.NC06; 
    } else if (ticketOption === 'National Children (7-12 years)' &&
               newTickets.NC712 !== 0) {
      --newTickets.NC712;
    } else if (ticketOption === 'National Adult' &&
               newTickets.NA !== 0) {
      --newTickets.NA;
    } else if (ticketOption === 'National Senior Citysen' &&
               newTickets.NSC !== 0) {
      --newTickets.NSC;
    } else if (ticketOption === 'Foreign Children (0-6 years)' &&
               newTickets.FC06 !== 0) {
      --newTickets.FC06;
    } else if (ticketOption === 'Foreign Children (7-12 years)' &&
               newTickets.FC712 !== 0) {
      --newTickets.FC712;
    } else if (ticketOption === 'Foreign Adult' &&
               newTickets.FA !== 0) {
      --newTickets.FA;
    } else if (ticketOption === 'Foreign Senior Citysen' &&
               newTickets.FSC !== 0) {
      --newTickets.FSC;
    }
    return newTickets;
  };

  const getTicketQuantity = (ticketOption, tickets) => {
    let quantity = 0;
    if (ticketOption === 'National Children (0-6 years)') {
      quantity = tickets.NC06; 
    } else if (ticketOption === 'National Children (7-12 years)') {
      quantity = tickets.NC712;
    } else if (ticketOption === 'National Adult') {
      quantity = tickets.NA;
    } else if (ticketOption === 'National Senior Citysen') {
      quantity = tickets.NSC;
    } else if (ticketOption === 'Foreign Children (0-6 years)') {
      quantity = tickets.FC06;
    } else if (ticketOption === 'Foreign Children (7-12 years)') {
      quantity = tickets.FC712;
    } else if (ticketOption === 'Foreign Adult') {
      quantity = tickets.FA;
    } else if (ticketOption === 'Foreign Senior Citysen') {
      quantity = tickets.FSC;
    }
    return quantity;
  };

  const getTicketCurrency = (ticket) => {
    let currency = '$';
    const { Demographic_Group } = ticket
    if (Demographic_Group === 0 || Demographic_Group === 2) {
      currency = '₡';
    };
    return currency;
  };

  const formatAllTickets = (reservationData, tickets) => {
    const formatedTicket = {
      ID_Client: reservationData.ID,
      Reservation_Date: reservationData.Reservation_Date,
      Reservation_Type: reservationData.Reservation_Type,
      Age_Range: null,
      Demographic_Group: null,
      Special: 0,
      Amount: null,
      Price: null
    }
    let ticketData;
    let formated = [];
    if (tickets.NC06 !== 0) {
      ticketData = extractTicketData('National Children (0-6 years)', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.NC06;
      formated.push(newFormatedTicket);
    }
    if (tickets.NC712 !== 0) {
      ticketData = extractTicketData('National Children (7-12 years)', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.NC712;
      formated.push(newFormatedTicket);
    }
    if (tickets.NA !== 0) {
      ticketData = extractTicketData('National Adult', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.NA;
      formated.push(newFormatedTicket);
    }
    if (tickets.NSC !== 0) {
      ticketData = extractTicketData('National Senior Citysen', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.NSC;
      formated.push(newFormatedTicket);
    }
    if (tickets.FC06 !== 0) {
      ticketData = extractTicketData('Foreign Children (0-6 years)', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.FC06;
      formated.push(newFormatedTicket);
    }
    if (tickets.FC712 !== 0) {
      ticketData = extractTicketData('Foreign Children (7-12 years)', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.FC712;
      formated.push(newFormatedTicket);
    }
    if (tickets.FA !== 0) {
      ticketData = extractTicketData('Foreign Adult', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.FA;
      formated.push(newFormatedTicket);
    }
    if (tickets.FSC !== 0) {
      ticketData = extractTicketData('Foreign Senior Citysen', reservationData.Reservation_Type);
      const newFormatedTicket = { ...formatedTicket, ...ticketData };
      newFormatedTicket.Amount = tickets.FSC;
      formated.push(newFormatedTicket);
    }
    return formated;
  };

  useEffect(() => formatTicketPrices, []);

  return { 
    ticketOptions, 
    ticketPrices, 
    formatTicket, 
    modifyTicket, 
    modifyNewTicket, 
    extractTicketData,
    addTicket,
    deleteTicket,
    getTicketQuantity,
    getTicketCurrency,
    formatAllTickets
  };
};

export default useTicket;
