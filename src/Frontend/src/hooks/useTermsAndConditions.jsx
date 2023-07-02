import { useState, useEffect } from "react";
import AxiosClient from "../config/AxiosClient";
import AuthToken from "../config/AuthToken";

const useTermsAndConditions = () => {
  const [test, setTest] = useState();
  const fetchTermsAndConditionsLink = async () => {
    try {
      const url = "/getTermsAndConditionLink";
      await AuthToken(localStorage.getItem("auth-token"));
      const result = await AxiosClient.get(url);
      // console.log(
      //   "[FetchTermsAndConditionsLink] Link fetched: " + result[0].Link
      // );
      setTest(result.data);
      // return result.data[0].Link;
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    fetchTermsAndConditionsLink();
  }, []);

  const updateTermsAndConditionsLink = async (link) => {
    try {
      console.log("[UpdateTermsAndConditionsLink] Link received: " + link);
      const url = "/updateTermsAndConditionsLink";
      if (link !== "") {
        await AuthToken(localStorage.getItem("auth-token"));
        await AxiosClient.put(url, {
          link,
        });
      } else {
        console.log("[UpdateTermsAndConditionsLink] Received empty link");
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  return { fetchTermsAndConditionsLink, updateTermsAndConditionsLink };
};

export default useTermsAndConditions;
