import { getDaysDifference } from "../helpers/formatDate";

const useCalculateFees = (reservation) => {
  
  // Method that calculates the tickets fees
  const calculatesTicketsFee = () => {
    let CRCFee = 0;
    let USDFee = 0;
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate) + 1;
    if (reservation.Tickets) {
      reservation.Tickets.map((ticket) => {
        if (ticket.Demographic_Group === 0) {
          CRCFee += ticket.Price * ticket.Amount;
        } else {
          USDFee += ticket.Price * ticket.Amount;
        }
      });
    }
    CRCFee *= days;
    USDFee *= days;
    console.log([CRCFee, USDFee]);
    return [CRCFee, USDFee];
  };

  // Method that calculates the new tickets fees
  const calculatesNewTicketsFee = () => {
    let CRCFee = 0;
    let USDFee = 0;
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate) + 1;
    if (reservation.NewTickets) {
      reservation.NewTickets.map((ticket) => {
        if (ticket.Demographic_Group === 0) {
          CRCFee += ticket.Price * ticket.Amount;
        } else {
          USDFee += ticket.Price * ticket.Amount;
        }
      });
    }
    CRCFee *= days;
    USDFee *= days;
    console.log([CRCFee, USDFee]);
    return [CRCFee, USDFee];
  };

  // Method that calculates the spots fee
  const calculateSpotsFee = () => {
    let fee = 0;
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate) + 1;
    if (reservation.Spots) {
      reservation.Spots.map((spot) => fee += spot.Price);
    }
    fee *= days;
    return fee;
  };
  
  // Method that calculates the new spots fee
  const calculateNewSpotsFee = () => {
    let fee = 0;
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate) + 1;
    if (reservation.NewSpots) {
      reservation.NewSpots.map((spot) => fee += spot.Price);
    }
    fee *= days;
    return fee;
  };

  // Method that calculates the services fee
  const calculateServicesFee = () => {
    let fee = 0;
    if (reservation.Services) {
      reservation.Services.map((service) => fee += service.Price * service.Quantity);
    }
    console.log(fee);
    return fee;
  };

  // Method that calculastes the new services fee
  const calculateNewServicesFee = () => {
    let fee = 0;
    if (reservation.NewServices) {
      reservation.NewServices.map((service) => fee += service.Price * service.Quantity);
    }
    console.log(fee);
    return fee;
  };

  return {
    calculateSpotsFee,
    calculateNewSpotsFee,
    calculateServicesFee,
    calculateNewServicesFee,
    calculatesTicketsFee,
    calculatesNewTicketsFee
  };
};

export default useCalculateFees;