import { getConnection, sql } from "../config/db.js";

// Method that inserts a camping
const insertCamping = async (req, res) => {
  try {
    const {
      ID_Client,
      Reservation_Date,
      Start_Date,
      End_Date,
      Reservation_Method
    } = req.body;
    console.log(req.body);
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Camping VALUES (${ID_Client}, '${Reservation_Date}', '${Start_Date}', '${End_Date}', ${Reservation_Method})`
    );
    res.status(200);
    console.log("The insert to the Camping was successfull");
    res.send('The insert to the Camping was successful');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertCamping };