import {useEffect, useState} from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import useReservations from "../../hooks/useReservations";
import useInsertReservation from "../../hooks/useInsertReservation";
import AddSpot from "./Add/AddSpot";
import AddPerson from "./Add/AddPerson";
import AddTicket from "./Add/AddTicket";
import AddVehicle from "./Add/AddVehicle";
import AddService from "./Add/AddService";
import AddMainData from "./Add/AddMainData";

const CreateReservation = (props) => {
  // Props
  const {
    viewModal,
    setViewModal,
    reservation,
    setReservation,
    exitMethod
  } = props;
  // Hook for reservations
  const {createReservation} = useReservations();
  // Hook for insert reservations
  const {insertReservation} = useInsertReservation(reservation);

  // The new reservation is inited
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
        <label className="block text-xl font-semibold leading-6 text-gray-900">
          Services
        </label>
        <AddService
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
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
            onclickFunction={insertReservation}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateReservation;
