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
import ShowReservation from "../components/ReservationList/ShowReservation.jsx";
import FilterReservations from "../components/ReservationList/FilterReservations.jsx";
import CreateReservation from "../components/ReservationList/CreateReservation.jsx";

const ReservationList = () => {
  const { reservations, fetch, formatReservations, createReservation } = useReservations();
  const [currentReservations, setCurrentReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState({});
  const [newReservation, setNewReservation] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const [viewCreateModal, setViewCreateModal] = useState(false);
  const tableColumns = [
    "Id",
    "Customer",
    "Type",
    "Method",
    "Status",
    "Start date",
    "End date",
    "Services",
    "Action",
  ];

  const getSelectedReservation = (ID, Reservation_Date) => {
    const result = currentReservations.filter((reservation) =>
      reservation.ID === ID && reservation.Reservation_Date === Reservation_Date
    );
    setSelectedReservation(result[0]);
    setViewModal(true);
  };

  const refreshRecords = () => {
    setSelectedReservation({});
    setNewReservation(createReservation);
    fetch();
    formatReservations();
  }

  useEffect(() => {
    setCurrentReservations(reservations);
  }, [reservations]);

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation List" />
        <FilterReservations
          reservations={reservations}
          setCurrentReservations={setCurrentReservations}
          exitMethod={refreshRecords}
        />
        <div className="mt-5 mb-3 grid grid-cols-4 sm:grid-cols-1">
          <Button text="Create Reservation" type="" onclickFunction={(e) => setViewCreateModal(true)} />
        </div>
        <CreateReservation
          viewModal={viewCreateModal}
          setViewModal={setViewCreateModal}
          reservation={newReservation}
          setReservation={setNewReservation}
          exitMethod={refreshRecords}
        />
        <ShowReservation
          currentRecord={selectedReservation}
          setCurrentRecord={setSelectedReservation}
          viewModal={viewModal}
          setViewModal={setViewModal}
          exitMethod={refreshRecords}
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
                reservation.Status == 0 ? "Pending" : "Approved",
                reservation.Start_Date !== null
                  ? formatDateDTDDMMYYYY(reservation.Start_Date)
                  : reservation.Picnic_Date !== null ? formatDateDTDDMMYYYY(reservation.Picnic_Date) : "N/A",
                reservation.End_Date !== null
                  ? formatDateDTDDMMYYYY(reservation.End_Date)
                  : reservation.Picnic_Date !== null ? formatDateDTDDMMYYYY(reservation.Picnic_Date) : "N/A",
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
