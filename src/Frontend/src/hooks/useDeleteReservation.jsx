import React from "react";
import AxiosClient from "../config/AxiosClient";

const useDeleReservation = () => {
  const deleteReservation = async (reservation) => {
    try {
      const { ID, Reservation_Date } = reservation;
      const url = `/reservation/${ID}/${Reservation_Date}`;
      await AxiosClient.delete(url);
    } catch (exception) {
      console.log(exception);
    }
  };
  
  return { deleteReservation };
};

export default useDeleReservation;
