import { getConnection, sql } from "../config/db.js";

const getPerson = async (req, res) => {
  try {
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

// Method that inserts a person
const insertPerson = async (req, res) => {
  try {
    const {
      ID,
      Name,
      LastName1,
      LastName2,
      Gender,
      Birth_Date,
      Email, 
      Country_Name
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Person VALUES (${ID}, '${Name}', '${LastName1}', '${LastName2}', ${Gender}, '${Birth_Date}', '${Email}', '${Country_Name}')`
    );
    res.status(200);
    console.log("The insert to the Person was successfull");
    res.send("The insert to the Person was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

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

// Method that updates the Person table by ID
const updatePersonData = async (req, res) => {
  try {
    const { ID, Name, LastName1, LastName2, Email, Country_Name } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Person SET Name = '${Name}', LastName1 = '${LastName1}', LastName2 = '${LastName2}', Email = '${Email}', Country_Name = '${Country_Name}' WHERE ID = ${ID}`
    );
    res.status(200);
    console.log("The update to the Person table was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export {
  getPerson,
  insertPerson,
  updatePersonData
}
