import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useSpot = () => {
  // State that controls the spots
  const [spots, setSpots] = useState([]);
  // State that controls the prices
  const [spotsPrices, setSpotsPrices] = useState([]);
  // State that controls the locations
  const [locations, setLocations] = useState([]);
  // State that controls the sizes
  const [sizes, setSizes] = useState([]);

  // Method that gets the all the spots
  const getSpots = async () => {
    try {
      const url = "/spots/getAllSpots";
      const { data } = await AxiosClient.get(url);
      await setSpots(data);
    } catch (exception) {
      console.error(exception);
    }
  };

  // Method that gets spots prices
  const getSpotsPrices = async () => {
    try {
      const url = "/spot-prices";
      const { data } = await AxiosClient.get(url);
      await setSpotsPrices(data);
    } catch (exception) {
      console.error(exception);
    }
  };

  // Method that gets the spots locations
  const getSpotsLocations = () => {
    setLocations(spots.map((spot) => spot.Location));
  };

  // Method that gets the spots sizes
  const getSpotsSizes = () => {
    //    console.log([...new Set(spots.map((spot) => spot.Size))]);
    setSizes([...new Set(spots.map((spot) => spot.Size))]);
  };

  // Method that gets the size of a spot
  const searchSpotSize = (location, currency) => {
    let result;
    spots.map((spot) => {
      if (spot.Location === location && spot.Currency === currency) {
        result = spot.Size;
      }
    });
    return formatSpotSize(result);
  };

  // Method that formats the spot size
  const formatSpotSize = (size) => {
    let result = "";
    if (size === sizes[2]) {
      result = "Small";
    } else if (size === sizes[1]) {
      result = "Medium";
    } else if (size === sizes[0]) {
      result = "Big";
    }
    return result;
  };

  // Method that modifies the spot data
  const modifyNewSpot = (type, value, record) => {
    const newRecord = { ...record };
    const currency = record.Country_Name === "Costa Rica" ? "CRC" : "USD";
    let newSpots = [...record.NewSpots];
    if (type[0] === "location") {
      newSpots[type[1]].Location_Spot = parseInt(value);
      newSpots[type[1]].Price = searchSpotPrice(parseInt(value), currency);
      newSpots[type[1]].Currency = currency;
    }
    newRecord.NewSpots = newSpots;
    return newRecord;
  };

  // Method that gets the price of a spot
  const searchSpotPrice = (Location_Spot, Currency) => {
    const filteredPrices = spotsPrices.filter(
      (price) =>
        price.Location_Spot === Location_Spot && price.Currency === Currency
    );
    return filteredPrices[0].Price;
  };

  // Method that sets the hook data
  const setData = async () => {
    await getSpots();
    await getSpotsPrices();
    await getSpotsLocations();
    await getSpotsSizes();
  };

  useEffect(() => setData, [spots]);

  return {
    spots,
    locations,
    searchSpotPrice,
    searchSpotSize,
    modifyNewSpot,
    formatSpotSize,
  };
};

export default useSpot;
