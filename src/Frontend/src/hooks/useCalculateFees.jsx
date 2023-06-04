import { getDaysDifference } from "../helpers/formatDate";
import useExchange from "./useExchange";

const useCalculateFees = (reservation) => {
  // Exchange hook
  const { exchange } = useExchange();

  // Method that applies the exchange
  const applyExchange = (nationalFee, foreignFee) => {
    const CRCFee = (foreignFee.fee / exchange.CRC) + nationalFee.fee;
    const USDFee = (nationalFee.fee / exchange.USD) + foreignFee.fee;
    return [CRCFee, USDFee];
  }
  
  // Method that calculates the tickets fees
  const calculatesTicketsFee = () => {
    let nationalFee = { fee: 0, currency: "CRC" };
    let foreignFee = { fee: 0, currency: "USD" };
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate);
    if (reservation.Tickets) {
      reservation.Tickets.map((ticket) => {
        if (ticket.Demographic_Group === 0) {
          nationalFee.fee += ticket.Price * ticket.Amount;
        } else if(ticket.Demographic_Group === 1){
          foreignFee.fee += ticket.Price * ticket.Amount;
        }
      });
    }
    nationalFee.fee *= days;
    foreignFee.fee *= days;
    return applyExchange(nationalFee, foreignFee);
  };

  // Method that calculates the new tickets fees
  const calculatesNewTicketsFee = () => {
    let nationalFee = { fee: 0, currency: "CRC" };
    let foreignFee = { fee: 0, currency: "USD" };
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate);
    if (reservation.NewTickets) {
      reservation.NewTickets.map((ticket) => {
        if (ticket.Demographic_Group === 0) {
          nationalFee.fee += ticket.Price * ticket.Amount;
        } else {
          foreignFee.fee += ticket.Price * ticket.Amount;
        }
      });
    }
    nationalFee.fee *= days;
    foreignFee.fee *= days;
    return applyExchange(nationalFee, foreignFee);
  };

  // Method that calculates the spots fee
  const calculateSpotsFee = () => {
    let nationalFee = { fee: 0, currency: "CRC" };
    let foreignFee = { fee: 0, currency: "USD" };
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate);
    if (reservation.Spots) {
      reservation.Spots.map((spot) => {
        if (spot.Currency === "CRC") {
          nationalFee.fee += spot.Price;
        } else {
          foreignFee.fee += spot.Price;
        }
      });
    }
    nationalFee.fee *= days;
    foreignFee.fee *= days;
    return applyExchange(nationalFee, foreignFee);
  };
  
  // Method that calculates the new spots fee
  const calculateNewSpotsFee = () => {
    let nationalFee = { fee: 0, currency: "CRC" };
    let foreignFee = { fee: 0, currency: "USD" };
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate);
    if (reservation.NewSpots) {
      reservation.NewSpots.map((spot) => {
        if (spot.Currency === "CRC") {
          nationalFee.fee += spot.Price;
        } else {
          foreignFee.fee += spot.Price;
        }
      });
    }
    nationalFee.fee *= days;
    foreignFee.fee *= days;
    return applyExchange(nationalFee, foreignFee);
  };

  // Method that calculates the services fee
  const calculateServicesFee = () => {
    let fee = 0;
    let nationalFee = { fee: 0, currency: "CRC" };
    let foreignFee = { fee: 0, currency: "USD" };
    if (reservation.Services) {
      reservation.Services.map((service) => {
        if (service.Currency === "CRC") {
          nationalFee.fee += service.Price * service.Quantity;
        } else {
          foreignFee.fee += service.Price * service.Quantity;
        }
      });
    }
    return applyExchange(nationalFee, foreignFee);
  };

  // Method that calculastes the new services fee
  const calculateNewServicesFee = () => {
    let nationalFee = { fee: 0, currency: "CRC" };
    let foreignFee = { fee: 0, currency: "USD" };
    if (reservation.NewServices) {
      reservation.NewServices.map((service) => {
        if (service.Currency === "CRC") {
          nationalFee.fee += service.Price * service.Quantity;
        } else {
          foreignFee.fee += service.Price * service.Quantity;
        }
      });
    }
    return applyExchange(nationalFee, foreignFee);
  };

  // Method that calculates all tickets fee
  const calculateAllTicketsFee = () => {
    const ticketsFee = calculatesTicketsFee();
    const newTicketsFee = calculatesNewTicketsFee();
    const CRCFee = parseInt(ticketsFee[0] + newTicketsFee[0]);
    const USDFee = ticketsFee[1] + newTicketsFee[1];
    return [CRCFee, USDFee];
  };

  // Method that calculates all spots fee
  const calculateAllSpotsFee = () => {
    const spotsFee = calculateSpotsFee();
    const newSpotsFee = calculateNewSpotsFee();
    const CRCFee = parseInt(spotsFee[0] + newSpotsFee[0]);
    const USDFee = spotsFee[1] + newSpotsFee[1];
    return [CRCFee, USDFee];
  };

  // Method that calculates all services fee
  const calculateAllServicesFee = () => {
    const servicesFee = calculateServicesFee();
    const newServicesFee = calculateNewServicesFee();
    const CRCFee = parseInt(servicesFee[0] + newServicesFee[0]);
    const USDFee = servicesFee[1] + newServicesFee[1];
    return [CRCFee, USDFee];
  };

  // Method that calculates the total fee
  const calculateTotalFee = () => {
    const allTicketsFee = calculateAllTicketsFee();
    const allSpotsFee = calculateAllSpotsFee();
    const allServicesFee = calculateAllServicesFee();
    const CRCFee = allTicketsFee[0] + allSpotsFee[0] + allServicesFee[0];
    const USDFee = allTicketsFee[1] + allSpotsFee[1] + allServicesFee[1];
    return [CRCFee, USDFee];
  }

  return {
    calculateSpotsFee,
    calculateNewSpotsFee,
    calculateServicesFee,
    calculateNewServicesFee,
    calculatesTicketsFee,
    calculatesNewTicketsFee,
    calculateAllTicketsFee,
    calculateAllSpotsFee,
    calculateAllServicesFee,
    calculateTotalFee
  };
};

export default useCalculateFees;