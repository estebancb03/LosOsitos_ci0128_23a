import { useEffect, useState } from "react";
import Modal from "../Modal";
import useReservations from "../../hooks/useReservations";
import ReservationListAddPerson from "./ReservationListAddPerson";

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
      </Modal>
    </>
  );
};

export default ReservationListCreate;
