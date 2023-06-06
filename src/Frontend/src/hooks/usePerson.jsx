import React from "react";
import AxiosClient from "../config/AxiosClient";

const usePerson = () => {

  const getPersonData = async (reservation, setReservation) => {
    try {
      const url = `/person/${reservation.ID}`;
      const { data } = await AxiosClient.get(url);
      setPersonData(data, reservation, setReservation);
      return data.length !== 0;
    } catch (exception) {
      console.log(exception);
    }
  };

  const setPersonData = (personData, reservation, setReservation) => {
    const newReservation = { ...reservation };
    if (personData.length !== 0) {
      newReservation.Name = personData[0].Name;
      newReservation.LastName1 = personData[0].LastName1;
      newReservation.LastName2 = personData[0].LastName2;
      newReservation.Gender = personData[0].Gender;
      newReservation.Email = personData[0].Email;
      newReservation.Country_Name = personData[0].Country_Name;
      newReservation.State = personData[0].State !== "undefined" ? personData[0].State : "";
      newReservation.Birth_Date = personData[0].Birth_Date;
    } else {
      newReservation.Name = "";
      newReservation.LastName1 = "";
      newReservation.LastName2 = "";
      newReservation.Gender = "";
      newReservation.Email = "";
      newReservation.Country_Name = "";
      newReservation.State = "";
      newReservation.Birth_Date = "";
    }
    setReservation(newReservation);
  };

  const modifyPersonData = (type, value, reservation) => {
    const newReservation = {...reservation};
    if (type === "id") {
      newReservation.ID = value;
    } else if (type === "name") {
      newReservation.Name = value;
    } else if (type === "lastname1") {
      newReservation.LastName1 = value;
    } else if (type === "lastname2") {
      newReservation.LastName2 = value;
    } else if (type === "birthdate") {
      newReservation.Birth_Date = value;
    } else if (type === "email") {
      newReservation.Email = value;
    } else if (type === "gender") {
      if (value === "Male") {
        newReservation.Gender = 0;
      } else if (value === "Female") {
        newReservation.Gender = 1;
      } else if (value === "Non-Binary") {
        newReservation.Gender = 2;
      } else if (value === "Other") {
        newReservation.Gender = 3;
      }
    } else if (type === "country") {
      newReservation.Country_Name = value;
      if (value !== "Costa Rica") {
        newReservation.State = "";
      } else {
        newReservation.State = "San José";
      }
    } else if (type === "state") {
      newReservation.State = value;
    }
    return newReservation;
  };

  return { getPersonData, setPersonData, modifyPersonData };
};

export default usePerson;
