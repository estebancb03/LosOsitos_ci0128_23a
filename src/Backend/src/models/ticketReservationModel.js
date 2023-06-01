import { getConnection } from "../config/db.js";

const getCampingCapacity = async(req, res) => {
  try {
    const {
      date
    } = req.body;
    console.log(req.body);
    const pool = await getConnection();
    let result = await pool.request().
      input("date", sql.Date, Start_Date).
      execute("RemainingCampingCapacity");
    res.status(200);
    console.log(result);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const getPicnicCapacity = async(req, res) => {
  try {
    const {
      date
    } = req.body;
    console.log(req.body);
    const pool = await getConnection();
    let result = await pool.request().
      input("date", sql.Date, Start_Date).
      execute("RemainingPicnicCapacity");
    res.status(200);
    console.log(result);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

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

// Method that inserts a ticket price
const insertReservationTicket = async (req, res) => {
  try {
    const {
      ID_Client,
      Reservation_Date,
      Age_Range,
      Demographic_Group,
      Reservation_Type,
      Special,
      Price,
      Amount
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Ticket_Reservation VALUES (${ID_Client}, '${Reservation_Date}', ${Age_Range}, ${Demographic_Group}, ${Reservation_Type}, ${Special}, ${Price}, ${Amount})`
    );
    res.status(200);
    console.log("The insert to the Reservation_Ticket was successfull");
    res.send("The insert to the Reservation_Ticket was successfull");
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

export { getAllTickets, getCampingCapacity, getPicnicCapacity, insertReservationTicket, updateTicket, getTicketsByReservationID };