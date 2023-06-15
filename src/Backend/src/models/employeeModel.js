import { getConnection } from "../config/db.js";
import { encrypt, compare } from "../helpers/encryption.js";

const checkUsername = async (req, res) => {
  try {
    let result = true;
    const { Username } = req.params;
    const pool = await getConnection();
    const { recordset } = await pool.request().query(`SELECT Username FROM Employee`);
    await Promise.all(
      recordset.map(async (employee) => {
        const compareResult = await compare(Username, employee.Username);
        if (compareResult) {
          result = false;
        }
      })
    );
    res.status(200);
    res.send(result);
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
    const hashedUsername = await encrypt(Username);
    const hashedPassword = await encrypt(Password);
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Employee VALUES (${ID}, '${hashedUsername}', '${hashedPassword}', ${Type})`
      );
    res.status(200);
    res.send('The insert to the Employee was successful');
    console.log("The insert to the Employee was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { checkUsername, insertEmployee };
