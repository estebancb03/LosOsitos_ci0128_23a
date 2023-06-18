import { getConnection } from "../config/db.js";
import { encrypt, compare } from "../helpers/encryption.js";

const checkUsername = async (req, res) => {
  try {
    let result = true;
    const { Username } = req.params;
    const pool = await getConnection();
    const { recordset } = await pool.request().query(`SELECT Username FROM Employee WHERE Username = '${Username}'`);
    if (recordset.length !== 0) {
      result = false;
    }
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getEmployees = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordset } = await pool
      .request()
      .query(
        `SELECT Person.ID, Person.Name, Person.LastName1, Person.LastName2, Person.Gender, Person.Email, Employee.Username, Employee.Password, Employee.Type
         FROM Employee
         JOIN Person ON ID_Person = ID`
      );
    res.status(200);
    res.json(recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const insertEmployee = async (req, res) => {
  try {
    const {
      ID,
      Username,
      Password,
      Type
    } = req.body;
    const hashedPassword = await encrypt(Password);
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Employee VALUES (${ID}, '${Username}', '${hashedPassword}', ${Type})`
      );
    res.status(200);
    res.send('The insert to the Employee was successful');
    console.log("The insert to the Employee was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { Username } = req.params;
    const pool = await getConnection();
    await pool.query(
      `DELETE FROM Employee WHERE Username = '${Username}'`
      );
    res.status(200);
    res.send("The delete to the Employee was successfull");
    console.log("The delete to the Employee was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const authEmployee = async (req, res) => {
  let user = { auth: false, data: {} };
  try {
    const { Username, Password } = req.params;
    const pool = await getConnection();
    const { recordset } = await pool
      .request()
      .query(
        `SELECT * FROM Employee WHERE Username = '${Username}'`
      );
    if (recordset.length !== 0) {
      const authPassword = await compare(Password, recordset[0].Password);
      user.auth = authPassword;
      user.data = recordset[0];
    }
    res.status(200);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export {
  checkUsername,
  getEmployees,
  insertEmployee,
  deleteEmployee,
  authEmployee
};
