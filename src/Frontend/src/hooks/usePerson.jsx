import React from "react";
import AxiosClient from "../config/AxiosClient";

const usePerson = () => {

  // Method that gets the person data of an id
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

  // Method that sets the person data into the reservation
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

  return { getPersonData, setPersonData };
};

export default usePerson;
