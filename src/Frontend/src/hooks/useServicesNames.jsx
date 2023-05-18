import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useServicesNames = () => {
  // State that controls the services names
  const [servicesNames, setServicesNames] = useState([]);

  // Method that gets the services names
  const fetchServicesNames = async () => {
    try {
      const url = "/getServicesOptions";
      const options = await AxiosClient.get(url);
      const result = ["", ...options.data.map((service) => service.Name)];
      setServicesNames(result);
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    fetchServicesNames();
  }, []);

  return { servicesNames };
};

export default useServicesNames;
