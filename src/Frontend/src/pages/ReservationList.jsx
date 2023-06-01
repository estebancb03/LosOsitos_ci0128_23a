import React from "react";
import { useEffect, useState } from "react";

import Title from "../components/Title";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import useReservations from "../hooks/useReservations";
import Container from "../components/Containers/Container";
import { formatDateDTDDMMYYYY } from "../helpers/formatDate";
import ReservationListModal from "../components/ReservationList/ReservationListModal";
import ReservationListFilter from "../components/ReservationList/ReservationListFilter";

const ReservationList = () => {
  // Containst all reservations
  const { reservations } = useReservations();
  // State that controls current reservations
  const [currentReservations, setCurrentReservations] = useState([]);
  // State that controls the selected reservation
  const [selectedReservation, setSelectedReservation] = useState({});
  // State that controls the modal
  const [viewModal, setViewModal] = useState(false);
  // Table columns
  const tableColumns = [
    "Id",
    "Customer",
    "Type",
    "Method",
    "State",
    "Start date",
    "End date",
    "Services",
    "Action",
  ];

  // Method that gets the selected reservation
  const getSelectedReservation = (ID, Reservation_Date) => {
    const result = currentReservations.filter((reservation) =>
      reservation.ID === ID && reservation.Reservation_Date === Reservation_Date
    );
    setSelectedReservation(result[0]);
    setViewModal(true);
  };

  useEffect(() => {
    setCurrentReservations(reservations);
  }, [reservations]);

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation List" />
        <ReservationListFilter
          reservations={reservations}
          setCurrentReservations={setCurrentReservations}
        />
        <ReservationListModal
          currentRecord={selectedReservation}
          setCurrentRecord={setSelectedReservation}
          viewModal={viewModal}
          setViewModal={setViewModal}
        />
        <Table colums={tableColumns}>
          {currentReservations.map((reservation, index) => (
            <TableItem
              key={index}
              number={index}
              data={[
                reservation.ID,
                reservation.Name +
                  " " +
                  reservation.LastName1 +
                  " " +
                  reservation.LastName2,
                reservation.Reservation_Type == 1 ? "Camping" : "Picnic",
                reservation.Reservation_Method == 0 ? "Online" : "In site",
                reservation.State == 0 ? "Pending" : "Approved",
                reservation.Start_Date !== null
                  ? formatDateDTDDMMYYYY(reservation.Start_Date)
                  : "N/A",
                reservation.End_Date !== null
                  ? formatDateDTDDMMYYYY(reservation.End_Date)
                  : "N/A",
                reservation.Services !== null &&
                reservation.Services !== undefined
                  ? reservation.Services.map((service) => service.Name_Service)
                  : "N/A",
                <Button
                  text="View"
                  type="modify"
                  onclickFunction={(e) => getSelectedReservation(reservation.ID, reservation.Reservation_Date)}
                />,
              ]}
            />
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default ReservationList;
