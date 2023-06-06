import { getConnection, sql } from "../config/db.js";

const getCampingCapacity = async(req, res) => {
  try {
    const {
      date
    } = req.params;
    const pool = await getConnection();
    let result = await pool.request().
      input("date", sql.DateTime, date).
      execute("RemainingCampingCapacity");
    res.status(200);
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
    } = req.params;
    const pool = await getConnection();
    let result = await pool.request().
      input("date", sql.DateTime, date).
      execute("RemainingPicnicCapacity");
    res.status(200);
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
        `SELECT Age_Range, Amount, Demographic_Group, Special, Price FROM Ticket_Reservation WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
        );
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
      Special,
      Price,
      newAge_Range,
      newAmount,
      newDemographic_Group,
      newSpecial,
      newPrice
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Ticket_Reservation SET Age_Range = ${newAge_Range}, Demographic_Group = ${newDemographic_Group}, Amount = ${newAmount}, Price = ${newPrice}, Special = ${newSpecial} WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Age_Range = ${Age_Range} AND Demographic_Group = ${Demographic_Group} AND Amount = ${Amount} AND Price = ${Price} AND Special = ${Special}`
    );
    res.status(200);
    res.send("The update to the Ticket_Reservation was successfull");
    console.log("The update to the Ticket_Reservation was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that deletes a ticket
const deleteTicket = async (req, res) => {
  try {
    const {
      ID,
      Reservation_Date,
      Age_Range,
      Amount,
      Demographic_Group,
      Special,
      Price,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `DELETE Ticket_Reservation WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Age_Range = ${Age_Range} AND Demographic_Group = ${Demographic_Group} AND Amount = ${Amount} AND Price = ${Price} AND Special = ${Special}`
      );
    res.status(200);
    console.log("The update to the Ticket_Reservation was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { getAllTickets, getCampingCapacity, getPicnicCapacity, insertReservationTicket, updateTicket, getTicketsByReservationID, deleteTicket };

