import React from "react";
import { useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useInsertReservation = (reservation) => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;

  const insertNewVehicle = async () => {
    try {
      const { ID, Reservation_Date, NewVehicles } = reservation;
      const url = "/insertVehicle";
      await Promise.all(
        NewVehicles.map(async (vehicle, index) => {
          await AuthToken(token);
          await AxiosClient.post(url, {
            ID,
            Reservation_Date,
            ID_Vehicle: NewVehicles[index],
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };
  const insertNewService = async () => {
    try {
      const { ID, Reservation_Date, NewServices } = reservation;
      const url = "/insertServiceReservation";
      await Promise.all(
        NewServices.map(async (service, index) => {
          await AuthToken(token);
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Name_Service: NewServices[index].Name_Service,
            Price: NewServices[index].Price,
            Quantity: parseFloat(NewServices[index].Quantity),
            Currency: NewServices[index].Currency
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertNewTicket = async () => {
    try {
      const { ID, Reservation_Date, Reservation_Type, NewTickets } = reservation;
      const url = "/reservationTicket";
      await Promise.all(
        NewTickets.map(async (ticket, index) => {
          await AuthToken(token);
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Reservation_Type,
            Age_Range: ticket.Age_Range,
            Demographic_Group: ticket.Demographic_Group,
            Special: ticket.Special,
            Price: parseFloat(ticket.Price),
            Amount: parseInt(ticket.Amount)
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertNewSpot = async () => {
    try {
      const { ID, Reservation_Date, NewSpots } = reservation;
      const url = "/spots";
      await Promise.all(
        NewSpots.map(async (spot) => {
          await AuthToken(token);
          await AxiosClient.post(url, {
            ID_Client: ID,
            Reservation_Date,
            Location_Spot: spot.Location_Spot,
            Price: spot.Price,
            Currency: spot.Currency
          });
        })
        );
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertReservation = async () => {
    const { Reservation_Type } = reservation;

    if (Reservation_Type == 0) {
      await insertPicnicReservation();
    } else {
      await insertCampingReservation();
    }
  };

  const insertCampingReservation = async () => {
    try {
      const {
        ID,
        Name,
        LastName1,
        LastName2,
        Gender,
        Birth_Date,
        Email,
        Country_Name,
        State,
        Reservation_Date,
        Reservation_Method,
        Reservation_Type,
        Payment_Method,
        Start_Date,
        End_Date,
        Status,
        NewSpots,
        NewServices, 
        NewTickets,
        NewVehicles
      } = reservation;

      const Spots = NewSpots.map((spot) => {
        return {
          Location_Spot: spot.Location_Spot,
          Price: spot.Price,
          Currency: spot.Currency
        }
      });

      const Services = NewServices.map((service) => {
        return {
          Name_Service: service.Name_Service,
          Price: service.Price,
          Quantity: parseFloat(service.Quantity),
          Currency: service.Currency
        }
      });

      const Tickets = NewTickets.map((ticket) => {
        return {
          Age_Range: ticket.Age_Range,
          Demographic_Group: ticket.Demographic_Group,
          Special: ticket.Special,
          Price: parseFloat(ticket.Price),
          Amount: parseInt(ticket.Amount)
        }
      });

      const url = "/campingReservation";
      await AuthToken(token);
      await AxiosClient.post(url, {
        ID,
        ID_Person: ID,
        ID_Client: ID,
        Name,
        LastName1,
        LastName2,
        Gender,
        Birth_Date,
        Email,
        Country_Name,
        State,
        Reservation_Date,
        Reservation_Method,
        Reservation_Type,
        Payment_Method,
        Start_Date,
        End_Date,
        Status,
        Spots,
        Services, 
        Tickets,
        NewVehicles
      });
    } catch (exception) {
      console.log(exception);
    }
  }

  const insertPicnicReservation = async () => {
    try {
      const {
        ID,
        Name,
        LastName1,
        LastName2,
        Gender,
        Birth_Date,
        Email,
        Country_Name,
        State,
        Reservation_Date,
        Reservation_Method,
        Reservation_Type,
        Payment_Method,
        Picnic_Date,
        Status,
        NewServices, 
        NewTickets,
        NewVehicles
      } = reservation;

      const Services = NewServices.map((service) => {
        return {
          Name_Service: service.Name_Service,
          Price: service.Price,
          Quantity: parseFloat(service.Quantity),
          Currency: service.Currency
        }
      });

      const Tickets = NewTickets.map((ticket) => {
        return {
          Age_Range: ticket.Age_Range,
          Demographic_Group: ticket.Demographic_Group,
          Special: ticket.Special,
          Price: parseFloat(ticket.Price),
          Amount: parseInt(ticket.Amount)
        }
      });

      const url = "/picnicReservation";
      await AuthToken(token);
      await AxiosClient.post(url, {
        ID,
        ID_Person: ID,
        ID_Client: ID,
        Name,
        LastName1,
        LastName2,
        Gender,
        Birth_Date,
        Email,
        Country_Name,
        State,
        Reservation_Date,
        Reservation_Method,
        Reservation_Type,
        Payment_Method,
        Picnic_Date,
        Status,
        Services, 
        Tickets,
        NewVehicles
      });
    } catch (exception) {
      console.log(exception);
    }
  }
  
  return {
    insertReservation,
    insertNewTicket,
    insertNewSpot,
    insertNewService,
    insertNewVehicle,
  }
};

export default useInsertReservation;
