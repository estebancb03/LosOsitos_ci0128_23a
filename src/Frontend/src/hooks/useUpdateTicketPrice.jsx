import { useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useUpdateTicketPrice = async (
  Age_Range,
  Demographic_Group,
  Reservation_Type,
  Price
) => {

  try {
    const url = "/ticket-updatePrice";
    await AuthToken(localStorage.getItem('auth-token'));
    await AxiosClient.put(url, {
      Age_Range,
      Demographic_Group,
      Reservation_Type,
      Price,
    });
  } catch (exception) {
    console.log(exception);
  }
};

export default useUpdateTicketPrice;
