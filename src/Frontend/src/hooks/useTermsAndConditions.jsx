import { useEffect } from "react";

const useTermsAndConditions = () => {
  const fetchTermsAndConditionsLink = async () => {
    try {
      const url = "/getTermsAndConditionLink";
      await AuthToken(token);
      const records = await AxiosClient.get(url);
      console.log("[FetchTermsAndConditionsLink] Link fetched: " + records);
      return records;
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateTermsAndConditionsLink = async (link) => {
    try {
      console.log("[UpdateTermsAndConditionsLink] Link received: " + link);
      const url = "/updateTermsAndConditionsLink";
      await AuthToken(localStorage.getItem("auth-token"));
      await AxiosClient.put(url, {
        link,
      });
    } catch (exception) {
      console.log(exception);
    }
  };
  return { fetchTermsAndConditionsLink, updateTermsAndConditionsLink };
};

export default useTermsAndConditions;
