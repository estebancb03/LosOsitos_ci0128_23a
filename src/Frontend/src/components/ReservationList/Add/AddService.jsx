import {useState, useEffect} from "react";
import Button from "../../Buttons/Button";
import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import DatePickerButton from "../../Buttons/DatePickerButton";
import useServices from "../../../hooks/useServices";

const AddService = (props) => {
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;
  const {servicesNames, searchServicePrice, modifyService} = useServices();
  const [availableServices, setAvailableServices] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const getReservationServicesNames = () => {
    if (currentRecord.Services) {
      return currentRecord.Services.map((service) => service.Name_Service);
    }
    return [];
  };

  const getNewReservationServicesNames = () => {
    if (currentRecord.NewServices.length !== 0) {
      return currentRecord.NewServices.map((newService) => newService.Name_Service);
    }
    return [];
  };

  const validateButtonVisibility = () => {
    const reservationServices = getReservationServicesNames();
    const newReservationServices = getNewReservationServicesNames();
    const allReservationServices = [...new Set([...reservationServices, ...newReservationServices])];
    if (allReservationServices.length === servicesNames.length && allReservationServices.length !== 0) {
      setButtonVisibility(false);
    }
  };

  const filterAvailableServices = () => {
    const reservationServices = getReservationServicesNames();
    const newAvailableServices = availableServices.filter(service => reservationServices.includes(service) === false);
    setAvailableServices(newAvailableServices);
    return newAvailableServices;
  };

  const addService = () => {
    const currentAvailableServices = filterAvailableServices();
    const newCurrentRecord = {...currentRecord};
    let services = [...currentRecord.NewServices];
    services = [{
      ID_Client: currentRecord.ID,
      Reservation_Date: new Date().toISOString(),
      Name_Service: currentAvailableServices[0],
      Quantity: "1",
      Price: searchServicePrice(currentAvailableServices[0], currentRecord.Country_Name === "Costa Rica" ? "CRC" : "USD"),
      Currency: currentRecord.Country_Name === "Costa Rica" ? "CRC" : "USD",
    }, ...services];
    newCurrentRecord.NewServices = services;
    setCurrentRecord(newCurrentRecord);
  };

  const changeService = (type, value) => {
    const newCurrentRecord = modifyService(type, value, currentRecord);
    setCurrentRecord(newCurrentRecord);
  };

  useEffect(() => {
    setAvailableServices(servicesNames);
  }, [servicesNames]);

  useEffect(() => {
    if (currentRecord) {
      validateButtonVisibility();
    }
  });

  return (
    <>
      {buttonVisibility && (
        <div className="mt-4 mb-2">
          <Button
            text="Add service"
            type="add"
            disabled={disabledElements}
            onclickFunction={() => addService()}
          />
        </div>
      )}
      {buttonVisibility === false && (<div className="mt-4 mb-2"></div>)}
      {currentRecord.NewServices &&
        currentRecord.NewServices.map((service, index) => (
          <div className="bg-gray-100 w-full rounded-sm mt-4" key={index}>
            <div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1">
                <DropDownSelect
                  options={availableServices}
                  selectedOption={availableServices[0]}
                  disabled={disabledElements}
                  typeChange={["name", index]}
                  onChangeFunction={changeService}
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                <span className="mr-2 sm:mr-7">
                  <DatePickerButton
                    text=""
                    typeClass="2"
                    disabled={true}
                    selectedDate={new Date(service.Reservation_Date)}
                  />
                </span>
                <div className="mt-0.5 mb-3">
                  <InputButton
                    type={["quantity", index]}
                    placeholderText={service.Quantity}
                    disabled={disabledElements}
                    onChangeFunction={changeService}
                  />
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
              <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                Price
              </label>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mt-3 mb-2">
                {currentRecord.Country_Name === "Costa Rica" ? (
                  <div className="-mt-4 mb-3">
                    <InputButton
                      type={["price", index]}
                      placeholderText={"₡" + service.Price.toLocaleString("en-us")}
                      disabled={true}
                      onChangeFunction={changeService}
                    />
                  </div>
                ) : (
                  <div className="-mt-4 mb-3">
                    <InputButton
                      type={["price", index]}
                      placeholderText={"$" + service.Price.toLocaleString("en-us")}
                      disabled={true}
                      onChangeFunction={changeService}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AddService;