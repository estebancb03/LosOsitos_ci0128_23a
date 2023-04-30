import { useState } from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import { formatDateDDMMYYYY } from "../../helpers/formatDate";
import DatePickerButton from "../Buttons/DatePickerButton";

const ReservationListModal = ({
  records,
  selectedRecord,
  setSelectedRecord,
  viewModal,
  setViewModal,
}) => {
  // State that constrols the modify button in the popup
  const [modifyButton, setModifyButton] = useState("Modify");
  // State that controls the elements availability in the popup
  const [disabledElements, setDisabledElements] = useState(true);
  // State that controls the selected record information
  const [recordInfo, setRecordInfo] = useState({});

  // Method that handles what happen when the modify button is clicked
  const modifyHandleClick = () => {
    setDisabledElements(!disabledElements);
    modifyButton === "Modify"
      ? setModifyButton("Save changes")
      : setModifyButton("Modify");
  };

  // Method that puts the element in its initial state
  const restartModal = () => {
    setViewModal(false);
    setDisabledElements(true);
    setModifyButton("Modify");
  };

  // Method that validates what part of the state to modify
  const changeRecordInfo = (type, value) => {
    const newRecord = { ...selectedRecord };
    if (Array.isArray(type)) {
      if (type[0] === "plateNumbers") {
        const newPlateNumbers = [...newRecord.plateNumbers];
        newPlateNumbers[type[1]] = value;
        newRecord.plateNumbers = newPlateNumbers;
      } else if (type[0] === "services") {
        const newServices = [...newRecord.services];
        type[1] === "date"
          ? (newServices[type[2]].date = value)
          : (newServices[type[2]].hour = value);
      }
    } else {
      if (type === "customerId") {
        newRecord.customerId = value;
      } else if (type === "customer") {
        newRecord.customer = value;
      } else if (type === "nationality") {
        newRecord.nationality = value;
      } else if (type === "startDate") {
        newRecord.startDate = value;
      } else if (type === "endDate") {
        newRecord.endDate = value;
      }
    }
    setSelectedRecord(newRecord);
  };

  return (
    <Modal state={viewModal} setState={restartModal} title="Reservation Data">
      <div className="my-3">
        {<Button text={modifyButton} onclickFunction={modifyHandleClick} />}
      </div>
      <InputButton
        text="Reservation Date"
        placeholderText={formatDateDDMMYYYY(selectedRecord.reservationDate)}
        disabled={true}
      />
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mb-2">
        <InputButton
          text="Type"
          placeholderText={selectedRecord.type == 1 ? "Camping" : "Picnic"}
          disabled={true}
        />
        <InputButton
          text="Method"
          placeholderText={selectedRecord.method == 1 ? "Online" : "In site"}
          disabled={true}
        />
      </div>
      <InputButton
        text="Customer ID"
        type="customerId"
        placeholderText={selectedRecord.customerId}
        disabled={true}
        onChangeFunction={changeRecordInfo}
      />
      <div className="mt-6">
        <InputButton
          text="Name"
          type="customer"
          placeholderText={selectedRecord.customer}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="mt-6">
        <InputButton
          text="Nationality"
          type="nationality"
          placeholderText={selectedRecord.nationality}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mb-8">
        <span className="">
          <DatePickerButton
            text="Start Date"
            typeClass="2"
            type="startDate"
            disabled={disabledElements}
            selectedDate={new Date(selectedRecord.startDate)}
            onChangeFunction={changeRecordInfo}
          />
        </span>
        <span className="mr-2">
          <DatePickerButton
            text="End Date"
            typeClass="2"
            type="endDate"
            disabled={disabledElements}
            selectedDate={new Date(selectedRecord.endDate)}
            onChangeFunction={changeRecordInfo}
          />
        </span>
      </div>
      <label className="block text-xl font-semibold leading-6 text-gray-900">
        People ({selectedRecord.peopleQuantity})
      </label>

      <div className="grid grid-cols-2 mt-2 mb-3">
        {selectedRecord.peopleType &&
          selectedRecord.peopleType.map((person, index) => (
            <span key={index} className="mx-1">
              <DropDownSelect
                selectedOption={person}
                disabled={disabledElements}
                options={[
                  "Foreign, Adult",
                  "Foreign, Child",
                  "National, Adult",
                  "National, Child",
                  "Special Visitor",
                ]}
              />
            </span>
          ))}
      </div>
      <label className="block mt-7 text-xl font-semibold leading-6 text-gray-900">
        Services
      </label>
      {selectedRecord.services &&
        selectedRecord.services.map((service, index) => (
          <div key={index} className="flex">
            <div className="bg-gray-100 w-full rounded-sm my-2">
              <label className="block text-lg font-semibold ml-3 leading-6 mt-2 text-gray-900">
                {service.name}
              </label>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                <span className="mr-2">
                  <DatePickerButton
                    text=""
                    typeClass="2"
                    disabled={disabledElements}
                    type={["services", "date", index]}
                    selectedDate={new Date(service.date)}
                    onChangeFunction={changeRecordInfo}
                  />
                </span>
                <div className="mt-1">
                  <DropDownSelect
                    options={[service.hour, "10:30", "11:30", "12:30", "13:30"]}
                    selectedOption={service.hour}
                    disabled={disabledElements}
                    typeChange={["services", "hour", index]}
                    onChangeFunction={changeRecordInfo}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      <label className="block mt-7 text-xl font-semibold leading-6 text-gray-900">
        Plate Numbers
      </label>
      <div className="grid grid-cols-2 mb-7">
        {selectedRecord.services &&
          selectedRecord.plateNumbers.map((plateNumber, index) => (
            <InputButton
              key={index}
              type={["plateNumbers", index]}
              placeholderText={plateNumber}
              disabled={disabledElements}
              onChangeFunction={changeRecordInfo}
            />
          ))}
      </div>
      <span className="mt-10">
        <InputButton
          text="Total price"
          placeholderText={selectedRecord.totalPrice}
          disabled={disabledElements}
        />
      </span>
    </Modal>
  );
};

export default ReservationListModal;
