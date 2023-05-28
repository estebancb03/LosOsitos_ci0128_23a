import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useServices = () => {
  // State that controls the services names
  const [servicesNames, setServicesNames] = useState([]);
  // State that controls the services prices
  const [servicesPrices, setServicesPrices] = useState([]);

  // Method that gets the services names
  const fetchServicesNames = async () => {
    try {
      const url = "/getServicesOptions";
      const options = await AxiosClient.get(url);
      const result = [...options.data.map((service) => service.Name)];
      setServicesNames(result);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the services prices
  const fetchServicesPrices = async () => {
    try {
      const url = "/service-prices";
      const result = await AxiosClient.get(url);
      setServicesPrices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the price of a service
  const searchServicePrice = (nameService, currency) => {
    const result = servicesPrices.filter((price) => price.Name_Service === nameService && price.Currency === currency);
    return result[0].Price;
  };

  useEffect(() => {
    fetchServicesNames();
    fetchServicesPrices();
  }, []);

  return { servicesNames, servicesPrices, searchServicePrice };
};

export default useServices;
