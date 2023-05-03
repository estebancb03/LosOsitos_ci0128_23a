import { useEffect, useState } from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import { formatDateDTDDMMYYYY } from "../../helpers/formatDate";
import DatePickerButton from "../Buttons/DatePickerButton";

const ReservationListModal = ({
  mainRecordInfo,
  setMainRecordInfo,
  viewModal,
  setViewModal,
}) => {
  // State that controls the spots of the reservation
  const [spots, setSpots] = useState([]);
  // State that controls the tickets of the reservation
  const [tickets, setTickets] = useState([]);
  //State that controls the plate numbers of the reservation
  const [plateNumbers, setPlateNumbers] = useState([]);
  // State that controls the modify button in the popup
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

  // Method tha formats the ticket information
  const formatTicket = (ticket) => {
    const { Age_Range, Demographic_Group } = ticket;
    const resultAgeRange = Age_Range == 0 ? "Children" : "Adult";
    const resultDemographicGroup =
      Demographic_Group == 0 ? "National" : "Foreign";
    return Demographic_Group != 2
      ? resultDemographicGroup + ", " + resultAgeRange
      : "Special Visitor";
  };

  // Method that returns tickets properties
  const createTicket = (information) => {
    if (information === "Foreign, Adult") {
      return [1, 1];
    } else if (information === "Foreign, Children") {
      return [1, 0];
    } else if (information === "National, Adult") {
      return [0, 1];
    } else if (information === "National, Children") {
      return [0, 0];
    } else {
      return [0, 2];
    }
  };

  // Method that puts the element in its initial state
  const restartModal = () => {
    setViewModal(false);
    setDisabledElements(true);
    setModifyButton("Modify");
  };

  // Method that validates what part of the state to modify
  const changeRecordInfo = (type, value) => {
    const newRecord = { ...mainRecordInfo };
    if (Array.isArray(type)) {
      if (type[0] === "vehicles") {
        const newVehicles = [...newRecord.Vehicles];
        newVehicles[type[1]] = value;
        newRecord.Vehicles = newVehicles;
      } else if (type[0] === "services") {
        const newServices = [...newRecord.Services];
        type[1] === "date"
          ? (newServices[type[2]].date = value)
          : (newServices[type[2]].hour = value);
      } else if (type[0] === "tickets") {
        const newTickets = [...newRecord.Tickets];
        if (type[1] == "ticketType") {
          if (value === "Foreign, Adult") {
            newTickets[type[2]].Demographic_Group = 1;
            newTickets[type[2]].Age_Range = 1;
          } else if (value === "Foreign, Children") {
            newTickets[type[2]].Demographic_Group = 1;
            newTickets[type[2]].Age_Range = 0;
          } else if (value === "National, Adult") {
            newTickets[type[2]].Demographic_Group = 0;
            newTickets[type[2]].Age_Range = 1;
          } else if (value === "National, Children") {
            newTickets[type[2]].Demographic_Group = 0;
            newTickets[type[2]].Age_Range = 0;
          } else if (value === "Special Visitor") {
            newTickets[type[2]].Demographic_Group = 2;
            newTickets[type[2]].Age_Range = 1;
          }
        } else {
          newTickets[type[2]].Amount = value;
        }
        newRecord.Tickets = newTickets;
      } else if (type[0] === "spots") {
        const newSpots = [...newRecord.Spots];
        newSpots[type[1]].Location_Spot = value;
        newRecord.Spots = newSpots;
      }
    } else {
      if (type === "ID") {
        newRecord.ID = value;
      } else if (type === "Name") {
        newRecord.Name = value;
      } else if (type === "Lastname1") {
        newRecord.LastName1 = value;
      } else if (type === "Lastname2") {
        newRecord.LastName2 = value;
      } else if (type === "Email") {
        newRecord.Email = value;
      } else if (type === "Country_Name") {
        newRecord.Country_Name = value;
      } else if (type === "Start_Date") {
        newRecord.Start_Date = value;
      } else if (type === "End_Date") {
        newRecord.End_Date = value;
      }
    }
    setMainRecordInfo(newRecord);
  };

  return (
    <Modal state={viewModal} setState={restartModal} title="Reservation Data">
      <div className="my-3">
        {<Button text={modifyButton} onclickFunction={modifyHandleClick} />}
      </div>
      <div className="mt-6">
        <InputButton
          text="Reservation Date"
          placeholderText={formatDateDTDDMMYYYY(
            mainRecordInfo.Reservation_Date
          )}
          disabled={true}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 my-7">
        <InputButton
          text="Type"
          placeholderText={
            mainRecordInfo.Reservation_Type == 0 ? "Picnic" : "Camping"
          }
          disabled={true}
        />
        <InputButton
          text="Method"
          placeholderText={
            mainRecordInfo.Reservation_Method == 0 ? "Online" : "In site"
          }
          disabled={true}
        />
      </div>
      <InputButton
        text="Customer ID"
        type="ID"
        placeholderText={mainRecordInfo.ID}
        disabled={true}
        onChangeFunction={changeRecordInfo}
      />
      <div className="mt-6">
        <InputButton
          text="Name"
          type="Name"
          placeholderText={mainRecordInfo.Name}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="mt-6">
        <InputButton
          text="Lastname 1"
          type="Lastname1"
          placeholderText={mainRecordInfo.LastName1}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="mt-6">
        <InputButton
          text="Lastname 2"
          type="Lastname2"
          placeholderText={mainRecordInfo.LastName2}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="mt-6">
        <InputButton
          text="Email"
          type="Email"
          placeholderText={mainRecordInfo.Email}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="mt-6">
        <InputButton
          text="Nationality"
          type="Country_Name"
          placeholderText={mainRecordInfo.Country_Name}
          disabled={disabledElements}
          onChangeFunction={changeRecordInfo}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-3 mb-8">
        <span className="">
          <DatePickerButton
            text="Start Date"
            typeClass="2"
            type="Start_Date"
            disabled={disabledElements}
            selectedDate={new Date(mainRecordInfo.Start_Date)}
            onChangeFunction={changeRecordInfo}
          />
        </span>
        <span className="mr-2">
          <DatePickerButton
            text="End Date"
            typeClass="2"
            type="End_Date"
            disabled={disabledElements}
            selectedDate={new Date(mainRecordInfo.End_Date)}
            onChangeFunction={changeRecordInfo}
          />
        </span>
      </div>
      <label className="block text-xl font-semibold leading-6 text-gray-900">
        Tickets
      </label>
      <div className="grid grid-cols-1 mt-2">
        {mainRecordInfo.Tickets &&
          mainRecordInfo.Tickets.map((ticket, index) => (
            <div key={index} className="flex">
              <div className="bg-gray-100 w-[500px] rounded-sm my-2">
                <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                  <div className="mt-1 mb-1.5 sm:-mb-4">
                    <DropDownSelect
                      options={[
                        "Foreign, Adult",
                        "Foreign, Children",
                        "National, Adult",
                        "National, Children",
                        "Special Visitor",
                      ]}
                      selectedOption={formatTicket(ticket)}
                      disabled={disabledElements}
                      typeChange={["tickets", "ticketType", index]}
                      onChangeFunction={changeRecordInfo}
                    />
                  </div>
                  <div className="mt-1 mb-1.5 sm:mt-0">
                    <InputButton
                      key={index}
                      type={["tickets", "amount", index]}
                      placeholderText={ticket.Amount}
                      disabled={disabledElements}
                      onChangeFunction={changeRecordInfo}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {mainRecordInfo.Spots && mainRecordInfo.Spots.length != 0 ? (
        <label className="block text-xl font-semibold leading-6 text-gray-900 mt-5">
          Spots
        </label>
      ) : (
        <label className="block text-xl font-semibold leading-6 text-gray-900 mt-5"></label>
      )}
      <div className="grid grid-cols-2 mt-2 mb-3">
        {mainRecordInfo.Spots &&
          mainRecordInfo.Spots.map((spot, index) => (
            <span key={index} className="mx-1">
              <InputButton
                key={index}
                type={["spots", index]}
                placeholderText={spot.Location_Spot}
                disabled={disabledElements}
                onChangeFunction={changeRecordInfo}
              />
            </span>
          ))}
      </div>
      {/* <label className="block mt-7 text-xl font-semibold leading-6 text-gray-900">
        Services
      </label>
      {mainRecordInfo.services &&
        mainRecordInfo.services.map((service, index) => (
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
        ))} */}
      <label className="block mt-7 text-xl font-semibold leading-6 text-gray-900">
        Vehicles
      </label>
      <div className="grid grid-cols-2 mb-5">
        {mainRecordInfo.Vehicles &&
          mainRecordInfo.Vehicles.map((vehicle, index) => (
            <InputButton
              key={index}
              type={["vehicles", index]}
              placeholderText={vehicle}
              disabled={disabledElements}
              onChangeFunction={changeRecordInfo}
            />
          ))}
      </div>
      {/* <span className="mt-10">
        <InputButton
          text="Total price"
          placeholderText={mainRecordInfo.totalPrice}
          disabled={disabledElements}
        />
      </span> */}
    </Modal>
  );
};

export default ReservationListModal;
