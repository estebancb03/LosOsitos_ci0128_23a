import { isDateAfterISO8601, getDateRange, formatDateDTMMDDYYYY } from "../helpers/formatDate.js";
import AxiosClient from "../config/AxiosClient";

const useValidations = (reservation) => {
  
  const getRemainingCapacity = async (date) => {
    let result = [];
    try {
      const capacityRoute = reservation.Reservation_Type == 0 ? "/getPicnicCapacity" : "/getCampingCapacity";
      const { data } = await AxiosClient.get(`${capacityRoute}/${date}`);
      result = data;
    } catch (exception) {
      console.error(exception);
    }
    return result;
  }

  const validateCapacityForCamping = async () => {
    let result = true;
    let persons = 0;
    let dbPersons = 0;
    const days = getDateRange(formatDateDTMMDDYYYY(reservation.Start_Date), formatDateDTMMDDYYYY(reservation.End_Date));
    await Promise.all(
      days.map(async (day) => {
        const capacities = await getRemainingCapacity(day);
        const onlineCapacicty = capacities[0].Remaining_Capacity;
        const insiteCapacity = capacities[1].Remaining_Capacity;
        if (reservation.Tickets) {
          const {data} = await AxiosClient.get(`/getTicketsByReservationID/${reservation.ID}/${reservation.Reservation_Date}`);
          data.map((ticket) => dbPersons += parseInt(ticket.Amount));
          reservation.Tickets.map((ticket) => persons += parseInt(ticket.Amount));
        }
        if (reservation.NewTickets) {
          reservation.NewTickets.map((ticket) => persons += parseInt(ticket.Amount));
        }
        persons -= dbPersons;
        if (reservation.Reservation_Method === 0) {
          if (onlineCapacicty < persons) {
            result = false;
          }
        } else {
          if (insiteCapacity < persons) {
            result = false;
          }
        }
        persons = 0;
        dbPersons = 0;
      }
    ));
    return result;
  };

  const validateCapacityForPicnic = async () => {
    let result = false;
    let persons = 0;
    let dbPersons = 0;
    const capacities = await getRemainingCapacity(reservation.Picnic_Date);
    const onlineCapcicty = capacities[0].Remaining_Capacity;
    const insiteCapacity = capacities[1].Remaining_Capacity;

    if (reservation.Tickets) {
      const {data} = await AxiosClient.get(`/getTicketsByReservationID/${reservation.ID}/${reservation.Reservation_Date}`);
      data.map((ticket) => dbPersons += parseInt(ticket.Amount));
      reservation.Tickets.map((ticket) => persons += parseInt(ticket.Amount));
    }

    if (reservation.NewTickets) {
      reservation.NewTickets.map((ticket) => persons += parseInt(ticket.Amount));
    }
    persons -= dbPersons;
    if (reservation.Reservation_Method === 0) {
      if (onlineCapcicty >= persons) {
        result = true;
      }
    } else {
      if (insiteCapacity >= persons) {
        result = true;
      }
    }
    return result;
  };

  const validateCapacity = async () => {
    let result = false;
    if (reservation.Reservation_Type === 0) {
      result = await validateCapacityForPicnic();
    } else {
      result = await validateCapacityForCamping();
    }
    return result;
  };

  const validatePersonalData = () => {
    const regexEmail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    const regexID = /^[0-9\s]+$/;
    const regexName = /^[a-zA-ZñáéíóúÁÉÍÓÚ ]+$/;
    let result = false;
    if (
      reservation.ID !== "" && regexID.test(reservation.ID) &&
      reservation.Name !== "" && regexName.test(reservation.Name) &&
      reservation.LastName1 !== "" && regexName.test(reservation.LastName1) &&
      reservation.LastName2 !== "" && regexName.test(reservation.LastName2) &&
      reservation.Birth_Date !== "" &&
      reservation.Email !== "" && regexEmail.test(reservation.Email) &&
      reservation.Gender !== "" &&
      reservation.Country_Name !== ""
    ) {
      result = true;
    }
    return result;
  };
  
  const validateDates = () => {
    let result = false;
    if (reservation.Reservation_Type === 0) {
      if (reservation.Picnic_Date !== "") {
        result = true;
      }
    } else {
      if (
        reservation.Start_Date !== "" &&
        reservation.End_Date !== "" &&
        isDateAfterISO8601(reservation.Start_Date, reservation.End_Date)
      ) {
        result = true;
      }
    }
    return result;
  };
  
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
  
  const validateTickets = () => {
    let result = false;
    reservation.Tickets.map((ticket) => {
      if (
        ticket.Amount !== "" &&
        parseInt(ticket.Amount) !== 0
        ) {
        result = true;
      }
    });
    return result;
  };
  
  const validateNewServices = () => {
    let result = true;
    if (reservation.NewServices.length !== 0) {
      reservation.NewServices.map((service) => {
        if (
          service.Quantity === "" ||
          parseInt(service.Quantity) === 0
        ) {
          result = false;
        }
      });
    }
    return result;
  };
  
  const validateServices = () => {
    let result = true;
    if (reservation.Services) {
      reservation.Services.map((service) => {
        if (
          service.Quantity === "" ||
          parseInt(service.Quantity) === 0
        ) {
          result = false;
        }
      });
    }
    return result;
  };
  
  const validateNewSpots = () => {
    let result = true;
    if (reservation.Reservation_Type === 1) {
      if (reservation.NewSpots.length === 0) {
        result = false;
      }
    }
    return result;
  };
  
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
  
  return {
    validatePersonalData,
    validateServices,
    validateDates,
    validateCapacity,
    validateInsertReservation,
    validateTickets,
    validateNewSpots,
    validateUpdateReservation
  };
}

export default useValidations;
