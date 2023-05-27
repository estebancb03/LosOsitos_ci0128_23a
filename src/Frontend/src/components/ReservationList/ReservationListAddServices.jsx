import { useState } from "react";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import DatePickerButton from "../Buttons/DatePickerButton";
import useServices from "../../hooks/useServices";
import {
  formatDateDTDDMMYYYY,
  getHoursMinutesFromISOFormat,
  createHoursWithIntervals,
  changeDateInISOFormat,
  changeHourInISOFormat,
  formatDateDTMMDDYYYY
} from "../../helpers/formatDate";

const ReservationListAddServices = (props) => {
  // Props
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;
  
  const { inputServicesPrices, setInputServicesPrice } = useState([]);
  const { servicesNames, servicesPrices, searchServicePrice } = useServices();

  // Method that adds a service element
  const addService = () => {
    const newCurrentRecord = {...currentRecord};
    const newInputServicesPrices = [ ...inputServicesPrices ];
    let services = [...currentRecord.NewServices];
    services = [...services, {
      ID_Client: currentRecord.ID,
      Reservation_Date: currentRecord.Reservation_Date,
      Name_Service: servicesNames[1],
      Price: searchServicePrice(servicesNames[1], 'CRC'),
      Schedule: new Date().toISOString()
    }];
    newInputServicesPrices.push(searchServicePrice(servicesNames[1], 'CRC'));
    newCurrentRecord.NewServices = services;
    setCurrentRecord(newCurrentRecord);
    setInputServicesPrice(newInputServicesPrices);
  };

  // Method that modify the currentRecord
  const modifyService = (type, value) => {
    console.log(type);
    const newCurrentRecord = { ...currentRecord };
    const newServices = [ ...currentRecord.NewServices ];
    if (type[0] === "name") {
      newServices[type[1]].Name_Service = value;
      newServices[type[1]].Price = searchServicePrice(newServices[type[1]].Name_Service, 'CRC');
    } else if (type[0] === "hour") {
      newServices[type[1]].Schedule = changeHourInISOFormat(value, newServices[type[1]].Schedule);
    }
    newCurrentRecord.NewServices = newServices;
    setCurrentRecord(newCurrentRecord);
  };

  return (
    <>
      <div className="mt-4 mb-2">
        <Button
          text="Add service"
          type="add"
          disabled={disabledElements}
          onclickFunction={() => addService()}
        />
      </div>
      {currentRecord.NewServices &&
        currentRecord.NewServices.map((service, index) => (
          <div className="bg-gray-100 w-full rounded-sm mt-4" key={index}>
            <div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1">
                <DropDownSelect
                  options={servicesNames}
                  selectedOption={servicesNames[1]}
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
                    selectedDate={new Date(service.Schedule)}
                  />
                </span>
                <div className="mt-0.5 sm:-mt-4">
                  <DropDownSelect
                    options={createHoursWithIntervals(8, 16, 30)}
                    selectedOption={getHoursMinutesFromISOFormat(
                      service.Schedule
                    )}
                    disabled={disabledElements}
                    typeChange={["hour", index]}
                    onChangeFunction={modifyService}
                  />
                </div>
                <div className="-mt-4 mb-3">
                  <InputButton
                    type={["price", index]}
                    placeholderText={"CRC " + inputServicesPrices[index]}
                    disabled={true}
                    onChangeFunction={modifyService}
                  />
                </div>
                <div className="-mt-4 mb-3">
                  <InputButton
                    type={["price", index]}
                    placeholderText={"USD " + searchServicePrice(service.Name_Service, 'USD')}
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

export default ReservationListAddServices;