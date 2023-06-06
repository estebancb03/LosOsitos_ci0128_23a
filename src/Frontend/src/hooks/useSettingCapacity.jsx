import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";

const useSettingCapacity = () => {
  const [capacityValues, setCapacityValues] = useState([]);

  const fetchActualCapacityValues = async () => {
    const url = "/getActualCapacities";
    const records = await AxiosClient.get(url);
    filterCapacityValues(records.data);
  };

  const filterCapacityValues = (values) => {
    let formatedCapacity = [...values];

    const campingOnline = formatedCapacity.filter((values) => {
      values.Type === "CampingOnline";
    });

    const campingOnSite = formatedCapacity.filter((values) => {
      values.Type === "CampingOnSite";
    });

    const picnicOnline = formatedCapacity.filter((values) => {
      values.Type === "PicnicOnline";
    });

    const picnicOnSite = formatedCapacity.filter((values) => {
      values.Type === "PicnicOnSite";
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
  return { capacityValues, filterCapacityValues, setCapacityValues };
};

export default useSettingCapacity;
