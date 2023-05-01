import { useEffect, useState } from "react";

import Title from "../components/Title";
import Table from "../components/Table/Table";
import AxiosClient from "../config/AxiosClient";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import Container from "../components/Containers/Container";
import { formatDateFromDataTime } from "../helpers/formatDate";
import ReservationListModal from "../components/ReservationList/ReservationListModal";
import ReservationListFilter from "../components/ReservationList/ReservationListFilter";

import ReservationTestData from "../data/ReservationTestData";

const ReservationList = () => {
  // State that controls the popup window
  const [viewModal, setViewModal] = useState(false);
  // State that controls the records of the table
  const [reservationRecords, setReservationRecords] = useState([]);
  // State that controls the services of each row
  const [services, setServices] = useState([]);
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
    "Action",
  ];

  // Method that gets the records from the Data Base
  const getAllRecords = async () => {
    try {
      const url = '/reservation-list/getAllRecords';
      const records = await AxiosClient.get(url);
      setReservationRecords(records.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that shows the information of a row in the popup
  const setModalDataStatus = (itemID) => {
    const itemSelected = ReservationTestData.filter(
      (item) => (item.customerId + item.reservationDate) == itemID
    );
    setRecordInfo(itemSelected[0]);
    setViewModal(true);
  };

  // Method that gets the services names of the records from the Data Base
  const getServices = async () => {
    try {
      const url = '/reservation-list/getRecordsServices';
      const result = await AxiosClient(url);
      console.log(result.data);
      setServices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that returns only the associated services to a reservation ID
  const extractServiceByID = (reservationID) => {
    return services.filter((service) => service.ID_Client + service.Reservation_Date == reservationID);
  }

  // Method that gets the names of the services of a row
  const getServicesNames = (reservationServices) => {
    return reservationServices.map((service) => service.Name_Service);
  };

  // The data is loaded to the state
  useEffect(() => {
    getAllRecords();
    getServices();
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
          setSelectedRecord={setRecordInfo}
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
                record.ID,
                record.Name + " " + record.LastName1 + " " + record.LastName2,
                record.Reservation_Type == 1 ? "Camping" : "Picnic",
                record.Reservation_Method == 0 ? "Online" : "In site",
                formatDateFromDataTime(record.Start_Date),
                formatDateFromDataTime(record.End_Date),
                getServicesNames(extractServiceByID(record.ID + record.Reservation_Date)),
                <Button
                  text="View"
                  onclickFunction={(e) => {
                    const reservationId = record.ID + record.Reservation_Date;
                    setModalDataStatus(reservationId);
                  }}
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
