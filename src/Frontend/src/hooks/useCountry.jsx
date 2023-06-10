import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useCountry = () => {
  const [countries, setCountries] = useState([]);
  
  const getCountries = async () => {
    try {
      const url = '/country';
      const { data } = await AxiosClient.get(url);
      const names = data.map((country) => country.Name);
      setCountries(names);
    } catch (exception) {
      console.log(exception);
    }   
  };
    
  useEffect(() => {getCountries();}, []);
  
  return { countries };
};

export default useCountry;
