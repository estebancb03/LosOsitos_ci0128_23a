import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useTicket = () => {
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
    let formatedTicketPrices = [];
    usdTicketPrices.map((ticket, index) => {
      let crcTicket = crcTicketPrices[index];
      let formatedTicket = {
        Age_Range: ticket.Age_Range,
        Demographic_Group: ticket.Demographic_Group,
        Reservation_Type: ticket.Reservation_Type,
        USD_Price: ticket.Price,
        CRC_Price: crcTicket.Price
      };
      formatedTicketPrices.push(formatedTicket);
    });
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

  };

  useEffect(() => formatTicketPrices, []);

  return { ticketPrices, formatTicket };
};

export default useTicket;
