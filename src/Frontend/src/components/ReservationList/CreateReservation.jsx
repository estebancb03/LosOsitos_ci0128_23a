import { useEffect, useState } from "react";
import Modal from "../Modal";
import useReservations from "../../hooks/useReservations";
import AddPerson from "./AddPerson.jsx";
import AddVehicle from "./AddVehicle.jsx";
import AddService from "./AddService.jsx";

const CreateReservation = (props) => {
  // Props
  const {
    viewModal,
    setViewModal,
    reservation,
    setReservation
  } = props;
  // Hook for reservations
  const { createReservation } = useReservations();
  
  // The new reservation is inited
  useEffect(() => setReservation(createReservation), []);

  // Method that reset the reservation
  const resetReservation = () => {
    setReservation(createReservation);
  };

  return (
    <>
      <Modal state={viewModal} setState={setViewModal} exitFunction={resetReservation} title="Create Reservation">
        <AddPerson
          reservation={reservation}
          setReservation={setReservation}
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
      </Modal>
    </>
  );
};

export default CreateReservation;
