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
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export {
  getPerson,
  insertPerson
}
