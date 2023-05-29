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

  return (
    <>
      <Modal state={viewModal} setState={setViewModal} title="Create Reservation">
        <ReservationListAddPerson
          reservation={reservation}
          setReservation={setReservation}
        />
      </Modal>
    </>
  );
};

export default ReservationListCreate;
