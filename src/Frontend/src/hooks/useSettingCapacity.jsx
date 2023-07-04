import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useSettingCapacity = () => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;
  const [capacityValues, setCapacityValues] = useState([]);

  const fetchActualCapacityValues = async () => {
    const url = "/getActualCapacities";
    await AuthToken(token);
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
