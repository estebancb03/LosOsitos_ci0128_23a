import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useSettingCapacity = () => {
  const [capacityValues, setCapacityValues] = useState([]);

  const fetchActualCapacityValues = async () => {
    const url = "/getActualCapacities";
    const records = await AxiosClient.get(url);
    console.log(records.data);
    filterCapacityValues(records.data);
  };

  const filterCapacityValues = (values) => {
    let formatedCapacity = [...values];

    const campingOnline = formatedCapacity.map((values) => {
      values.Type == "CampingOnline";
    });

    const campingOnSite = formatedCapacity.map((values) => {
      values.Type == "CampingOnSite";
    });

    const picnicOnline = formatedCapacity.map((values) => {
      values.Type = "PicnicOnline";
    });

    const picnicOnSite = formatedCapacity.map((values) => {
      values.Type = "PicnicOnSite";
    });

    formatedCapacity.CampingOnline = campingOnline;
    formatedCapacity.CampingOnSite = campingOnSite;
    formatedCapacity.PicnicOnline = picnicOnline;
    formatedCapacity.PicnicOnSite = picnicOnSite;

    setCapacityValues(formatedCapacity);
  };

  useEffect(() => {
    fetchActualCapacityValues();
  }, []);

  return { capacityValues };
};

export default useSettingCapacity;
