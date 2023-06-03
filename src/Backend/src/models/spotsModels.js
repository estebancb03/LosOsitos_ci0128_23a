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
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getAllSpots = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT * FROM Spot`);
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { 
  getAvailableSpotsByDates,
  getAllSpots
};
