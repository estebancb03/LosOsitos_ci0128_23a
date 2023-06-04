import {getConnection} from "../config/db.js"

// Method that gets the names of all services in the park
const getServicesOptions = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query("SELECT Name FROM Service");
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

export {getServicesOptions}