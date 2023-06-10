import { getConnection, sql } from "../config/db.js";

// Method that inserts a picnic
const insertPicnic = async (req, res) => {
  try {
    const {
      ID_Client,
      Reservation_Date,
      Picnic_Date
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Picnic VALUES (${ID_Client}, '${Reservation_Date}', '${Picnic_Date}')`
    );
    res.status(200);
    console.log("The insert to the Picnic was successfull");
    res.send("The insert to the Picnic was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertPicnic };