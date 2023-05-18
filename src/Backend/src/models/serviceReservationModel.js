import { getConnection, sql } from "../config/db.js";


// Method that gets the services of all reservations
const getAllServices = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .query("SELECT * FROM Service_Reservation");
      console.log(result);
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  // Method that gets the services by reservation ID
const getServicesByReservationID = async (req, res) => {
    try {
      const { ID, Reservation_Date } = req.params;
      const pool = await getConnection();
      const result = await pool
        .request()
        .query(
          `SELECT Name_Service, Schedule FROM Service_Reservation WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
        );
      console.log(result);
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  // Method that updates a service
const updateService = async (req, res) => {
    try {
      const {
        ID,
        Reservation_Date,
        Name_Service,
        Schedule,
      } = req.body;
      const pool = await getConnection();
      await pool.query(
        `UPDATE Service_Reservation SET Schedule = '${Schedule}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Name_Service = '${Name_Service}'`
      );
      res.status(200);
      console.log("The update to the Service_Reservation was successfull");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export {getAllServices, getServicesByReservationID, updateService}