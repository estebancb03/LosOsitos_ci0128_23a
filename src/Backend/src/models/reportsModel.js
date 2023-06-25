import { getConnection, sql } from "../config/db.js";
import { generateIncomeXLSX, generateVisitationXLSX } from "../helpers/fileConverter.js";

export const getIncomeData = async (req, res) => {
  try {
    const {
      start_date,
      end_date
    } = req.params;
    const pool = await getConnection();
    const campingIncome = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("DailyIncomeCamping");

    const picnicIncome = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("DailyIncomePicnic");
    
    const prices = await pool.request().query("SELECT * FROM Ticket");

    res.status(200);
    const workbook = generateIncomeXLSX(campingIncome.recordset, picnicIncome.recordset, prices.recordset);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=income_report.xlsx");  
    await workbook.xlsx.write(res);
    res.end();
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
    const pool = await getConnection();
    let result = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("ReservationsByVisitor");
  
    res.status(200);
    const workbook = generateVisitationXLSX(result.recordset);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=income_report.xlsx");  
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
