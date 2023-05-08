import { getConnection, sql } from "../config/db.js";

export const getPerson = async (req, res) => {
  try {
    console.log("aaaaaaaa")
    const {id} = req.params
    console.log(id);
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT Name, LastName1, LastName2, Gender, Email, Country_Name, Birth_Date FROM Person WHERE ID = ${id}`);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
