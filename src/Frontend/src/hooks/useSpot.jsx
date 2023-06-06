import React from "react";
import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useSpot = () => {
  const [spots, setSpots] = useState([]);
  const [spotsPrices, setSpotsPrices] = useState([]);
  const [locations, setLocations] = useState([]);
  const [sizes, setSizes] = useState([]);

  const getSpots = async () => {
    try {
      const url = "/spots/getAllSpots";
      const { data } = await AxiosClient.get(url);
      await setSpots(data);
    } catch (exception) {
      console.error(exception);
    }
  };

  const getSpotsPrices = async () => {
    try {
      const url = "/spot-prices";
      const { data } = await AxiosClient.get(url);
      await setSpotsPrices(data);
    } catch (exception) {
      console.error(exception);
    }
  };

  const getSpotsLocations = () => {
    setLocations(spots.map((spot) => spot.Location));
  };

  const getSpotsSizes = () => {
    setSizes([...new Set(spots.map((spot) => spot.Size))]);
  };

  const searchSpotSize = (location, currency) => {
    let result;
    spots.map((spot) => {
      if (spot.Location === location && spot.Currency === currency) {
        result = spot.Size;
      }
    });
    return formatSpotSize(result);
  };

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

  const searchSpotPrice = (Location_Spot, Currency) => {
    const filteredPrices = spotsPrices.filter(
      (price) =>
        price.Location_Spot === Location_Spot && price.Currency === Currency
    );
    return filteredPrices[0].Price;
  };

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
