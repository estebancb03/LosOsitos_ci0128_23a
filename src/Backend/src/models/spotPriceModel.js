import { getConnection } from "../config/db.js";

const getSpotPrices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT * FROM Spot_Price`);
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { getSpotPrices };
