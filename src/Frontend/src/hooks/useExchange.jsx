import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useExchange = () => {
  const [exchange, setExchange] = useState({});
  let result = [];

  const fetchData = async () => {
    try {
      const url = "/getExchangeRate";
      result = await AxiosClient(url);
      await setExchangeRate(result);
    } catch (exception) {
      console.log(exception);
    }
  };

  const setExchangeRate = async (result) => {
    setExchange({
      USD: result.data[0].Value,
      CRC: 1 / result.data[0].Value,
    });
    // console.log(exchange.USD);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { exchange, setExchange };
};

export default useExchange;
