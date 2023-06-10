import axiosClient from "./config/AxiosClient";
import {
  countryRoute,
  ticketPricesRoute,
  servicesPricesRoute,
  incomeReporteRoute,
  visitationReportRoute,
  campingCapacityRoute, 
  picnicCapacityRoute,
} from "./config/Routes";

export const getCountries = async () => {
  let result = [];
  try {
    const { data } = await axiosClient.get(countryRoute);
    result = data;
  } catch (exception) {
    console.error(exception);
  }
  return result;
};

export const postCountries = async () => {
  try {
    await axiosClient.post(countryRoute, {
      Name: "Canada",
    });
  } catch (exception) {
    console.error(exception);
  }
};

export const getTicketPrices = async () => {
  let result = [];
  try {
    const { data } = await axiosClient.get(ticketPricesRoute);
    result = data;
  } catch (exception) {
    console.error(exception);
  }
  return result;
};

export const getKayakPrices = async () => {
  let result = [];
  try {
    const { data } = await axiosClient.get(servicesPricesRoute);
    result = data;
  } catch (exception) {
    console.error(exception);
  }
  return result;
};
export const getIncomeData = async (startDate, endDate, fileType) => {
  let result = [];
  let config = {};
  if (fileType == "CSV") {
    config = {};
  } else if (fileType == "Excel") {
    config = {method: "GET", responseType: "blob"};
  }
  try {
    const { data } = await axiosClient.get(`${incomeReporteRoute}/${startDate}/${endDate}/${fileType}`, config);    
    result = data;
  } catch (exception) {
    console.error(exception);
  }
  return result;
}
export const getRemainingCapacity = async (date, reservationType) => {
  let result = [];
  try {
    const capacityRoute = reservationType == 0 ? picnicCapacityRoute : campingCapacityRoute;
    const { data } = await axiosClient.get(`${capacityRoute}/${date}`);

    result = data;
  } catch (exception) {
    console.error(exception);
  }
  return result;
};

export const getVisitationData = async (startDate, endDate, fileType) => {
  let result = [];
  let config = {};
  if (fileType == "CSV") {
    config = {};
  } else if (fileType == "Excel") {
    config = {method: "GET", responseType: "blob"};
  }

  try {
    const { data } = await axiosClient.get(`${visitationReportRoute}/${startDate}/${endDate}/${fileType}`, config);
    result = data;
  } catch (exception) {
    console.error(exception);
  }

  return result;
};

// plantilla miedo
const getFromDB = async (route) => {
  let result = [];
  try {
    const { data } = await axiosClient.get(route);
    result = data;
  } catch (exception) {
    console.error(exception);
  }
  return result;
};
