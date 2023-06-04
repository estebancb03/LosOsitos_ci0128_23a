import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useExchange = () => {
  // State that controls the exchange
  const [exchange, setExchange] = useState({});
  // State that controls if its loaded
  const [loaded, setLoaded] = useState(false);
  
  // Method that fetch the exchange
  const fetchData = async () => {
    try {
      setLoaded(true);
      const url = '';
      const result = await AxiosClient(url);
    } catch (exception) {
      console.log(exception);
    } finally {
      setLoaded(false);
    }
  };
  
  useEffect(() => {
    setExchange({
      USD: 537.33,
      CRC: 0.0018622
    });
  }, []);
  
  return { exchange };
};

export default useExchange;
