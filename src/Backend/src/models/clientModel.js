import { getConnection } from "../config/db.js";

// Method that inserts a client
const insertClient = async (req, res) => {
  try {
    const {
      ID_Person
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Client VALUES (${ID_Person})`
    );
    res.status(200);
    console.log("The insert to the Client was successfull");
    res.send("The insert to the Client was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that inserts a client using an existing pool
const insertClientTransaction = async (pool, {
  ID_Person
}) => {
  try {
    await pool.query(
      `INSERT INTO Client VALUES (${ID_Person})`
    );
    console.log("The insert to the Client was successfull");
  } catch (error) {
    console.error(error.message);
  }
};

export {insertClient, insertClientTransaction}