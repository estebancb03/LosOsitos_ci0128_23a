import AxiosClient from "../config/AxiosClient";

const useUpdateCapacity = async (type, value) => {
  console.log(
    "Al useUpdateCapacity le llego lo siguiente\nType: " +
      type +
      "\nValue: " +
      value
  );
  if (value) {
    try {
      console.log("Llegue al try");
      const url = "/updateCapacity";
      //await Promise.all(
      await AxiosClient.put(url, {
        type,
        value,
      });
      //);
    } catch (exception) {
      console.log(exception);
    }
  } else {
    console.log("El value es vacio entonces ni trato de meterlo");
  }
};

export default useUpdateCapacity;
