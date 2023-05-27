import { useEffect, useState } from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import DatePickerButton from "../Buttons/DatePickerButton";
import useUpdateReservation from "../../hooks/useUpdateReservation";
import ReservationListAddVehicles from "./ReservationListAddVehicles";
import {
  formatDateDTDDMMYYYY,
  getHoursMinutesFromISOFormat,
  createHoursWithIntervals,
  changeDateInISOFormat,
  changeHourInISOFormat,
  formatDateDTMMDDYYYY
} from "../../helpers/formatDate";

const ReservationListModal = (props) => {
  // Props
  const {
    currentRecord,
    setCurrentRecord,
    viewModal,
    setViewModal,
  } = props;
  // State that controls the modify button in the popup
  const [modifyButton, setModifyButton] = useState("Modify");
  // State that controls the elements availability in the popup
  const [disabledElements, setDisabledElements] = useState(true);
  // Hook that updates the reservation
  const { updateReservation } = useUpdateReservation(currentRecord);

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

  // Method that puts the element in its initial state
  const restartModal = () => {
    setViewModal(false);
    setDisabledElements(true);
    setModifyButton("Modify");
  };

  // Method that validates what part of the state to modify
  const changeCurrentRecordData = (type, value) => {
    const newRecord = { ...currentRecord };
    if (Array.isArray(type)) {
      if (type[0] === "vehicles") {
        const newVehicles = [...newRecord.Vehicles];
        newVehicles[type[1]] = value;
        newRecord.Vehicles = newVehicles;
      } else if (type[0] === "services") {
        const newServices = [...newRecord.Services];
        type[1] === "date"
          ? (newServices[type[2]].Reservation_Date = changeDateInISOFormat(
              value,
              newServices[type[2]].Reservation_Date
            ))
          : (newServices[type[2]].Reservation_Date = changeHourInISOFormat(
              value,
              newServices[type[2]].Reservation_Date
            ));
      } else if (type[0] === "tickets") {
        const newTickets = [...newRecord.Tickets];
        if (type[1] === "ticketType") {
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
      } else if (type === "Status") {
        newRecord.Status = value === "Pending" ? 0 : 1;
      }
    }
    setCurrentRecord(newRecord);
  };

  return (
    <Modal state={viewModal} setState={restartModal} title="Reservation Data">
      <div className="my-3">
        {
          <Button
            text={modifyButton}
            onclickFunction={ () => {
              modifyHandleClick();
              if (modifyButton === "Save changes")
                updateReservation();
            }}
          />
        }
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-6 mb-8">
        <InputButton
          text="Reservation Date"
          placeholderText={formatDateDTDDMMYYYY(
            currentRecord.Reservation_Date
          )}
          disabled={true}
        />
        <DropDownSelect
          text="Status"
          options={["Pending", "Approved"]}
          selectedOption={currentRecord.Status === 0 ? "Pending" : "Approved"}
          disabled={disabledElements}
          typeChange="Status"
          onChangeFunction={changeCurrentRecordData}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 my-7">
        <InputButton
          text="Type"
          placeholderText={
            currentRecord.Reservation_Type == 0 ? "Picnic" : "Camping"
          }
          disabled={true}
        />
        <InputButton
          text="Method"
          placeholderText={
            currentRecord.Reservation_Method == 0 ? "Online" : "In site"
          }
          disabled={true}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
        <InputButton
          text="Customer ID"
          type="ID"
          placeholderText={currentRecord.ID}
          disabled={true}
          onChangeFunction={changeCurrentRecordData}
        />
        <InputButton
          text="Name"
          type="Name"
          placeholderText={currentRecord.Name}
          disabled={disabledElements}
          onChangeFunction={changeCurrentRecordData}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-6">
        <InputButton
          text="Lastname 1"
          type="Lastname1"
          placeholderText={currentRecord.LastName1}
          disabled={disabledElements}
          onChangeFunction={changeCurrentRecordData}
        />
        <InputButton
          text="Lastname 2"
          type="Lastname2"
          placeholderText={currentRecord.LastName2}
          disabled={disabledElements}
          onChangeFunction={changeCurrentRecordData}
        />
      </div>
      <div className="mt-6">
        <InputButton
          text="Email"
          type="Email"
          placeholderText={currentRecord.Email}
          disabled={disabledElements}
          onChangeFunction={changeCurrentRecordData}
        />
      </div>
      <div className="mt-6 mb-8">
        <InputButton
          text="Nationality"
          type="Country_Name"
          placeholderText={currentRecord.Country_Name}
          disabled={disabledElements}
          onChangeFunction={changeCurrentRecordData}
        />
      </div>
      {currentRecord.Reservation_Type === 1 ? (
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mb-8">
          <span className="">
            <DatePickerButton
              text="Start Date"
              typeClass="3"
              type="Start_Date"
              disabled={disabledElements}
              selectedDate={new Date(formatDateDTMMDDYYYY(currentRecord.Start_Date))}
              onChangeFunction={changeCurrentRecordData}
            />
          </span>
          <span className="mr-2">
            <DatePickerButton
              text="End Date"
              typeClass="3"
              type="End_Date"
              disabled={disabledElements}
              selectedDate={new Date(formatDateDTMMDDYYYY(currentRecord.End_Date))}
              onChangeFunction={changeCurrentRecordData}
            />
          </span>
        </div>
      ) : (
        <div></div>
      )}
      <label className="block text-xl font-semibold leading-6 text-gray-900">
        Tickets
      </label>
      <div className="grid grid-cols-1 mt-2">
        {currentRecord.Tickets &&
          currentRecord.Tickets.map((ticket, index) => (
            <div key={index} className="flex">
              <div className="bg-gray-100 w-[500px] rounded-sm my-2">
                <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                  <div className="mt-1 mb-1.5 sm:-mb-4">
                    <InputButton
                      key={index}
                      placeholderText={formatTicket(ticket)}
                      disabled={true}
                    />
                  </div>
                  <div className="mt-1 mb-1.5 sm:mt-0">
                    <InputButton
                      key={index}
                      type={["tickets", "amount", index]}
                      placeholderText={ticket.Amount}
                      disabled={disabledElements}
                      onChangeFunction={changeCurrentRecordData}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {currentRecord.Spots && currentRecord.Spots.length != 0 ? (
        <label className="block text-xl font-semibold leading-6 text-gray-900 mt-5">
          Spots
        </label>
      ) : (
        <label className="block text-xl font-semibold leading-6 text-gray-900 mt-5"></label>
      )}
      <div className="grid grid-cols-2 mt-2 mb-3">
        {currentRecord.Spots &&
          currentRecord.Spots.map((spot, index) => (
            <span key={index} className="mx-1">
              <InputButton
                key={index}
                type={["spots", index]}
                placeholderText={spot.Location_Spot}
                disabled={disabledElements}
                onChangeFunction={changeCurrentRecordData}
              />
            </span>
          ))}
      </div>
      {currentRecord.Reservation_Type === 0 ? (
        <label className="block text-xl font-semibold leading-6 text-gray-900">
          Services
        </label>
      ) : (
        <label className="block mt-7 text-xl font-semibold leading-6 text-gray-900">
          Services
        </label>
      )}
      {currentRecord.Services &&
        currentRecord.Services.map((service, index) => (
          <div key={index} className="flex">
            <div className="bg-gray-100 w-full rounded-sm my-2">
              <label className="block text-lg font-semibold ml-3 leading-6 mt-2 text-gray-900">
                {service.Name_Service}
              </label>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                <span className="mr-2 sm:mr-7">
                  <DatePickerButton
                    text=""
                    typeClass="2"
                    disabled={disabledElements}
                    type={["services", "date", index]}
                    selectedDate={new Date(service.Reservation_Date)}
                    onChangeFunction={changeCurrentRecordData}
                  />
                </span>
                <div className="mt- sm:-mt-4">
                  <DropDownSelect
                    options={createHoursWithIntervals(8, 16, 30)}
                    selectedOption={getHoursMinutesFromISOFormat(
                      service.Reservation_Date
                    )}
                    disabled={disabledElements}
                    typeChange={["services", "hour", index]}
                    onChangeFunction={changeCurrentRecordData}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      <label className="block mt-7 text-xl font-semibold leading-6 text-gray-900">
        Vehicles
      </label>
      <ReservationListAddVehicles
        disabledElements={disabledElements}
        currentRecord={currentRecord}
        setCurrentRecord={setCurrentRecord}
      />
      <div className="grid grid-cols-2 mb-5">
        {currentRecord.Vehicles &&
          currentRecord.Vehicles.map((vehicle, index) => (
            <InputButton
              key={index}
              type={["vehicles", index]}
              placeholderText={vehicle.ID_Vehicle}
              disabled={disabledElements}
              onChangeFunction={changeCurrentRecordData}
            />
          ))}
      </div>
    </Modal>
  );
};

export default ReservationListModal;
