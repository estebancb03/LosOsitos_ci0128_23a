import { getDaysDifference } from "../helpers/formatDate";

const useCalculateFees = (reservation) => {
  
  const calculateSpotsFee = () => {
    let fee = 0;
    const startDate = reservation.Start_Date;
    const endDate = reservation.End_Date;
    const days = getDaysDifference(startDate, endDate) + 1;
    if (reservation.Spots) {
      reservation.Spots.map((spot) => {
        fee += spot.Price;
      });
    }
    fee *= days;
    return fee;
  };
  
  return {
    calculateSpotsFee
  };
};

export default useCalculateFees;