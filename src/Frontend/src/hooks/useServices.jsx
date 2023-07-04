import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useServices = () => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;
  const [servicesNames, setServicesNames] = useState([]);
  const [servicesPrices, setServicesPrices] = useState([]);
  const [servicesWithQuantityAndPrices, setServicesWithQuantityAndPrices] =
    useState([]);

  const fetchServicesWithQuantityAndPrices = async () => {
    try {
      const url = "/getServicesWithQuantityAndPrices";
      await AuthToken(token);
      const result = await AxiosClient.get(url);
      setServicesWithQuantityAndPrices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateServicesWithQuantityAndPrices = async (
    originalName,
    modifiedName,
    quantity,
    USD,
    CRC
  ) => {
    try {
      const url = "/updateServicesWithQuantityAndPrices";
      await AuthToken(localStorage.getItem("auth-token"));
      await AxiosClient.put(url, {
        originalName,
        modifiedName,
        quantity,
        USD,
        CRC,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const insertNewService = async (serviceName, quantity, USD, CRC) => {
    try {
      const url = "/insertNewService";
      await AuthToken(localStorage.getItem("auth-token"));
      await AxiosClient.post(url, {
        serviceName,
        quantity,
        USD,
        CRC,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const disableService = async (serviceName) => {
    try {
      console.log("[DisableService] Name: " + serviceName);
      const url = "/disableService";
      await AuthToken(localStorage.getItem("auth-token"));
      await AxiosClient.put(url, { serviceName });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchServicesNames = async () => {
    try {
      const url = "/getServicesOptions";
      await AuthToken(token);
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
      await AuthToken(token);
      const result = await AxiosClient.get(url);
      setServicesPrices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const searchServicePrice = (nameService, currency) => {
    if (servicesPrices.length > 0) {
      const result = servicesPrices.filter(
        (price) =>
          price.Name_Service === nameService && price.Currency === currency
      );
      return result[0].Price;
    }
  };

  const modifyService = (type, value, reservation) => {
    const newReservation = { ...reservation };
    const newServices = [...reservation.NewServices];
    if (type[0] === "name") {
      newServices[type[1]].Name_Service = value;
      newServices[type[1]].Price = searchServicePrice(
        value,
        reservation.Country_Name === "Costa Rica" ? "CRC" : "USD"
      );
      newServices[type[1]].Currency =
        reservation.Country_Name === "Costa Rica" ? "CRC" : "USD";
    } else if (type[0] === "quantity") {
      newServices[type[1]].Quantity = value;
    }
    newReservation.NewServices = newServices;
    return newReservation;
  };

  useEffect(() => {
    fetchServicesNames();
    fetchServicesPrices();
    fetchServicesWithQuantityAndPrices();
  }, []);

  return {
    servicesNames,
    servicesPrices,
    searchServicePrice,
    modifyService,
    servicesWithQuantityAndPrices,
    updateServicesWithQuantityAndPrices,
    insertNewService,
    fetchServicesWithQuantityAndPrices,
    disableService,
  };
};

export default useServices;
