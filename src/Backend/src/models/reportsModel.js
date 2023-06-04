import { getConnection, sql } from "../config/db.js";

export const getIncomeData = async (req, res) => {
  try {
    const {
      start_date,
      end_date
    } = req.params;
    console.log(req.params);
    const pool = await getConnection();
    let result = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("DailyIncome");
    res.status(200);
    console.log(result);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const getVisitationData = async (req, res) => {
  try {
    const {
      start_date,
      end_date
    } = req.params;
    console.log(req.params);
    const pool = await getConnection();
    let result = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("ReservationsByVisitor");
    res.status(200);
    console.log(result);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
