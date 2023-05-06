import { useEffect, useState } from "react";

import Title from "../components/Title";
import Table from "../components/Table/Table";
import AxiosClient from "../config/AxiosClient";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import Container from "../components/Containers/Container";
import ReservationListModal from "../components/ReservationList/ReservationListModal";
import ReservationListFilter from "../components/ReservationList/ReservationListFilter";
import { 
  formatDateDTDDMMYYYY, 
  getHoursMinutesFromISOFormat
 } from "../helpers/formatDate";

const ReservationList = () => {
  // State that controls the popup window
  const [viewModal, setViewModal] = useState(false);
  // State that controls the current records of the table
  const [allRecords, setAllRecords] = useState([]);
  // State that controls the current records of the table
  const [currentRecords, setCurrentRecords] = useState([]);
  // State that controls the services of each row
  const [servicesNames, setServicesNames] = useState([]);
  // State that constrols the modal information
  const [recordInfo, setRecordInfo] = useState({});
  // State that constrols the spots
  const [spots, setSpots] = useState([]);
  // State that constrols the vehicles
  const [vehicles, setVehicles] = useState([]);
  // State that constrols the tickets
  const [tickets, setTickets] = useState([]);
  // State that constrols the tickets
  const [services, setServices] = useState([]);
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

  // Method that gets the records from the Data Base
  const getAllRecords = async () => {
    try {
      const url = "/reservation-list/getAllRecords";
      const records = await AxiosClient.get(url);
      setAllRecords(records.data);
      setCurrentRecords(records.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the spots of all records
  const getAllSpots = async () => {
    try {
      const url = "/reservation-list/getAllSpots";
      const result = await AxiosClient.get(url);
      setSpots(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the vehicles of all records
  const getAllVehicles = async () => {
    try {
      const url = "/reservation-list/getAllVehicles";
      const result = await AxiosClient.get(url);
      setVehicles(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the tickets of all records
  const getAllTickets = async () => {
    try {
      const url = "/reservation-list/getAllTickets";
      const result = await AxiosClient.get(url);
      setTickets(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that gets the tickets of all records
  const getAllServices = async () => {
    try {
      const url = "/reservation-list/getAllServices";
      const result = await AxiosClient.get(url);
      setServices(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that shows the information of a row in the popup
  const setModalDataStatus = (reservationID) => {
    const itemSelected = currentRecords.filter(
      (item) => item.ID + item.Reservation_Date == reservationID
    );
    const spotsSelected = spots.filter(
      (spot) => spot.ID_Client + spot.Reservation_Date == reservationID
    ).map((item) => ({Location_Spot: item.Location_Spot}));
    const vehiclesSelected = vehicles.filter(
      (vehicle) => vehicle.ID_Client + vehicle.Reservation_Date == reservationID
    ).map((item) => item.ID_Vehicle);
    const servicesSelected = services.filter(
      (service) => service.ID_Client + service.Reservation_Date == reservationID
    );
    const ticketsSelected = tickets.filter(
      (ticket) => ticket.ID_Client + ticket.Reservation_Date == reservationID
    ).map((item) => ({
      Age_Range: item.Age_Range,
      Amount: item.Amount,
      Demographic_Group: item.Demographic_Group
    }));
    const information = [...itemSelected];
    information[0].Spots = spotsSelected;
    information[0].Vehicles = vehiclesSelected;
    information[0].Services = servicesSelected;
    information[0].Tickets = ticketsSelected;
    setRecordInfo(information[0]);
    setViewModal(true);
  };

  // Method that gets the services names of the records from the Data Base
  const getServices = async () => {
    try {
      const url = "/reservation-list/getRecordsServices";
      const result = await AxiosClient(url);
      setServicesNames(result.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that returns only the associated services to a reservation ID
  const extractServiceByID = (reservationID) => {
    return servicesNames.filter(
      (service) => service.ID_Client + service.Reservation_Date == reservationID
    );
  };

  // Method that gets the names of the services of a row
  const getServicesNames = (reservationServices) => {
    return reservationServices.map((service) => service.Name_Service);
  };

  // The data is loaded to the state
  useEffect(() => {
    getAllRecords();
    getServices();
    getAllSpots();
    getAllVehicles();
    getAllTickets();
    getAllServices();
  }, []);

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation List" />
        <ReservationListFilter
          reservationData={allRecords}
          setReservationRecords={setCurrentRecords}
          services={servicesNames}
        />
        <ReservationListModal
          mainRecordInfo={recordInfo}
          setMainRecordInfo={setRecordInfo}
          viewModal={viewModal}
          setViewModal={setViewModal}
        />

        {/* Table elements */}
        <Table colums={tableColumns}>
          {currentRecords.map((record, index) => (
            <TableItem
              key={index}
              number={index}
              data={[
                record.ID,
                record.Name + " " + record.LastName1 + " " + record.LastName2,
                record.Reservation_Type == 1 ? "Camping" : "Picnic",
                record.Reservation_Method == 0 ? "Online" : "In site",
                record.State == 0 ? "Pending" : "Approved", 
                record.Start_Date !== null ? formatDateDTDDMMYYYY(record.Start_Date) : "N/A",
                record.End_Date !== null ? formatDateDTDDMMYYYY(record.End_Date) : "N/A",
                getServicesNames(
                  extractServiceByID(record.ID + record.Reservation_Date)
                ),
                <Button
                  text="View"
                  onclickFunction={(e) => {
                    const reservationId = record.ID + record.Reservation_Date;
                    setModalDataStatus(reservationId);
                    allRecords.map((record) => getAllSpots({
                      ID: record.ID,
                      Reservation_Date: record.Reservation_Date
                    }));
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
