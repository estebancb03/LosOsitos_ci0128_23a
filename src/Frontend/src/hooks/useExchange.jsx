import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useExchange = () => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;
  const [exchange, setExchange] = useState({});
  let result = [];

  const fetchData = async () => {
    try {
      const url = "/getExchangeRate";
      await AuthToken(token);
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { exchange, setExchange };
};

export default useExchange;
