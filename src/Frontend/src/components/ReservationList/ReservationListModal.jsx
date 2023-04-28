import { useState } from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";

const ReservationListModal = ({
  records,
  selectedRecord,
  viewModal,
  setViewModal,
}) => {
  // State that constrols the modify button in the popup
  const [modifyButton, setModifyButton] = useState("Modify");
  // State that controls the elements availability in the popup
  const [disabledElements, setDisabledElements] = useState(true);

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

  return <Modal
  state={viewModal}
  setState={restartModal}
  title="Reservation Data"
>
  <div className="my-3">
    {<Button text={modifyButton} onclickFunction={modifyHandleClick} />}
  </div>
  <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
    <InputButton
      text="Reservation ID"
      placeholderText={selectedRecord.reservationId}
      disabled={true}
    />
    <InputButton
      text="Costumer ID"
      placeholderText={selectedRecord.customerId}
      disabled={disabledElements}
    />
  </div>
  <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mb-2">
    <span className="">
      <DropDownSelect
        text="Type"
        selectedOption="Camping"
        disabled={disabledElements}
        options={["Picnic", "Camping"]}
      />
    </span>
    <span className="">
      <DropDownSelect
        text="Method"
        disabled={disabledElements}
        options={["Online", "In the place"]}
      />
    </span>
  </div>
  <InputButton
    text="Name"
    placeholderText={selectedRecord.customer}
    disabled={disabledElements}
  />
  <InputButton
    text="Nationality"
    placeholderText={selectedRecord.nationality}
    disabled={disabledElements}
  />
  <InputButton
    text="Reservation Date"
    placeholderText={selectedRecord.reservationDate}
    disabled={disabledElements}
  />
  <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mb-2">
    <InputButton
      text="Start Date"
      placeholderText={selectedRecord.startDate}
      disabled={disabledElements}
    />
    <InputButton
      text="End Date"
      placeholderText={selectedRecord.endDate}
      disabled={disabledElements}
    />
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
  <label className="block text-xl font-semibold leading-6 text-gray-900">
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
            <InputButton
              text=""
              placeholderText={service.date}
              disabled={disabledElements}
            />
            <DropDownSelect
              selectedOption={service.hour}
              disabled={disabledElements}
              options={[
                service.hour,
                "10:30",
                "11:30",
                "12:30",
                "13:30",
              ]}
            />
          </div>
        </div>
      </div>
    ))}
  <label className="block text-xl font-semibold leading-6 text-gray-900">
    Plate Numbers
  </label>
  <div className="grid grid-cols-2 mb-3">
    {selectedRecord.services &&
      selectedRecord.plateNumbers.map((plateNumber, index) => (
        <InputButton
          key={index}
          placeholderText={plateNumber}
          disabled={disabledElements}
        />
      ))}
  </div>
  <InputButton
    text="Total price"
    placeholderText={selectedRecord.totalPrice}
    disabled={disabledElements}
  />
</Modal>;
};

export default ReservationListModal;
