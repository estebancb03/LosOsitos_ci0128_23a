import {useEffect, useState} from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import useReservations from "../../hooks/useReservations";
import useInsertReservation from "../../hooks/useInsertReservation";
import useCalculateFees from "../../hooks/useCalculateFees";
import useValidations from "../../hooks/useValidations";
import AddSpot from "./Add/AddSpot";
import AddPerson from "./Add/AddPerson";
import AddTicket from "./Add/AddTicket";
import AddVehicle from "./Add/AddVehicle";
import AddService from "./Add/AddService";
import AddMainData from "./Add/AddMainData";
import ShowFee from "./Show/ShowFee";

const CreateReservation = (props) => {
  const {
    viewModal,
    setViewModal,
    reservation,
    setReservation,
    exitMethod
  } = props;
  const {createReservation} = useReservations();
  const {insertReservation} = useInsertReservation(reservation);
  const {validateInsertReservation, validateCapacity} = useValidations(reservation);
  const {
    calculateAllTicketsFee,
    calculateAllSpotsFee,
    calculateAllServicesFee,
    calculateTotalFee
  } = useCalculateFees(reservation);

  const saveReservation = async () => {
    if (validateInsertReservation()) {
      if(await validateCapacity()) {
        insertReservation();
      } else {
        alert("Insufficient capacity");
      }
    } else {
      alert("Incorrect data, check the information entered");
    }
  };

  useEffect(() => setReservation(createReservation), []);

  return (
    <>
      <Modal state={viewModal} setState={setViewModal} exitFunction={exitMethod} title="Create Reservation">
        <AddPerson
          reservation={reservation}
          setReservation={setReservation}
        />
        <AddMainData
          reservation={reservation}
          setReservation={setReservation}
        />
        <label className="block text-xl font-semibold leading-6 text-gray-900">
          Tickets
        </label>
        <AddTicket
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
        <ShowFee
          text="Subtotal"
          fees={calculateAllTicketsFee()}
        />
        {reservation.Reservation_Type === 1 && (
          <label className="block text-xl font-semibold leading-6 text-gray-900">
            Spots
          </label>
        )}
        <AddSpot
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
        {reservation.Reservation_Type === 1 && (
          <ShowFee
            text="Subtotal"
            fees={calculateAllSpotsFee()}
          />
        )}
        <label className="block text-xl font-semibold leading-6 text-gray-900">
          Services
        </label>
        <AddService
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
        <ShowFee
          text="Subtotal"
          fees={calculateAllServicesFee()}
        />
        <label className="mt-4 block text-xl font-semibold leading-6 text-gray-900">
          Vehicles
        </label>
        <AddVehicle
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
        <div className="my-3">
          <Button
            text="Save reservation"
            onclickFunction={saveReservation}
          />
        </div>
        <ShowFee
          text="Total"
          fees={calculateTotalFee()}
        />
      </Modal>
    </>
  );
};

export default CreateReservation;
