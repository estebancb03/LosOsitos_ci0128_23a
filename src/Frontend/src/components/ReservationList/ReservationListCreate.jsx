import { useEffect, useState } from "react";
import Modal from "../Modal";
import useReservations from "../../hooks/useReservations";
import ReservationListAddPerson from "./ReservationListAddPerson";
import ReservationListAddServices from "./ReservationListAddServices";

const ReservationListCreate = (props) => {
  // Props
  const {
    viewModal,
    setViewModal,
    reservation,
    setReservation
  } = props;
  // Hook for reservations
  const { createReservation } = useReservations();
  
  // The new reservations is inited
  useEffect(() => setReservation(createReservation), []);

  // Method that reset the reservation
  const resetReservation = () => {
    setReservation(createReservation);
  };

  return (
    <>
      <Modal state={viewModal} setState={setViewModal} exitFunction={resetReservation} title="Create Reservation">
        <ReservationListAddPerson
          reservation={reservation}
          setReservation={setReservation}
        />
        <label className="block text-xl font-semibold leading-6 text-gray-900">
          Services
        </label>
        <ReservationListAddServices
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
      </Modal>
    </>
  );
};

export default ReservationListCreate;
