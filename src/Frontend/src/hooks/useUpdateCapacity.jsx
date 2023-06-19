import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useUpdateCapacity = async (type, value) => {

  if (value) {
    try {
      const url = "/updateCapacity";
      await AuthToken(localStorage.getItem('auth-token'));
      await AxiosClient.put(url, {
        type,
        value,
      });
    } catch (exception) {
      console.log(exception);
    }
  }
};

export default useUpdateCapacity;
