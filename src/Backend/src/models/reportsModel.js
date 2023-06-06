import { getConnection, sql } from "../config/db.js";
import { generateCSV, generateXLSX } from "../helpers/fileConverter.js";

export const getIncomeData = async (req, res) => {
  try {
    const {
      start_date,
      end_date, 
      file_type
    } = req.params;
    const pool = await getConnection();
    let result = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("DailyIncome");
  
    if (file_type == "CSV") {
      res.status(200);
      const report = generateCSV(result.recordset);
      res.send(report)
    } else if (file_type == "Excel") {
      res.status(200);
      const workbook = generateXLSX(result.recordset);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader("Content-Disposition", "attachment; filename=income_report.xlsx");  
      await workbook.xlsx.write(res);
      res.end();
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const getVisitationData = async (req, res) => {
  try {
    const {
      start_date,
      end_date, 
      file_type
    } = req.params;
    const pool = await getConnection();
    let result = await pool.request().
      input("start_date", sql.DateTime, start_date).
      input("end_date", sql.DateTime, end_date).
      execute("ReservationsByVisitor");
  
    if (file_type == "CSV") {
      res.status(200);
      const report = generateCSV(result.recordset);
      res.send(report)
    } else if (file_type == "Excel") {
      res.status(200);
      const workbook = generateXLSX(result.recordset);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader("Content-Disposition", "attachment; filename=income_report.xlsx");  
      await workbook.xlsx.write(res);
      res.end();
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
