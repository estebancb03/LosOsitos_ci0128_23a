import mssql from "mssql";
import { getConnection } from "../config/db.js";

const getAvailableSpotsByDates = async (req, res) => {
  try {
    const { Reservation_Start_Date, Reservation_End_Date } = req.params;
    const startDateObj = new Date(Reservation_Start_Date);
    const endDateObj = new Date(Reservation_End_Date);
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("startDateObj", startDateObj)
      .input("endDateObj", endDateObj)
      .query(
        "SELECT S.Location, S.Size, Spot_Price.Price, Spot_Price.Currency FROM Spot S JOIN Spot_Price ON S.Location = Spot_Price.Location_Spot WHERE NOT EXISTS( SELECT * FROM Spot_Camping WHERE (Reservation_Date BETWEEN @startDateObj AND @endDateObj) AND S.Location = Spot_Camping.Location_Spot)"
      );
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that inserts a spot camping
const insertSpotCamping = async (req, res) => {
  try {
    console.log(req.body)
    const {
      ID_Client,
      Reservation_Date,
      Location_Spot,
      Price
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Spot_Camping VALUES (${ID_Client}, '${Reservation_Date}', ${Location_Spot}, ${Price})`
    );
    res.status(200);
    console.log("The insert to the Spot_Camping was successful");
    res.send('The insert to the Spot_Camping was successful');
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error.message);
  }
};

export { 
  getAvailableSpotsByDates,
  insertSpotCamping
};
