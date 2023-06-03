import { isDateAfterISO8601 } from "../helpers/formatDate.js";

const useValidations = (reservation) => {
  
  // Method that validates the personal data
  const validatePersonalData = () => {
    let result = false;
    if (
      reservation.ID !== "" &&
      reservation.Name !== "" &&
      reservation.LastName1 !== "" &&
      reservation.LastName2 !== "" &&
      reservation.Birth_Date !== "" &&
      reservation.Email !== "" &&
      reservation.Gender !== "" &&
      reservation.Country_Name !== ""
    ) {
      result = true;
      console.log("Personal data");
    }
    return result;
  };
  
  // Method that validates dates
  const validateDates = () => {
    let result = false;
    if (reservation.Reservation_Type === 0) {
      if (reservation.Picnic_Date !== "") {
        result = true;
        console.log("Dates");
      }
    } else {
      if (
        reservation.Start_Date !== "" &&
        reservation.End_Date !== "" &&
        isDateAfterISO8601(reservation.Start_Date, reservation.End_Date)
      ) {
        result = true;
        console.log("Dates");
      }
    }
    return result;
  };
  
  // Method that validates new tickets
  const validateNewTickets = () => {
    let result = false;
    reservation.NewTickets.map((ticket) => {
      if (
        ticket.Amount !== "" &&
        parseInt(ticket.Amount) !== 0
      ) {
        result = true;
      }
    });
    if (reservation.Tickets && reservation.NewTickets.length === 0) {
      result = true;
    }
    return result;
  };
  
  // Method that validates tickets
  const validateTickets = () => {
    let result = false;
    reservation.Tickets.map((ticket) => {
      if (
        ticket.Amount !== "" &&
        parseInt(ticket.Amount) !== 0
        ) {
        result = true;
        console.log("Ticket");
      }
    });
    return result;
  };
  
  // Method that validates new services
  const validateNewServices = () => {
    let result = true;
    if (reservation.NewServices.length !== 0) {
      reservation.NewServices.map((service) => {
        if (
          service.Quantity === "" ||
          parseInt(service.Quantity) === 0
        ) {
          result = false;
          console.log("No Services");
        }
      });
    }
    return result;
  };
  
  // Method that validates services
  const validateServices = () => {
    let result = true;
    if (reservation.Services) {
      reservation.Services.map((service) => {
        if (
          service.Quantity === "" ||
          parseInt(service.Quantity) === 0
        ) {
          result = false;
          console.log("No service");
        }
      });
    }
    return result;
  };
  
  // Method that validates the spots
  const validateNewSpots = () => {
    let result = true;
    if (reservation.Reservation_Type === 1) {
      if (reservation.NewSpots.length === 0) {
        console.log("No spots");
        result = false;
      }
    }
    return result;
  };
  
  // Method that validates new reservation
  const validateInsertReservation = () => {
    let result = false;
    if (
      validatePersonalData() &&
      validateDates() &&
      validateNewTickets() &&
      validateNewSpots() &&
      validateNewServices()
    ) {
      result = true;
    }
    return result;
  };
  
  // Method that validates new reservation
  const validateUpdateReservation = () => {
    let result = false;
    if (
      validatePersonalData() &&
      validateDates() &&
      validateNewTickets() &&
      validateNewServices() &&
      validateTickets() &&
      validateServices()
      ) {
      result = true;
    }
    return result;
  };
  
  return { validateInsertReservation, validateUpdateReservation };
}

export default useValidations;
