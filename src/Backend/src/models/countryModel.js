import { getConnection, sql } from "../config/db.js";

const getCountry = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Country");
    res.json(result.recordset);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postCountry = async (req, res) => {
  try {
    const values = req.body
    const pool = await getConnection();
    const result = await pool.request().input("Name", sql.VarChar, `${values["Name"]}`).query("INSERT INTO Country VALUES (@Name)");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export { getCountry, postCountry };
