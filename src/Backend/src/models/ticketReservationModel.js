import { getConnection } from "../config/db.js";

// Method that inserts a ticket price
const insertReservationTicket = async (req, res) => {
  try {
    const {
      ID_Client,
      Reservation_Date,
      Age_Range,
      Demographic_Group,
      Reservation_Type,
      Price,
      Amount
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Ticket_Reservation VALUES (${ID_Client}, '${Reservation_Date}', ${Age_Range}, ${Demographic_Group}, ${Reservation_Type}, ${Price}, ${Amount})`
    );
    res.status(200);
    console.log("The insert to the Reservation_Ticket was successfull");
    res.send("The insert to the Reservation_Ticket was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertReservationTicket };