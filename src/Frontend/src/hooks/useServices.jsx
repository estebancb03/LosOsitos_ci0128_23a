import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useServices = () => {
  const [servicesNames, setServicesNames] = useState([]);
  const [servicesPrices, setServicesPrices] = useState([]);

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

  const fetchServicesPrices = async () => {
    try {
      const url = "/service-prices";
      const result = await AxiosClient.get(url);
      setServicesPrices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const searchServicePrice = (nameService, currency) => {
    if (servicesPrices.length > 0) {
      const result = servicesPrices.filter((price) => price.Name_Service === nameService && price.Currency === currency);
      return result[0].Price;
    }
  };

  const modifyService = (type, value, reservation) => {
    const newReservation = {...reservation};
    const newServices = [...reservation.NewServices];
    if (type[0] === "name") {
      newServices[type[1]].Name_Service = value;
      newServices[type[1]].Price = searchServicePrice(value, reservation.Country_Name === "Costa Rica" ? "CRC" : "USD");
      newServices[type[1]].Currency = reservation.Country_Name === "Costa Rica" ? "CRC" : "USD";
    } else if (type[0] === "quantity") {
      newServices[type[1]].Quantity = value;
    }
    newReservation.NewServices = newServices;
    return newReservation;
  };

  useEffect(() => {
    fetchServicesNames();
    fetchServicesPrices();
  }, []);

  return { servicesNames, servicesPrices, searchServicePrice, modifyService };
};

export default useServices;
