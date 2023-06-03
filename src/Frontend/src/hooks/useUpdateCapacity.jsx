import AxiosClient from "../config/AxiosClient";

const useUpdateCapacity = async (type, value) => {
  if (value) {
    try {
      const url = "/updateCapacity";
      await AxiosClient.put(url, {
        type,
        value,
      });
    } catch (exception) {
      console.log(exception);
    }
  }
};

export default useUpdateCapacity;
