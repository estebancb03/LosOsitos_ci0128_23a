import {getConnection} from "../config/db.js"

// Method that gets the spots of all reservations
const getAllSpots = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(`SELECT * FROM Spot_Camping`);
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  // Method that gets all the spots by Reservation ID
const getSpotsByReservationID = async (req, res) => {
  try {
    const { ID, Reservation_Date } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `SELECT Location_Spot FROM Spot_Camping WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}'`
      );
    res.status(200);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


  // Method that inserts a spot camping
const insertSpotCamping = async (req, res) => {
    try {
      const {
        ID_Client,
        Reservation_Date,
        Location_Spot,
        Price,
        Currency
      } = req.body;
      const pool = await getConnection();
      await pool.query(
        `INSERT INTO Spot_Camping VALUES (${ID_Client}, '${Reservation_Date}', ${Location_Spot}, ${Price}, '${Currency}')`
      );
      res.status(200);
      console.log("The insert to the Spot_Camping was successful");
      res.send('The insert to the Spot_Camping was successful');
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error.message);
    }
  };

  // Method that updates a spot
const updateSpot = async (req, res) => {
    try {
      const {
        ID,
        Reservation_Date,
        oldLocation_Spot,
        newLocation_Spot,
        Currency,
        Price
      } =req.body;
      const pool = await getConnection();
      await pool.query(
        `UPDATE Spot_Camping SET Location_Spot = ${newLocation_Spot}, Price = ${Price} , Currency = '${Currency}' WHERE ID_Client = ${ID} AND Reservation_Date = '${Reservation_Date}' AND Location_Spot = ${oldLocation_Spot}`
      );
      res.status(200);
      res.send("The update to the Spot_Camping was successfull");
      console.log("The update to the Spot_Camping was successfull");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export {getAllSpots, getSpotsByReservationID, insertSpotCamping, updateSpot}