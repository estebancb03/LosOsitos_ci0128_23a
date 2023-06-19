import React from "react";
import { useState, useEffect, useContext } from "react";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useAuth = () => {
  const AuthContext = useContext(authContext);
  const { authToken, deauthToken } = AuthContext;
  
  const authUser = async (user) => {
    try {
      const { Username, Password } = user;
      const url = `/employee/${Username}/${Password}`;
      const { data } = await AxiosClient.get(url);
      authToken(data.token);
      return data;
    } catch (exception) {
      console.log(exception);
    }
  };
  
  const deauthUser = () => {
    localStorage.removeItem('auth-token');
    deauthToken();
  }
  return { authUser, deauthUser };
};

export default useAuth;
