import { useEffect, useState } from "react";

import Title from "../components/Title";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import Container from "../components/Containers/Container";
import ReservationListModal from "../components/ReservationList/ReservationListModal";
import ReservationListFilter from "../components/ReservationList/ReservationListFilter";

import ReservationTestData from "../data/ReservationTestData";

const ReservationList = () => {
  // State that controls the popup window
  const [viewModal, setViewModal] = useState(false);
  // State that controls the records of the table
  const [reservationRecords, setReservationRecords] = useState([]);
  // State that constrols the modal information
  const [recordInfo, setRecordInfo] = useState({});
  // Table columns
  const tableColumns = [
    "Id",
    "Customer",
    "Type",
    "Method",
    "Start date",
    "End date",
    "Services",
    "Pay",
    "Action",
  ];

  // Method that puts the element in its initial state
  const restartModal = () => {
    setViewModal(false);
    setDisabledElements(true);
    setModifyButton("Modify");
  };

  // Method that shows the information of a row in the popup
  const setModalDataStatus = (itemID) => {
    const itemSelected = ReservationTestData.filter(
      (item) => item.reservationId == itemID
    );
    setRecordInfo(itemSelected[0]);
    setViewModal(true);
  };

  // Method that gets the names of the services of a row
  const getServicesNames = (services) => {
    return services.map((service) => service.name);
  };

  // The data is loaded to the state
  useEffect(() => {
    setReservationRecords(ReservationTestData);
  }, []);

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation List" />
        <ReservationListFilter
          reservationData={ReservationTestData}
          setReservationRecords={setReservationRecords}
        />
        <ReservationListModal
          selectedRecord={recordInfo}
          viewModal={viewModal}
          setViewModal={setViewModal}
        />

        {/* Table elements */}
        <Table colums={tableColumns}>
          {reservationRecords.map((record, index) => (
            <TableItem
              key={index}
              number={index}
              data={[
                record.reservationId,
                record.customer,
                record.type,
                record.method,
                record.startDate,
                record.endDate,
                getServicesNames(record.services),
                record.totalPrice,
                <Button
                  text="View"
                  onclickFunction={(e) =>
                    setModalDataStatus(record.reservationId)
                  }
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
