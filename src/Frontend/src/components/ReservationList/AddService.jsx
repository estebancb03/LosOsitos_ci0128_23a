import {useState, useEffect} from "react";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import DatePickerButton from "../Buttons/DatePickerButton";
import useServices from "../../hooks/useServices";

const AddService = (props) => {
  // Props
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;
  // Services hook
  const {servicesNames, searchServicePrice} = useServices();
  // State that controls the elements of the service dropdown
  const [availableServices, setAvailableServices] = useState([]);
  // State that controls the button visibility
  const [buttonVisibility, setButtonVisibility] = useState(true);

  // Method that gets reservation services names
  const getReservationServicesNames = () => {
    if (currentRecord.Services) {
      return currentRecord.Services.map((service) => service.Name_Service);
    }
    return [];
  };

  // Method that gets reservation services names
  const getNewReservationServicesNames = () => {
    if (currentRecord.NewServices.length !== 0) {
      return currentRecord.NewServices.map((newService) => newService.Name_Service);
    }
    return [];
  };

  // Method that compares all services with the reservation services
  const validateButtonVisibility = () => {
    const reservationServices = getReservationServicesNames();
    const newReservationServices = getNewReservationServicesNames();
    const allReservationServices = [...new Set([...reservationServices, ...newReservationServices])];
    if (allReservationServices.length === servicesNames.length && allReservationServices.length !== 0) {
      setButtonVisibility(false);
    }
  };

  // Method that filter the available services
  const filterAvailableServices = () => {
    const reservationServices = getReservationServicesNames();
    const newAvailableServices = availableServices.filter(service => reservationServices.includes(service) === false);
    setAvailableServices(newAvailableServices);
    return newAvailableServices;
  };

  // Method that adds a service element
  const addService = () => {
    const currentAvailableServices = filterAvailableServices();
    const newCurrentRecord = {...currentRecord};
    let services = [...currentRecord.NewServices];
    services = [...services, {
      ID_Client: currentRecord.ID,
      Reservation_Date: new Date().toISOString(),
      Name_Service: currentAvailableServices[0],
      Quantity: "1",
      Price: searchServicePrice(currentAvailableServices[0], 'CRC'),
    }];
    newCurrentRecord.NewServices = services;
    setCurrentRecord(newCurrentRecord);
  };

  // Method that modify the currentRecord
  const modifyService = (type, value) => {
    const newCurrentRecord = {...currentRecord};
    const newServices = [...currentRecord.NewServices];
    if (type[0] === "name") {
      newServices[type[1]].Name_Service = value;
      newServices[type[1]].Price = searchServicePrice(newServices[type[1]].Name_Service, 'CRC');
    } else if (type[0] === "quantity") {
      newServices[type[1]].Quantity = value;
    }
    newCurrentRecord.NewServices = newServices;
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
                  onChangeFunction={modifyService}
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
                    onChangeFunction={modifyService}
                  />
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
              <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                Prices
              </label>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mt-3 mb-2">
                <div className="-mt-4 mb-3">
                  <InputButton
                    type={["price", index]}
                    placeholderText={"₡" + service.Price}
                    disabled={true}
                    onChangeFunction={modifyService}
                  />
                </div>
                <div className="-mt-4 mb-3">
                  <InputButton
                    type={["price", index]}
                    placeholderText={"$" + searchServicePrice(service.Name_Service, 'USD')}
                    disabled={true}
                    onChangeFunction={modifyService}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AddService;