import { getConnection } from "../config/db.js";


//Method that gets the vehicles of all reservations
const getAllVehicles = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query("SELECT * FROM Vehicle");
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

// Method that gets all vehicles by Reservation ID
const getVehiclesByReservationID = async (req, res) => {
    try {
      const { ID, Reservation_Date } = req.params;
      const pool = await getConnection();
      const result = await pool
        .request()
        .query(
          `SELECT ID_Vehicle FROM Vehicle WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
        );
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
    }
  };

// Method that updates a vehicle
const updateVehicle = async (req, res) => {
    try {
      const { ID, Reservation_Date, oldID_Vehicle, newID_Vehicle } = req.body;
      const pool = await getConnection();
      await pool.query(
        `UPDATE Vehicle SET ID_Vehicle = '${newID_Vehicle}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND ID_Vehicle = '${oldID_Vehicle}'`
      );
      res.status(200);
      res.send("The update to the Vehicle was successfull");
      console.log("The update to the Vehicle was successfull");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

// Method that inserts a vehicle in a reservation
const insertNewVehicle = async (req, res) => {
    try {
      const {
        ID,
        Reservation_Date,
        ID_Vehicle,
      } = req.body;
      const pool = await getConnection();
      await pool.query(
        `INSERT INTO Vehicle VALUES (${ID}, '${Reservation_Date}', '${ID_Vehicle}')`
      );
      res.status(200);
      res.send("The insert to the Vehicle was successfull");
      console.log("The insert to the Vehicle was successfull");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export {
    getAllVehicles,
    getVehiclesByReservationID,
    updateVehicle,
    insertNewVehicle
  }

