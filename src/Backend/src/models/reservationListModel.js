import { getConnection, sql } from "../config/db.js";

// Method that returns reservation data
const getReservations = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT DISTINCT Person.ID, Person.Name, Person.LastName1, Person.LastName2, Person.Email, Person.Country_Name, Reservation_Method, Reservation.Reservation_Date, Ticket_Reservation.Reservation_Type, Camping.Start_Date, Camping.End_Date FROM Reservation JOIN Person ON Reservation.ID_Client = Person.ID JOIN Ticket_Reservation ON Ticket_Reservation.ID_Client = Reservation.ID_Client JOIN Camping ON Reservation.ID_Client = Camping.ID_Client"
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
  const ID = "11801          ";
  const Reservation_Date = "2023-02-02T00:00:00.000Z";
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
    const result = await pool.request().query("SELECT Name FROM Service");
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
    const result = await pool.request().query(`SELECT * FROM Spot_Camping`);
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
    const result = await pool.request().query("SELECT * FROM Vehicle");
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

// Method that gets the services of all reservations
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

// Method that updates the Person table by ID
const updatePersonData = async (req, res) => {
  try {
    const { ID, Name, LastName1, LastName2, Email, Country_Name } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Person SET Name = '${Name}', LastName1 = '${LastName1}', LastName2 = '${LastName2}', Email = '${Email}', Country_Name = '${Country_Name}' WHERE ID = ${ID}`
    );
    res.status(200);
    console.log("The update to the Person table was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates the Reservation dates by Reservation ID
const updateStartEndDates = async (req, res) => {
  try {
    const { ID, Reservation_Date, Start_Date, End_Date } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Camping SET Start_Date = '${Start_Date}', End_Date = '${End_Date}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
    );
    res.status(200);
    console.log("The update to the Reservation dates was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets all vehicles by Reservation ID
const getVehiclesByReservationID = async (req, res) => {
  try {
    const { ID, Reservation_Date } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT ID_Vehicle FROM Vehicle WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
      );
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates a vehicle
const updateVehicle = async (req, res) => {
  try {
    const {ID, Reservation_Date, oldID_Vehicle, newID_Vehicle} = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Vehicle SET ID_Vehicle = '${newID_Vehicle}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND ID_Vehicle = '${oldID_Vehicle}'`
    );
    res.status(200);
    console.log("The update to the Vehicle was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets all the spots bt Reservation ID
const getSpotsByReservationID = async (req, res) => {
  try {
    const { ID, Reservation_Date } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT Location_Spot FROM Spot_Camping WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
      );
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
  getAllServices,
  updatePersonData,
  updateStartEndDates,
  getVehiclesByReservationID,
  updateVehicle,
  getSpotsByReservationID
};
