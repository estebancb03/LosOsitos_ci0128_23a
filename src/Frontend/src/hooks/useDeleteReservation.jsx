import React from "react";
import { useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useDeleReservation = () => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;
  const deleteReservation = async (reservation) => {
    try {
      const { ID, Reservation_Date } = reservation;
      const url = `/reservation/${ID}/${Reservation_Date}`;
      await AuthToken(token);
      await AxiosClient.delete(url);
    } catch (exception) {
      console.log(exception);
    }
  };
  
  return { deleteReservation };
};

export default useDeleReservation;
