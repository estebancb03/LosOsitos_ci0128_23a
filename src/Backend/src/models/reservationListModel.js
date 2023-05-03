import { getConnection } from "../config/db.js";

// Method that returns reservation data
const getReservations = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT Person.ID, Person.Name, Person.LastName1, Person.LastName2, Person.Email, Person.Country_Name, Reservation_Method, Reservation.Reservation_Date, Ticket_Reservation.Reservation_Type, Camping.Start_Date, Camping.End_Date FROM Reservation FULL OUTER JOIN Client ON Reservation.ID_Client = Client.ID_Person FULL OUTER JOIN Person ON Person.ID = Client.ID_Person FULL OUTER JOIN Ticket_Reservation ON Ticket_Reservation.ID_Client = Reservation.ID_Client FULL OUTER JOIN Camping ON Reservation.ID_Client = Camping.ID_Client WHERE Reservation.Reservation_Date IS NOT NULL"
      );
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that returns the reservation main information by id
const getMainInfoByReservationID = async (req, res) => {
  // const { ID, Reservation_Date } = req.params;
  const ID = '11801          ';
  const Reservation_Date = '2023-02-02T00:00:00.000Z';
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT Person.ID, Person.Name, Person.LastName1, Person.LastName2, Person.Email, Person.Country_Name, Reservation_Method, Reservation.Reservation_Date, Ticket_Reservation.Reservation_Type, Camping.Start_Date, Camping.End_Date FROM Reservation FULL OUTER JOIN Client ON Reservation.ID_Client = Client.ID_Person FULL OUTER JOIN Person ON Person.ID = Client.ID_Person FULL OUTER JOIN Ticket_Reservation ON Ticket_Reservation.ID_Client = Reservation.ID_Client FULL OUTER JOIN Camping ON Reservation.ID_Client = Camping.ID_Client WHERE Person.ID = ${ID} AND Reservation.Reservation_Date = '${Reservation_Date}'`
      );
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that returns the services names of all reservations
const getRecordsServices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT Reservation.ID_Client, Reservation.Reservation_Date, Service_Reservation.Name_Service FROM Reservation FULL OUTER JOIN Service_Reservation ON Service_Reservation.ID_Client = Reservation.ID_Client"
      );
      console.log(result);
      res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets the names of all services in the park
const getServicesOptions = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query("SELECT Name FROM Service");
      console.log(result);
      res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets the spots of all reservations
const getAllSpots = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(`SELECT * FROM Spot_Camping`);
      console.log(result);
      res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Method that gets the vehicles of all reservations
const getAllVehicles = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query("SELECT * FROM Vehicle");
      console.log(result);
      res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Method that gets the tickets of all reservations
const getAllTickets = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query("SELECT * FROM Ticket_Reservation");
      console.log(result);
      res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Method that gets the services of all reservations
const getAllServices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query("SELECT * FROM Service_Reservation");
      console.log(result);
      res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { 
  getReservations,
  getMainInfoByReservationID,
  getRecordsServices,
  getServicesOptions,
  getAllSpots,
  getAllVehicles,
  getAllTickets,
  getAllServices
};
