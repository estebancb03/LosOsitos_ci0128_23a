import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useSpot = () => {
  // State that controls the spots
  const [spots, setSpots] = useState([]);
  // State that controls the prices
  const [spotsPrices, setSpotsPrices] = useState([]);

  // Method that gets the all the spots
  const getSpots = async () => {
    try {
      const url = '/spots/getAllSpots';
      const { data } = await AxiosClient.get(url);
      await setSpots(data);
    } catch (exception) {
      console.error(exception);
    }
  };

  // Method that gets spots prices
  const getSpotsPrices = async () => {
    try {
      const url = '/spot-prices';
      const { data } = await AxiosClient.get(url);
      await setSpotsPrices(data);
      console.log(data);
    } catch (exception) {
      console.error(exception);
    }
  };

  // Method that gets the price of a spot
  const getSpotPrice = async (Location_Spot, Currency) => {
    const filteredPrices = spotsPrices.filter((price) => price.Location_Spot === Location_Spot && price.Currency === Currency);
    return filteredPrices.Price;
  };

  useEffect(() => getSpots, []);
  useEffect(() => getSpotsPrices, []);

  return { spots, spotsPrices };
};

export default useSpot;
