import { getConnection } from "../config/db.js";

// Method that inserts a reservation
const insertReservation = async (req, res) => {
  try {
    const {
      ID_Client,
      Reservation_Date,
      Payment_Method,
      Payment_Proof,
      Status,
      Reservation_Method
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Reservation VALUES (${ID_Client}, '${Reservation_Date}', ${Payment_Method}, '${Payment_Proof}', ${Status}, ${Reservation_Method})`
    );
    res.status(200);
    res.send('The insert to the Reservation was successful');
    console.log("The insert to the Reservation was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that returns reservation data
const getReservations = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT DISTINCT Person.ID, Person.Name, Person.Birth_Date, Person.State, Person.Gender, Person.LastName1, Person.LastName2, Person.Email, Person.Country_Name, Reservation_Method, Reservation.Status, Reservation.Reservation_Date, Ticket_Reservation.Reservation_Type, Camping.Start_Date, Camping.End_Date, Picnic.Picnic_Date
          FROM Reservation JOIN Person ON Reservation.ID_Client = Person.ID
          JOIN Ticket_Reservation ON Reservation.ID_Client = Ticket_Reservation.ID_Client AND Reservation.Reservation_Date = Ticket_Reservation.Reservation_Date
          FULL OUTER JOIN Camping ON Reservation.ID_Client = Camping.ID_Client AND Reservation.Reservation_Date = Camping.Reservation_Date
          FULL OUTER JOIN Picnic on Reservation.ID_Client = Picnic.ID_Client AND Reservation.Reservation_Date = Picnic.Reservation_Date`
      );
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
    res.status(200);
    res.json(result.recordset);
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
      Status,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Reservation SET Status = '${Status}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
    );
    res.status(200);
    res.send("The update to the State was successfull");
    console.log("The update to the State was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertReservation, getReservations, getMainInfoByReservationID, getRecordsServices, getStateByReservationID, updateState};
