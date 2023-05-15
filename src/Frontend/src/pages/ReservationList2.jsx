import React from "react";
import { useEffect, useState } from "react";

import useReservations from "../hooks/useReservations";
import { formatDateDTDDMMYYYY } from "../helpers/formatDate";

import Title from "../components/Title";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import Container from "../components/Containers/Container";

import ReservationListFilter2 from "../components/ReservationList/ReservationListFilter2";

const ReservationList2 = () => {
  // Containst all reservations
  const { reservations } = useReservations();
  // State that controls current reservations
  const [currentReservations, setCurrentReservations] = useState([]);
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

  useEffect(() => {
    setCurrentReservations(reservations);
  }, [reservations]);

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation List" />
        <ReservationListFilter2
          reservations={reservations}
          setCurrentReservations={setCurrentReservations}
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
                  onclickFunction={(e) => {}}
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

export default ReservationList2;
