import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";
import AuthToken from "../config/AuthToken";

const useTermsAndConditions = () => {
  const fetchTermsAndConditionsLink = async () => {
    try {
      const url = "/getTermsAndConditionLink";
      await AuthToken(localStorage.getItem("auth-token"));
      const result = await AxiosClient.get(url);
      console.log(result.data.recordset[0].Link);
      return result.data.recordset[0].Link;
    } catch (exception) {
      console.log(exception);
    }
  };

  // useEffect(() => {
  //   fetchTermsAndConditionsLink();
  // }, []);

  const updateTermsAndConditionsLink = async (link) => {
    try {
      const url = "/updateTermsAndConditionsLink";
      if (link !== "") {
        await AuthToken(localStorage.getItem("auth-token"));
        await AxiosClient.put(url, {
          link,
        });
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  return { fetchTermsAndConditionsLink, updateTermsAndConditionsLink };
};

export default useTermsAndConditions;
