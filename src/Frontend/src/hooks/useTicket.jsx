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

  useEffect(() => formatTicketPrices, []);

  return { ticketOptions, ticketPrices, formatTicket, modifyTicket, modifyNewTicket, extractTicketData };
};

export default useTicket;
