import AxiosClient from "../config/AxiosClient";

const useUpdateTicketPrice = async (
  Age_Range,
  Demographic_Group,
  Reservation_Type,
  Price
) => {
  try {
    const url = "/ticket-updatePrice";
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
