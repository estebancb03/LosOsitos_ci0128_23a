import { getConnection, sql } from "../config/db.js";

// Method that inserts a ticket
const insertTicket = async (req, res) => {
  try {
    const {
      Age_Range,
      Demographic_Group,
      Reservation_Type
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Ticket VALUES (${Age_Range}, ${Demographic_Group}, ${Reservation_Type})`
    );
    res.status(200);
    console.log("The insert to the ticket was successfull");
    res.send('The insert to the ticket was successful');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertTicket };