import { getConnection } from "../config/db.js";

// Method that returns reservation data
const getReservations = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT DISTINCT Person.ID, Person.Name, Person.LastName1, Person.LastName2, Person.Email, Person.Country_Name, Reservation_Method, Reservation.State, Reservation.Reservation_Date, Ticket_Reservation.Reservation_Type, Camping.Start_Date, Camping.End_Date FROM Reservation JOIN Person ON Reservation.ID_Client = Person.ID JOIN Ticket_Reservation ON Ticket_Reservation.ID_Client = Reservation.ID_Client FULL OUTER JOIN Camping ON Reservation.ID_Client = Camping.ID_Client FULL OUTER JOIN Picnic on Reservation.ID_Client = Picnic.ID_Client"
      );
    console.log(result);
    res.status(200);
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
    res.status(200);
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
    res.status(200);
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
    res.status(200);
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
    res.status(200);
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
    res.status(200);
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
    res.status(200);
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
    res.status(200);
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
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates a vehicle
const updateVehicle = async (req, res) => {
  try {
    const { ID, Reservation_Date, oldID_Vehicle, newID_Vehicle } = req.body;
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

// Method that gets all the spots by Reservation ID
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
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates a spot
const updateSpot = async (req, res) => {
  try {
    const { ID, Reservation_Date, oldLocation_Spot, newLocation_Spot } =
      req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Spot_Camping SET Location_Spot = ${newLocation_Spot} WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Location_Spot = ${oldLocation_Spot}`
    );
    res.status(200);
    console.log("The update to the Spot_Camping was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets the tickets by Reservation ID
const getTicketsByReservationID = async (req, res) => {
  try {
    const { ID, Reservation_Date } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT Age_Range, Amount, Demographic_Group FROM Ticket_Reservation WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
      );
    console.log(result);
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates a spot
const updateTicket = async (req, res) => {
  try {
    const {
      ID,
      Reservation_Date,
      Age_Range,
      Amount,
      Demographic_Group,
      newAmount,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Ticket_Reservation SET Amount = ${newAmount} WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Age_Range = ${Age_Range} AND Demographic_Group = ${Demographic_Group} AND Amount = ${Amount}`
    );
    res.status(200);
    console.log("The update to the Ticket_Reservation was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets the services by reservation ID
const getServicesByReservationID = async (req, res) => {
  try {
    const { ID, Reservation_Date } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT Name_Service, Schedule FROM Service_Reservation WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
      );
    console.log(result);
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates a service
const updateService = async (req, res) => {
  try {
    const {
      ID,
      Reservation_Date,
      Name_Service,
      Schedule,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Service_Reservation SET Schedule = '${Schedule}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Name_Service = '${Name_Service}'`
    );
    res.status(200);
    console.log("The update to the Service_Reservation was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that gets the state by reservation ID
const getStateByReservationID = async (req, res) => {
  try {
    const { ID, Reservation_Date } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT State FROM Reservation WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
      );
    console.log(result);
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates a service
const updateState = async (req, res) => {
  try {
    const {
      ID,
      Reservation_Date,
      State,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Reservation SET State = '${State}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
    );
    res.status(200);
    console.log("The update to the State was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that inserts a vehicle in a reservation
const insertNewVehicle = async (req, res) => {
  try {
    const {
      ID,
      Reservation_Date,
      ID_Vehicle,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Vehicle VALUES (${ID}, '${Reservation_Date}', '${ID_Vehicle}')`
    );
    res.status(200);
    console.log("The insert to the Vehicle was successfull");
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
  getSpotsByReservationID,
  updateSpot,
  getTicketsByReservationID,
  updateTicket,
  getServicesByReservationID,
  updateService,
  getStateByReservationID,
  updateState,
  insertNewVehicle
};
