import { getDaysDifference } from "../helpers/formatDate";

const useCalculateFees = (reservation) => {
  
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
  
  // Method that calculates the services fee
  const calculateServicesFee = () => {
    let fee = 0;
    if (reservation.Services) {
      reservation.Services.map((service) => fee += service.Price * service.Quantity);
    }
    console.log(fee);
    return fee;
  };

  return {
    calculateSpotsFee,
    calculateServicesFee
  };
};

export default useCalculateFees;