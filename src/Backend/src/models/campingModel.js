import { getConnection } from "../config/db.js";

// Method that inserts a camping
const insertCamping = async (req, res) => {
  try {
    const {
      ID_Client,
      Reservation_Date,
      Start_Date,
      End_Date
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Camping VALUES (${ID_Client}, '${Reservation_Date}', '${Start_Date}', '${End_Date}')`
    );
    res.status(200);
    console.log("The insert to the Camping was successfull");
    res.send('The insert to the Camping was successful');
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
    res.send("The update to the Reservation dates was successfull");
    console.log("The update to the Reservation dates was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertCamping, updateStartEndDates };