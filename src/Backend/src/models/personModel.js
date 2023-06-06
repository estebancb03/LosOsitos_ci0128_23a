import { getConnection, sql } from "../config/db.js";

const getPerson = async (req, res) => {
  try {
    const {id} = req.params;
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT Name, LastName1, LastName2, Gender, Email, Country_Name, State, Birth_Date FROM Person WHERE ID = ${id}`);
    res.json(result.recordset);
    res.status(200);
  } catch (error) {
    res.status(500);
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
      Country_Name,
      State
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Person VALUES (${ID}, '${Name}', '${LastName1}', '${LastName2}', ${Gender}, '${Birth_Date}', '${Email}', '${Country_Name}', ${State !== null ? `'${State}'` : 'NULL'})`
    );
    res.status(200);
    console.log("The insert to the Person was successfull");
    res.send("The insert to the Person was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Method that updates the Person table by ID
const updatePersonData = async (req, res) => {
  try {
    const {
      ID,
      Name,
      LastName1,
      LastName2,
      Birth_Date,
      Email,
      Gender,
      Country_Name,
      State
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Person SET Name = '${Name}', LastName1 = '${LastName1}', LastName2 = '${LastName2}', Birth_Date = '${Birth_Date}', Email = '${Email}', Gender = ${Gender}, Country_Name = '${Country_Name}', State = ${State !== null ? `'${State}'` : 'NULL'} WHERE ID = ${ID}`
    );
    res.status(200);
    res.send("The update to the Person table was successful");
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
